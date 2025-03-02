"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FilterProps {
  onFilterChange: (filters: { search: string; status: string; licenseCategory: string }) => void
}

export default function DriverListFilters({ onFilterChange }: FilterProps) {
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("")
  const [licenseCategory, setLicenseCategory] = useState("")

  const handleFilterChange = () => {
    onFilterChange({ search, status, licenseCategory })
  }

  return (
    <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
      <div className="flex-1">
        <Label htmlFor="search">Buscar</Label>
        <Input
          id="search"
          placeholder="Buscar por nome..."
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
            <SelectItem value="ativo">Ativo</SelectItem>
            <SelectItem value="inativo">Inativo</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="licenseCategory">Categoria CNH</Label>
        <Select
          value={licenseCategory}
          onValueChange={(value) => {
            setLicenseCategory(value)
            handleFilterChange()
          }}
        >
          <SelectTrigger id="licenseCategory">
            <SelectValue placeholder="Todas" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="A">A</SelectItem>
            <SelectItem value="B">B</SelectItem>
            <SelectItem value="C">C</SelectItem>
            <SelectItem value="D">D</SelectItem>
            <SelectItem value="E">E</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

