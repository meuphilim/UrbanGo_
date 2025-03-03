"use client"

import { useState, useRef } from "react"
import ReactToPrint from "react-to-print"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

// Dados de exemplo (substitua por dados reais do seu backend)
const expenseData = [
  { id: 1, date: "2024-03-01", description: "Compra de café", category: "Alimentação", value: 15.0 },
  { id: 2, date: "2024-03-02", description: "Uber", category: "Transporte", value: 20.0 },
  { id: 3, date: "2024-03-03", description: "Combustível", category: "Transporte", value: 150.0 },
  { id: 4, date: "2024-03-04", description: "Material de escritório", category: "Suprimentos", value: 50.0 },
]

export function ExpenseReport() {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date())
  const [endDate, setEndDate] = useState<Date | undefined>(new Date())
  const [category, setCategory] = useState<string>("all")
  const componentRef = useRef<HTMLDivElement>(null)

  const filteredExpenses = expenseData.filter((expense) => {
    const expenseDate = new Date(expense.date)
    return (
      (!startDate || expenseDate >= startDate) &&
      (!endDate || expenseDate <= endDate) &&
      (category === "all" || expense.category === category)
    )
  })

  const totalExpense = filteredExpenses.reduce((sum, expense) => sum + expense.value, 0)

  const categoryTotals = filteredExpenses.reduce(
    (totals, expense) => {
      totals[expense.category] = (totals[expense.category] || 0) + expense.value
      return totals
    },
    {} as Record<string, number>,
  )

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn("w-[240px] justify-start text-left font-normal", !startDate && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {startDate ? format(startDate, "PPP") : <span>Selecione a data inicial</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={startDate} onSelect={(date) => setStartDate(date)} initialFocus />
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn("w-[240px] justify-start text-left font-normal", !endDate && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {endDate ? format(endDate, "PPP") : <span>Selecione a data final</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={endDate} onSelect={(date) => setEndDate(date)} initialFocus />
          </PopoverContent>
        </Popover>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="Alimentação">Alimentação</SelectItem>
            <SelectItem value="Transporte">Transporte</SelectItem>
            <SelectItem value="Suprimentos">Suprimentos</SelectItem>
          </SelectContent>
        </Select>
        <ReactToPrint trigger={() => <Button>Imprimir / Exportar PDF</Button>} content={() => componentRef.current} />
      </div>

      {/* Resto do código permanece o mesmo */}
    </div>
  )
}

