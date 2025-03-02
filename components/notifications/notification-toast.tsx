"use client"

import { useEffect } from "react"
import { ToastProvider, ToastViewport } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export function NotificationToast() {
  const { toast } = useToast()

  useEffect(() => {
    // Simular notificações recebidas
    const notifications = [
      { title: "Nova reserva", description: "Uma nova reserva foi feita para o veículo ABC-1234" },
      { title: "Manutenção agendada", description: "Veículo DEF-5678 tem manutenção agendada para amanhã" },
    ]

    notifications.forEach((notification, index) => {
      setTimeout(() => {
        toast({
          title: notification.title,
          description: notification.description,
          duration: Number.POSITIVE_INFINITY,
        })
      }, index * 1000)
    })
  }, [toast])

  return (
    <ToastProvider>
      <ToastViewport />
    </ToastProvider>
  )
}

