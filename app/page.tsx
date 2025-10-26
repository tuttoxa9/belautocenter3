import { HeroSection } from "@/components/hero-section"
import { ProcessSection } from "@/components/process-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ConditionsSection } from "@/components/conditions-section"
import { FaqSection } from "@/components/faq-section"
import { Header } from "@/components/header"
import { StickyForm } from "@/components/sticky-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <HeroSection />
        <ProcessSection />
        <ConditionsSection />
        <BenefitsSection />
        <FaqSection />
      </main>

      <div className="hidden lg:block">
        <StickyForm />
      </div>
    </div>
  )
}
