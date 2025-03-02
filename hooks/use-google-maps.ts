"use client"

import { useState, useEffect } from "react"

export function useGoogleMaps() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`
      script.async = true
      script.defer = true
      script.onload = () => setIsLoaded(true)
      script.onerror = () => setError("Falha ao carregar o Google Maps API")
      document.head.appendChild(script)
    } else {
      setIsLoaded(true)
    }
  }, [])

  return { isLoaded, error }
}

