import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { TestimonialSection } from './components/TestimonialSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { ProjectsSection } from './components/ProjectsSection';
import { PartnerSection } from './components/PartnerSection';
import { Footer } from './components/Footer';
import { CopyrightBar } from './components/CopyrightBar';
import { BottomNav } from './components/BottomNav';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#051A24] selection:bg-[#051A24] selection:text-white relative">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Infinite Marquee */}
      <MarqueeSection />

      {/* 3. Testimonial Quote Section with Parallax */}
      <TestimonialSection />

      {/* 4. Pricing Section */}
      <PricingSection />

      {/* 5. Testimonial Carousel */}
      <TestimonialCarousel />

      {/* 6. Projects Section */}
      <ProjectsSection />

      {/* 7. Interactive Partner Section */}
      <PartnerSection />

      {/* 8. Footer */}
      <Footer />

      {/* 9. Copyright Bar */}
      <CopyrightBar />

      {/* 10. Fixed Floating Bottom Nav */}
      <BottomNav />
    </div>
  );
}
