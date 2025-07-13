import { Header } from "@/components/header"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing - Plans for Everyone | Relative",
  description: "Choose the perfect plan for your productivity needs with our flexible pricing options.",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-14 md:py-20 lg:py-24">
        {/* The PricingSection is now only rendered once */}
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}
