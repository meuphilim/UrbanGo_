import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { VehicleStats } from "@/components/dashboard/vehicle-stats"
import { DailySchedule } from "@/components/dashboard/daily-schedule"
import { UpcomingSchedule } from "@/components/dashboard/upcoming-schedule"
import { VehiclePerformance } from "@/components/dashboard/vehicle-performance"
import { ExpenseBenchmarking } from "@/components/expenses/expense-benchmarking"
import { ExpenseMap } from "@/components/expenses/expense-map"
import { FraudDetection } from "@/components/expenses/fraud-detection"
import { ExpenseTrendChart } from "@/components/dashboard/expense-trend-chart"
import { ExpenseCategoryChart } from "@/components/expenses/expense-category-chart"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Bem-vindo ao sistema de gerenciamento de frota UrbanGo!</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <VehicleStats />
      </div>

      <ExpenseTrendChart />

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Desempenho dos Veículos</CardTitle>
            <CardDescription>Margem de gasto e lucro por veículo</CardDescription>
          </CardHeader>
          <CardContent>
            <VehiclePerformance />
          </CardContent>
        </Card>
        <ExpenseCategoryChart />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Agenda do Dia</CardTitle>
            <CardDescription>Agendamentos para hoje</CardDescription>
          </CardHeader>
          <CardContent>
            <DailySchedule />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Próximos 3 Dias</CardTitle>
            <CardDescription>Agendamentos futuros</CardDescription>
          </CardHeader>
          <CardContent>
            <UpcomingSchedule />
          </CardContent>
        </Card>
      </div>

      <ExpenseBenchmarking />

      <ExpenseMap />

      <FraudDetection />

      <Card>
        <CardHeader>
          <CardTitle>Atividades Recentes</CardTitle>
          <CardDescription>Últimas atualizações da frota</CardDescription>
        </CardHeader>
        <CardContent>
          <RecentActivity />
        </CardContent>
      </Card>
    </div>
  )
}

