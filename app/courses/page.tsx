"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Search, Star, Clock, Users, Play, Heart } from "lucide-react"
import Link from "next/link"

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")

  const courses = [
    {
      id: 1,
      title: "Complete React Development Course",
      instructor: "Sarah Johnson",
      description: "Master React from basics to advanced concepts including hooks, context, and testing.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      category: "Web Development",
      level: "Intermediate",
      duration: "8 hours",
      students: 1234,
      rating: 4.8,
      reviews: 156,
      price: "Free",
      tags: ["React", "JavaScript", "Frontend"],
    },
    {
      id: 2,
      title: "Node.js Backend Mastery",
      instructor: "Mike Chen",
      description: "Build scalable backend applications with Node.js, Express, and MongoDB.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      category: "Backend Development",
      level: "Advanced",
      duration: "12 hours",
      students: 892,
      rating: 4.9,
      reviews: 203,
      price: "$49",
      tags: ["Node.js", "Express", "MongoDB"],
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      instructor: "Emma Davis",
      description: "Learn design principles, user research, and prototyping with Figma.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      category: "Design",
      level: "Beginner",
      duration: "6 hours",
      students: 2156,
      rating: 4.7,
      reviews: 89,
      price: "Free",
      tags: ["UI/UX", "Figma", "Design"],
    },
    {
      id: 4,
      title: "Python Data Science Bootcamp",
      instructor: "Dr. Alex Kumar",
      description: "Comprehensive data science course covering pandas, numpy, and machine learning.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      category: "Data Science",
      level: "Intermediate",
      duration: "15 hours",
      students: 756,
      rating: 4.6,
      reviews: 124,
      price: "$79",
      tags: ["Python", "Data Science", "ML"],
    },
    {
      id: 5,
      title: "Mobile App Development with Flutter",
      instructor: "Lisa Wang",
      description: "Build cross-platform mobile apps using Flutter and Dart programming language.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      category: "Mobile Development",
      level: "Intermediate",
      duration: "10 hours",
      students: 543,
      rating: 4.5,
      reviews: 67,
      price: "$39",
      tags: ["Flutter", "Dart", "Mobile"],
    },
    {
      id: 6,
      title: "Digital Marketing Strategy",
      instructor: "John Smith",
      description: "Learn SEO, social media marketing, and content strategy for business growth.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      category: "Marketing",
      level: "Beginner",
      duration: "4 hours",
      students: 1876,
      rating: 4.4,
      reviews: 234,
      price: "Free",
      tags: ["SEO", "Social Media", "Marketing"],
    },
  ]

  const categories = [
    "Web Development",
    "Backend Development",
    "Mobile Development",
    "Data Science",
    "Design",
    "Marketing",
  ]

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel

    return matchesSearch && matchesCategory && matchesLevel
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">SkillHive</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <Link href="/create-course">
                <Button>Create Course</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore Courses</h1>
          <p className="text-gray-600">Discover new skills with our peer-led micro-courses</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search courses, instructors, or topics..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={course.thumbnail || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4">
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant={course.price === "Free" ? "secondary" : "default"}>{course.price}</Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline">{course.category}</Badge>
                  <Badge variant="secondary">{course.level}</Badge>
                </div>
                <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                <CardDescription className="line-clamp-2">{course.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">by {course.instructor}</p>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span>{course.rating}</span>
                      <span className="ml-1">({course.reviews})</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {course.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1" asChild>
                      <Link href={`/courses/${course.id}`}>
                        <Play className="h-4 w-4 mr-2" />
                        Enroll Now
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      Preview
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
