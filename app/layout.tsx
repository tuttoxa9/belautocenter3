import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Срочный выкуп авто в Беларуси | БелАвтоЦентр - Деньги в день обращения",
  description:
    "Выкупим ваш автомобиль в день обращения. До 95% от рыночной стоимости. Бесплатный выезд оценщика по всей Беларуси. Выкуп автомобилей любых марок и годов выпуска.",
  icons: {
    icon: '/belavto-logo.png',
    apple: '/belavto-logo.png',
  },
  keywords: [
    "выкуп авто",
    "выкуп автомобилей",
    "срочный выкуп авто",
    "продать авто быстро",
    "выкуп авто Минск",
    "выкуп авто Беларусь",
    "автовыкуп",
    "продать машину",
    "БелАвтоЦентр",
    "скупка авто",
    "выкуп битых авто",
    "выкуп авто с пробегом",
  ],
  authors: [{ name: "БелАвтоЦентр" }],
  creator: "БелАвтоЦентр",
  publisher: "БелАвтоЦентр",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vikup.belautocenter.by'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Срочный выкуп авто в Беларуси | БелАвтоЦентр",
    description: "Выкупим ваш автомобиль в день обращения. До 95% от рыночной стоимости. Бесплатный выезд оценщика по всей Беларуси.",
    url: 'https://vikup.belautocenter.by',
    siteName: 'БелАвтоЦентр - Выкуп авто',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/belavto-logo.png',
        width: 1200,
        height: 630,
        alt: 'БелАвтоЦентр - Срочный выкуп автомобилей',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Срочный выкуп авто в Беларуси | БелАвтоЦентр",
    description: "Выкупим ваш автомобиль в день обращения. До 95% от рыночной стоимости.",
    images: ['/belavto-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Здесь можно добавить коды верификации для Google Search Console и Яндекс.Вебмастер
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "name": "БелАвтоЦентр - Выкуп автомобилей",
    "legalName": "ООО УЦ ГАРД",
    "alternateName": "БелАвтоЦентр",
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
    "foundingDate": "2025-07-25",
    "taxID": "693288947",
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
    "areaServed": {
      "@type": "Country",
      "name": "Беларусь"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Услуги по выкупу автомобилей",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Срочный выкуп автомобилей",
            "description": "Выкуп автомобилей в день обращения по всей Беларуси"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Выкуп битых автомобилей",
            "description": "Выкуп автомобилей после ДТП"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Выкуп автомобилей с пробегом",
            "description": "Выкуп подержанных автомобилей всех марок"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Оценка автомобилей",
            "description": "Бесплатная оценка автомобиля с выездом специалиста"
          }
        }
      ]
    },
    "paymentAccepted": "Наличные, Банковский перевод",
    "currenciesAccepted": "BYN"
  }

  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
