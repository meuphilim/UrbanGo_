"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

interface CategoryData {
  name: string
  value: number
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

export function ExpenseCategoryChart() {
  const [data, setData] = useState<CategoryData[]>([])

  useEffect(() => {
    // Aqui você faria uma chamada à API para buscar os dados de categorias de gastos
    // Por exemplo:
    // fetchExpenseCategoryData().then(setData)

    // Dados de exemplo:
    setData([
      { name: "Combustível", value: 400 },
      { name: "Manutenção", value: 300 },
      { name: "Pedágios", value: 100 },
      { name: "Alimentação", value: 200 },
      { name: "Outros", value: 150 },
    ])
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Distribuição de Gastos por Categoria</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

