"use client"

import { ArrowLeft, Star, MapPin, BookOpen, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

interface ComparisonScreenProps {
  compareList: number[]
  onBackToSchools: () => void
  onClearComparison: () => void
}

// Mock schools data (same as in schools-screen)
const allSchools = [
  {
    id: 1,
    name: "Beaconhouse School System",
    location: "Gulshan-e-Iqbal",
    distance: 2.3,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    reviews: 245,
    curriculum: ["Cambridge", "Matric"],
    fees: "PKR 25,000-35,000/month",
    established: 1975,
    students: 1200,
    features: ["Co-Education", "Transport", "Cafeteria", "Sports Complex"],
    pros: [
      "Excellent Cambridge curriculum",
      "Modern facilities",
      "Strong extracurricular activities",
      "Experienced faculty",
    ],
    cons: ["Higher fees", "Competitive admission", "Large class sizes"],
  },
  {
    id: 2,
    name: "The City School",
    location: "Johar Town",
    distance: 4.1,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    reviews: 189,
    curriculum: ["Cambridge", "Islamic Studies"],
    fees: "PKR 20,000-30,000/month",
    established: 1978,
    students: 950,
    features: ["Co-Education", "Transport", "Library", "Computer Lab"],
    pros: ["Balanced curriculum", "Good transport system", "Islamic values integration", "Affordable fees"],
    cons: ["Limited sports facilities", "Older infrastructure", "Strict discipline policy"],
  },
  {
    id: 3,
    name: "Karachi Grammar School",
    location: "PECHS",
    distance: 6.2,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    reviews: 156,
    curriculum: ["Cambridge"],
    fees: "PKR 45,000-60,000/month",
    established: 1847,
    students: 800,
    features: ["Co-Education", "Transport", "Science Labs", "Swimming Pool"],
    pros: ["Prestigious reputation", "Excellent academic results", "Strong alumni network", "Premium facilities"],
    cons: ["Very expensive", "Highly competitive", "Elitist environment", "Limited scholarships"],
  },
]

export default function ComparisonScreen({ compareList, onBackToSchools, onClearComparison }: ComparisonScreenProps) {
  const selectedSchools = allSchools.filter((school) => compareList.includes(school.id))

  if (selectedSchools.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No schools selected for comparison</h2>
          <Button onClick={onBackToSchools}>Back to Schools</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={onBackToSchools}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">School Comparison</span>
              </div>
            </div>
            <Button variant="outline" onClick={onClearComparison}>
              Clear All
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Compare Schools</h1>
          <p className="text-gray-600">Side-by-side comparison of {selectedSchools.length} selected schools</p>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden lg:block">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-cols-4 gap-0">
              {/* Header Column */}
              <div className="bg-gray-50 p-6 border-r">
                <div className="space-y-8">
                  <div className="h-48"></div> {/* Space for images */}
                  <div className="space-y-6">
                    <h3 className="font-semibold text-gray-900">Basic Info</h3>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600">Rating</p>
                      <p className="text-sm text-gray-600">Distance</p>
                      <p className="text-sm text-gray-600">Fees</p>
                      <p className="text-sm text-gray-600">Students</p>
                      <p className="text-sm text-gray-600">Established</p>
                    </div>
                    <h3 className="font-semibold text-gray-900 pt-4">Curriculum</h3>
                    <h3 className="font-semibold text-gray-900 pt-4">Pros</h3>
                    <h3 className="font-semibold text-gray-900 pt-4">Cons</h3>
                  </div>
                </div>
              </div>

              {/* School Columns */}
              {selectedSchools.map((school, index) => (
                <div key={school.id} className={`p-6 ${index < selectedSchools.length - 1 ? "border-r" : ""}`}>
                  <div className="space-y-8">
                    {/* School Image and Name */}
                    <div>
                      <Image
                        src={school.image || "/placeholder.svg"}
                        alt={school.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h3 className="font-bold text-lg text-gray-900">{school.name}</h3>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {school.location}
                      </p>
                    </div>

                    {/* Basic Info */}
                    <div className="space-y-6">
                      <div></div> {/* Space for "Basic Info" header */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{school.rating}</span>
                          <span className="text-sm text-gray-500">({school.reviews})</span>
                        </div>
                        <p className="text-sm font-medium text-green-600">{school.distance} km away</p>
                        <p className="text-sm font-medium">{school.fees}</p>
                        <p className="text-sm">{school.students} students</p>
                        <p className="text-sm">{school.established}</p>
                      </div>
                      {/* Curriculum */}
                      <div className="pt-4">
                        <div className="flex flex-wrap gap-1">
                          {school.curriculum.map((curr) => (
                            <Badge key={curr} variant="secondary" className="text-xs">
                              {curr}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      {/* Pros */}
                      <div className="pt-4">
                        <div className="space-y-2">
                          {school.pros.map((pro, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{pro}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Cons */}
                      <div className="pt-4">
                        <div className="space-y-2">
                          {school.cons.map((con, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{con}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Comparison Cards */}
        <div className="lg:hidden space-y-6">
          {selectedSchools.map((school) => (
            <Card key={school.id} className="overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <Image
                    src={school.image || "/placeholder.svg"}
                    alt={school.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-lg">{school.name}</CardTitle>
                    <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                      <MapPin className="w-4 h-4" />
                      {school.location} • {school.distance} km away
                    </p>
                    <div className="flex items-center gap-1 mt-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{school.rating}</span>
                      <span className="text-sm text-gray-500">({school.reviews})</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Basic Info */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Basic Information</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Fees:</span>
                      <p className="font-medium">{school.fees}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Students:</span>
                      <p className="font-medium">{school.students}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Established:</span>
                      <p className="font-medium">{school.established}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Curriculum:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {school.curriculum.map((curr) => (
                          <Badge key={curr} variant="secondary" className="text-xs">
                            {curr}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Pros */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Advantages
                  </h4>
                  <div className="space-y-2">
                    {school.pros.map((pro, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{pro}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Cons */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    Considerations
                  </h4>
                  <div className="space-y-2">
                    {school.cons.map((con, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{con}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Contact Selected Schools
          </Button>
          <Button size="lg" variant="outline" onClick={onBackToSchools}>
            Continue Browsing
          </Button>
        </div>
      </main>
    </div>
  )
}
