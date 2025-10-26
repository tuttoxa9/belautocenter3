import { HeroSection } from "@/components/hero-section"
import { ProcessSection } from "@/components/process-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ConditionsSection } from "@/components/conditions-section"
import { FaqSection } from "@/components/faq-section"
import { Header } from "@/components/header"
import { StickyForm } from "@/components/sticky-form"

export default function Home() {
  // Структурированные данные для SEO (Schema.org JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "name": "БелАвтоЦентр - Выкуп автомобилей",
    "description": "Срочный выкуп автомобилей в Беларуси. До 95% от рыночной стоимости. Деньги в день обращения.",
    "url": "https://vikup.belautocenter.by",
    "logo": "https://vikup.belautocenter.by/belavto-logo.png",
    "image": "https://vikup.belautocenter.by/belavto-logo.png",
    "priceRange": "$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BY",
      "addressLocality": "Минск",
    },
    "areaServed": {
      "@type": "Country",
      "name": "Беларусь"
    },
    "offers": {
      "@type": "Offer",
      "description": "Выкуп автомобилей любых марок и годов выпуска",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "BYN"
      }
    },
    "openingHours": "Mo-Su 00:00-24:00",
    "sameAs": [
      "https://belautocenter.by"
    ]
  }

  return (
    <>
      {/* Встраиваем структурированные данные для SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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
    </>
  )
}
