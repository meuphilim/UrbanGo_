"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

interface Driver {
  id: number
  name: string
  licenseCategory: string
  isEAR: boolean
  status: string
  photo?: string
}

export default function EditDriverModal({ children, driver }: { children: React.ReactNode; driver: Driver }) {
  const [isOpen, setIsOpen] = useState(false)
  const [editedDriver, setEditedDriver] = useState(driver)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission
    console.log("Driver updated:", editedDriver)
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Motorista</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              value={editedDriver.name}
              onChange={(e) => setEditedDriver({ ...editedDriver, name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="licenseCategory">Categoria CNH</Label>
            <Select
              value={editedDriver.licenseCategory}
              onValueChange={(value) => setEditedDriver({ ...editedDriver, licenseCategory: value })}
            >
              <SelectTrigger id="licenseCategory">
                <SelectValue placeholder="Selecione a categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A">A</SelectItem>
                <SelectItem value="B">B</SelectItem>
                <SelectItem value="C">C</SelectItem>
                <SelectItem value="D">D</SelectItem>
                <SelectItem value="E">E</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="ear"
              checked={editedDriver.isEAR}
              onCheckedChange={(checked) => setEditedDriver({ ...editedDriver, isEAR: checked })}
            />
            <Label htmlFor="ear">EAR</Label>
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select
              value={editedDriver.status}
              onValueChange={(value) => setEditedDriver({ ...editedDriver, status: value })}
            >
              <SelectTrigger id="status">
                <SelectValue placeholder="Selecione o status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Ativo">Ativo</SelectItem>
                <SelectItem value="Inativo">Inativo</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="photo">Foto</Label>
            <Input
              id="photo"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) {
                  const reader = new FileReader()
                  reader.onloadend = () => {
                    setEditedDriver({ ...editedDriver, photo: reader.result as string })
                  }
                  reader.readAsDataURL(file)
                }
              }}
            />
          </div>
          <Button type="submit">Salvar Alterações</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

