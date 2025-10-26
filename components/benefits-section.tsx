import { DollarSign, Shield, Car, Clock } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Честная цена",
      description:
        'Мы не ищем поводов "сбить" цену. Оценка прозрачна и основана на реальном состоянии авто и рыночной ситуации.',
    },
    {
      icon: Shield,
      title: "Юридическая чистота",
      description:
        "Работаем строго по официальному договору. Гарантируем полную безопасность и конфиденциальность сделки.",
    },
    {
      icon: Car,
      title: "Любое состояние",
      description:
        "Выкупаем автомобили после ДТП, в кредите, с неисправностями двигателя или коробки, с проблемами по кузову, без документов или требующие серьёзных вложений.",
    },
    {
      icon: Clock,
      title: "Экономия времени",
      description:
        "Вам не нужно готовить машину к продаже, делать сотни фото и общаться с десятками нерешительных покупателей.",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-background lg:pr-[480px]">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-20 text-balance">
          Почему нам доверяют
        </h2>

        <div className="space-y-12 lg:space-y-16">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="relative">
              {/* Vertical connecting line (not on last item) */}
              {index < benefits.length - 1 && (
                <div className="absolute left-8 top-24 bottom-0 w-px bg-border hidden lg:block" />
              )}

              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                {/* Large icon container */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-3xl bg-primary flex items-center justify-center shadow-lg relative z-10">
                    <benefit.icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary-foreground" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">{benefit.title}</h3>
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
