import HeroSectionPage from "./hero-section-35/page";
import CTASection from "./cta-section-12/page";
import BlogSection from "./blog-component-15/page";
import FeaturesPage from "./features-section-01/page";
import { PricingSection } from "@/components/pricing2";
import TestimonialsComponentPage from "./testimonials-component-18/page";
import FAQPage from "./faq-component-01/page";
import FooterPage from "./footer-component-01/page";
import SparklesPreview from "@/components/sparkles-demo";

export default function Home() {
  return (
    <>

      <HeroSectionPage />
      <CTASection />
      <BlogSection />
      <FeaturesPage />
      <div className="w-full flex flex-col items-center justify-center">
        <PricingSection />
      </div>
      <TestimonialsComponentPage />
      <FAQPage />
      <FooterPage />
    </>
  );
}
