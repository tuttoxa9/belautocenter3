import { Wrench, AlertTriangle, CreditCard, FileX, Gauge, Droplets } from "lucide-react"

export function ConditionsSection() {
  const conditions = [
    {
      icon: AlertTriangle,
      title: "После ДТП",
      description: "Битые, с повреждениями кузова любой сложности",
    },
    {
      icon: Wrench,
      title: "С неисправностями",
      description: "Проблемы с двигателем, коробкой, подвеской",
    },
    {
      icon: CreditCard,
      title: "В кредите",
      description: "Поможем с досрочным погашением и оформлением",
    },
    {
      icon: FileX,
      title: "Без документов",
      description: "Утеряны ПТС, СТС или другие документы",
    },
    {
      icon: Gauge,
      title: "С большим пробегом",
      description: "Возраст и километраж не имеют значения",
    },
    {
      icon: Droplets,
      title: "После затопления",
      description: "Пострадавшие от воды или других стихий",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-slate-50 lg:pr-[480px]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Покупаем авто в любом состоянии
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Не важно, в каком состоянии ваш автомобиль — мы готовы его выкупить по честной цене
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {conditions.map((condition) => (
            <div
              key={condition.title}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <condition.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{condition.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{condition.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            Не нашли свой случай?{" "}
            <a href="tel:+375445419419" className="text-primary font-semibold hover:underline">
              Позвоните нам
            </a>
            , и мы обсудим ваш вариант
          </p>
        </div>
      </div>
    </section>
  )
}
