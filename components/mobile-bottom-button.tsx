"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MobileFormDrawer } from "@/components/mobile-form-drawer"
import { Calculator } from "lucide-react"

export function MobileBottomButton() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    const handleOpenDrawer = () => {
      setIsDrawerOpen(true)
    }

    window.addEventListener('openMobileFormDrawer', handleOpenDrawer)

    return () => {
      window.removeEventListener('openMobileFormDrawer', handleOpenDrawer)
    }
  }, [])

  return (
    <>
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50">
        <Button
          onClick={() => setIsDrawerOpen(true)}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base h-14 rounded-3xl shadow-2xl flex flex-col items-center justify-center py-2 gap-0.5"
        >
          <span className="flex items-center gap-2">
            <Calculator className="w-5 h-5" />
            Посчитать стоимость моего автомобиля
          </span>
          <span className="text-xs font-normal opacity-90">
            перезвоним через 5 минут!
          </span>
        </Button>
      </div>

      <MobileFormDrawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
      />
    </>
  )
}
