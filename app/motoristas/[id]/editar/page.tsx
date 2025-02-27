"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Save, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

// Simula a obtenção dos dados do motorista
const getMotorista = (id: string) => {
  // Em uma aplicação real, isso seria uma chamada à API
  return {
    id,
    nome: "João Silva",
    cnh: "12345678901",
    dataNascimento: "1985-05-15",
    endereco: "Rua A, 123 - São Paulo, SP",
    status: "disponível",
    foto: "/placeholder.svg?height=128&width=128",
  }
}

export default function EditarMotoristaPage({ params }: { params: { id: string } }) {
  const [motorista, setMotorista] = useState(getMotorista(params.id))
  const [fotoPreview, setFotoPreview] = useState<string | null>(motorista.foto)

  useEffect(() => {
    // Em uma aplicação real, você buscaria os dados do motorista aqui
    setMotorista(getMotorista(params.id))
  }, [params.id])

  const handleFotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFotoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Aqui você enviaria os dados atualizados para o servidor
    console.log("Dados atualizados:", motorista)
    // Redirecionar para a página de detalhes do motorista após salvar
    // Em uma aplicação real, você usaria o router do Next.js para isso
  }

  return (
    <div className="flex flex-col p-6 gap-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href={`/motoristas/${params.id}`}>
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Voltar</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Editar Motorista</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Informações Pessoais</CardTitle>
            <CardDescription>Atualize as informações pessoais do motorista</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome Completo</Label>
              <Input
                id="nome"
                value={motorista.nome}
                onChange={(e) => setMotorista({ ...motorista, nome: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dataNascimento">Data de Nascimento</Label>
                <Input
                  id="dataNascimento"
                  type="date"
                  value={motorista.dataNascimento}
                  onChange={(e) => setMotorista({ ...motorista, dataNascimento: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cnh">CNH</Label>
                <Input
                  id="cnh"
                  value={motorista.cnh}
                  onChange={(e) => setMotorista({ ...motorista, cnh: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="endereco">Endereço</Label>
              <Textarea
                id="endereco"
                value={motorista.endereco}
                onChange={(e) => setMotorista({ ...motorista, endereco: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Status do Motorista</Label>
              <RadioGroup
                value={motorista.status}
                onValueChange={(value) => setMotorista({ ...motorista, status: value })}
                className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="disponível" id="disponivel" />
                  <Label htmlFor="disponivel" className="cursor-pointer">
                    Disponível
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="em_viagem" id="em_viagem" />
                  <Label htmlFor="em_viagem" className="cursor-pointer">
                    Em Viagem
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="indisponível" id="indisponivel" />
                  <Label htmlFor="indisponivel" className="cursor-pointer">
                    Indisponível
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Foto do Motorista</CardTitle>
            <CardDescription>Atualize a foto do motorista</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <img
                  src={fotoPreview || "/placeholder.svg"}
                  alt="Foto do motorista"
                  className="w-full h-full object-cover rounded-full"
                />
                <Label
                  htmlFor="foto"
                  className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full p-2 cursor-pointer"
                >
                  <Upload className="h-4 w-4" />
                  <span className="sr-only">Atualizar foto</span>
                </Label>
                <Input id="foto" type="file" accept="image/*" className="hidden" onChange={handleFotoChange} />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button variant="outline" asChild>
            <Link href={`/motoristas/${params.id}`}>Cancelar</Link>
          </Button>
          <Button type="submit">
            <Save className="mr-2 h-4 w-4" />
            Salvar Alterações
          </Button>
        </div>
      </form>
    </div>
  )
}

