"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, FileText } from "lucide-react"
import DriverDetailsModal from "./driver-details-modal"
import EditDriverModal from "./edit-driver-modal"
import DeleteDriverDialog from "./delete-driver-dialog"
import DriverListFilters from "./driver-list-filters"

// Mock data for drivers
const mockDrivers = [
  { id: 1, name: "João Silva", licenseCategory: "D", isEAR: true, status: "Ativo" },
  { id: 2, name: "Maria Oliveira", licenseCategory: "B", isEAR: false, status: "Inativo" },
  { id: 3, name: "Carlos Santos", licenseCategory: "C", isEAR: true, status: "Ativo" },
]

export default function DriverList() {
  const [drivers, setDrivers] = useState(mockDrivers)
  const [filteredDrivers, setFilteredDrivers] = useState(mockDrivers)

  const deleteDriver = (id: number) => {
    const updatedDrivers = drivers.filter((driver) => driver.id !== id)
    setDrivers(updatedDrivers)
    setFilteredDrivers(updatedDrivers)
  }

  const handleFilterChange = (filters: { search: string; status: string; licenseCategory: string }) => {
    const filtered = drivers.filter(
      (driver) =>
        driver.name.toLowerCase().includes(filters.search.toLowerCase()) &&
        (filters.status === "" || driver.status.toLowerCase() === filters.status.toLowerCase()) &&
        (filters.licenseCategory === "" || driver.licenseCategory === filters.licenseCategory),
    )
    setFilteredDrivers(filtered)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ativo":
        return "bg-green-500"
      case "Inativo":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-4">
      <DriverListFilters onFilterChange={handleFilterChange} />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Categoria CNH</TableHead>
            <TableHead>EAR</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredDrivers.map((driver) => (
            <TableRow key={driver.id}>
              <TableCell>{driver.name}</TableCell>
              <TableCell>{driver.licenseCategory}</TableCell>
              <TableCell>{driver.isEAR ? "Sim" : "Não"}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(driver.status)}>{driver.status}</Badge>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <DriverDetailsModal driver={driver}>
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </DriverDetailsModal>
                  <EditDriverModal driver={driver}>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </EditDriverModal>
                  <DeleteDriverDialog onDelete={() => deleteDriver(driver.id)}>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </DeleteDriverDialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

