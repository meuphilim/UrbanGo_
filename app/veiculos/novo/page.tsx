"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NovoVeiculoPage() {
  const [status, setStatus] = useState("disponível")

  return (
    <div className="flex flex-col p-6 gap-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/veiculos">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Voltar</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Novo Veículo</h1>
      </div>

      <form className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Informações Básicas</CardTitle>
            <CardDescription>Preencha as informações básicas do veículo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="marca">Marca</Label>
                <Input id="marca" placeholder="Ex: Toyota" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="modelo">Modelo</Label>
                <Input id="modelo" placeholder="Ex: Corolla" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="placa">Placa</Label>
                <Input id="placa" placeholder="Ex: ABC-1234" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ano">Ano</Label>
                <Input id="ano" type="number" placeholder="Ex: 2023" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cor">Cor</Label>
                <Input id="cor" placeholder="Ex: Prata" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="chassi">Chassi</Label>
                <Input id="chassi" placeholder="Ex: 9BRBLWHEXG0000001" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="renavam">Renavam</Label>
                <Input id="renavam" placeholder="Ex: 00000000000" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Detalhes Adicionais</CardTitle>
            <CardDescription>Informações complementares sobre o veículo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="data-aquisicao">Data de Aquisição</Label>
                <Input id="data-aquisicao" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="valor-aquisicao">Valor de Aquisição (R$)</Label>
                <Input id="valor-aquisicao" type="number" step="0.01" placeholder="Ex: 80000.00" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tipo-combustivel">Tipo de Combustível</Label>
                <Select>
                  <SelectTrigger id="tipo-combustivel">
                    <SelectValue placeholder="Selecione o tipo de combustível" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gasolina">Gasolina</SelectItem>
                    <SelectItem value="etanol">Etanol</SelectItem>
                    <SelectItem value="flex">Flex</SelectItem>
                    <SelectItem value="diesel">Diesel</SelectItem>
                    <SelectItem value="eletrico">Elétrico</SelectItem>
                    <SelectItem value="hibrido">Híbrido</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="km-atual">Quilometragem Atual</Label>
                <Input id="km-atual" type="number" placeholder="Ex: 15000" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Status do Veículo</Label>
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
                  <RadioGroupItem value="em_uso" id="em_uso" />
                  <Label htmlFor="em_uso" className="cursor-pointer">
                    Em Uso
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="em_manutencao" id="em_manutencao" />
                  <Label htmlFor="em_manutencao" className="cursor-pointer">
                    Em Manutenção
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="observacoes">Observações</Label>
              <Textarea id="observacoes" placeholder="Informações adicionais sobre o veículo" rows={4} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Documentação</CardTitle>
            <CardDescription>Informações sobre a documentação do veículo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vencimento-ipva">Vencimento do IPVA</Label>
                <Input id="vencimento-ipva" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vencimento-seguro">Vencimento do Seguro</Label>
                <Input id="vencimento-seguro" type="date" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="proxima-revisao">Data da Próxima Revisão</Label>
              <Input id="proxima-revisao" type="date" />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button variant="outline" asChild>
            <Link href="/veiculos">Cancelar</Link>
          </Button>
          <Button type="submit">
            <Save className="mr-2 h-4 w-4" />
            Salvar Veículo
          </Button>
        </div>
      </form>
    </div>
  )
}

