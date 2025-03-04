"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useUser } from "@/contexts/UserContext"
import { useToast } from "@/components/ui/use-toast"

export function UserProfile() {
  const { user, updateProfile, changePassword, updatePreferences } = useUser()
  const { toast } = useToast()
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  if (!user) return null

  const handleProfileSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      await updateProfile({ name: user.name, email: user.email })
      toast({ title: "Perfil atualizado com sucesso" })
    } catch (error) {
      toast({ title: "Erro ao atualizar o perfil", variant: "destructive" })
    }
  }

  const handlePasswordChange = async (event: React.FormEvent) => {
    event.preventDefault()
    if (newPassword !== confirmPassword) {
      toast({ title: "As senhas não coincidem", variant: "destructive" })
      return
    }
    try {
      await changePassword(currentPassword, newPassword)
      toast({ title: "Senha alterada com sucesso" })
      setCurrentPassword("")
      setNewPassword("")
      setConfirmPassword("")
    } catch (error) {
      toast({ title: "Erro ao alterar a senha", variant: "destructive" })
    }
  }

  const handlePreferencesChange = async (key: string, value: any) => {
    try {
      await updatePreferences({ [key]: value })
      toast({ title: "Preferências atualizadas com sucesso" })
    } catch (error) {
      toast({ title: "Erro ao atualizar as preferências", variant: "destructive" })
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Perfil do Usuário</CardTitle>
        <CardDescription>Gerencie suas informações pessoais e configurações de conta</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="profile">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="security">Segurança</TabsTrigger>
            <TabsTrigger value="preferences">Preferências</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <form onSubmit={handleProfileSubmit} className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <Button variant="outline">Alterar Foto</Button>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" value={user.name} onChange={(e) => updateProfile({ ...user, name: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={user.email}
                  onChange={(e) => updateProfile({ ...user, email: e.target.value })}
                />
              </div>
              <Button type="submit">Salvar Alterações</Button>
            </form>
          </TabsContent>
          <TabsContent value="security">
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Senha Atual</Label>
                <Input
                  id="current-password"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">Nova Senha</Label>
                <Input
                  id="new-password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <Button type="submit">Alterar Senha</Button>
            </form>
          </TabsContent>
          <TabsContent value="preferences">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode">Modo Escuro</Label>
                <Switch
                  id="dark-mode"
                  checked={user.darkMode}
                  onCheckedChange={(checked) => handlePreferencesChange("darkMode", checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications">Notificações por Email</Label>
                <Switch
                  id="email-notifications"
                  checked={user.emailNotifications}
                  onCheckedChange={(checked) => handlePreferencesChange("emailNotifications", checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push-notifications">Notificações Push</Label>
                <Switch
                  id="push-notifications"
                  checked={user.pushNotifications}
                  onCheckedChange={(checked) => handlePreferencesChange("pushNotifications", checked)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Idioma</Label>
                <Select value={user.language} onValueChange={(value) => handlePreferencesChange("language", value)}>
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Selecione o idioma" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                    <SelectItem value="en-US">English (US)</SelectItem>
                    <SelectItem value="es-ES">Español</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

