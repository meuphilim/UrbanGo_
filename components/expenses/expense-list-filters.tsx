"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"

interface FilterProps {
  onFilterChange: (filters: { startDate: string; endDate: string; category: string; vehicle: string }) => void
}

export default function ExpenseListFilters({ onFilterChange }: FilterProps) {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)
  const [category, setCategory] = useState("")
  const [vehicle, setVehicle] = useState("")

  const handleFilterChange = () => {
    onFilterChange({
      startDate: startDate ? startDate.toISOString().split("T")[0] : "",
      endDate: endDate ? endDate.toISOString().split("T")[0] : "",
      category,
      vehicle,
    })
  }

  return (
    <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
      <div>
        <Label htmlFor="startDate">Data Inicial</Label>
        <DatePicker
          date={startDate}
          setDate={(date) => {
            setStartDate(date)
            handleFilterChange()
          }}
        />
      </div>
      <div>
        <Label htmlFor="endDate">Data Final</Label>
        <DatePicker
          date={endDate}
          setDate={(date) => {
            setEndDate(date)
            handleFilterChange()
          }}
        />
      </div>
      <div>
        <Label htmlFor="category">Categoria</Label>
        <Select
          value={category}
          onValueChange={(value) => {
            setCategory(value)
            handleFilterChange()
          }}
        >
          <SelectTrigger id="category">
            <SelectValue placeholder="Todas" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todas">Todas</SelectItem>
            <SelectItem value="Combustível">Combustível</SelectItem>
            <SelectItem value="Manutenção">Manutenção</SelectItem>
            <SelectItem value="Pedágio">Pedágio</SelectItem>
            <SelectItem value="Outros">Outros</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="vehicle">Veículo</Label>
        <Select
          value={vehicle}
          onValueChange={(value) => {
            setVehicle(value)
            handleFilterChange()
          }}
        >
          <SelectTrigger id="vehicle">
            <SelectValue placeholder="Todos" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos</SelectItem>
            <SelectItem value="ABC-1234">ABC-1234</SelectItem>
            <SelectItem value="DEF-5678">DEF-5678</SelectItem>
            <SelectItem value="GHI-9012">GHI-9012</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

