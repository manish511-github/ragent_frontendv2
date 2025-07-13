import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
// import { PartnersSection } from "@/components/partners-section"
import { FeaturesSection } from "@/components/features-section"
import { AdaptiveWorkflowsSection } from "@/components/adaptive-workflows-section"
import { OptimizedSchedulingSection } from "@/components/optimized-scheduling-section"
import { AcceleratePlanningSection } from "@/components/accelerate-planning-section"
// import { TestimonialsSection } from "@/components/testimonials-section"
import { SimplifiedPricingSection } from "@/components/simplified-pricing-section"
import { FAQSection } from "@/components/faq-section" // This import is still here
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        {/* <PartnersSection /> */}
        <FeaturesSection />
        <AdaptiveWorkflowsSection />
        <OptimizedSchedulingSection />
        <AcceleratePlanningSection />
        {/* <TestimonialsSection /> */}
        <SimplifiedPricingSection />
        <FAQSection /> {/* This component is still rendered here */}
      </main>
      <Footer />
    </div>
  )
}
