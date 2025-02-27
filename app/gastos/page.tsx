"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ExpenseList } from "@/components/expense-list"
import { NewExpenseDialog } from "@/components/new-expense-dialog"

export default function GastosPage() {
  const [isNewExpenseOpen, setIsNewExpenseOpen] = useState(false)

  return (
    <div className="flex flex-col p-6 gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Lançamento de Gastos</h1>
        <Button onClick={() => setIsNewExpenseOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Novo Gasto
        </Button>
      </div>

      <ExpenseList />

      <NewExpenseDialog
        open={isNewExpenseOpen}
        onOpenChange={setIsNewExpenseOpen}
        onExpenseCreated={(newExpense) => {
          console.log("New expense created:", newExpense)
          setIsNewExpenseOpen(false)
          // Aqui você atualizaria a lista de gastos
        }}
      />
    </div>
  )
}

