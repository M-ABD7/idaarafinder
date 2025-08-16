"use client"

import {
  ArrowLeft,
  BookOpen,
  Star,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Bus,
  Users,
  DollarSign,
  CheckCircle,
  XCircle,
  Heart,
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface SchoolDetailScreenProps {
  schoolId: number
  onBackToSchools: () => void
  onCompareToggle: (schoolId: number) => void
  compareList: number[]
}

// Extended school data with detailed information
const schoolsDetailData = {
  1: {
    id: 1,
    name: "Beaconhouse School System",
    location: "Gulshan-e-Iqbal",
    address: "Plot No. 123, Block 15, Gulshan-e-Iqbal, Karachi, Pakistan",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.8,
    reviews: 245,
    established: 1975,
    students: 1200,
    description:
      "Premier educational institution in Gulshan offering world-class education with modern facilities and a commitment to excellence in academics and character development.",

    curriculum: {
      primary: ["Cambridge Primary", "Local Curriculum"],
      secondary: ["Cambridge IGCSE", "Matriculation"],
      advanced: ["Cambridge A-Levels", "FSc Pre-Engineering", "FSc Pre-Medical"],
    },

    feeStructure: {
      admission: "PKR 15,000",
      monthly: {
        nursery: "PKR 18,000",
        primary: "PKR 22,000",
        middle: "PKR 26,000",
        secondary: "PKR 30,000",
        aLevels: "PKR 35,000",
      },
      annual: {
        books: "PKR 8,000",
        uniform: "PKR 5,000",
        activities: "PKR 3,000",
        transport: "PKR 12,000",
      },
    },

    facilities: [
      "Modern Science Laboratories",
      "Computer Lab with Latest Technology",
      "Well-Stocked Library",
      "Sports Complex with Swimming Pool",
      "Art & Music Studios",
      "Cafeteria with Healthy Meals",
      "Medical Room with Qualified Nurse",
      "Air-Conditioned Classrooms",
      "Prayer Room",
      "Playground & Sports Fields",
    ],

    timings: {
      morning: "8:00 AM - 2:00 PM",
      afternoon: "2:30 PM - 6:30 PM (A-Levels only)",
    },

    transport: {
      available: true,
      routes: ["Gulshan", "Johar", "PECHS", "DHA", "Clifton"],
      fee: "PKR 8,000 - 12,000/month",
    },

    contact: {
      phone: "+92-21-34982345",
      email: "info@beaconhouse-gulshan.edu.pk",
      website: "www.beaconhouse.net",
    },

    admissionRequirements: [
      "Birth Certificate",
      "Previous School Leaving Certificate",
      "Medical Certificate",
      "Passport Size Photographs",
      "Entrance Test (for Middle & Secondary)",
      "Parent Interview",
    ],

    pros: [
      "Excellent Cambridge curriculum",
      "Modern facilities and infrastructure",
      "Strong extracurricular activities",
      "Experienced and qualified faculty",
      "Good transport system",
      "Strong alumni network",
    ],

    cons: [
      "Higher fees compared to local schools",
      "Competitive admission process",
      "Large class sizes in some sections",
      "Limited parking space",
    ],
  },

  2: {
    id: 2,
    name: "The City School",
    location: "Johar Town",
    address: "Block 7, Johar Town, Karachi, Pakistan",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.6,
    reviews: 189,
    established: 1978,
    students: 950,
    description:
      "Comprehensive education system focusing on academic excellence, character building, and Islamic values integration.",

    curriculum: {
      primary: ["Cambridge Primary", "Islamic Studies"],
      secondary: ["Cambridge IGCSE", "Matriculation", "Islamic Studies"],
      advanced: ["Cambridge A-Levels", "FSc", "Islamic Studies"],
    },

    feeStructure: {
      admission: "PKR 12,000",
      monthly: {
        nursery: "PKR 15,000",
        primary: "PKR 18,000",
        middle: "PKR 22,000",
        secondary: "PKR 25,000",
        aLevels: "PKR 30,000",
      },
      annual: {
        books: "PKR 6,000",
        uniform: "PKR 4,000",
        activities: "PKR 2,500",
        transport: "PKR 10,000",
      },
    },

    facilities: [
      "Science Laboratories",
      "Computer Lab",
      "Library with Islamic Collection",
      "Prayer Hall",
      "Sports Ground",
      "Art Room",
      "Cafeteria",
      "Medical Room",
      "Air-Conditioned Classrooms",
    ],

    timings: {
      morning: "7:45 AM - 1:45 PM",
      afternoon: "Not Available",
    },

    transport: {
      available: true,
      routes: ["Johar", "Gulshan", "Malir", "Korangi"],
      fee: "PKR 7,000 - 10,000/month",
    },

    contact: {
      phone: "+92-21-34567890",
      email: "info@thecityschool-johar.edu.pk",
      website: "www.thecityschool.edu.pk",
    },

    admissionRequirements: [
      "Birth Certificate",
      "Previous Academic Records",
      "Medical Certificate",
      "Photographs",
      "Entrance Assessment",
      "Parent Meeting",
    ],

    pros: [
      "Balanced curriculum with Islamic values",
      "Good transport system",
      "Affordable fees",
      "Strong discipline and character building",
      "Qualified teaching staff",
    ],

    cons: [
      "Limited sports facilities",
      "Older infrastructure in some areas",
      "Strict discipline policy",
      "Limited extracurricular activities",
    ],
  },
  3: {
    id: 3,
    name: "Foundation Public School - Gulshan Campus",
    location: "Gulshan-e-Iqbal",
    address: "Block 15, Gulshan-e-Iqbal, Karachi, Pakistan",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.4,
    reviews: 156,
    established: 1985,
    students: 800,
    description:
      "Quality education with focus on character development and academic excellence in the heart of Gulshan.",

    curriculum: {
      primary: ["Cambridge Primary", "Local Curriculum"],
      secondary: ["Cambridge IGCSE", "Matriculation"],
      advanced: ["Cambridge A-Levels", "FSc"],
    },

    feeStructure: {
      admission: "PKR 10,000",
      monthly: {
        nursery: "PKR 12,000",
        primary: "PKR 15,000",
        middle: "PKR 18,000",
        secondary: "PKR 22,000",
        aLevels: "PKR 25,000",
      },
      annual: {
        books: "PKR 5,000",
        uniform: "PKR 3,500",
        activities: "PKR 2,000",
        transport: "PKR 8,000",
      },
    },

    facilities: [
      "Science Laboratories",
      "Computer Lab",
      "Library",
      "Sports Ground",
      "Prayer Room",
      "Cafeteria",
      "Medical Room",
      "Air-Conditioned Classrooms",
    ],

    timings: {
      morning: "8:00 AM - 2:00 PM",
      afternoon: "Not Available",
    },

    transport: {
      available: true,
      routes: ["Gulshan", "Johar", "North Nazimabad"],
      fee: "PKR 6,000 - 8,000/month",
    },

    contact: {
      phone: "+92-21-34123456",
      email: "info@foundation-gulshan.edu.pk",
      website: "www.foundationpublic.edu.pk",
    },

    admissionRequirements: [
      "Birth Certificate",
      "Previous School Records",
      "Medical Certificate",
      "Photographs",
      "Entrance Test",
      "Parent Interview",
    ],

    pros: [
      "Good academic standards",
      "Affordable fees",
      "Strong discipline",
      "Character development focus",
      "Experienced teachers",
    ],

    cons: ["Limited modern facilities", "Basic infrastructure", "Limited extracurricular activities"],
  },

  6: {
    id: 6,
    name: "Karachi Grammar School",
    location: "DHA Phase 1",
    address: "3-Depot Lines, Mansfield Street, Saddar, Karachi, Pakistan",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.9,
    reviews: 312,
    established: 1847,
    students: 1500,
    description:
      "Historic institution known for academic excellence, leadership development, and producing notable alumni.",

    curriculum: {
      primary: ["Cambridge Primary"],
      secondary: ["Cambridge IGCSE"],
      advanced: ["Cambridge A-Levels"],
    },

    feeStructure: {
      admission: "PKR 25,000",
      monthly: {
        nursery: "PKR 35,000",
        primary: "PKR 40,000",
        middle: "PKR 45,000",
        secondary: "PKR 50,000",
        aLevels: "PKR 65,000",
      },
      annual: {
        books: "PKR 12,000",
        uniform: "PKR 8,000",
        activities: "PKR 5,000",
        transport: "PKR 15,000",
      },
    },

    facilities: [
      "State-of-the-art Science Laboratories",
      "Modern Computer Labs",
      "Extensive Library",
      "Swimming Pool",
      "Sports Complex",
      "Drama Theatre",
      "Art Studios",
      "Music Rooms",
      "Cafeteria",
      "Medical Center",
    ],

    timings: {
      morning: "7:45 AM - 2:15 PM",
      afternoon: "Not Available",
    },

    transport: {
      available: true,
      routes: ["DHA", "Clifton", "PECHS", "Gulshan", "North Nazimabad"],
      fee: "PKR 12,000 - 15,000/month",
    },

    contact: {
      phone: "+92-21-32278081",
      email: "info@kgs.edu.pk",
      website: "www.kgs.edu.pk",
    },

    admissionRequirements: [
      "Birth Certificate",
      "Academic Transcripts",
      "Medical Certificate",
      "Photographs",
      "Entrance Examination",
      "Interview (Student & Parents)",
      "Character Certificate",
    ],

    pros: [
      "Prestigious reputation",
      "Excellent academic results",
      "Strong alumni network",
      "Premium facilities",
      "International recognition",
      "Leadership development",
    ],

    cons: [
      "Very expensive fees",
      "Highly competitive admission",
      "Elitist environment",
      "Limited scholarships",
      "High academic pressure",
    ],
  },
}

export default function SchoolDetailScreen({
  schoolId,
  onBackToSchools,
  onCompareToggle,
  compareList,
}: SchoolDetailScreenProps) {
  const school = schoolsDetailData[schoolId as keyof typeof schoolsDetailData]

  if (!school) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">School not found</h2>
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
                <span className="text-xl font-bold text-gray-900">School Details</span>
              </div>
            </div>
            <Button
              variant={compareList.includes(school.id) ? "default" : "outline"}
              onClick={() => onCompareToggle(school.id)}
              className="flex items-center gap-2"
            >
              <Heart className={`w-4 h-4 ${compareList.includes(school.id) ? "fill-current" : ""}`} />
              {compareList.includes(school.id) ? "Added to Compare" : "Add to Compare"}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src={school.image || "/placeholder.svg"}
                alt={school.name}
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{school.name}</h1>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="w-5 h-5" />
                  <span>{school.address}</span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{school.rating}</span>
                    <span className="text-gray-500">({school.reviews} reviews)</span>
                  </div>
                  <Badge variant="secondary">Est. {school.established}</Badge>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{school.description}</p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">{school.students} Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className="text-sm">{school.timings.morning}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="fees">Fees</TabsTrigger>
            <TabsTrigger value="facilities">Facilities</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Pros & Cons */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Advantages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {school.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    Considerations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {school.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{con}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Admission Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Admission Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {school.admissionRequirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Curriculum Tab */}
          <TabsContent value="curriculum" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Primary Level</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {school.curriculum.primary.map((curr, index) => (
                      <Badge key={index} variant="outline" className="block w-fit">
                        {curr}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Secondary Level</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {school.curriculum.secondary.map((curr, index) => (
                      <Badge key={index} variant="outline" className="block w-fit">
                        {curr}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Advanced Level</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {school.curriculum.advanced.map((curr, index) => (
                      <Badge key={index} variant="outline" className="block w-fit">
                        {curr}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Fees Tab */}
          <TabsContent value="fees" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Monthly Fees */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    Monthly Tuition Fees
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(school.feeStructure.monthly).map(([level, fee]) => (
                      <div key={level} className="flex justify-between items-center">
                        <span className="capitalize font-medium">{level}</span>
                        <span className="text-green-600 font-semibold">{fee}</span>
                      </div>
                    ))}
                  </div>
                  <Separator className="my-4" />
                  <div className="flex justify-between items-center font-semibold">
                    <span>Admission Fee</span>
                    <span className="text-blue-600">{school.feeStructure.admission}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Annual Fees */}
              <Card>
                <CardHeader>
                  <CardTitle>Annual Additional Costs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(school.feeStructure.annual).map(([item, fee]) => (
                      <div key={item} className="flex justify-between items-center">
                        <span className="capitalize">{item}</span>
                        <span className="font-semibold">{fee}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Facilities Tab */}
          <TabsContent value="facilities" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>School Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {school.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{facility}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Transport Information */}
            {school.transport.available && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bus className="w-5 h-5 text-blue-600" />
                    Transport Service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Available Routes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {school.transport.routes.map((route, index) => (
                          <Badge key={index} variant="secondary">
                            {route}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="font-medium">Transport Fee: </span>
                      <span className="text-green-600">{school.transport.fee}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">{school.contact.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">{school.contact.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="font-medium">Website</p>
                      <p className="text-gray-600">{school.contact.website}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-600 mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">{school.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* School Timings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    School Timings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium">Morning Session</p>
                    <p className="text-gray-600">{school.timings.morning}</p>
                  </div>
                  {school.timings.afternoon !== "Not Available" && (
                    <div>
                      <p className="font-medium">Afternoon Session</p>
                      <p className="text-gray-600">{school.timings.afternoon}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="w-4 h-4 mr-2" />
                Call School
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="w-4 h-4 mr-2" />
                Send Inquiry
              </Button>
              <Button size="lg" variant="outline">
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
