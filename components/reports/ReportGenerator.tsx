"use client"

import { useState, useEffect } from "react"
import { ReportTable } from "./ReportTable"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"
import dynamic from "next/dynamic"

const jsPDF = dynamic(() => import("jspdf"), { ssr: false })
const html2canvas = dynamic(() => import("html2canvas"), { ssr: false })

// Mock data - replace with actual data fetching logic
const mockData = [
  { id: 1, date: "2023-05-01", vehicle: "ABC-1234", driver: "João Silva", expense: "Combustível", amount: 100 },
  { id: 2, date: "2023-05-02", vehicle: "DEF-5678", driver: "Maria Oliveira", expense: "Manutenção", amount: 250 },
  // Add more mock data as needed
]

const columns = [
  { Header: "Data", accessor: "date" },
  { Header: "Veículo", accessor: "vehicle" },
  { Header: "Motorista", accessor: "driver" },
  { Header: "Despesa", accessor: "expense" },
  { Header: "Valor", accessor: "amount", Cell: ({ value }) => `R$ ${value.toFixed(2)}` },
]

export function ReportGenerator() {
  const [reportType, setReportType] = useState("expenses")
  const [startDate, setStartDate] = useState<Date | undefined>(new Date())
  const [endDate, setEndDate] = useState<Date | undefined>(new Date())
  const [data, setData] = useState(mockData)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const generateReport = () => {
    // Here you would typically fetch data based on the selected criteria
    // For now, we'll just use the mock data
    console.log("Generating report:", { reportType, startDate, endDate })
    setData(mockData)
  }

  const exportToPDF = async () => {
    if (typeof window !== "undefined") {
      const input = document.getElementById("report-table")
      if (input) {
        const canvas = await html2canvas(input)
        const imgData = canvas.toDataURL("image/png")
        const pdf = new jsPDF()
        pdf.addImage(imgData, "PNG", 0, 0)
        pdf.save("report.pdf")
      }
    }
  }

  const printReport = () => {
    if (typeof window !== "undefined") {
      window.print()
    }
  }

  if (!isClient) {
    return null // or a loading indicator
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gerador de Relatórios</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex space-x-4">
            <Select onValueChange={(value) => setReportType(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Tipo de Relatório" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="expenses">Despesas</SelectItem>
                <SelectItem value="vehicles">Veículos</SelectItem>
                <SelectItem value="drivers">Motoristas</SelectItem>
              </SelectContent>
            </Select>
            <DatePicker date={startDate} setDate={setStartDate} />
            <DatePicker date={endDate} setDate={setEndDate} />
            <Button onClick={generateReport}>Gerar Relatório</Button>
          </div>
          <div id="report-table">
            <ReportTable columns={columns} data={data} />
          </div>
          <div className="flex space-x-4">
            <Button onClick={exportToPDF}>Exportar para PDF</Button>
            <Button onClick={printReport}>Imprimir Relatório</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

