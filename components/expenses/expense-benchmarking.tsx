"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface BenchmarkData {
  category: string
  empresa: number
  mediaDaIndustria: number
}

export function ExpenseBenchmarking() {
  const [benchmarkData, setBenchmarkData] = useState<BenchmarkData[]>([])

  useEffect(() => {
    // Aqui você faria uma chamada à API para buscar os dados de benchmark
    // Por exemplo:
    // fetchBenchmarkData().then(setBenchmarkData)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Benchmarking de Gastos</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={benchmarkData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="empresa" fill="#8884d8" name="Sua Empresa" />
            <Bar dataKey="mediaDaIndustria" fill="#82ca9d" name="Média da Indústria" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

