"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"

interface Expense {
  id: number
  date: string
  category: string
  amount: number
  vehicle: string
  driver: string
  description?: string
}

export default function EditExpenseModal({ children, expense }: { children: React.ReactNode; expense: Expense }) {
  const [isOpen, setIsOpen] = useState(false)
  const [editedExpense, setEditedExpense] = useState(expense)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission
    console.log("Expense updated:", editedExpense)
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Gasto</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="date">Data</Label>
            <DatePicker
              date={new Date(editedExpense.date)}
              setDate={(date) => setEditedExpense({ ...editedExpense, date: date?.toISOString().split("T")[0] || "" })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Categoria</Label>
            <Select
              value={editedExpense.category}
              onValueChange={(value) => setEditedExpense({ ...editedExpense, category: value })}
            >
              <SelectTrigger id="category">
                <SelectValue placeholder="Selecione a categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Combustível">Combustível</SelectItem>
                <SelectItem value="Manutenção">Manutenção</SelectItem>
                <SelectItem value="Pedágio">Pedágio</SelectItem>
                <SelectItem value="Outros">Outros</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Valor</Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              value={editedExpense.amount}
              onChange={(e) => setEditedExpense({ ...editedExpense, amount: Number.parseFloat(e.target.value) })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="vehicle">Veículo</Label>
            <Select
              value={editedExpense.vehicle}
              onValueChange={(value) => setEditedExpense({ ...editedExpense, vehicle: value })}
            >
              <SelectTrigger id="vehicle">
                <SelectValue placeholder="Selecione o veículo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ABC-1234">ABC-1234</SelectItem>
                <SelectItem value="DEF-5678">DEF-5678</SelectItem>
                <SelectItem value="GHI-9012">GHI-9012</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="driver">Motorista</Label>
            <Select
              value={editedExpense.driver}
              onValueChange={(value) => setEditedExpense({ ...editedExpense, driver: value })}
            >
              <SelectTrigger id="driver">
                <SelectValue placeholder="Selecione o motorista" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="João Silva">João Silva</SelectItem>
                <SelectItem value="Maria Oliveira">Maria Oliveira</SelectItem>
                <SelectItem value="Carlos Santos">Carlos Santos</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Input
              id="description"
              value={editedExpense.description || ""}
              onChange={(e) => setEditedExpense({ ...editedExpense, description: e.target.value })}
            />
          </div>
          <Button type="submit">Salvar Alterações</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

