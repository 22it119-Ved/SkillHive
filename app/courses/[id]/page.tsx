"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  BookOpen,
  Star,
  Clock,
  Users,
  Play,
  Download,
  Share2,
  Heart,
  CheckCircle,
  MessageSquare,
  Award,
  Calendar,
} from "lucide-react"
import Link from "next/link"

export default function CourseDetailPage() {
  const [isEnrolled, setIsEnrolled] = useState(false)

  const course = {
    id: 1,
    title: "Complete React Development Course",
    instructor: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=50&width=50",
      bio: "Senior Frontend Developer with 8+ years experience. Passionate about teaching and React ecosystem.",
      courses: 12,
      students: 15000,
      rating: 4.9,
    },
    description:
      "Master React from basics to advanced concepts including hooks, context, and testing. This comprehensive course will take you from beginner to advanced React developer.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    category: "Web Development",
    level: "Intermediate",
    duration: "8 hours",
    students: 1234,
    rating: 4.8,
    reviews: 156,
    price: "Free",
    tags: ["React", "JavaScript", "Frontend"],
    lastUpdated: "December 2024",
    language: "English",
    whatYouWillLearn: [
      "Build modern React applications from scratch",
      "Master React Hooks and Context API",
      "Implement state management with Redux",
      "Write unit tests for React components",
      "Deploy React applications to production",
      "Optimize React apps for performance",
    ],
    requirements: [
      "Basic knowledge of HTML, CSS, and JavaScript",
      "Familiarity with ES6+ features",
      "A computer with internet connection",
      "Code editor (VS Code recommended)",
    ],
    curriculum: [
      {
        section: "Getting Started",
        lessons: [
          { title: "Introduction to React", duration: "15 min", completed: true },
          { title: "Setting up Development Environment", duration: "20 min", completed: true },
          { title: "Your First React Component", duration: "25 min", completed: false },
        ],
      },
      {
        section: "React Fundamentals",
        lessons: [
          { title: "JSX and Components", duration: "30 min", completed: false },
          { title: "Props and State", duration: "35 min", completed: false },
          { title: "Event Handling", duration: "25 min", completed: false },
          { title: "Conditional Rendering", duration: "20 min", completed: false },
        ],
      },
      {
        section: "Advanced React",
        lessons: [
          { title: "React Hooks Deep Dive", duration: "45 min", completed: false },
          { title: "Context API", duration: "30 min", completed: false },
          { title: "Performance Optimization", duration: "40 min", completed: false },
        ],
      },
    ],
  }

  const reviews = [
    {
      id: 1,
      user: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Excellent course! Sarah explains complex concepts in a very clear and understandable way. The hands-on projects really helped solidify my understanding.",
    },
    {
      id: 2,
      user: "Jane Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      date: "1 month ago",
      comment:
        "Great content and well-structured. I wish there were more advanced topics covered, but overall a solid foundation course.",
    },
    {
      id: 3,
      user: "Mike Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "1 month ago",
      comment:
        "This course transformed my understanding of React. The instructor's teaching style is engaging and the examples are practical.",
    },
  ]

  const handleEnroll = () => {
    setIsEnrolled(true)
  }

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
              <Link href="/courses">
                <Button variant="outline">Back to Courses</Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Header */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Badge variant="outline">{course.category}</Badge>
                <Badge variant="secondary">{course.level}</Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
              <p className="text-lg text-gray-600 mb-6">{course.description}</p>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="font-medium">{course.rating}</span>
                  <span className="ml-1">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Updated {course.lastUpdated}</span>
                </div>
              </div>
            </div>

            {/* Course Video/Image */}
            <div className="relative">
              <img
                src={course.thumbnail || "/placeholder.svg"}
                alt={course.title}
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="bg-white/90 text-gray-900 hover:bg-white">
                  <Play className="h-6 w-6 mr-2" />
                  Preview Course
                </Button>
              </div>
            </div>

            {/* Course Tabs */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>What you'll learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {course.whatYouWillLearn.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {course.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="curriculum" className="space-y-4">
                {course.curriculum.map((section, sectionIndex) => (
                  <Card key={sectionIndex}>
                    <CardHeader>
                      <CardTitle className="text-lg">{section.section}</CardTitle>
                      <CardDescription>{section.lessons.length} lessons</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {section.lessons.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center">
                              {lesson.completed ? (
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                              ) : (
                                <Play className="h-5 w-5 text-gray-400 mr-3" />
                              )}
                              <span className="font-medium">{lesson.title}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{lesson.duration}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="instructor" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={course.instructor.avatar || "/placeholder.svg"} />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold">{course.instructor.name}</h3>
                        <p className="text-gray-600 mb-4">{course.instructor.bio}</p>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-indigo-600">{course.instructor.rating}</div>
                            <div className="text-sm text-gray-600">Instructor Rating</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-indigo-600">{course.instructor.courses}</div>
                            <div className="text-sm text-gray-600">Courses</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-indigo-600">
                              {course.instructor.students.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600">Students</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Student Reviews</h3>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-gray-600 ml-1">({course.reviews} reviews)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Avatar>
                            <AvatarImage src={review.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{review.user[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{review.user}</h4>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                            <div className="flex items-center mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enrollment Card */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{course.price}</div>
                  {course.price === "Free" && <Badge variant="secondary">Limited Time</Badge>}
                </div>

                {isEnrolled ? (
                  <div className="space-y-4">
                    <div className="text-center">
                      <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-2" />
                      <p className="font-medium text-green-700">You're enrolled!</p>
                    </div>
                    <Button className="w-full" asChild>
                      <Link href="/dashboard">
                        <Play className="h-4 w-4 mr-2" />
                        Continue Learning
                      </Link>
                    </Button>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>2/10 lessons</span>
                      </div>
                      <Progress value={20} />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Button className="w-full" onClick={handleEnroll}>
                      <Play className="h-4 w-4 mr-2" />
                      Enroll Now
                    </Button>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Heart className="h-4 w-4 mr-2" />
                        Wishlist
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                )}

                <div className="mt-6 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-2" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    <span>Downloadable resources</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    <span>Discussion forum access</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Info */}
            <Card>
              <CardHeader>
                <CardTitle>Course Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Level</span>
                  <span className="font-medium">{course.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Language</span>
                  <span className="font-medium">{course.language}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Students</span>
                  <span className="font-medium">{course.students.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Updated</span>
                  <span className="font-medium">{course.lastUpdated}</span>
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
