"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Vehicle {
  id: number
  licensePlate: string
  status: string
  make: string
  model: string
  year: number
  // Adicione mais campos conforme necessário
}

interface Booking {
  id: number
  startDate: string
  endDate: string
  driver: string
}

interface Maintenance {
  id: number
  date: string
  description: string
  cost: number
}

export default function VehicleDetailsModal({ children, vehicle }: { children: React.ReactNode; vehicle: Vehicle }) {
  const [open, setOpen] = useState(false)

  // Mock data for bookings and maintenance
  const bookings: Booking[] = [
    { id: 1, startDate: "2023-05-01", endDate: "2023-05-03", driver: "João Silva" },
    { id: 2, startDate: "2023-05-10", endDate: "2023-05-12", driver: "Maria Oliveira" },
  ]

  const maintenances: Maintenance[] = [
    { id: 1, date: "2023-04-15", description: "Troca de óleo", cost: 150 },
    { id: 2, date: "2023-03-20", description: "Revisão geral", cost: 500 },
  ]

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Detalhes do Veículo</DialogTitle>
          <DialogDescription>Informações detalhadas sobre o veículo selecionado.</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="info">
          <TabsList>
            <TabsTrigger value="info">Informações</TabsTrigger>
            <TabsTrigger value="bookings">Histórico de Uso</TabsTrigger>
            <TabsTrigger value="maintenance">Histórico de Manutenções</TabsTrigger>
          </TabsList>
          <TabsContent value="info">
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-medium text-right">Placa:</span>
                <span className="col-span-3">{vehicle.licensePlate}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-medium text-right">Status:</span>
                <span className="col-span-3">{vehicle.status}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-medium text-right">Marca:</span>
                <span className="col-span-3">{vehicle.make}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-medium text-right">Modelo:</span>
                <span className="col-span-3">{vehicle.model}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-medium text-right">Ano:</span>
                <span className="col-span-3">{vehicle.year}</span>
              </div>
              {/* Adicione mais campos conforme necessário */}
            </div>
          </TabsContent>
          <TabsContent value="bookings">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data Início</TableHead>
                  <TableHead>Data Fim</TableHead>
                  <TableHead>Motorista</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>{booking.startDate}</TableCell>
                    <TableCell>{booking.endDate}</TableCell>
                    <TableCell>{booking.driver}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="maintenance">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Custo</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {maintenances.map((maintenance) => (
                  <TableRow key={maintenance.id}>
                    <TableCell>{maintenance.date}</TableCell>
                    <TableCell>{maintenance.description}</TableCell>
                    <TableCell>R$ {maintenance.cost.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
        <div className="flex justify-end space-x-2 mt-4">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Fechar
          </Button>
          <Button>Editar Veículo</Button>
          <Button variant="secondary">Ver Histórico Completo</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

