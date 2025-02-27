import Link from "next/link"
import { ArrowLeft, Calendar, Edit, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Dados simulados para o motorista
const motorista = {
  id: "1",
  nome: "João Silva",
  cnh: "12345678901",
  dataNascimento: "15/05/1985",
  endereco: "Rua A, 123 - São Paulo, SP",
  status: "disponível",
  foto: "/placeholder.svg?height=128&width=128",
}

// Função para renderizar o badge de status
function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "disponível":
      return <Badge variant="success">Disponível</Badge>
    case "em_viagem":
      return <Badge variant="info">Em Viagem</Badge>
    case "indisponível":
      return <Badge variant="destructive">Indisponível</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

// Dados simulados para o histórico de agendamentos
const historicoAgendamentos = [
  {
    id: "1",
    data: "20/06/2023",
    destino: "Cliente XYZ",
    veiculo: "Toyota Corolla - ABC-1234",
  },
  {
    id: "2",
    data: "15/06/2023",
    destino: "Aeroporto Internacional",
    veiculo: "Honda Civic - DEF-5678",
  },
  {
    id: "3",
    data: "10/06/2023",
    destino: "Reunião Empresarial",
    veiculo: "Ford Fusion - GHI-9012",
  },
]

export default function MotoristaDetalhesPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col p-6 gap-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/motoristas">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Voltar</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{motorista.nome}</h1>
            <p className="text-muted-foreground">CNH: {motorista.cnh}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href={`/motoristas/${params.id}/historico`}>
              <FileText className="mr-2 h-4 w-4" />
              Histórico Completo
            </Link>
          </Button>
          <Button asChild>
            <Link href={`/motoristas/${params.id}/editar`}>
              <Edit className="mr-2 h-4 w-4" />
              Editar
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Informações Básicas */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Informações Básicas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-center mb-4">
                <img
                  src={motorista.foto || "/placeholder.svg"}
                  alt={`Foto de ${motorista.nome}`}
                  className="rounded-full w-32 h-32 object-cover"
                />
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <StatusBadge status={motorista.status} />
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Nome:</span>
                <span>{motorista.nome}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">CNH:</span>
                <span>{motorista.cnh}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Data de Nascimento:</span>
                <span>{motorista.dataNascimento}</span>
              </div>
              <div className="flex items-start justify-between">
                <span className="text-muted-foreground">Endereço:</span>
                <span className="text-right">{motorista.endereco}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Histórico de Agendamentos */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Histórico de Agendamentos</CardTitle>
            <CardDescription>Últimos agendamentos deste motorista</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {historicoAgendamentos.map((agendamento) => (
                <div key={agendamento.id} className="flex items-center gap-4 rounded-lg border p-4">
                  <div className="rounded-full bg-blue-100 p-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{agendamento.destino}</div>
                    <div className="text-sm text-muted-foreground">Veículo: {agendamento.veiculo}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">{agendamento.data}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

