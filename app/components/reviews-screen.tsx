"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, BookOpen, Star, MessageSquare, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

interface ReviewsScreenProps {
  onViewSchools: () => void
  onViewComparison: () => void
  onChangeLocation: () => void
}

// Mock schools data for dropdown
const schools = [
  // Gulshan-e-Iqbal
  { id: 1, name: "The City School - Gulshan Campus A", location: "Gulshan-e-Iqbal" },
  { id: 2, name: "Beaconhouse School System - Gulshan Primary", location: "Gulshan-e-Iqbal" },
  { id: 3, name: "Foundation Public School - Gulshan Campus", location: "Gulshan-e-Iqbal" },
  { id: 4, name: "Karachi Public School - Gulshan Campus", location: "Gulshan-e-Iqbal" },
  { id: 5, name: "Generation's School - North Campus", location: "Gulshan-e-Iqbal" },

  // DHA
  { id: 6, name: "Karachi Grammar School", location: "DHA Phase 1" },
  { id: 7, name: "The City School - DHA Phase 5", location: "DHA Phase 5" },
  { id: 8, name: "Bay View Academy", location: "DHA Phase 8" },
  { id: 9, name: "British Overseas School", location: "DHA Phase 6" },
  { id: 10, name: "The Lyceum School", location: "DHA Phase 6" },

  // North Nazimabad
  { id: 11, name: "The City School - North Nazimabad", location: "North Nazimabad" },
  { id: 12, name: "St. Patrick's High School", location: "North Nazimabad" },
  { id: 13, name: "BVS Parsi High School", location: "North Nazimabad" },
  { id: 14, name: "Allied School - North Nazimabad", location: "North Nazimabad" },

  // Gulistan-e-Johar
  { id: 15, name: "The City School - Gulistan-e-Johar", location: "Gulistan-e-Johar" },
  { id: 16, name: "The Smart School - Gulistan-e-Johar", location: "Gulistan-e-Johar" },
  { id: 17, name: "AES School for Girls", location: "Gulistan-e-Johar" },
  { id: 18, name: "Pak-Turk Maarif International School", location: "Gulistan-e-Johar" },

  // Malir
  { id: 19, name: "Army Public School & College - Malir Cantt", location: "Malir Cantonment" },
  { id: 20, name: "Fauji Foundation Model School - Malir", location: "Malir" },
  { id: 21, name: "Habib Public School - Malir", location: "Malir" },

  // Saddar / Clifton
  { id: 22, name: "Convent of Jesus & Mary", location: "Clifton" },
  { id: 23, name: "St. Joseph's Convent School", location: "Saddar" },
  { id: 24, name: "Mama Parsi Girls Secondary School", location: "Saddar" },
  { id: 25, name: "Habib Public School - Main Campus", location: "Saddar" },
]

// Mock existing reviews
const existingReviews = [
  {
    id: 1,
    schoolName: "Beaconhouse School System",
    parentName: "Ahmed Khan",
    rating: 5,
    review:
      "Excellent school with modern facilities. My child has shown great improvement in academics and extracurricular activities. The teachers are very supportive and the curriculum is well-structured.",
    date: "2024-01-15",
    verified: true,
  },
  {
    id: 2,
    schoolName: "The City School",
    parentName: "Fatima Ali",
    rating: 4,
    review:
      "Good school with balanced approach to education. The Islamic values integration is commendable. However, the sports facilities could be improved.",
    date: "2024-01-10",
    verified: true,
  },
  {
    id: 3,
    schoolName: "Karachi Grammar School",
    parentName: "Sarah Ahmed",
    rating: 5,
    review:
      "Outstanding academic reputation and excellent results. The school has a rich history and strong alumni network. Worth the investment for quality education.",
    date: "2024-01-08",
    verified: true,
  },
]

export default function ReviewsScreen({ onViewSchools, onViewComparison, onChangeLocation }: ReviewsScreenProps) {
  const [selectedSchool, setSelectedSchool] = useState("")
  const [parentName, setParentName] = useState("")
  const [reviewText, setReviewText] = useState("")
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedSchool && parentName && reviewText && rating > 0) {
      // Here you would typically send the review to your backend
      console.log({
        school: selectedSchool,
        parentName,
        review: reviewText,
        rating,
      })
      setIsSubmitted(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setSelectedSchool("")
        setParentName("")
        setReviewText("")
        setRating(0)
      }, 3000)
    }
  }

  const renderStars = (currentRating: number, interactive = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= (interactive ? hoveredRating || rating : currentRating)
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            } ${interactive ? "cursor-pointer hover:scale-110 transition-transform" : ""}`}
            onClick={interactive ? () => setRating(star) : undefined}
            onMouseEnter={interactive ? () => setHoveredRating(star) : undefined}
            onMouseLeave={interactive ? () => setHoveredRating(0) : undefined}
          />
        ))}
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
              <Button variant="ghost" size="sm" onClick={onChangeLocation}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">IdaraFinder</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={onViewSchools}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Schools
              </button>
              <button
                onClick={() => {}}
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors border-b-2 border-blue-600"
              >
                Reviews
              </button>
              <button
                onClick={onViewComparison}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Compare
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">School Reviews</h1>
          <p className="text-gray-600">Share your experience and help other parents make informed decisions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Review Form */}
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  Write a Review
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Review Submitted Successfully!</h3>
                    <p className="text-gray-600">
                      Thank you for sharing your experience. Your review will help other parents.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitReview} className="space-y-6">
                    {/* School Selection */}
                    <div>
                      <Label htmlFor="school">Select School *</Label>
                      <Select value={selectedSchool} onValueChange={setSelectedSchool}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Choose a school to review" />
                        </SelectTrigger>
                        <SelectContent>
                          {schools.map((school) => (
                            <SelectItem key={school.id} value={school.name}>
                              {school.name} - {school.location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Parent Name */}
                    <div>
                      <Label htmlFor="parentName">Your Name *</Label>
                      <Input
                        id="parentName"
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        placeholder="Enter your name"
                        className="mt-1"
                        required
                      />
                    </div>

                    {/* Rating */}
                    <div>
                      <Label>Overall Rating *</Label>
                      <div className="mt-2 flex items-center gap-2">
                        {renderStars(rating, true)}
                        <span className="text-sm text-gray-600 ml-2">
                          {rating > 0 ? `${rating} out of 5 stars` : "Click to rate"}
                        </span>
                      </div>
                    </div>

                    {/* Review Text */}
                    <div>
                      <Label htmlFor="review">Your Review *</Label>
                      <Textarea
                        id="review"
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        placeholder="Share your experience about the school's academics, facilities, teachers, environment, etc."
                        className="mt-1 min-h-[120px]"
                        required
                      />
                      <p className="text-sm text-gray-500 mt-1">{reviewText.length}/500 characters</p>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      disabled={!selectedSchool || !parentName || !reviewText || rating === 0}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Submit Review
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Existing Reviews */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Reviews</h2>
            <div className="space-y-6">
              {existingReviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900">{review.schoolName}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-gray-600">by {review.parentName}</span>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        {renderStars(review.rating)}
                        <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{review.review}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-8">
              <Button variant="outline">Load More Reviews</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
