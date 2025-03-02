"use client"

import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Schedule {
  time: string
  destination: string
  driver: string
  vehicle: string
}

export function DailySchedule() {
  const [todaySchedule, setTodaySchedule] = useState<Schedule[]>([])

  useEffect(() => {
    // Aqui você faria uma chamada à API para buscar o agendamento do dia
    // Por exemplo:
    // fetchTodaySchedule().then(setTodaySchedule)
  }, [])

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Horário</TableHead>
          <TableHead>Destino</TableHead>
          <TableHead>Motorista</TableHead>
          <TableHead>Veículo</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todaySchedule.map((schedule, index) => (
          <TableRow key={index}>
            <TableCell>{schedule.time}</TableCell>
            <TableCell>{schedule.destination}</TableCell>
            <TableCell>{schedule.driver}</TableCell>
            <TableCell>{schedule.vehicle}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

