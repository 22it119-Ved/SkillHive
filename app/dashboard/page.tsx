"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Users, Award, TrendingUp, Clock, Star, Play, MessageSquare, Plus } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [userRole] = useState("learner") // This would come from auth context

  const enrolledCourses = [
    {
      id: 1,
      title: "React Fundamentals",
      instructor: "Sarah Johnson",
      progress: 75,
      totalLessons: 12,
      completedLessons: 9,
      nextLesson: "State Management with Hooks",
      thumbnail: "/placeholder.svg?height=100&width=150",
    },
    {
      id: 2,
      title: "Node.js Backend Development",
      instructor: "Mike Chen",
      progress: 45,
      totalLessons: 15,
      completedLessons: 7,
      nextLesson: "Express.js Middleware",
      thumbnail: "/placeholder.svg?height=100&width=150",
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      instructor: "Emma Davis",
      progress: 90,
      totalLessons: 8,
      completedLessons: 7,
      nextLesson: "Final Project Review",
      thumbnail: "/placeholder.svg?height=100&width=150",
    },
  ]

  const recentActivity = [
    {
      type: "completion",
      message: "Completed lesson 'React Components' in React Fundamentals",
      time: "2 hours ago",
    },
    {
      type: "discussion",
      message: "New reply in 'Node.js Best Practices' discussion",
      time: "4 hours ago",
    },
    {
      type: "enrollment",
      message: "Enrolled in 'Advanced JavaScript Concepts'",
      time: "1 day ago",
    },
    {
      type: "certificate",
      message: "Earned certificate for 'HTML & CSS Basics'",
      time: "2 days ago",
    },
  ]

  const stats = [
    {
      title: "Courses Enrolled",
      value: "12",
      icon: BookOpen,
      change: "+2 this month",
    },
    {
      title: "Hours Learned",
      value: "48",
      icon: Clock,
      change: "+12 this week",
    },
    {
      title: "Certificates Earned",
      value: "5",
      icon: Award,
      change: "+1 this month",
    },
    {
      title: "Discussion Posts",
      value: "23",
      icon: MessageSquare,
      change: "+5 this week",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">SkillHive</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" asChild>
                <Link href="/courses">Browse Courses</Link>
              </Button>
              <Button asChild>
                <Link href="/create-course">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Course
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Ved! 👋</h1>
          <p className="text-gray-600">Continue your learning journey and track your progress</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-green-600">{stat.change}</p>
                  </div>
                  <stat.icon className="h-8 w-8 text-indigo-600" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="learning" className="space-y-6">
          <TabsList>
            <TabsTrigger value="learning">My Learning</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="learning" className="space-y-6">
            {/* Continue Learning Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Play className="h-5 w-5 mr-2" />
                  Continue Learning
                </CardTitle>
                <CardDescription>Pick up where you left off</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {enrolledCourses.map((course) => (
                    <div key={course.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                      <img
                        src={course.thumbnail || "/placeholder.svg"}
                        alt={course.title}
                        className="w-20 h-14 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{course.title}</h3>
                        <p className="text-sm text-gray-600">by {course.instructor}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex-1">
                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                              <span>
                                {course.completedLessons}/{course.totalLessons} lessons
                              </span>
                              <span>{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                        </div>
                        <p className="text-sm text-indigo-600 mt-1">Next: {course.nextLesson}</p>
                      </div>
                      <Button>Continue</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 border-l-4 border-indigo-200 bg-indigo-50 rounded-r"
                    >
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{activity.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Your Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="text-center p-6 border rounded-lg">
                    <Award className="h-12 w-12 text-yellow-500 mx-auto mb-3" />
                    <h3 className="font-semibold">First Course Completed</h3>
                    <p className="text-sm text-gray-600">Completed your first course</p>
                    <Badge variant="secondary" className="mt-2">
                      Earned
                    </Badge>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <Users className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                    <h3 className="font-semibold">Active Learner</h3>
                    <p className="text-sm text-gray-600">Enrolled in 10+ courses</p>
                    <Badge variant="secondary" className="mt-2">
                      Earned
                    </Badge>
                  </div>
                  <div className="text-center p-6 border rounded-lg opacity-50">
                    <Star className="h-12 w-12 text-purple-500 mx-auto mb-3" />
                    <h3 className="font-semibold">Course Creator</h3>
                    <p className="text-sm text-gray-600">Create your first course</p>
                    <Badge variant="outline" className="mt-2">
                      Locked
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
