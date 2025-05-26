import Image from "next/image";
import HeroSection from '@/components/HeroSection';
import ReviewSection from '@/components/ReviewSection';
import FeaturesSection from '@/components/FeaturesSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ReviewSection />
      <FeaturesSection />
    </main>
  );
}
