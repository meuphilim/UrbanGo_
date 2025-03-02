"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FilterProps {
  onFilterChange: (filters: { search: string; status: string; make: string }) => void
}

export default function VehicleListFilters({ onFilterChange }: FilterProps) {
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("")
  const [make, setMake] = useState("")

  const handleFilterChange = () => {
    onFilterChange({ search, status, make })
  }

  return (
    <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
      <div className="flex-1">
        <Label htmlFor="search">Buscar</Label>
        <Input
          id="search"
          placeholder="Buscar por placa..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            handleFilterChange()
          }}
        />
      </div>
      <div>
        <Label htmlFor="status">Status</Label>
        <Select
          value={status}
          onValueChange={(value) => {
            setStatus(value)
            handleFilterChange()
          }}
        >
          <SelectTrigger id="status">
            <SelectValue placeholder="Todos" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="live">Live</SelectItem>
            <SelectItem value="in maintenance">In Maintenance</SelectItem>
            <SelectItem value="occupied">Occupied</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="make">Marca</Label>
        <Select
          value={make}
          onValueChange={(value) => {
            setMake(value)
            handleFilterChange()
          }}
        >
          <SelectTrigger id="make">
            <SelectValue placeholder="Todas" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="toyota">Toyota</SelectItem>
            <SelectItem value="honda">Honda</SelectItem>
            <SelectItem value="ford">Ford</SelectItem>
            {/* Add more makes as needed */}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

