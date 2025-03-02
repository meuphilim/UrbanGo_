"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bell, Menu, X } from "lucide-react"
import { ProfileDropdown } from "./profile/profile-dropdown"
import { ThemeToggle } from "./theme/theme-toggle"

export function TopNav() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center bg-white border-b px-4">
      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
        {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile menu */}
      {showMobileMenu && (
        <div className="fixed inset-0 top-16 z-40 bg-white md:hidden">
          <nav className="flex flex-col p-4 space-y-2">
            <Link
              href="/dashboard"
              className="px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
              onClick={() => setShowMobileMenu(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/schedules"
              className="px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
              onClick={() => setShowMobileMenu(false)}
            >
              Agendamentos
            </Link>
            <Link
              href="/dashboard/vehicles"
              className="px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
              onClick={() => setShowMobileMenu(false)}
            >
              Veículos
            </Link>
            <Link
              href="/dashboard/drivers"
              className="px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
              onClick={() => setShowMobileMenu(false)}
            >
              Motoristas
            </Link>
            <Link
              href="/dashboard/expenses"
              className="px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
              onClick={() => setShowMobileMenu(false)}
            >
              Gastos
            </Link>
          </nav>
        </div>
      )}

      <div className="ml-auto flex items-center space-x-4">
        <ThemeToggle />
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
        </Button>
        <ProfileDropdown />
      </div>
    </header>
  )
}

