"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

export function StickyForm() {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    transmission: "",
    city: "",
    name: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "")

    if (!value.startsWith("375")) {
      value = "375" + value
    }

    value = value.slice(0, 12)

    let formatted = "+375"
    if (value.length > 3) {
      formatted += " (" + value.slice(3, 5)
    }
    if (value.length > 5) {
      formatted += ") " + value.slice(5, 8)
    }
    if (value.length > 8) {
      formatted += "-" + value.slice(8, 10)
    }
    if (value.length > 10) {
      formatted += "-" + value.slice(10, 12)
    }

    setFormData({ ...formData, phone: formatted })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Отправляем данные в API
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
        setFormData({
          brand: "",
          model: "",
          year: "",
          transmission: "",
          city: "",
          name: "",
          phone: "",
        })
      }, 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsSubmitting(false)
      // Показываем сообщение об ошибке (можно добавить состояние для ошибки)
      alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.')
    }
  }

  return (
    <div
      className="hidden lg:block fixed top-6 right-6 w-[420px] bg-form-dark text-form-foreground rounded-3xl shadow-2xl z-50 transition-all duration-500"
      id="contact-form"
    >
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-2 text-balance">Узнайте стоимость вашего авто прямо сейчас</h2>
        <p className="text-white/70 mb-6 text-sm">Заполните форму, и наш менеджер свяжется с вами в течение 5 минут</p>

        {isSuccess ? (
          <div className="bg-primary/20 border border-primary rounded-2xl p-6 text-center">
            <div className="text-primary text-5xl mb-4">✓</div>
            <h3 className="text-xl font-bold mb-2">Спасибо!</h3>
            <p className="text-white/80">Ваша заявка принята, мы скоро свяжемся с вами</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="brand" className="text-white/90 mb-1.5 block text-sm">
                  Марка
                </Label>
                <Input
                  id="brand"
                  type="text"
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white focus:border-primary h-11 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="model" className="text-white/90 mb-1.5 block text-sm">
                  Модель
                </Label>
                <Input
                  id="model"
                  type="text"
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white focus:border-primary h-11 rounded-xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="year" className="text-white/90 mb-1.5 block text-sm">
                  Год выпуска
                </Label>
                <Input
                  id="year"
                  type="text"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  required
                  maxLength={4}
                  className="bg-white/10 border-white/20 text-white focus:border-primary h-11 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="transmission" className="text-white/90 mb-1.5 block text-sm">
                  Коробка передач
                </Label>
                <Input
                  id="transmission"
                  type="text"
                  value={formData.transmission}
                  onChange={(e) => setFormData({ ...formData, transmission: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white focus:border-primary h-11 rounded-xl"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="city" className="text-white/90 mb-1.5 block text-sm">
                Населённый пункт
              </Label>
              <Input
                id="city"
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                required
                className="bg-white/10 border-white/20 text-white focus:border-primary h-11 rounded-xl"
              />
            </div>

            <div>
              <Label htmlFor="name" className="text-white/90 mb-1.5 block text-sm">
                Ваше имя
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-white/10 border-white/20 text-white focus:border-primary h-11 rounded-xl"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-white/90 mb-1.5 block text-sm">
                Номер телефона
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handlePhoneChange}
                required
                className="bg-white/10 border-white/20 text-white focus:border-primary h-11 rounded-xl"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm h-12 mt-2 rounded-xl"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Отправка...
                </>
              ) : (
                "Получить предложение"
              )}
            </Button>

            <p className="text-xs text-white/50 text-center pt-1">
              Нажимая на кнопку, вы даете согласие на обработку персональных данных
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
