import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import VehicleList from "@/components/vehicles/vehicle-list"
import AddVehicleModal from "@/components/vehicles/add-vehicle-modal"

export default function VehiclesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Gerenciamento de Veículos</h1>
        <AddVehicleModal>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Adicionar Veículo
          </Button>
        </AddVehicleModal>
      </div>
      <VehicleList />
    </div>
  )
}

