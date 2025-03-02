"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"

export default function NewBookingForm() {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date())
  const [endDate, setEndDate] = useState<Date | undefined>(new Date())
  const [destinations, setDestinations] = useState([{ date: new Date(), destination: "" }])

  const addDestination = () => {
    setDestinations([...destinations, { date: new Date(), destination: "" }])
  }

  const removeDestination = (index: number) => {
    setDestinations(destinations.filter((_, i) => i !== index))
  }

  const handleDestinationChange = (index: number, field: "date" | "destination", value: Date | string) => {
    const newDestinations = [...destinations]
    newDestinations[index][field] = value
    setDestinations(newDestinations)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Novo Agendamento</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="agency">Nome da Agência</Label>
              <Input id="agency" placeholder="Nome da Agência" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="client">Nome do Cliente</Label>
              <Input id="client" placeholder="Nome do Cliente" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Data Inicial</Label>
              <DatePicker date={startDate} setDate={setStartDate} />
            </div>
            <div className="space-y-2">
              <Label>Data Final</Label>
              <DatePicker date={endDate} setDate={setEndDate} />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Destinos</Label>
            {destinations.map((dest, index) => (
              <div key={index} className="flex items-center space-x-2">
                <DatePicker date={dest.date} setDate={(date) => handleDestinationChange(index, "date", date as Date)} />
                <Input
                  placeholder="Destino"
                  value={dest.destination}
                  onChange={(e) => handleDestinationChange(index, "destination", e.target.value)}
                />
                <Button type="button" variant="outline" onClick={() => removeDestination(index)}>
                  Remover
                </Button>
              </div>
            ))}
            <Button type="button" onClick={addDestination}>
              Adicionar Destino
            </Button>
          </div>
          <div className="space-y-2">
            <Label htmlFor="vehicle">Veículo</Label>
            <Select>
              <SelectTrigger id="vehicle">
                <SelectValue placeholder="Selecione um veículo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="abc-1234">ABC-1234 - Toyota Corolla</SelectItem>
                <SelectItem value="def-5678">DEF-5678 - Honda Civic</SelectItem>
                {/* Add more vehicles as needed */}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="driver">Motorista</Label>
            <Select>
              <SelectTrigger id="driver">
                <SelectValue placeholder="Selecione um motorista" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="joao-silva">João Silva</SelectItem>
                <SelectItem value="maria-oliveira">Maria Oliveira</SelectItem>
                {/* Add more drivers as needed */}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="value">Valor do Agendamento</Label>
            <Input id="value" type="number" min="0" step="0.01" placeholder="Valor em R$" />
          </div>
          <Button type="submit">Criar Agendamento</Button>
        </form>
      </CardContent>
    </Card>
  )
}

