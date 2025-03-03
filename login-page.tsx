"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Car } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("admin@admin")
  const [password, setPassword] = useState("admin123")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would typically authenticate with your backend
    console.log("Logging in with:", { email, password })

    setLoading(false)
    // Redirect to dashboard or show success message
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundColor: "#121212",
        backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%25%27%3E%3Cdefs%3E%3ClinearGradient id=%27a%27 gradientUnits=%27userSpaceOnUse%27 x1=%270%27 x2=%270%27 y1=%270%27 y2=%27100%25%27 gradientTransform=%27rotate(240)%27%3E%3Cstop offset=%270%27 stop-color=%27%23121212%27/%3E%3Cstop offset=%271%27 stop-color=%27%230A068C%27/%3E%3C/linearGradient%3E%3Cpattern patternUnits=%27userSpaceOnUse%27 id=%27b%27 width=%27540%27 height=%27450%27 x=%270%27 y=%270%27 viewBox=%270 0 1080 900%27%3E%3Cg fill-opacity=%270.1%27%3E%3Cpolygon fill=%27%23444%27 points=%2790 150 0 300 180 300%27/%3E%3Cpolygon points=%2790 150 180 0 0 0%27/%3E%3Cpolygon fill=%27%23AAA%27 points=%27270 150 360 0 180 0%27/%3E%3Cpolygon fill=%27%23DDD%27 points=%27450 150 360 300 540 300%27/%3E%3Cpolygon fill=%27999%27 points=%27450 150 540 0 360 0%27/%3E%3Cpolygon points=%27630 150 540 300 720 300%27/%3E%3Cpolygon fill=%27%23DDD%27 points=%27630 150 720 0 540 0%27/%3E%3Cpolygon fill=%27444%27 points=%27810 150 720 300 900 300%27/%3E%3Cpolygon fill=%27%23FFF%27 points=%27810 150 900 0 720 0%27/%3E%3Cpolygon fill=%27%23DDD%27 points=%27990 150 900 300 1080 300%27/%3E%3Cpolygon fill=%27444%27 points=%27990 150 1080 0 900 0%27/%3E%3Cpolygon fill=%27%23DDD%27 points=%2790 450 0 600 180 600%27/%3E%3Cpolygon points=%2790 450 180 300 0 300%27/%3E%3Cpolygon fill=%27666%27 points=%27270 450 180 600 360 600%27/%3E%3Cpolygon fill=%27%23AAA%27 points=%27270 450 360 300 180 300%27/%3E%3Cpolygon fill=%27%23DDD%27 points=%27450 450 360 600 540 600%27/%3E%3Cpolygon fill=%27999%27 points=%27450 450 540 300 360 300%27/%3E%3Cpolygon fill=%27999%27 points=%27630 450 540 600 720 600%27/%3E%3Cpolygon fill=%27%23FFF%27 points=%27630 450 720 300 540 300%27/%3E%3Cpolygon points=%27810 450 720 600 900 600%27/%3E%3Cpolygon fill=%27%23DDD%27 points=%27810 450 900 300 720 300%27/%3E%3Cpolygon fill=%27%23AAA%27 points=%27990 450 900 600 1080 600%27/%3E%3Cpolygon fill=%27444%27 points=%27990 450 1080 300 900 300%27/%3E%3Cpolygon fill=%27222%27 points=%2790 750 0 900 180 900%27/%3E%3Cpolygon points=%27270 750 180 900 360 900%27/%3E%3Cpolygon fill=%27%23DDD%27 points=%27270 750 360 600 180 600%27/%3E%3Cpolygon points=%27450 750 540 600 360 600%27/%3E%3Cpolygon points=%27630 750 540 900 720 900%27/%3E%3Cpolygon fill=%27444%27 points=%27630 750 720 600 540 600%27/%3E%3Cpolygon fill=%27%23AAA%27 points=%27810 750 720 900 900 900%27/%3E%3Cpolygon fill=%27666%27 points=%27810 750 900 600 720 600%27/%3E%3Cpolygon fill=%27999%27 points=%27990 750 900 900 1080 900%27/%3E%3Cpolygon fill=%27999%27 points=%27180 0 90 150 270 150%27/%3E%3Cpolygon fill=%27444%27 points=%27360 0 270 150 450 150%27/%3E%3Cpolygon fill=%27%23FFF%27 points=%27540 0 450 150 630 150%27/%3E%3Cpolygon points=%27900 0 810 150 990 150%27/%3E%3Cpolygon fill=%27222%27 points=%270 300 -90 450 90 450%27/%3E%3Cpolygon fill=%27%23FFF%27 points=%270 300 90 150 -90 150%27/%3E%3Cpolygon fill=%27%23FFF%27 points=%27180 300 90 450 270 450%27/%3E%3Cpolygon fill=%27666%27 points=%27180 300 270 150 90 150%27/%3E%3Cpolygon fill=%27222%27 points=%27360 300 270 450 450 450%27/%3E%3Cpolygon fill=%27%23FFF%27 points=%27360 300 450 150 270 150%27/%3E%3Cpolygon fill=%27444%27 points=%27540 300 450 450 630 450%27/%3E%3Cpolygon fill=%27222%27 points=%27540 300 630 150 450 150%27/%3E%3Cpolygon fill=%27%23AAA%27 points=%27720 300 630 450 810 450%27/%3E%3Cpolygon fill=%27666%27 points=%27720 300 810 150 630 150%27/%3E%3Cpolygon fill=%27%23FFF%27 points=%27900 300 810 450 990 450%27/%3E%3Cpolygon fill=%27999%27 points=%27900 300 990 150 810 150%27/%3E%3Cpolygon points=%270 600 -90 750 90 750%27/%3E%3Cpolygon fill=%27666%27 points=%270 600 90 450 -90 450%27/%3E%3Cpolygon fill=%27%23AAA%27 points=%27180 600 90 750 270 750%27/%3E%3Cpolygon fill=%27444%27 points=%27180 600 270 450 90 450%27/%3E%3Cpolygon fill=%27444%27 points=%27360 600 270 750 450 750%27/%3E%3Cpolygon fill=%27999%27 points=%27360 600 450 450 270 450%27/%3E%3Cpolygon fill=%27666%27 points=%27540 600 630 450 450 450%27/%3E%3Cpolygon fill=%27222%27 points=%27720 600 630 750 810 750%27/%3E%3Cpolygon fill=%27%23FFF%27 points=%27900 600 810 750 990 750%27/%3E%3Cpolygon fill=%27222%27 points=%27900 600 990 450 810 450%27/%3E%3Cpolygon fill=%27%23DDD%27 points=%270 900 90 750 -90 750%27/%3E%3Cpolygon fill=%27444%27 points=%27180 900 270 750 90 750%27/%3E%3Cpolygon fill=%27%23FFF%27 points=%27360 900 450 750 270 750%27/%3E%3Cpolygon fill=%27%23AAA%27 points=%27540 900 630 750 450 750%27/%3E%3Cpolygon fill=%27%23FFF%27 points=%27720 900 810 750 630 750%27/%3E%3Cpolygon fill=%27222%27 points=%27900 900 990 750 810 750%27/%3E%3Cpolygon fill=%27222%27 points=%271080 300 990 450 1170 450%27/%3E%3Cpolygon fill=%27%23FFF%27 points=%271080 300 1170 150 990 150%27/%3E%3Cpolygon points=%271080 600 990 750 1170 750%27/%3E%3Cpolygon fill=%27666%27 points=%271080 600 1170 450 990 450%27/%3E%3Cpolygon fill=%27%23DDD%27 points=%271080 900 1170 750 990 750%27/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x=%270%27 y=%270%27 fill=%27url(%23a)%27 width=%27100%25%27 height=%27100%25%27/%3E%3Crect x=%270%27 y=%270%27 fill=%27url(%23b)%27 width=%27100%25%27 height=%27100%25%27/%3E%3C/svg%3E')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="bg-primary/10 p-3 rounded-full mb-2">
            <Car className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">UrbanGo!</CardTitle>
          <CardDescription className="text-center">Entre com suas credenciais para acessar o sistema</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Senha</Label>
                <Button variant="link" className="p-0 h-auto text-xs" type="button">
                  Esqueceu a senha?
                </Button>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

