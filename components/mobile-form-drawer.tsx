"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Loader2, X } from "lucide-react"

interface MobileFormDrawerProps {
  trigger?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function MobileFormDrawer({ trigger, open, onOpenChange }: MobileFormDrawerProps) {
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
  const [isOpen, setIsOpen] = useState(false)

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
        if (onOpenChange) {
          onOpenChange(false)
        } else {
          setIsOpen(false)
        }
      }, 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsSubmitting(false)
      alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.')
    }
  }

  const currentOpen = open !== undefined ? open : isOpen
  const handleOpenChange = onOpenChange || setIsOpen

  return (
    <Drawer open={currentOpen} onOpenChange={handleOpenChange}>
      {trigger && <DrawerTrigger asChild>{trigger}</DrawerTrigger>}
      <DrawerContent className="bg-form-dark text-form-foreground border-form-dark/50">
        <DrawerHeader className="text-left pb-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DrawerTitle className="text-2xl font-bold mb-2 text-balance text-white">
                Узнайте стоимость вашего авто
              </DrawerTitle>
              <DrawerDescription className="text-white/70 text-sm">
                Заполните форму, перезвоним через 5 минут!
              </DrawerDescription>
            </div>
            <DrawerClose asChild>
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10 -mt-2 -mr-2">
                <X className="h-5 w-5" />
              </Button>
            </DrawerClose>
          </div>
        </DrawerHeader>

        <div className="px-4 pb-6 overflow-y-auto max-h-[60vh]">
          {isSuccess ? (
            <div className="bg-primary/20 border border-primary rounded-2xl p-6 text-center">
              <div className="text-primary text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-2">Спасибо!</h3>
              <p className="text-white/80">Ваша заявка принята, мы скоро свяжемся с вами</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="mobile-brand" className="text-white/90 mb-1.5 block text-sm">
                    Марка
                  </Label>
                  <Input
                    id="mobile-brand"
                    type="text"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    required
                    className="bg-white/10 border-white/20 text-white focus:border-primary h-11 rounded-xl"
                  />
                </div>

                <div>
                  <Label htmlFor="mobile-model" className="text-white/90 mb-1.5 block text-sm">
                    Модель
                  </Label>
                  <Input
                    id="mobile-model"
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
                  <Label htmlFor="mobile-year" className="text-white/90 mb-1.5 block text-sm">
                    Год выпуска
                  </Label>
                  <Input
                    id="mobile-year"
                    type="text"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    required
                    maxLength={4}
                    className="bg-white/10 border-white/20 text-white focus:border-primary h-11 rounded-xl"
                  />
                </div>

                <div>
                  <Label htmlFor="mobile-transmission" className="text-white/90 mb-1.5 block text-sm">
                    Коробка
                  </Label>
                  <Input
                    id="mobile-transmission"
                    type="text"
                    value={formData.transmission}
                    onChange={(e) => setFormData({ ...formData, transmission: e.target.value })}
                    required
                    className="bg-white/10 border-white/20 text-white focus:border-primary h-11 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="mobile-city" className="text-white/90 mb-1.5 block text-sm">
                  Населённый пункт
                </Label>
                <Input
                  id="mobile-city"
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white focus:border-primary h-11 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="mobile-name" className="text-white/90 mb-1.5 block text-sm">
                  Ваше имя
                </Label>
                <Input
                  id="mobile-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white focus:border-primary h-11 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="mobile-phone" className="text-white/90 mb-1.5 block text-sm">
                  Номер телефона
                </Label>
                <Input
                  id="mobile-phone"
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
      </DrawerContent>
    </Drawer>
  )
}
