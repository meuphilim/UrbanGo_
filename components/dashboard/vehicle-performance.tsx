"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { vehicle: "ABC-1234", revenue: 5000, expenses: 2000, profit: 3000 },
  { vehicle: "DEF-5678", revenue: 4500, expenses: 1800, profit: 2700 },
]

export function VehiclePerformance() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="vehicle" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" fill="#8884d8" name="Receita" />
        <Bar dataKey="expenses" fill="#82ca9d" name="Despesas" />
        <Bar dataKey="profit" fill="#ffc658" name="Lucro" />
      </BarChart>
    </ResponsiveContainer>
  )
}

