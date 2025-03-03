import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { LayoutDashboard, Calendar, Car, Users, FileText, BarChart2, LogOut } from "lucide-react"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Calendar, label: "Agendamentos", href: "/dashboard/schedules" },
  { icon: Car, label: "Veículos", href: "/dashboard/vehicles" },
  { icon: Users, label: "Motoristas", href: "/dashboard/drivers" },
  { icon: FileText, label: "Gastos", href: "/dashboard/expenses" },
  { icon: BarChart2, label: "Relatórios", href: "/dashboard/reports" },
]

export function Sidebar() {

  return (
    <aside className="w-64 h-screen bg-background border-r border-border relative">
      <div className="relative z-10 h-full flex flex-col">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-primary">UrbanGo!</h1>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2 p-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center p-2 rounded-lg hover:bg-accent text-foreground hover:text-accent-foreground transition-colors"
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4">
          <button className="flex items-center w-full p-2 rounded-lg hover:bg-accent text-foreground hover:text-accent-foreground transition-colors">
            <LogOut className="w-5 h-5 mr-3" />
            Sair
          </button>
        </div>
      </div>
    </aside>
  )
}