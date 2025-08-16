"use client"

import { useState } from "react"
import { MapPin, Navigation, Search, BookOpen, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import type { UserLocation } from "../page"
import { Users } from "lucide-react"

interface LocationScreenProps {
  onLocationSelect: (location: UserLocation) => void
}

const popularAreas = [
  { name: "Gulshan-e-Iqbal", coordinates: { lat: 24.9056, lng: 67.0822 } },
  { name: "DHA Phase 5", coordinates: { lat: 24.8059, lng: 67.0734 } },
  { name: "Clifton", coordinates: { lat: 24.8138, lng: 67.0299 } },
  { name: "Johar Town", coordinates: { lat: 24.9265, lng: 67.148 } },
  { name: "North Nazimabad", coordinates: { lat: 24.9265, lng: 67.0362 } },
  { name: "Malir", coordinates: { lat: 24.8968, lng: 67.2097 } },
  { name: "PECHS", coordinates: { lat: 24.8607, lng: 67.07 } },
  { name: "Korangi", coordinates: { lat: 24.8418, lng: 67.1157 } },
]

export default function LocationScreen({ onLocationSelect }: LocationScreenProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [isGettingLocation, setIsGettingLocation] = useState(false)

  const handleCurrentLocation = () => {
    setIsGettingLocation(true)

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          onLocationSelect({
            area: "Current Location",
            coordinates: { lat: latitude, lng: longitude },
            address: "Your current location",
          })
          setIsGettingLocation(false)
        },
        (error) => {
          console.error("Error getting location:", error)
          setIsGettingLocation(false)
        },
      )
    } else {
      setIsGettingLocation(false)
      alert("Geolocation is not supported by this browser.")
    }
  }

  const handleAreaSelect = (area: { name: string; coordinates: { lat: number; lng: number } }) => {
    onLocationSelect({
      area: area.name,
      coordinates: area.coordinates,
      address: `${area.name}, Karachi`,
    })
  }

  const filteredAreas = popularAreas.filter((area) => area.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">IdaraFinder.pk</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Original Design */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Find Your Child's Perfect School in Karachi</h1>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            Discover the Best Schools Across Karachi's Areas – Just a Click Away
          </p>
        </div>
      </section>

      {/* Main Content with Two Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Location Selection */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">What's your location?</h2>
              <p className="text-gray-600">We'll show you the best schools in your area and nearby locations</p>
            </div>

            {/* Current Location Button */}
            <Button
              onClick={handleCurrentLocation}
              disabled={isGettingLocation}
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
            >
              <Navigation className="w-5 h-5" />
              {isGettingLocation ? "Getting your location..." : "Use current location"}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">Or choose manually</span>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search for your area..."
                className="pl-10 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Popular Areas */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">Popular areas in Karachi</h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {filteredAreas.map((area) => (
                  <Card
                    key={area.name}
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleAreaSelect(area)}
                  >
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{area.name}</h4>
                          <p className="text-sm text-gray-500">Karachi, Pakistan</p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <Image
                src="/images/panaflex-banner.png"
                alt="IdaraFinder - Your Child's Perfect School, Just a Click Away"
                width={400}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-white py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Search Nearby Schools</h3>
              <p className="text-gray-600 text-sm">Find schools in your area with advanced location-based search</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real Parent Reviews</h3>
              <p className="text-gray-600 text-sm">Read authentic reviews from real parents in your community</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Compare Everything</h3>
              <p className="text-gray-600 text-sm">Compare fees, curriculum, and facilities side-by-side</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-6 text-center text-sm text-gray-500">
        <p>By continuing, you agree to our Terms of Service and Privacy Policy</p>
      </footer>
    </div>
  )
}
