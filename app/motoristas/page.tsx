"use client"

import { useState } from "react"
import Link from "next/link"
import { Download, Edit, FileText, Filter, Plus, Search, Trash2, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

// Dados simulados para a tabela de motoristas
const motoristas = [
  {
    id: "1",
    nome: "João Silva",
    cnh: "12345678901",
    dataNascimento: "15/05/1985",
    endereco: "Rua A, 123 - São Paulo, SP",
    status: "disponível",
  },
  {
    id: "2",
    nome: "Maria Oliveira",
    cnh: "98765432109",
    dataNascimento: "22/09/1990",
    endereco: "Av. B, 456 - Rio de Janeiro, RJ",
    status: "em_viagem",
  },
  {
    id: "3",
    nome: "Carlos Santos",
    cnh: "45678901234",
    dataNascimento: "10/03/1988",
    endereco: "Rua C, 789 - Belo Horizonte, MG",
    status: "indisponível",
  },
  {
    id: "4",
    nome: "Ana Rodrigues",
    cnh: "78901234567",
    dataNascimento: "30/11/1992",
    endereco: "Av. D, 1010 - Curitiba, PR",
    status: "disponível",
  },
  {
    id: "5",
    nome: "Pedro Ferreira",
    cnh: "23456789012",
    dataNascimento: "05/07/1987",
    endereco: "Rua E, 222 - Salvador, BA",
    status: "em_viagem",
  },
]

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

export default function MotoristasPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(5)
  const [motoristasData, setMotoristasData] = useState(motoristas)

  // Cálculo para paginação
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = motoristasData.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(motoristasData.length / itemsPerPage)

  const handleDelete = (id: string) => {
    setMotoristasData(motoristasData.filter((motorista) => motorista.id !== id))
  }

  return (
    <div className="flex flex-col p-6 gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Motoristas</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Button size="sm" asChild>
            <Link href="/motoristas/novo">
              <Plus className="mr-2 h-4 w-4" />
              Novo Motorista
            </Link>
          </Button>
        </div>
      </div>

      {/* Filtros e Pesquisa */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar motoristas..." className="pl-8 w-full" />
        </div>
        <Button variant="outline" className="md:w-auto">
          <Filter className="mr-2 h-4 w-4" />
          Filtros
        </Button>
      </div>

      {/* Tabela de Motoristas */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>CNH</TableHead>
              <TableHead>Data de Nascimento</TableHead>
              <TableHead>Endereço</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((motorista) => (
              <TableRow key={motorista.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-2">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <span>{motorista.nome}</span>
                  </div>
                </TableCell>
                <TableCell>{motorista.cnh}</TableCell>
                <TableCell>{motorista.dataNascimento}</TableCell>
                <TableCell>{motorista.endereco}</TableCell>
                <TableCell>
                  <StatusBadge status={motorista.status} />
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={`/motoristas/${motorista.id}`}>
                        <FileText className="h-4 w-4" />
                        <span className="sr-only">Detalhes</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={`/motoristas/${motorista.id}/editar`}>
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Editar</span>
                      </Link>
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Excluir</span>
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
                          <AlertDialogDescription>
                            Tem certeza que deseja excluir este motorista? Esta ação não pode ser desfeita.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancelar</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDelete(motorista.id)}>Confirmar</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Paginação */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Mostrando {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, motoristasData.length)} de {motoristasData.length}
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Anterior
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Próxima
          </Button>
        </div>
      </div>
    </div>
  )
}

