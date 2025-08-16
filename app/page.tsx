"use client"

import { useState } from "react"
import LocationScreen from "./components/location-screen"
import SchoolsScreen from "./components/schools-screen"
import ComparisonScreen from "./components/comparison-screen"
import ReviewsScreen from "./components/reviews-screen"
import SchoolDetailScreen from "./components/school-detail-screen"

// Comprehensive schools data for Karachi
const schools: School[] = [
  // Gulshan-e-Iqbal Schools
  {
    id: 1,
    name: "The City School - Gulshan Campus A",
    location: "Gulshan-e-Iqbal",
    area: "Gulshan-e-Iqbal",
    distance: 1.2,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    reviews: 189,
    curriculum: ["Cambridge", "Islamic Studies"],
    fees: "PKR 20,000-30,000/month",
    established: 1978,
    students: 950,
    features: ["Co-Education", "Transport", "Library", "Computer Lab"],
    description: "Comprehensive education system in Gulshan focusing on academic excellence and character building.",
    coordinates: { lat: 24.9265, lng: 67.148 },
    pros: ["Balanced curriculum", "Good transport system", "Islamic values integration"],
    cons: ["Limited sports facilities", "Older infrastructure"],
  },
  {
    id: 2,
    name: "Beaconhouse School System - Gulshan Primary",
    location: "Gulshan-e-Iqbal",
    area: "Gulshan-e-Iqbal",
    distance: 1.8,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    reviews: 245,
    curriculum: ["Cambridge", "Matric"],
    fees: "PKR 25,000-35,000/month",
    established: 1975,
    students: 1200,
    features: ["Co-Education", "Transport", "Cafeteria", "Sports Complex"],
    description: "Premier educational institution offering world-class education with modern facilities.",
    coordinates: { lat: 24.9056, lng: 67.0822 },
    pros: ["Excellent Cambridge curriculum", "Modern facilities", "Strong extracurricular activities"],
    cons: ["Higher fees", "Competitive admission", "Large class sizes"],
  },
  {
    id: 3,
    name: "Foundation Public School - Gulshan Campus",
    location: "Gulshan-e-Iqbal",
    area: "Gulshan-e-Iqbal",
    distance: 2.1,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.4,
    reviews: 156,
    curriculum: ["Cambridge", "Matric"],
    fees: "PKR 18,000-25,000/month",
    established: 1985,
    students: 800,
    features: ["Co-Education", "Transport", "Science Labs", "Library"],
    description: "Quality education with focus on character development and academic excellence.",
    coordinates: { lat: 24.9156, lng: 67.0922 },
    pros: ["Good academic standards", "Affordable fees", "Strong discipline"],
    cons: ["Limited facilities", "Basic infrastructure"],
  },
  {
    id: 4,
    name: "Karachi Public School - Gulshan Campus",
    location: "Gulshan-e-Iqbal",
    area: "Gulshan-e-Iqbal",
    distance: 2.3,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.3,
    reviews: 134,
    curriculum: ["Matric", "Islamic Studies"],
    fees: "PKR 15,000-22,000/month",
    established: 1960,
    students: 750,
    features: ["Co-Education", "Transport", "Computer Lab", "Prayer Room"],
    description: "Established institution providing quality education with Islamic values.",
    coordinates: { lat: 24.9256, lng: 67.0722 },
    pros: ["Strong Islamic values", "Experienced faculty", "Good discipline"],
    cons: ["Traditional teaching methods", "Limited modern facilities"],
  },
  {
    id: 5,
    name: "Generation's School - North Campus",
    location: "Gulshan-e-Iqbal",
    area: "Gulshan-e-Iqbal",
    distance: 2.5,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.2,
    reviews: 98,
    curriculum: ["Cambridge", "Matric"],
    fees: "PKR 16,000-24,000/month",
    established: 1995,
    students: 650,
    features: ["Co-Education", "Transport", "Art Studio", "Computer Lab"],
    description: "Modern school focusing on creative learning and skill development.",
    coordinates: { lat: 24.9356, lng: 67.0822 },
    pros: ["Creative teaching methods", "Small class sizes", "Individual attention"],
    cons: ["Newer establishment", "Limited alumni network"],
  },

  // DHA Schools
  {
    id: 6,
    name: "Karachi Grammar School",
    location: "DHA Phase 1",
    area: "DHA",
    distance: 8.2,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    reviews: 312,
    curriculum: ["Cambridge"],
    fees: "PKR 45,000-65,000/month",
    established: 1847,
    students: 1500,
    features: ["Co-Education", "Transport", "Swimming Pool", "Science Labs"],
    description: "Historic institution known for academic excellence and leadership development.",
    coordinates: { lat: 24.8138, lng: 67.0299 },
    pros: ["Prestigious reputation", "Excellent academic results", "Strong alumni network"],
    cons: ["Very expensive", "Highly competitive", "Elitist environment"],
  },
  {
    id: 7,
    name: "The City School - DHA Phase 5",
    location: "DHA Phase 5",
    area: "DHA",
    distance: 7.8,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    reviews: 234,
    curriculum: ["Cambridge", "Islamic Studies"],
    fees: "PKR 28,000-38,000/month",
    established: 1978,
    students: 1100,
    features: ["Co-Education", "Transport", "Sports Complex", "Library"],
    description: "Premium campus offering comprehensive education with modern facilities.",
    coordinates: { lat: 24.8059, lng: 67.0734 },
    pros: ["Excellent facilities", "Strong curriculum", "Good transport"],
    cons: ["High fees", "Competitive environment"],
  },
  {
    id: 8,
    name: "Bay View Academy",
    location: "DHA Phase 8",
    area: "DHA",
    distance: 9.1,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    reviews: 187,
    curriculum: ["Cambridge"],
    fees: "PKR 35,000-50,000/month",
    established: 1990,
    students: 900,
    features: ["Co-Education", "Transport", "Modern Labs", "Cafeteria"],
    description: "Premium institution focusing on Cambridge education with international standards.",
    coordinates: { lat: 24.7959, lng: 67.0634 },
    pros: ["International standards", "Modern facilities", "Small class sizes"],
    cons: ["Expensive fees", "Limited scholarships"],
  },
  {
    id: 9,
    name: "British Overseas School",
    location: "DHA Phase 6",
    area: "DHA",
    distance: 8.7,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    reviews: 156,
    curriculum: ["Cambridge", "British Curriculum"],
    fees: "PKR 55,000-75,000/month",
    established: 2005,
    students: 600,
    features: ["Co-Education", "Transport", "Swimming Pool", "Drama Studio"],
    description: "International school offering British curriculum with world-class facilities.",
    coordinates: { lat: 24.8159, lng: 67.0534 },
    pros: ["International curriculum", "Excellent facilities", "Qualified expat teachers"],
    cons: ["Very expensive", "Limited local cultural integration"],
  },
  {
    id: 10,
    name: "The Lyceum School",
    location: "DHA Phase 6",
    area: "DHA",
    distance: 8.9,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    reviews: 143,
    curriculum: ["Cambridge"],
    fees: "PKR 32,000-45,000/month",
    established: 1987,
    students: 750,
    features: ["Co-Education", "Transport", "Science Labs", "Art Studio"],
    description: "Well-established school known for academic rigor and extracurricular activities.",
    coordinates: { lat: 24.8259, lng: 67.0434 },
    pros: ["Strong academics", "Good extracurriculars", "Experienced faculty"],
    cons: ["High fees", "Strict discipline"],
  },

  // North Nazimabad Schools
  {
    id: 11,
    name: "The City School - North Nazimabad",
    location: "North Nazimabad",
    area: "North Nazimabad",
    distance: 5.2,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.4,
    reviews: 178,
    curriculum: ["Cambridge", "Islamic Studies"],
    fees: "PKR 22,000-32,000/month",
    established: 1978,
    students: 1000,
    features: ["Co-Education", "Transport", "Library", "Sports Ground"],
    description: "Established campus providing quality education with Islamic values integration.",
    coordinates: { lat: 24.9265, lng: 67.0362 },
    pros: ["Good transport system", "Islamic values", "Affordable fees"],
    cons: ["Older infrastructure", "Limited modern facilities"],
  },
  {
    id: 12,
    name: "St. Patrick's High School",
    location: "North Nazimabad",
    area: "North Nazimabad",
    distance: 5.8,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    reviews: 298,
    curriculum: ["Matric", "Islamic Studies"],
    fees: "PKR 8,000-15,000/month",
    established: 1861,
    students: 1100,
    features: ["Boys Only", "Chapel", "Sports Ground", "Computer Lab"],
    description: "Historic boys' school with strong tradition of academic and moral education.",
    coordinates: { lat: 24.8615, lng: 67.0099 },
    pros: ["Very affordable", "Strong discipline", "Historic reputation"],
    cons: ["Boys only", "Old infrastructure", "Limited modern facilities"],
  },
  {
    id: 13,
    name: "BVS Parsi High School",
    location: "North Nazimabad",
    area: "North Nazimabad",
    distance: 6.1,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.3,
    reviews: 145,
    curriculum: ["Matric", "Cambridge"],
    fees: "PKR 12,000-20,000/month",
    established: 1919,
    students: 800,
    features: ["Co-Education", "Library", "Science Labs", "Computer Lab"],
    description: "Community school known for quality education and strong values.",
    coordinates: { lat: 24.9165, lng: 67.0262 },
    pros: ["Community values", "Good academics", "Affordable fees"],
    cons: ["Limited facilities", "Small campus"],
  },
  {
    id: 14,
    name: "Allied School - North Nazimabad",
    location: "North Nazimabad",
    area: "North Nazimabad",
    distance: 5.5,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.1,
    reviews: 112,
    curriculum: ["Cambridge", "Matric"],
    fees: "PKR 14,000-22,000/month",
    established: 2000,
    students: 650,
    features: ["Co-Education", "Transport", "Computer Lab", "Library"],
    description: "Growing school network focusing on modern education methods.",
    coordinates: { lat: 24.9365, lng: 67.0462 },
    pros: ["Modern teaching methods", "Good facilities", "Reasonable fees"],
    cons: ["Newer establishment", "Limited track record"],
  },

  // Gulistan-e-Johar Schools
  {
    id: 15,
    name: "The City School - Gulistan-e-Johar",
    location: "Gulistan-e-Johar",
    area: "Gulistan-e-Johar",
    distance: 4.8,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.3,
    reviews: 167,
    curriculum: ["Cambridge", "Islamic Studies"],
    fees: "PKR 20,000-28,000/month",
    established: 1978,
    students: 900,
    features: ["Co-Education", "Transport", "Library", "Computer Lab"],
    description: "Well-established campus serving the Johar community with quality education.",
    coordinates: { lat: 24.9165, lng: 67.138 },
    pros: ["Good reputation", "Strong curriculum", "Community focus"],
    cons: ["Limited parking", "Crowded area"],
  },
  {
    id: 16,
    name: "The Smart School - Gulistan-e-Johar",
    location: "Gulistan-e-Johar",
    area: "Gulistan-e-Johar",
    distance: 4.5,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.2,
    reviews: 134,
    curriculum: ["Cambridge", "Matric"],
    fees: "PKR 16,000-24,000/month",
    established: 1995,
    students: 700,
    features: ["Co-Education", "Transport", "Smart Boards", "Computer Lab"],
    description: "Technology-focused school emphasizing modern learning methods.",
    coordinates: { lat: 24.9065, lng: 67.128 },
    pros: ["Technology integration", "Modern facilities", "Good teaching"],
    cons: ["Higher fees for area", "Limited sports facilities"],
  },
  {
    id: 17,
    name: "AES School for Girls",
    location: "Gulistan-e-Johar",
    area: "Gulistan-e-Johar",
    distance: 4.9,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.4,
    reviews: 89,
    curriculum: ["Cambridge", "Matric"],
    fees: "PKR 15,000-22,000/month",
    established: 1988,
    students: 550,
    features: ["Girls Only", "Transport", "Science Labs", "Art Studio"],
    description: "Dedicated girls' school focusing on empowering young women through education.",
    coordinates: { lat: 24.9265, lng: 67.148 },
    pros: ["Girls-focused education", "Safe environment", "Good academics"],
    cons: ["Girls only", "Limited co-curricular activities"],
  },
  {
    id: 18,
    name: "Pak-Turk Maarif International School",
    location: "Gulistan-e-Johar",
    area: "Gulistan-e-Johar",
    distance: 5.2,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.1,
    reviews: 76,
    curriculum: ["Cambridge", "Turkish Curriculum"],
    fees: "PKR 18,000-26,000/month",
    established: 2010,
    students: 450,
    features: ["Co-Education", "Transport", "Language Lab", "Science Labs"],
    description: "International school offering multicultural education with Turkish influence.",
    coordinates: { lat: 24.9365, lng: 67.158 },
    pros: ["International exposure", "Language focus", "Modern curriculum"],
    cons: ["Newer establishment", "Limited local integration"],
  },

  // Malir / Shah Faisal Colony Schools
  {
    id: 19,
    name: "Army Public School & College - Malir Cantt",
    location: "Malir Cantonment",
    area: "Malir",
    distance: 12.5,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    reviews: 203,
    curriculum: ["Cambridge", "Matric"],
    fees: "PKR 12,000-20,000/month",
    established: 1965,
    students: 1200,
    features: ["Co-Education", "Transport", "Sports Complex", "Science Labs"],
    description: "Military-run institution known for discipline and academic excellence.",
    coordinates: { lat: 24.8968, lng: 67.2097 },
    pros: ["Strong discipline", "Good facilities", "Affordable fees"],
    cons: ["Military environment", "Strict rules", "Far from city center"],
  },
  {
    id: 20,
    name: "Fauji Foundation Model School - Malir",
    location: "Malir",
    area: "Malir",
    distance: 12.8,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.4,
    reviews: 156,
    curriculum: ["Cambridge", "Matric"],
    fees: "PKR 10,000-18,000/month",
    established: 1970,
    students: 950,
    features: ["Co-Education", "Transport", "Library", "Computer Lab"],
    description: "Foundation-run school providing quality education at affordable rates.",
    coordinates: { lat: 24.8868, lng: 67.1997 },
    pros: ["Affordable fees", "Good academics", "Strong values"],
    cons: ["Limited modern facilities", "Far location"],
  },
  {
    id: 21,
    name: "Habib Public School - Malir",
    location: "Malir",
    area: "Malir",
    distance: 13.1,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.2,
    reviews: 134,
    curriculum: ["Matric", "Islamic Studies"],
    fees: "PKR 8,000-14,000/month",
    established: 1957,
    students: 800,
    features: ["Co-Education", "Transport", "Library", "Prayer Room"],
    description: "Community school serving Malir area with affordable quality education.",
    coordinates: { lat: 24.9068, lng: 67.2197 },
    pros: ["Very affordable", "Community focus", "Islamic values"],
    cons: ["Basic facilities", "Limited resources"],
  },

  // Saddar / Clifton Schools
  {
    id: 22,
    name: "Convent of Jesus & Mary",
    location: "Clifton",
    area: "Clifton",
    distance: 10.2,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    reviews: 234,
    curriculum: ["Cambridge", "Matric"],
    fees: "PKR 25,000-35,000/month",
    established: 1862,
    students: 1100,
    features: ["Girls Only", "Transport", "Chapel", "Science Labs"],
    description: "Historic convent school known for academic excellence and character formation.",
    coordinates: { lat: 24.8138, lng: 67.0299 },
    pros: ["Excellent reputation", "Strong academics", "Character development"],
    cons: ["Girls only", "High fees", "Strict discipline"],
  },
  {
    id: 23,
    name: "St. Joseph's Convent School",
    location: "Saddar",
    area: "Saddar",
    distance: 11.5,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    reviews: 198,
    curriculum: ["Cambridge", "Matric"],
    fees: "PKR 22,000-32,000/month",
    established: 1870,
    students: 950,
    features: ["Girls Only", "Transport", "Chapel", "Library"],
    description: "Prestigious convent school with long tradition of educating young women.",
    coordinates: { lat: 24.8615, lng: 67.0099 },
    pros: ["Historic reputation", "Strong values", "Good academics"],
    cons: ["Girls only", "Old building", "Limited modern facilities"],
  },
  {
    id: 24,
    name: "Mama Parsi Girls Secondary School",
    location: "Saddar",
    area: "Saddar",
    distance: 11.8,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    reviews: 167,
    curriculum: ["Matric", "Cambridge"],
    fees: "PKR 15,000-25,000/month",
    established: 1919,
    students: 900,
    features: ["Girls Only", "Library", "Science Labs", "Art Studio"],
    description: "Community school emphasizing holistic education and character development.",
    coordinates: { lat: 24.8515, lng: 67.0199 },
    pros: ["Community values", "Holistic education", "Good reputation"],
    cons: ["Girls only", "Limited facilities", "Old infrastructure"],
  },
  {
    id: 25,
    name: "Habib Public School - Main Campus",
    location: "Saddar",
    area: "Saddar",
    distance: 12.0,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.4,
    reviews: 189,
    curriculum: ["Matric", "Islamic Studies"],
    fees: "PKR 10,000-18,000/month",
    established: 1957,
    students: 1000,
    features: ["Co-Education", "Transport", "Library", "Sports Ground"],
    description: "Well-established school providing quality education with Islamic values.",
    coordinates: { lat: 24.8715, lng: 67.0299 },
    pros: ["Affordable fees", "Islamic values", "Good reputation"],
    cons: ["Basic facilities", "Traditional methods", "Crowded area"],
  },
]

export type UserLocation = {
  area: string
  coordinates?: { lat: number; lng: number }
  address?: string
}

export type School = {
  id: number
  name: string
  location: string
  area: string
  distance: number
  image: string
  rating: number
  reviews: number
  curriculum: string[]
  fees: string
  established: number
  students: number
  features: string[]
  description: string
  coordinates: { lat: number; lng: number }
  pros: string[]
  cons: string[]
}

export default function IdaraFinder() {
  const [currentScreen, setCurrentScreen] = useState<
    "location" | "schools" | "comparison" | "reviews" | "schoolDetail"
  >("location")
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null)
  const [compareList, setCompareList] = useState<number[]>([])
  const [selectedSchoolId, setSelectedSchoolId] = useState<number | null>(null)

  const handleLocationSelect = (location: UserLocation) => {
    setUserLocation(location)
    setCurrentScreen("schools")
  }

  const handleCompareToggle = (schoolId: number) => {
    setCompareList((prev) =>
      prev.includes(schoolId) ? prev.filter((id) => id !== schoolId) : prev.length < 3 ? [...prev, schoolId] : prev,
    )
  }

  const handleViewComparison = () => {
    setCurrentScreen("comparison")
  }

  const handleViewReviews = () => {
    setCurrentScreen("reviews")
  }

  const handleViewSchools = () => {
    setCurrentScreen("schools")
  }

  const handleBackToSchools = () => {
    setCurrentScreen("schools")
  }

  const handleChangeLocation = () => {
    setCurrentScreen("location")
    setUserLocation(null)
    setCompareList([])
  }

  const handleViewSchoolDetail = (schoolId: number) => {
    setSelectedSchoolId(schoolId)
    setCurrentScreen("schoolDetail")
  }

  const handleBackFromDetail = () => {
    setSelectedSchoolId(null)
    setCurrentScreen("schools")
  }

  return (
    <div className="min-h-screen">
      {currentScreen === "location" && <LocationScreen onLocationSelect={handleLocationSelect} />}

      {currentScreen === "schools" && userLocation && (
        <SchoolsScreen
          userLocation={userLocation}
          compareList={compareList}
          onCompareToggle={handleCompareToggle}
          onViewComparison={handleViewComparison}
          onViewReviews={handleViewReviews}
          onViewSchools={handleViewSchools}
          onViewSchoolDetail={handleViewSchoolDetail}
          onChangeLocation={handleChangeLocation}
        />
      )}

      {currentScreen === "reviews" && (
        <ReviewsScreen
          onViewSchools={handleViewSchools}
          onViewComparison={handleViewComparison}
          onChangeLocation={handleChangeLocation}
        />
      )}

      {currentScreen === "comparison" && (
        <ComparisonScreen
          compareList={compareList}
          onBackToSchools={handleBackToSchools}
          onClearComparison={() => setCompareList([])}
        />
      )}

      {currentScreen === "schoolDetail" && selectedSchoolId && (
        <SchoolDetailScreen
          schoolId={selectedSchoolId}
          onBackToSchools={handleBackFromDetail}
          onCompareToggle={handleCompareToggle}
          compareList={compareList}
        />
      )}
    </div>
  )
}
