import { isSameDay } from "date-fns"
import { Car, User } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface AppointmentEntryProps {
  appointment: {
    id: string
    agencyName: string
    clientName: string
    startDate: Date
    driver: { id: string; name: string }
    vehicle: { id: string; name: string }
    destinations: { date: Date; destination: string }[]
    totalValue: string
  }
  day: Date
}

export function AppointmentEntry({ appointment, day }: AppointmentEntryProps) {
  const destination = appointment.destinations.find((dest) => isSameDay(dest.date, day))

  if (!destination) return null

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card className="bg-primary/10 hover:bg-primary/20 transition-colors cursor-pointer">
            <CardContent className="p-2 text-xs">
              <div className="font-medium truncate">{appointment.clientName}</div>
              <div className="truncate">{destination.destination}</div>
            </CardContent>
          </Card>
        </TooltipTrigger>
        <TooltipContent>
          <div className="space-y-2">
            <div className="font-medium">{appointment.agencyName}</div>
            <div className="text-sm">
              <div>Cliente: {appointment.clientName}</div>
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                {appointment.driver.name}
              </div>
              <div className="flex items-center">
                <Car className="mr-2 h-4 w-4" />
                {appointment.vehicle.name}
              </div>
              <div>Destino: {destination.destination}</div>
              <div>Valor Total: R$ {appointment.totalValue}</div>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

