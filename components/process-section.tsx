import { FileText, Search, Banknote } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Заявка",
      description:
        "Оставьте заявку на сайте или позвоните нам. Мы зададим несколько уточняющих вопросов и назовем предварительную стоимость за 5 минут.",
      icon: FileText,
    },
    {
      number: "2",
      title: "Осмотр",
      description:
        "Наш специалист бесплатно приедет в удобное для вас время и место для финальной оценки автомобиля. Это займет не более 20 минут.",
      icon: Search,
    },
    {
      number: "3",
      title: "Деньги",
      description:
        "Если цена вас устраивает, подписываем официальный договор купли-продажи и вы сразу получаете всю сумму наличными или на карту.",
      icon: Banknote,
    },
  ]

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white lg:pr-[480px] rounded-t-[50px] lg:rounded-t-[80px] relative z-10 -mt-[50px] lg:-mt-[80px]">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 lg:mb-16 text-balance">
          Как продать авто за 3 шага
        </h2>

        {/* Десктопная версия - горизонтальная */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 xl:gap-12">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-28 h-28 rounded-full bg-primary flex items-center justify-center mb-5 shadow-lg">
                    <Icon className="w-14 h-14 text-primary-foreground" strokeWidth={2.5} />
                    <div className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center border-3 border-white shadow-md">
                      <span className="text-lg font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <div className="w-12 h-1 bg-primary rounded-full mb-4 mx-auto"></div>
                  <p className="text-base text-muted-foreground leading-relaxed text-pretty">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Мобильная и планшетная версия - вертикальная с компактным дизайном */}
        <div className="flex flex-col gap-6 md:gap-8 lg:hidden">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="flex gap-4 md:gap-6 bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100"
              >
                {/* Иконка и номер слева */}
                <div className="flex-shrink-0">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary flex items-center justify-center shadow-md">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" strokeWidth={2.5} />
                    <div className="absolute -top-1.5 -right-1.5 w-7 h-7 md:w-8 md:h-8 rounded-full bg-slate-900 flex items-center justify-center border-2 border-white shadow-sm">
                      <span className="text-sm md:text-base font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Текст справа */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{step.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
