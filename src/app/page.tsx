import HeroSection from '@/components/HeroSection';
import ReviewSection from '@/components/ReviewSection';
import FeaturesSection from '@/components/FeaturesSection';
import { ScrollArea } from '@radix-ui/react-scroll-area';

export default function HomePage() {
  return (
    <ScrollArea>
      <div className={"w-full overflow-x-hidden"}>
        <HeroSection/>
        <ReviewSection/>
        <FeaturesSection/>
      </div>
    </ScrollArea>
  );
}
