"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Booking {
  id: number
  vehicleLicensePlate: string
  driver: string
  client: string
  agency: string
  startDate: Date
  endDate: Date
  destinations: string[]
}

const mockBookings: Booking[] = [
  {
    id: 1,
    vehicleLicensePlate: "ABC-1234",
    driver: "João Silva",
    client: "Empresa A",
    agency: "Agência X",
    startDate: new Date(2023, 4, 1),
    endDate: new Date(2023, 4, 3),
    destinations: ["São Paulo", "Rio de Janeiro", "Belo Horizonte"],
  },
  {
    id: 2,
    vehicleLicensePlate: "DEF-5678",
    driver: "Maria Oliveira",
    client: "Empresa B",
    agency: "Agência Y",
    startDate: new Date(2023, 4, 2),
    endDate: new Date(2023, 4, 5),
    destinations: ["Curitiba", "Florianópolis", "Porto Alegre", "Curitiba"],
  },
]

export default function BookingReports() {
  const [reportType, setReportType] = useState("week")
  const [startDate, setStartDate] = useState<Date | undefined>(new Date())
  const [endDate, setEndDate] = useState<Date | undefined>(new Date())
  const [filterBy, setFilterBy] = useState("all")

  const generateReport = () => {
    // Implement report generation logic here
    console.log("Generating report:", { reportType, startDate, endDate, filterBy })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Relatórios de Agendamentos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex space-x-4">
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger>
                <SelectValue placeholder="Tipo de Relatório" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Semanal</SelectItem>
                <SelectItem value="month">Mensal</SelectItem>
                <SelectItem value="custom">Período Específico</SelectItem>
              </SelectContent>
            </Select>
            <DatePicker date={startDate} setDate={setStartDate} />
            {reportType === "custom" && <DatePicker date={endDate} setDate={setEndDate} />}
            <Select value={filterBy} onValueChange={setFilterBy}>
              <SelectTrigger>
                <SelectValue placeholder="Filtrar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="vehicle">Veículo</SelectItem>
                <SelectItem value="driver">Motorista</SelectItem>
                <SelectItem value="agency">Agência</SelectItem>
                <SelectItem value="destination">Destino</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={generateReport}>Gerar Relatório</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Veículo</TableHead>
                <TableHead>Motorista</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Agência</TableHead>
                <TableHead>Data Início</TableHead>
                <TableHead>Data Fim</TableHead>
                <TableHead>Destinos</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.vehicleLicensePlate}</TableCell>
                  <TableCell>{booking.driver}</TableCell>
                  <TableCell>{booking.client}</TableCell>
                  <TableCell>{booking.agency}</TableCell>
                  <TableCell>{booking.startDate.toLocaleDateString()}</TableCell>
                  <TableCell>{booking.endDate.toLocaleDateString()}</TableCell>
                  <TableCell>{booking.destinations.join(", ")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

