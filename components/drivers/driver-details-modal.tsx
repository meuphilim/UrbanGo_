"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Driver {
  id: number
  name: string
  licenseCategory: string
  isEAR: boolean
  status: string
  photo?: string
}

export default function DriverDetailsModal({ children, driver }: { children: React.ReactNode; driver: Driver }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Detalhes do Motorista</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={driver.photo || "/placeholder.svg?height=80&width=80"} alt={driver.name} />
              <AvatarFallback>
                {driver.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">{driver.name}</h3>
              <p className="text-sm text-gray-500">ID: {driver.id}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium">Categoria CNH</p>
              <p>{driver.licenseCategory}</p>
            </div>
            <div>
              <p className="text-sm font-medium">EAR</p>
              <p>{driver.isEAR ? "Sim" : "Não"}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Status</p>
              <p>{driver.status}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

