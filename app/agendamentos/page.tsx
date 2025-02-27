"use client"

import { useState } from "react"
import { format, startOfWeek, addDays, isSameDay } from "date-fns"
import { ptBR } from "date-fns/locale"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AppointmentEntry } from "@/components/appointment-entry"
import { NewAppointmentDialog } from "@/components/new-appointment-dialog"

// Simulated data for appointments
const appointments = [
  {
    id: "1",
    agencyName: "Agência Turismo Total",
    clientName: "Empresa XYZ",
    startDate: new Date(2023, 5, 15),
    driver: { id: "d1", name: "João Silva" },
    vehicle: { id: "v1", name: "Toyota Corolla - ABC-1234" },
    destinations: [
      { date: new Date(2023, 5, 15), destination: "São Paulo - Centro" },
      { date: new Date(2023, 5, 16), destination: "Campinas" },
      { date: new Date(2023, 5, 17), destination: "São José dos Campos" },
    ],
    totalValue: "1500.00",
  },
  {
    id: "2",
    agencyName: "Viagens Incríveis",
    clientName: "Família Souza",
    startDate: new Date(2023, 5, 18),
    driver: { id: "d2", name: "Maria Oliveira" },
    vehicle: { id: "v2", name: "Honda Civic - DEF-5678" },
    destinations: [
      { date: new Date(2023, 5, 18), destination: "Rio de Janeiro - Copacabana" },
      { date: new Date(2023, 5, 19), destination: "Petrópolis" },
      { date: new Date(2023, 5, 20), destination: "Paraty" },
    ],
    totalValue: "2000.00",
  },
]

export default function AgendamentosPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [isNewAppointmentOpen, setIsNewAppointmentOpen] = useState(false)

  const startDate = startOfWeek(currentDate, { weekStartsOn: 1 })

  const weekDays = Array.from({ length: 7 }).map((_, index) => addDays(startDate, index))

  const handlePreviousWeek = () => {
    setCurrentDate((prevDate) => addDays(prevDate, -7))
  }

  const handleNextWeek = () => {
    setCurrentDate((prevDate) => addDays(prevDate, 7))
  }

  return (
    <div className="flex flex-col p-6 gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Agendamentos</h1>
        <Button onClick={() => setIsNewAppointmentOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Novo Agendamento
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">{format(startDate, "MMMM yyyy", { locale: ptBR })}</CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={handlePreviousWeek}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={handleNextWeek}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <CardDescription>Visão semanal dos agendamentos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-4">
            {weekDays.map((day) => (
              <div key={day.toISOString()} className="flex flex-col">
                <div className="text-center font-medium mb-2">
                  {format(day, "EEE", { locale: ptBR })}
                  <br />
                  {format(day, "dd")}
                </div>
                <div className="flex-1 space-y-2">
                  {appointments
                    .filter((appointment) => appointment.destinations.some((dest) => isSameDay(dest.date, day)))
                    .map((appointment) => (
                      <AppointmentEntry
                        key={`${appointment.id}-${day.toISOString()}`}
                        appointment={appointment}
                        day={day}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <NewAppointmentDialog
        open={isNewAppointmentOpen}
        onOpenChange={setIsNewAppointmentOpen}
        onAppointmentCreated={(newAppointment) => {
          // Here you would typically update the appointments list
          console.log("New appointment created:", newAppointment)
          setIsNewAppointmentOpen(false)
        }}
      />
    </div>
  )
}

