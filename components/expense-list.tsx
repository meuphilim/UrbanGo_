"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Dados simulados para gastos
const expenses = [
  {
    id: "1",
    date: "2023-06-15",
    category: "Combustível",
    subCategory: "Gasolina",
    value: 150.0,
    appointment: "Agendamento #1234",
    description: "Abastecimento para viagem São Paulo - Rio",
  },
  // ... mais gastos
]

export function ExpenseList() {
  const [filter, setFilter] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.appointment.toLowerCase().includes(filter.toLowerCase()) &&
      (categoryFilter === "" || expense.category === categoryFilter),
  )

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <Input
          placeholder="Filtrar por agendamento..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="max-w-sm"
        />
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="max-w-xs">
            <SelectValue placeholder="Filtrar por categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as categorias</SelectItem>
            <SelectItem value="Combustível">Combustível</SelectItem>
            <SelectItem value="Diaria do Motorista">Diaria do Motorista</SelectItem>
            <SelectItem value="Manutenção">Manutenção</SelectItem>
            {/* Adicione mais categorias conforme necessário */}
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Data</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead>Agendamento</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredExpenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell>{expense.date}</TableCell>
              <TableCell>
                {expense.category} - {expense.subCategory}
              </TableCell>
              <TableCell>R$ {expense.value.toFixed(2)}</TableCell>
              <TableCell>{expense.appointment}</TableCell>
              <TableCell>{expense.description}</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  Editar
                </Button>
                <Button variant="ghost" size="sm" className="text-destructive">
                  Excluir
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

