"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Jan",
    total: 580,
  },
  {
    name: "Fev",
    total: 690,
  },
  {
    name: "Mar",
    total: 1100,
  },
  {
    name: "Abr",
    total: 1200,
  },
  {
    name: "Mai",
    total: 1380,
  },
  {
    name: "Jun",
    total: 1500,
  },
  {
    name: "Jul",
    total: 1700,
  },
  {
    name: "Ago",
    total: 1890,
  },
  {
    name: "Set",
    total: 2100,
  },
  {
    name: "Out",
    total: 2400,
  },
  {
    name: "Nov",
    total: 2780,
  },
  {
    name: "Dez",
    total: 3000,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value} km`}
        />
        <Tooltip
          formatter={(value: number) => [`${value} km`, "Distância"]}
          labelFormatter={(label) => `Mês: ${label}`}
        />
        <Bar dataKey="total" fill="#3b82f6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

