import { Activity, AlertTriangle, Car, Clock, DollarSign, TrendingDown, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  return (
    <div className="flex flex-col p-6 gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Exportar Relatórios
          </Button>
          <Button size="sm">Novo Agendamento</Button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Veículos</CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 flex items-center">
                <TrendingUp className="mr-1 h-3 w-3" />
                +2 no último mês
              </span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Motoristas Ativos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 flex items-center">
                <TrendingUp className="mr-1 h-3 w-3" />
                +3 no último mês
              </span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Agendamentos Ativos</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-muted-foreground flex items-center">
                <Activity className="mr-1 h-3 w-3" />
                Estável
              </span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gastos Mensais</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 24.560</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500 flex items-center">
                <TrendingDown className="mr-1 h-3 w-3" />
                +12% em relação ao mês anterior
              </span>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos e Tabelas */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Gastos por Categoria</CardTitle>
            <CardDescription>Distribuição de gastos nos últimos 30 dias</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            {/* Aqui seria inserido um componente de gráfico */}
            <div className="flex h-full items-center justify-center rounded-md border border-dashed p-4">
              <div className="flex flex-col items-center gap-2 text-center">
                <Activity className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Gráfico de gastos por categoria</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Utilização da Frota</CardTitle>
            <CardDescription>Percentual de utilização dos veículos</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            {/* Aqui seria inserido um componente de gráfico */}
            <div className="flex h-full items-center justify-center rounded-md border border-dashed p-4">
              <div className="flex flex-col items-center gap-2 text-center">
                <Activity className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Gráfico de utilização da frota</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alertas e Agendamentos */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Alertas de Manutenção</CardTitle>
            <CardDescription>Veículos que precisam de manutenção em breve</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="rounded-full bg-amber-100 p-2">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">Troca de Óleo</div>
                  <div className="text-sm text-muted-foreground">Fiat Strada - Placa ABC-1234</div>
                </div>
                <div className="text-sm text-muted-foreground">Em 3 dias</div>
              </div>
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="rounded-full bg-amber-100 p-2">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">Revisão Programada</div>
                  <div className="text-sm text-muted-foreground">Toyota Corolla - Placa DEF-5678</div>
                </div>
                <div className="text-sm text-muted-foreground">Em 7 dias</div>
              </div>
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="rounded-full bg-red-100 p-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">Troca de Pneus</div>
                  <div className="text-sm text-muted-foreground">Volkswagen Gol - Placa GHI-9012</div>
                </div>
                <div className="text-sm text-muted-foreground">Atrasado (2 dias)</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Próximos Agendamentos</CardTitle>
            <CardDescription>Agendamentos para os próximos dias</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">Entrega de Mercadorias</div>
                  <div className="text-sm text-muted-foreground">Honda Civic - João Silva</div>
                </div>
                <div className="text-sm text-muted-foreground">Hoje, 14:00</div>
              </div>
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">Transporte de Passageiros</div>
                  <div className="text-sm text-muted-foreground">Fiat Uno - Maria Oliveira</div>
                </div>
                <div className="text-sm text-muted-foreground">Amanhã, 09:00</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Rodapé */}
      <div className="mt-6 text-center text-sm text-muted-foreground">
        Desenvolvido por Meuphilim
      </div>
    </div>
  )
}

