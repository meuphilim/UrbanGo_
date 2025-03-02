"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, FileText } from "lucide-react"
import ExpenseDetailsModal from "./expense-details-modal"
import EditExpenseModal from "./edit-expense-modal"
import DeleteExpenseDialog from "./delete-expense-dialog"
import ExpenseListFilters from "./expense-list-filters"

// Mock data for expenses
const mockExpenses = [
  { id: 1, date: "2023-05-01", category: "Combustível", amount: 250.0, vehicle: "ABC-1234", driver: "João Silva" },
  { id: 2, date: "2023-05-03", category: "Manutenção", amount: 500.0, vehicle: "DEF-5678", driver: "Maria Oliveira" },
  { id: 3, date: "2023-05-05", category: "Pedágio", amount: 30.0, vehicle: "GHI-9012", driver: "Carlos Santos" },
]

export default function ExpenseList() {
  const [expenses, setExpenses] = useState(mockExpenses)
  const [filteredExpenses, setFilteredExpenses] = useState(mockExpenses)

  const deleteExpense = (id: number) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id)
    setExpenses(updatedExpenses)
    setFilteredExpenses(updatedExpenses)
  }

  const handleFilterChange = (filters: { startDate: string; endDate: string; category: string; vehicle: string }) => {
    const filtered = expenses.filter(
      (expense) =>
        (!filters.startDate || expense.date >= filters.startDate) &&
        (!filters.endDate || expense.date <= filters.endDate) &&
        (filters.category === "" || expense.category === filters.category) &&
        (filters.vehicle === "" || expense.vehicle === filters.vehicle),
    )
    setFilteredExpenses(filtered)
  }

  return (
    <div className="space-y-4">
      <ExpenseListFilters onFilterChange={handleFilterChange} />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Data</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead>Veículo</TableHead>
            <TableHead>Motorista</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredExpenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell>{expense.date}</TableCell>
              <TableCell>{expense.category}</TableCell>
              <TableCell>R$ {expense.amount.toFixed(2)}</TableCell>
              <TableCell>{expense.vehicle}</TableCell>
              <TableCell>{expense.driver}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <ExpenseDetailsModal expense={expense}>
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </ExpenseDetailsModal>
                  <EditExpenseModal expense={expense}>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </EditExpenseModal>
                  <DeleteExpenseDialog onDelete={() => deleteExpense(expense.id)}>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </DeleteExpenseDialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

