import { ExpenseReport } from "@/components/reports/ExpenseReport"

export default function ReportsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Relatórios</h1>
      <ExpenseReport />
    </div>
  )
}

