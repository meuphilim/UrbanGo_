"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"
import { FileDown, Printer } from "lucide-react"

export default function ExpenseReports() {
  const [reportType, setReportType] = useState("monthly")
  const [startDate, setStartDate] = useState<Date | undefined>(new Date())
  const [endDate, setEndDate] = useState<Date | undefined>(new Date())

  const generateReport = () => {
    // Implement report generation logic here
    console.log("Generating report:", { reportType, startDate, endDate })
  }

  const exportReport = () => {
    // Implement export logic here
    console.log("Exporting report")
  }

  const printReport = () => {
    // Implement print logic here
    console.log("Printing report")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Relatórios de Gastos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex space-x-4">
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger>
                <SelectValue placeholder="Tipo de Relatório" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly">Mensal</SelectItem>
                <SelectItem value="quarterly">Trimestral</SelectItem>
                <SelectItem value="yearly">Anual</SelectItem>
                <SelectItem value="custom">Período Personalizado</SelectItem>
              </SelectContent>
            </Select>
            {reportType === "custom" && (
              <>
                <DatePicker date={startDate} setDate={setStartDate} />
                <DatePicker date={endDate} setDate={setEndDate} />
              </>
            )}
            <Button onClick={generateReport}>Gerar Relatório</Button>
          </div>
          <div className="flex space-x-4">
            <Button onClick={exportReport} variant="outline">
              <FileDown className="mr-2 h-4 w-4" />
              Exportar
            </Button>
            <Button onClick={printReport} variant="outline">
              <Printer className="mr-2 h-4 w-4" />
              Imprimir
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

