"use client"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface VehicleListFiltersProps {
  onFilterChange: (filters: { search: string; status: string; make: string }) => void
}

export default function VehicleListFilters({ onFilterChange }: VehicleListFiltersProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center">
      <Input
        placeholder="Buscar por placa..."
        className="search-input"
        onChange={(e) => onFilterChange({ search: e.target.value, status: "", make: "" })}
      />
      <Select onValueChange={(value) => onFilterChange({ search: "", status: value, make: "" })}>
        <SelectTrigger className="w-full md:w-[180px] dark:border-border dark:bg-secondary">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos</SelectItem>
          <SelectItem value="disponivel">Disponível</SelectItem>
          <SelectItem value="em_manutencao">Em Manutenção</SelectItem>
          <SelectItem value="em_uso">Em Uso</SelectItem>
        </SelectContent>
      </Select>
      <Select onValueChange={(value) => onFilterChange({ search: "", status: "", make: value })}>
        <SelectTrigger className="w-full md:w-[180px] dark:border-border dark:bg-secondary">
          <SelectValue placeholder="Marca" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas</SelectItem>
          <SelectItem value="toyota">Toyota</SelectItem>
          <SelectItem value="honda">Honda</SelectItem>
          <SelectItem value="ford">Ford</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

