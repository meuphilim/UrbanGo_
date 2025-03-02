import ExpenseList from "@/components/expenses/expense-list"
import AddExpenseModal from "@/components/expenses/add-expense-modal"
import ExpenseReports from "@/components/expenses/expense-reports"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export default function ExpensesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Gerenciamento de Gastos</h1>
        <AddExpenseModal>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Novo Gasto
          </Button>
        </AddExpenseModal>
      </div>
      <ExpenseList />
      <ExpenseReports />
    </div>
  )
}

