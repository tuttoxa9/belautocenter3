import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "Как именно формируется цена на автомобиль?",
      answer:
        "Цена формируется на основе текущего состояния автомобиля, пробега, года выпуска, комплектации и актуальной рыночной ситуации. Мы используем профессиональные базы данных и учитываем реальные цены продаж аналогичных автомобилей в вашем регионе.",
    },
    {
      question: "Какие документы нужны от меня для продажи?",
      answer:
        "Для продажи автомобиля вам понадобятся: паспорт владельца, свидетельство о регистрации транспортного средства (техпаспорт), договор купли-продажи (если автомобиль приобретался не новым). Если автомобиль в кредите, потребуются дополнительные документы от банка.",
    },
    {
      question: "Что делать, если автомобиль находится в кредите или залоге?",
      answer:
        "Мы выкупаем автомобили, находящиеся в кредите. В этом случае мы работаем напрямую с банком: погашаем остаток кредита, а разницу выплачиваем вам. Все юридические формальности берем на себя.",
    },
    {
      question: "Насколько быстро я получу деньги после осмотра?",
      answer:
        "Если вас устраивает предложенная цена, вы получаете деньги сразу после подписания договора купли-продажи. Это занимает от 15 до 30 минут. Деньги можно получить наличными или переводом на карту.",
    },
    {
      question: "Это действительно безопасно?",
      answer:
        "Абсолютно безопасно. Мы работаем официально, заключаем договор купли-продажи в соответствии с законодательством Республики Беларусь. Все сделки проходят с полным юридическим сопровождением. Мы являемся зарегистрированной организацией с УНП.",
    },
  ]

  return (
    <section className="py-10 md:py-12 lg:py-16 bg-gray-50 lg:pr-[480px]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-balance">Ответы на частые вопросы</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-4 md:p-6 lg:p-10">
          <Accordion type="single" collapsible className="space-y-0.5 md:space-y-1">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-0">
                <AccordionTrigger className="text-left font-semibold text-sm md:text-base lg:text-lg py-4 md:py-6 hover:no-underline hover:text-accent transition-colors group">
                  <span className="flex items-start gap-2 md:gap-3">
                    <span className="text-accent font-bold text-base md:text-lg shrink-0 group-hover:scale-110 transition-transform">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-pretty">{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pb-4 md:pb-6 pl-8 md:pl-11 text-pretty">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
