"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  name: string
  email: string
  avatar: string
  language: string
  darkMode: boolean
  emailNotifications: boolean
  pushNotifications: boolean
}

interface UserContextType {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  updateProfile: (data: Partial<User>) => Promise<void>
  changePassword: (currentPassword: string, newPassword: string) => Promise<void>
  updatePreferences: (preferences: Partial<User>) => Promise<void>
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Aqui você normalmente buscaria os dados do usuário do backend ou localStorage
    setUser({
      name: "Administrador",
      email: "admin@admin",
      avatar: "/placeholder.svg?height=128&width=128",
      language: "pt-BR",
      darkMode: false,
      emailNotifications: true,
      pushNotifications: false,
    })
  }, [])

  const updateProfile = async (data: Partial<User>) => {
    const response = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (response.ok) {
      setUser((prev) => (prev ? { ...prev, ...data } : null))
    } else {
      throw new Error("Falha ao atualizar o perfil")
    }
  }

  const changePassword = async (currentPassword: string, newPassword: string) => {
    const response = await fetch("/api/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "changePassword", currentPassword, newPassword }),
    })
    if (!response.ok) {
      throw new Error("Falha ao alterar a senha")
    }
  }

  const updatePreferences = async (preferences: Partial<User>) => {
    const response = await fetch("/api/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "updatePreferences", preferences }),
    })
    if (response.ok) {
      setUser((prev) => (prev ? { ...prev, ...preferences } : null))
    } else {
      throw new Error("Falha ao atualizar as preferências")
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser, updateProfile, changePassword, updatePreferences }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}

