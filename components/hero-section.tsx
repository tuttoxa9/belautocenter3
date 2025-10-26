"use client"

import { Check, Phone } from "lucide-react"

export function HeroSection() {
  const highlightForm = () => {
    // На мобильных устройствах открываем drawer
    if (window.innerWidth < 1024) {
      window.dispatchEvent(new CustomEvent('openMobileFormDrawer'))
      return
    }

    // На десктопе прокручиваем к форме
    const form = document.getElementById("contact-form")
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "center" })
      form.classList.add("animate-pulse-once")
      setTimeout(() => {
        form.classList.remove("animate-pulse-once")
      }, 2000)
    }
  }

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-b-[50px] lg:rounded-b-[80px] pt-20">
      <div className="absolute inset-0 z-0 rounded-b-[50px] lg:rounded-b-[80px] overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20image%201-ieQ5qJ5fAmZ79J3SRE6gleuNICTJhW.png"
          alt="Автомобиль"
          className="w-full h-full object-cover object-[center_bottom] opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
      </div>

      <div className="relative z-10 w-full px-6 py-12 lg:py-16">
        <div className="max-w-2xl lg:ml-12 xl:ml-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            Выкупим ваш автомобиль в день обращения. Деньги — сразу.
          </h1>

          <p className="text-xl md:text-2xl text-primary font-semibold mb-8 text-balance">
            Покупаем авто в любом состоянии: битые, кредитные, неисправные
          </p>

          <div className="space-y-4 mb-10">
            <div className="flex items-start gap-3 text-white/90">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg md:text-xl leading-relaxed">Предложим до 95% от рыночной стоимости</p>
            </div>
            <div className="flex items-start gap-3 text-white/90">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg md:text-xl leading-relaxed">Бесплатный выезд оценщика в любую точку Беларуси</p>
            </div>
            <div className="flex items-start gap-3 text-white/90">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg md:text-xl leading-relaxed">Сами оформим все документы</p>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="tel:+375445419419"
              className="flex items-center gap-3 text-white hover:text-primary transition-colors group"
            >
              <div className="bg-primary/20 p-3 rounded-2xl group-hover:bg-primary/30 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl md:text-3xl font-bold">+375 (44) 5-419-419</span>
            </a>

            <p className="text-lg text-white/80">
              или можете{" "}
              <button
                onClick={highlightForm}
                className="text-primary font-semibold hover:text-primary/80 underline decoration-2 underline-offset-4 transition-colors"
              >
                оставить заявку
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
