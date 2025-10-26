import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Срочный выкуп авто в Беларуси | Деньги в день обращения",
  description:
    "Выкупим ваш автомобиль в день обращения. До 95% от рыночной стоимости. Бесплатный выезд оценщика по всей Беларуси.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
