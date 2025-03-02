"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useGoogleMaps } from "@/hooks/use-google-maps"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

declare global {
  interface Window {
    google: any
  }
}

export function ExpenseMap() {
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const { isLoaded, error } = useGoogleMaps()

  useEffect(() => {
    if (isLoaded && window.google) {
      const mapElement = document.getElementById("map") as HTMLElement
      const newMap = new window.google.maps.Map(mapElement, {
        center: { lat: -20.7, lng: -56.7 }, // Coordenadas de Bonito, MS
        zoom: 8,
      })
      setMap(newMap)
    }
  }, [isLoaded])

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Erro</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Mapa de Gastos</CardTitle>
      </CardHeader>
      <CardContent>
        <div id="map" style={{ height: "400px", width: "100%" }}></div>
      </CardContent>
    </Card>
  )
}

