import { DollarSign, Shield, Car, Clock } from "lucide-react"
import Image from "next/image"

export function BenefitsSection() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Честная цена",
      description:
        'Мы не ищем поводов "сбить" цену. Оценка прозрачна и основана на реальном состоянии авто и рыночной ситуации.',
      image: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=800&q=80",
      imageAlt: "Рукопожатие при сделке"
    },
    {
      icon: Shield,
      title: "Юридическая чистота",
      description:
        "Работаем строго по официальному договору. Гарантируем полную безопасность и конфиденциальность сделки.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      imageAlt: "Подписание документов"
    },
    {
      icon: Car,
      title: "Любое состояние",
      description:
        "Выкупаем автомобили после ДТП, в кредите, с неисправностями двигателя или коробки, с проблемами по кузову, без документов или требующие серьёзных вложений.",
      image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80",
      imageAlt: "Диагностика автомобиля"
    },
    {
      icon: Clock,
      title: "Экономия времени",
      description:
        "Вам не нужно готовить машину к продаже, делать сотни фото и общаться с десятками нерешительных покупателей.",
      image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80",
      imageAlt: "Экономия времени - часы"
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-background lg:pr-[480px]">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 lg:mb-20 text-balance">
          Почему нам доверяют
        </h2>

        <div className="space-y-16 lg:space-y-24">
          {benefits.map((benefit, index) => {
            const isEven = index % 2 === 0
            return (
              <div key={benefit.title} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Контент (текст + иконка) */}
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} space-y-4`}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                        <benefit.icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary-foreground" strokeWidth={2} />
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                    </div>
                  </div>
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty">
                    {benefit.description}
                  </p>
                </div>

                {/* Изображение */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} relative`}>
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={benefit.image}
                      alt={benefit.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
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
