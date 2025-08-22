# Multi-stage Dockerfile for Next.js (App Router) using pnpm
# Builds a minimal production image using Next.js standalone output

# Base image with Node and corepack (for pnpm)
FROM node:20-alpine AS base
WORKDIR /app
# Fix for some native deps and ensure corepack is available
RUN apk add --no-cache libc6-compat && corepack enable

# Install dependencies (cached layer)
FROM base AS deps
# Leverage pnpm from packageManager field for exact version
COPY package.json pnpm-lock.yaml ./
RUN corepack prepare pnpm@10.11.0 --activate \
  && pnpm install --frozen-lockfile

# Build the app
FROM base AS builder
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Ensure the same pnpm version in this stage (no global install needed at runtime)
RUN corepack prepare pnpm@10.11.0 --activate \
  && pnpm run build

# Production runtime image
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
# Configure port/host for Next.js server
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Create non-root user
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

# Only copy the minimal files needed for runtime
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Adjust permissions
RUN chown -R nextjs:nodejs /app
USER nextjs

EXPOSE 3000

# Next.js standalone build exposes server.js as entrypoint
CMD ["node", "server.js"]
