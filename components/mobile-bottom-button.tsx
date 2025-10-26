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
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-white via-white to-transparent pointer-events-none">
        <Button
          onClick={() => setIsDrawerOpen(true)}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base h-14 rounded-2xl shadow-2xl pointer-events-auto flex flex-col items-center justify-center py-2 gap-0.5"
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
