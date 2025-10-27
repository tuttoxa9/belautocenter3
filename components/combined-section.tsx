"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wrench, AlertTriangle, CreditCard, FileX, Gauge, Droplets, DollarSign, Shield, Car, Clock } from "lucide-react"

export function CombinedSection() {
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

  const benefits = [
    {
      icon: DollarSign,
      title: "Честная цена",
      description: 'Мы не ищем поводов "сбить" цену. Оценка прозрачна и основана на реальном состоянии авто и рыночной ситуации.',
    },
    {
      icon: Shield,
      title: "Юридическая чистота",
      description: "Работаем строго по официальному договору. Гарантируем полную безопасность и конфиденциальность сделки.",
    },
    {
      icon: Car,
      title: "Любое состояние",
      description: "Выкупаем автомобили после ДТП, в кредите, с неисправностями двигателя или коробки, с проблемами по кузову.",
    },
    {
      icon: Clock,
      title: "Экономия времени",
      description: "Вам не нужно готовить машину к продаже, делать сотни фото и общаться с десятками покупателей.",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-slate-50 lg:pr-[480px]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Выкупаем любые авто. Быстро и честно
          </h2>
        </div>

        <Tabs defaultValue="conditions" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-10 bg-white/80 p-1.5 rounded-2xl h-auto">
            <TabsTrigger
              value="conditions"
              className="text-base md:text-lg font-semibold py-3 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
            >
              Любое состояние
            </TabsTrigger>
            <TabsTrigger
              value="benefits"
              className="text-base md:text-lg font-semibold py-3 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
            >
              Наши преимущества
            </TabsTrigger>
          </TabsList>

          <TabsContent value="conditions" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {conditions.map((condition) => (
                <div
                  key={condition.title}
                  className="bg-white p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E5E7EB]"
                >
                  <div className="flex flex-col items-center text-center gap-3 md:gap-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <condition.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold mb-2">{condition.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{condition.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-12 text-center">
              <p className="text-base md:text-lg text-muted-foreground">
                Не нашли свой случай?{" "}
                <a href="tel:+375445419419" className="text-primary font-semibold hover:underline">
                  Позвоните нам
                </a>
                , и мы обсудим ваш вариант
              </p>
            </div>
          </TabsContent>

          <TabsContent value="benefits" className="mt-0">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E5E7EB]"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={2} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold">{benefit.title}</h3>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
