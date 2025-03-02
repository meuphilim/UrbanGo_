"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface Expense {
  id: number
  date: string
  category: string
  amount: number
  vehicle: string
  driver: string
  description?: string
}

export default function ExpenseDetailsModal({ children, expense }: { children: React.ReactNode; expense: Expense }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Detalhes do Gasto</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">Data:</span>
            <span className="col-span-3">{expense.date}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">Categoria:</span>
            <span className="col-span-3">{expense.category}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">Valor:</span>
            <span className="col-span-3">R$ {expense.amount.toFixed(2)}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">Veículo:</span>
            <span className="col-span-3">{expense.vehicle}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-medium">Motorista:</span>
            <span className="col-span-3">{expense.driver}</span>
          </div>
          {expense.description && (
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="font-medium">Descrição:</span>
              <span className="col-span-3">{expense.description}</span>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

