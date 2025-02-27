import Link from "next/link"
import { Car, Download, FileText, Filter, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Dados simulados para a tabela de veículos
const veiculos = [
  {
    id: "1",
    marca: "Toyota",
    modelo: "Corolla",
    placa: "ABC-1234",
    ano: 2022,
    status: "disponível",
    aquisicao: "10/01/2022",
    ultimaManutencao: "15/05/2023",
  },
  {
    id: "2",
    marca: "Honda",
    modelo: "Civic",
    placa: "DEF-5678",
    ano: 2021,
    status: "em_uso",
    aquisicao: "05/03/2021",
    ultimaManutencao: "20/04/2023",
  },
  {
    id: "3",
    marca: "Volkswagen",
    modelo: "Gol",
    placa: "GHI-9012",
    ano: 2020,
    status: "em_manutencao",
    aquisicao: "15/06/2020",
    ultimaManutencao: "10/06/2023",
  },
  {
    id: "4",
    marca: "Fiat",
    modelo: "Strada",
    placa: "JKL-3456",
    ano: 2023,
    status: "disponível",
    aquisicao: "20/02/2023",
    ultimaManutencao: "05/05/2023",
  },
  {
    id: "5",
    marca: "Chevrolet",
    modelo: "Onix",
    placa: "MNO-7890",
    ano: 2021,
    status: "em_uso",
    aquisicao: "12/08/2021",
    ultimaManutencao: "30/04/2023",
  },
  {
    id: "6",
    marca: "Hyundai",
    modelo: "HB20",
    placa: "PQR-1234",
    ano: 2022,
    status: "disponível",
    aquisicao: "25/05/2022",
    ultimaManutencao: "18/03/2023",
  },
  {
    id: "7",
    marca: "Ford",
    modelo: "Ranger",
    placa: "STU-5678",
    ano: 2020,
    status: "em_manutencao",
    aquisicao: "30/11/2020",
    ultimaManutencao: "22/06/2023",
  },
]

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

export default function VeiculosPage() {
  return (
    <div className="flex flex-col p-6 gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Veículos</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Button size="sm" asChild>
            <Link href="/veiculos/novo">
              <Plus className="mr-2 h-4 w-4" />
              Novo Veículo
            </Link>
          </Button>
        </div>
      </div>

      {/* Filtros e Pesquisa */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar veículos..." className="pl-8 w-full" />
        </div>
        <Button variant="outline" className="md:w-auto">
          <Filter className="mr-2 h-4 w-4" />
          Filtros
        </Button>
      </div>

      {/* Tabela de Veículos */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Marca/Modelo</TableHead>
              <TableHead>Placa</TableHead>
              <TableHead>Ano</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Data de Aquisição</TableHead>
              <TableHead>Última Manutenção</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {veiculos.map((veiculo) => (
              <TableRow key={veiculo.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Car className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div>{veiculo.marca}</div>
                      <div className="text-muted-foreground text-xs">{veiculo.modelo}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{veiculo.placa}</TableCell>
                <TableCell>{veiculo.ano}</TableCell>
                <TableCell>
                  <StatusBadge status={veiculo.status} />
                </TableCell>
                <TableCell>{veiculo.aquisicao}</TableCell>
                <TableCell>{veiculo.ultimaManutencao}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/veiculos/${veiculo.id}`}>
                      <FileText className="h-4 w-4" />
                      <span className="sr-only">Detalhes</span>
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

