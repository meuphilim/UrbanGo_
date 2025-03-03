import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { UserProvider } from "@/contexts/UserContext"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UrbanGo! - Gerenciamento de Frota",
  description: "Sistema de gerenciamento de frota de veículos",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <UserProvider>
            {children}
            <Toaster />
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'