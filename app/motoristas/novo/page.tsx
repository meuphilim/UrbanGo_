"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Save, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export default function NovoMotoristaPage() {
  const [status, setStatus] = useState("disponível")
  const [fotoPreview, setFotoPreview] = useState<string | null>(null)

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

  return (
    <div className="flex flex-col p-6 gap-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/motoristas">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Voltar</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Novo Motorista</h1>
      </div>

      <form className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Informações Pessoais</CardTitle>
            <CardDescription>Preencha as informações pessoais do motorista</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome Completo</Label>
              <Input id="nome" placeholder="Ex: João Silva" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dataNascimento">Data de Nascimento</Label>
                <Input id="dataNascimento" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cnh">CNH</Label>
                <Input id="cnh" placeholder="Ex: 12345678901" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="endereco">Endereço</Label>
              <Textarea id="endereco" placeholder="Ex: Rua A, 123 - Bairro, Cidade - UF" />
            </div>
            <div className="space-y-2">
              <Label>Status do Motorista</Label>
              <RadioGroup
                defaultValue="disponível"
                value={status}
                onValueChange={setStatus}
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
            <CardDescription>Faça o upload de uma foto do motorista</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              {fotoPreview ? (
                <div className="relative w-32 h-32">
                  <img
                    src={fotoPreview || "/placeholder.svg"}
                    alt="Prévia da foto do motorista"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <Button
                    type="button"
                    variant="secondary"
                    size="icon"
                    className="absolute bottom-0 right-0"
                    onClick={() => setFotoPreview(null)}
                  >
                    <Upload className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="w-32 h-32 border-2 border-dashed rounded-full flex items-center justify-center">
                  <Label htmlFor="foto" className="cursor-pointer">
                    <div className="text-center">
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
                      <span className="mt-2 block text-sm text-muted-foreground">Adicionar Foto</span>
                    </div>
                    <Input id="foto" type="file" accept="image/*" className="hidden" onChange={handleFotoChange} />
                  </Label>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button variant="outline" asChild>
            <Link href="/motoristas">Cancelar</Link>
          </Button>
          <Button type="submit">
            <Save className="mr-2 h-4 w-4" />
            Salvar Motorista
          </Button>
        </div>
      </form>
    </div>
  )
}

