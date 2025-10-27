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
    <section className="py-12 md:py-20 lg:py-28 bg-white lg:pr-[480px] rounded-t-[50px] lg:rounded-t-[80px] relative z-10 -mt-[50px] lg:-mt-[80px]">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 text-balance">
          Как продать авто за 3 шага
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary flex items-center justify-center mb-4 md:mb-6 shadow-lg">
                    <Icon className="w-12 h-12 md:w-16 md:h-16 text-primary-foreground" strokeWidth={2.5} />
                    <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-900 flex items-center justify-center border-2 md:border-4 border-white shadow-md">
                      <span className="text-lg md:text-xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{step.title}</h3>
                  <div className="w-10 h-0.5 md:w-12 md:h-1 bg-primary rounded-full mb-3 md:mb-4 mx-auto"></div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-pretty">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
