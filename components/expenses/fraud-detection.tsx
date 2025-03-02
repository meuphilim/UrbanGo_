"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface SuspiciousTransaction {
  id: number
  date: string
  amount: number
  description: string
  riskLevel: "low" | "medium" | "high"
}

export function FraudDetection() {
  const [suspiciousTransactions, setSuspiciousTransactions] = useState<SuspiciousTransaction[]>([])

  useEffect(() => {
    // Aqui você faria uma chamada à API para buscar as transações suspeitas
    // Por exemplo:
    // fetchSuspiciousTransactions().then(setSuspiciousTransactions)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Detecção de Fraudes</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Data</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Nível de Risco</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {suspiciousTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>R$ {transaction.amount.toFixed(2)}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      transaction.riskLevel === "high"
                        ? "destructive"
                        : transaction.riskLevel === "medium"
                          ? "warning"
                          : "secondary"
                    }
                  >
                    {transaction.riskLevel}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

