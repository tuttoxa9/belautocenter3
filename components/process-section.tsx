import { FileText, Search, Banknote, Phone, Clock, MapPin, CheckCircle2, CreditCard } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Заявка",
      description: "Оставьте заявку на сайте или позвоните нам",
      details: [
        { icon: Phone, text: "Звонок или форма" },
        { icon: Clock, text: "Оценка за 5 минут" },
      ],
      icon: FileText,
    },
    {
      number: "2",
      title: "Осмотр",
      description: "Бесплатный выезд специалиста",
      details: [
        { icon: MapPin, text: "В любое удобное место" },
        { icon: Clock, text: "Осмотр 15-20 минут" },
      ],
      icon: Search,
    },
    {
      number: "3",
      title: "Деньги",
      description: "Официальное оформление и расчет",
      details: [
        { icon: CheckCircle2, text: "Договор купли-продажи" },
        { icon: CreditCard, text: "Наличные или на карту" },
      ],
      icon: Banknote,
    },
  ]

  return (
    <section className="py-10 md:py-16 lg:py-20 bg-white lg:pr-[480px] rounded-t-[50px] lg:rounded-t-[80px] relative z-10 -mt-[50px] lg:-mt-[80px]">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 lg:mb-10 text-balance">
          Как продать авто за 3 шага
        </h2>

        {/* Десктопная версия - компактная горизонтальная */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <div className="flex items-start gap-3 mb-3">
                  <div className="relative w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary-foreground" strokeWidth={2.5} />
                    <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center border-2 border-white">
                      <span className="text-xs font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                <div className="space-y-2 pl-1">
                  {step.details.map((detail, idx) => {
                    const DetailIcon = detail.icon
                    return (
                      <div key={idx} className="flex items-center gap-2">
                        <DetailIcon className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-slate-700">{detail.text}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Мобильная и планшетная версия - компактная вертикальная */}
        <div className="flex flex-col gap-3 md:gap-4 lg:hidden">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="flex gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                {/* Иконка и номер слева */}
                <div className="flex-shrink-0">
                  <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary flex items-center justify-center">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" strokeWidth={2.5} />
                    <div className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-slate-900 flex items-center justify-center border-2 border-white">
                      <span className="text-xs font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Текст справа */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold mb-1">{step.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-2">{step.description}</p>
                  <div className="space-y-1">
                    {step.details.map((detail, idx) => {
                      const DetailIcon = detail.icon
                      return (
                        <div key={idx} className="flex items-center gap-1.5">
                          <DetailIcon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          <span className="text-xs md:text-sm text-slate-700">{detail.text}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
