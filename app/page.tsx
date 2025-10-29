import { HeroSection } from "@/components/hero-section"
import { ProcessSection } from "@/components/process-section"
import { CombinedSection } from "@/components/combined-section"
import { FaqSection } from "@/components/faq-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyForm } from "@/components/sticky-form"
import { MobileBottomButton } from "@/components/mobile-bottom-button"

export default function Home() {
  // Структурированные данные для SEO (Schema.org JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "name": "БелАвтоЦентр - Выкуп автомобилей",
    "legalName": "ООО \"УЦ ГАРД\"",
    "description": "Срочный выкуп автомобилей в Беларуси. До 95% от рыночной стоимости. Деньги в день обращения.",
    "url": "https://vikup.belautocenter.by",
    "logo": "https://vikup.belautocenter.by/belavto-logo.png",
    "image": "https://vikup.belautocenter.by/belavto-logo.png",
    "telephone": "+375445419419",
    "priceRange": "$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Рыбалко, 13А",
      "addressLocality": "Минск",
      "postalCode": "220005",
      "addressCountry": "BY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.888947989235476,
      "longitude": 27.593391629073494
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
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "taxID": "693288947",
    "foundingDate": "2025-07-25"
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
          <CombinedSection />
          <FaqSection />
        </main>

        <Footer />

        <div className="hidden lg:block">
          <StickyForm />
        </div>

        <MobileBottomButton />
      </div>
    </>
  )
}
