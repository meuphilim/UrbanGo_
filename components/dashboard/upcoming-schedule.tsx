"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const upcomingSchedule = [
  { date: "02/05/23", destination: "Aquário Natural, Bonito MS", driver: "João Silva", vehicle: "ABC-1234" },
  { date: "03/05/23", destination: "Estância Mimosa, Bonito MS", driver: "Maria Oliveira", vehicle: "DEF-5678" },
  { date: "04/05/23", destination: "Parque das Cachoeiras, Bonito MS", driver: "João Silva", vehicle: "ABC-1234" },
]

export function UpcomingSchedule() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Data</TableHead>
          <TableHead>Destino</TableHead>
          <TableHead>Motorista</TableHead>
          <TableHead>Veículo</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {upcomingSchedule.map((schedule, index) => (
          <TableRow key={index}>
            <TableCell>{schedule.date}</TableCell>
            <TableCell>{schedule.destination}</TableCell>
            <TableCell>{schedule.driver}</TableCell>
            <TableCell>{schedule.vehicle}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

