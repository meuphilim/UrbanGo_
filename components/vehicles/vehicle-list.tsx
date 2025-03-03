"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, FileText } from "lucide-react"
import VehicleDetailsModal from "./vehicle-details-modal"
import EditVehicleModal from "./edit-vehicle-modal"
import DeleteVehicleDialog from "./delete-vehicle-dialog"
import VehicleListFilters from "./vehicle-list-filters"

// Mock data for vehicles
const mockVehicles = [
  { id: 1, licensePlate: "ABC-1234", status: "Live", make: "Toyota", model: "Corolla", year: 2020 },
  { id: 2, licensePlate: "DEF-5678", status: "In Maintenance", make: "Honda", model: "Civic", year: 2019 },
  { id: 3, licensePlate: "GHI-9012", status: "Occupied", make: "Ford", model: "Focus", year: 2021 },
]

export default function VehicleList() {
  const [vehicles, setVehicles] = useState(mockVehicles)
  const [filteredVehicles, setFilteredVehicles] = useState(mockVehicles)

  const deleteVehicle = (id: number) => {
    const updatedVehicles = vehicles.filter((vehicle) => vehicle.id !== id)
    setVehicles(updatedVehicles)
    setFilteredVehicles(updatedVehicles)
  }

  const handleFilterChange = (filters: { search: string; status: string; make: string }) => {
    const filtered = vehicles.filter(
      (vehicle) =>
        vehicle.licensePlate.toLowerCase().includes(filters.search.toLowerCase()) &&
        (filters.status === "" || vehicle.status.toLowerCase() === filters.status.toLowerCase()) &&
        (filters.make === "" || vehicle.make.toLowerCase() === filters.make.toLowerCase()),
    )
    setFilteredVehicles(filtered)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Disponível":
        return "bg-green-500 dark:bg-green-600"
      case "Em Manutenção":
        return "bg-yellow-500 dark:bg-yellow-600"
      case "Em Uso":
        return "bg-blue-500 dark:bg-blue-600"
      default:
        return "bg-gray-500 dark:bg-gray-600"
    }
  }

  const translateStatus = (status: string) => {
    switch (status) {
      case "Live":
        return "Disponível"
      case "In Maintenance":
        return "Em Manutenção"
      case "Occupied":
        return "Em Uso"
      default:
        return status
    }
  }

  return (
    <div className="space-y-4">
      <VehicleListFilters onFilterChange={handleFilterChange} />
      <Table>
        <TableHeader className="table-header">
          <TableRow>
            <TableHead className="text-foreground">Placa</TableHead>
            <TableHead className="text-foreground">Status</TableHead>
            <TableHead className="text-foreground">Marca</TableHead>
            <TableHead className="text-foreground">Modelo</TableHead>
            <TableHead className="text-foreground">Ano</TableHead>
            <TableHead className="text-foreground">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredVehicles.map((vehicle) => (
            <TableRow key={vehicle.id} className="table-row">
              <TableCell className="text-foreground">{vehicle.licensePlate}</TableCell>
              <TableCell>
                <Badge className={`status-badge ${getStatusColor(translateStatus(vehicle.status))}`}>
                  {translateStatus(vehicle.status)}
                </Badge>
              </TableCell>
              <TableCell className="text-foreground">{vehicle.make}</TableCell>
              <TableCell className="text-foreground">{vehicle.model}</TableCell>
              <TableCell className="text-foreground">{vehicle.year}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <VehicleDetailsModal vehicle={vehicle}>
                    <Button variant="outline" size="sm" className="dark:border-border dark:text-foreground">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </VehicleDetailsModal>
                  <EditVehicleModal vehicle={vehicle}>
                    <Button variant="outline" size="sm" className="dark:border-border dark:text-foreground">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </EditVehicleModal>
                  <DeleteVehicleDialog onDelete={() => deleteVehicle(vehicle.id)}>
                    <Button variant="outline" size="sm" className="dark:border-border dark:text-foreground">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </DeleteVehicleDialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

