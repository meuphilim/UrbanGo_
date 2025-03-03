"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica de autenticação aqui
  }

  return (
    <div className="flex min-h-screen bg-background">
      <div className="hidden lg:flex w-1/2 bg-primary items-center justify-center">
        <svg className="w-2/3 h-2/3 text-background" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          {/* Efeito SVG que remete à identidade do projeto */}
          <path d="M50 15 L85 85 L15 85 Z" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M30 70 Q50 40 70 70" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Bem-vindo ao UrbanGo!</h2>
            <p className="mt-2 text-sm text-gray-600">Faça login para acessar o sistema</p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

