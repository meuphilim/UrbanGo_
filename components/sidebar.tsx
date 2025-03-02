"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BarChart2, Calendar, Car, Users, FileText, LogOut } from "lucide-react"

const routes = [
  {
    label: "Dashboard",
    icon: BarChart2,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Agendamentos",
    icon: Calendar,
    href: "/dashboard/schedules",
    color: "text-pink-700",
  },
  {
    label: "Veículos",
    icon: Car,
    href: "/dashboard/vehicles",
    color: "text-violet-500",
  },
  {
    label: "Motoristas",
    icon: Users,
    href: "/dashboard/drivers",
    color: "text-orange-500",
  },
  {
    label: "Gastos",
    icon: FileText,
    href: "/dashboard/expenses",
    color: "text-emerald-500",
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex h-full flex-col bg-white border-r shadow-sm">
      <div className="p-6 flex items-center gap-2">
        <Car className="h-6 w-6 text-primary" />
        <span className="text-xl font-bold">UrbanGo!</span>
      </div>
      <div className="flex flex-col flex-1 py-4 px-3 space-y-1">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-secondary",
              pathname === route.href ? "bg-secondary text-primary" : "text-muted-foreground",
            )}
          >
            <route.icon className={cn("h-5 w-5", route.color)} />
            {route.label}
          </Link>
        ))}
      </div>
      <div className="p-3 mt-auto border-t">
        <Link href="/logout">
          <Button variant="ghost" className="w-full justify-start text-muted-foreground">
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </Link>
      </div>
    </div>
  )
}

