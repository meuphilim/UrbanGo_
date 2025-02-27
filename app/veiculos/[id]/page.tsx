import Link from "next/link"
import { ArrowLeft, Calendar, Edit, FileText, Fuel, MapPin, Wrench } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Dados simulados para o veículo
const veiculo = {
  id: "1",
  marca: "Toyota",
  modelo: "Corolla",
  placa: "ABC-1234",
  ano: 2022,
  cor: "Prata",
  chassi: "9BRBLWHEXG0000001",
  renavam: "00000000000",
  status: "disponível",
  aquisicao: "10/01/2022",
  valorAquisicao: "R$ 120.000,00",
  combustivel: "Flex",
  kmAtual: "15.000",
  ultimaManutencao: "15/05/2023",
  proximaRevisao: "15/11/2023",
  vencimentoIPVA: "15/04/2024",
  vencimentoSeguro: "10/01/2024",
  observacoes: "Veículo em excelente estado de conservação. Utilizado principalmente para transporte de executivos.",
}

// Função para renderizar o badge de status
function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "disponível":
      return <Badge variant="success">Disponível</Badge>
    case "em_uso":
      return <Badge variant="info">Em Uso</Badge>
    case "em_manutencao":
      return <Badge variant="warning">Em Manutenção</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

export default function VeiculoDetalhesPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col p-6 gap-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/veiculos">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Voltar</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {veiculo.marca} {veiculo.modelo}
            </h1>
            <p className="text-muted-foreground">Placa: {veiculo.placa}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href={`/veiculos/${params.id}/historico`}>
              <FileText className="mr-2 h-4 w-4" />
              Histórico
            </Link>
          </Button>
          <Button asChild>
            <Link href={`/veiculos/${params.id}/editar`}>
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
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <StatusBadge status={veiculo.status} />
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Marca:</span>
                <span>{veiculo.marca}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Modelo:</span>
                <span>{veiculo.modelo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Ano:</span>
                <span>{veiculo.ano}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cor:</span>
                <span>{veiculo.cor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Placa:</span>
                <span>{veiculo.placa}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Chassi:</span>
                <span className="text-xs">{veiculo.chassi}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Renavam:</span>
                <span>{veiculo.renavam}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detalhes Adicionais */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Detalhes Adicionais</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Data de Aquisição:</span>
                <span className="ml-auto">{veiculo.aquisicao}</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Valor de Aquisição:</span>
                <span className="ml-auto">{veiculo.valorAquisicao}</span>
              </div>
              <Separator />
              <div className="flex items-center gap-2">
                <Fuel className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Combustível:</span>
                <span className="ml-auto">{veiculo.combustivel}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Quilometragem Atual:</span>
                <span className="ml-auto">{veiculo.kmAtual} km</span>
              </div>
              <Separator />
              <div className="flex items-center gap-2">
                <Wrench className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Última Manutenção:</span>
                <span className="ml-auto">{veiculo.ultimaManutencao}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Próxima Revisão:</span>
                <span className="ml-auto">{veiculo.proximaRevisao}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Documentação */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Documentação</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Vencimento IPVA:</span>
                <span>{veiculo.vencimentoIPVA}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Vencimento Seguro:</span>
                <span>{veiculo.vencimentoSeguro}</span>
              </div>
              <Separator />
              <div>
                <h3 className="font-medium mb-2">Observações:</h3>
                <p className="text-sm text-muted-foreground">{veiculo.observacoes}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Histórico de Uso e Manutenções */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Histórico de Uso</CardTitle>
            <CardDescription>Últimos agendamentos deste veículo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">Visita a Cliente</div>
                  <div className="text-sm text-muted-foreground">Motorista: Maria Oliveira</div>
                </div>
                <div className="text-sm text-muted-foreground">15/06/2023</div>
              </div>
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">Entrega de Documentos</div>
                  <div className="text-sm text-muted-foreground">Motorista: João Silva</div>
                </div>
                <div className="text-sm text-muted-foreground">02/06/2023</div>
              </div>
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">Transporte Executivo</div>
                  <div className="text-sm text-muted-foreground">Motorista: Carlos Santos</div>
                </div>
                <div className="text-sm text-muted-foreground">20/05/2023</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Histórico de Manutenções</CardTitle>
            <CardDescription>Últimas manutenções realizadas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="rounded-full bg-amber-100 p-2">
                  <Wrench className="h-4 w-4 text-amber-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">Troca de Óleo</div>
                  <div className="text-sm text-muted-foreground">Oficina: AutoCenter</div>
                </div>
                <div className="text-sm text-muted-foreground">15/05/2023</div>
              </div>
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="rounded-full bg-amber-100 p-2">
                  <Wrench className="h-4 w-4 text-amber-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">Alinhamento e Balanceamento</div>
                  <div className="text-sm text-muted-foreground">Oficina: Pneus Express</div>
                </div>
                <div className="text-sm text-muted-foreground">10/03/2023</div>
              </div>
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="rounded-full bg-amber-100 p-2">
                  <Wrench className="h-4 w-4 text-amber-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">Revisão Completa</div>
                  <div className="text-sm text-muted-foreground">Oficina: Concessionária Toyota</div>
                </div>
                <div className="text-sm text-muted-foreground">05/01/2023</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

