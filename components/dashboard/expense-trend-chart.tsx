"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

interface ExpenseData {
  date: string
  amount: number
}

export function ExpenseTrendChart() {
  const [data, setData] = useState<ExpenseData[]>([])

  useEffect(() => {
    // Aqui você faria uma chamada à API para buscar os dados de gastos
    // Por exemplo:
    // fetchExpenseData().then(setData)

    // Dados de exemplo:
    setData([
      { date: "2023-01", amount: 4000 },
      { date: "2023-02", amount: 3000 },
      { date: "2023-03", amount: 5000 },
      { date: "2023-04", amount: 4500 },
      { date: "2023-05", amount: 4800 },
    ])
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tendência de Gastos</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

