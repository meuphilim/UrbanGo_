"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Car } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface Booking {
  id: number
  vehicleLicensePlate: string
  driver: string
  client: string
  startDate: Date
  endDate: Date
  destinations: { [key: string]: string }
}

export default function ScheduleWeekView() {
  const [currentWeekStart, setCurrentWeekStart] = useState(getMonday(new Date()))
  const [bookings, setBookings] = useState<Booking[]>([])

  useEffect(() => {
    // Fetch bookings here
  }, []) // Removed unnecessary dependency: currentWeekStart

  function getMonday(d: Date) {
    d = new Date(d)
    const day = d.getDay()
    const diff = d.getDate() - day + (day === 0 ? -6 : 1)
    return new Date(d.setDate(diff))
  }

  const getDaysOfWeek = (startDate: Date) => {
    const days = []
    for (let i = 0; i < 7; i++) {
      const day = new Date(startDate)
      day.setDate(startDate.getDate() + i)
      days.push(day)
    }
    return days
  }

  const weekDays = getDaysOfWeek(currentWeekStart)

  const isBookingActive = (booking: Booking, date: Date) => {
    return date >= booking.startDate && date <= booking.endDate
  }

  const previousWeek = () => {
    const newStart = new Date(currentWeekStart)
    newStart.setDate(currentWeekStart.getDate() - 7)
    setCurrentWeekStart(newStart)
  }

  const nextWeek = () => {
    const newStart = new Date(currentWeekStart)
    newStart.setDate(currentWeekStart.getDate() + 7)
    setCurrentWeekStart(newStart)
  }

  const formatHeaderDate = (date: Date) => {
    return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "2-digit" })
  }

  const formatTableDate = (date: Date) => {
    const dayNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    const dayName = dayNames[date.getDay()]
    return `${dayName}
${formatHeaderDate(date)}`
  }

  const getBookingInfo = (booking: Booking, date: Date) => {
    const dateString = date.toISOString().split("T")[0]
    return booking.destinations[dateString] || booking.client
  }

  const exportReport = () => {
    // Implement export logic here
    console.log("Exportando relatório")
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Agenda Semanal</CardTitle>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={previousWeek}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span>
            {formatHeaderDate(currentWeekStart)} - {formatHeaderDate(weekDays[6])}
          </span>
          <Button variant="outline" size="sm" onClick={nextWeek}>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={exportReport}>
            Exportar Relatório
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Veículo</TableHead>
              {weekDays.map((day) => (
                <TableHead key={day.toISOString()} className="text-center">
                  {formatTableDate(day)}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.vehicleLicensePlate}</TableCell>
                {weekDays.map((day) => (
                  <TableCell key={day.toISOString()}>
                    {isBookingActive(booking, day) ? (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="flex items-center">
                              <Car className="h-4 w-4 mr-2" />
                              {getBookingInfo(booking, day)}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Cliente: {booking.client}</p>
                            <p>Motorista: {booking.driver}</p>
                            <p>Destino: {getBookingInfo(booking, day)}</p>
                            <p>{formatTableDate(day)}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      "-"
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

