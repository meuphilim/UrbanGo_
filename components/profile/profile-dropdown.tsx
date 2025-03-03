"use client"

import { useUser } from "@/contexts/UserContext"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HelpCircle, LogOut, Bell, User } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { UserProfileModal } from "./user-profile-modal"

export function ProfileDropdown() {
  const { user, setUser } = useUser()
  const router = useRouter()
  const hasNewNotifications = true // Substitua por lógica real para verificar novas notificações

  const handleLogout = () => {
    setUser(null)
    router.push("/login")
  }

  if (!user) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-10 w-10 rounded-full ring-2 ring-primary/10 hover:ring-primary/20 transition-all"
        >
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="bg-primary/10 text-primary">{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          {hasNewNotifications && (
            <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500 border-2 border-white" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <UserProfileModal>
            <div className="flex w-full items-center p-2 rounded-md hover:bg-accent text-foreground hover:text-accent-foreground transition-colors cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Meu Perfil</span>
            </div>
          </UserProfileModal>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/notifications" className="flex w-full items-center p-2 rounded-md hover:bg-accent text-foreground hover:text-accent-foreground transition-colors">
            <Bell className="mr-2 h-4 w-4" />
            <span>Notificações</span>
            {hasNewNotifications && <span className="ml-auto h-2 w-2 rounded-full bg-red-500" />}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/help" className="flex w-full items-center p-2 rounded-md hover:bg-accent text-foreground hover:text-accent-foreground transition-colors">
            <HelpCircle className="mr-2 h-4 w-4" />
            <span>Ajuda</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="flex w-full items-center p-2 rounded-md text-red-500 hover:bg-accent hover:text-red-500 transition-colors">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

