"use client"

import { useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Wrench, AlertTriangle, CreditCard, FileX, Gauge, Droplets, DollarSign, Shield, Car, Clock } from "lucide-react"

export function CombinedSection() {
  const slides = [
    {
      title: "После ДТП",
      description: "Битые, с повреждениями кузова любой сложности",
      image: "https://images.unsplash.com/photo-1551976452-8c2d2b12748f?w=1200&q=80",
    },
    {
      title: "С неисправностями",
      description: "Проблемы с двигателем, коробкой, подвеской",
      image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1200&q=80",
    },
    {
      title: "В кредите",
      description: "Поможем с досрочным погашением и оформлением",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80",
    },
    {
      title: "Честная цена",
      description: "Мы не ищем поводов сбить цену. Оценка прозрачна и основана на реальном состоянии авто",
      image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=1200&q=80",
    },
    {
      title: "Юридическая чистота",
      description: "Работаем строго по официальному договору. Гарантируем полную безопасность сделки",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    },
    {
      title: "Экономия времени",
      description: "Вам не нужно готовить машину к продаже, делать сотни фото и общаться с десятками покупателей",
      image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=1200&q=80",
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

        {/* Десктопная версия - карусель */}
        <div className="hidden lg:block">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="pl-4 basis-full">
                  <div className="relative h-[400px] rounded-3xl overflow-hidden group">
                    {/* Фоновое изображение */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url('${slide.image}')` }}
                    />

                    {/* Затемнение */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

                    {/* Контент */}
                    <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          {slide.title}
                        </h3>
                        <p className="text-lg text-white/90 max-w-xl leading-relaxed">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Кнопки навигации */}
            <div className="hidden lg:block">
              <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-0 shadow-lg w-12 h-12" />
              <CarouselNext className="right-4 bg-white/90 hover:bg-white border-0 shadow-lg w-12 h-12" />
            </div>
          </Carousel>

          <div className="mt-8 text-center">
            <p className="text-base md:text-lg text-muted-foreground">
              Не нашли свой случай?{" "}
              <a href="tel:+375445419419" className="text-primary font-semibold hover:underline">
                Позвоните нам
              </a>
              , и мы обсудим ваш вариант
            </p>
          </div>
        </div>

        {/* Мобильная и планшетная версия - карусель с частью следующего слайда */}
        <div className="block lg:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="pl-2 basis-[85%] sm:basis-[70%] md:basis-1/2">
                  <div className="relative h-[280px] sm:h-[320px] rounded-2xl overflow-hidden">
                    {/* Фоновое изображение */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${slide.image}')` }}
                    />

                    {/* Затемнение */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

                    {/* Контент */}
                    <div className="relative h-full flex flex-col justify-between p-6">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                          {slide.title}
                        </h3>
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-8 text-center px-4">
            <p className="text-sm md:text-base text-muted-foreground">
              Не нашли свой случай?{" "}
              <a href="tel:+375445419419" className="text-primary font-semibold hover:underline">
                Позвоните нам
              </a>
              , и мы обсудим ваш вариант
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
