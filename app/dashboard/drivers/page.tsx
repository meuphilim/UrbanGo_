import DriverList from "@/components/drivers/driver-list"
import AddDriverModal from "@/components/drivers/add-driver-modal"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export default function DriversPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Gerenciamento de Motoristas</h1>
        <AddDriverModal>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Novo Motorista
          </Button>
        </AddDriverModal>
      </div>
      <DriverList />
    </div>
  )
}

