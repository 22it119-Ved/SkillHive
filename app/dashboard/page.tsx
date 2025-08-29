"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Users, Award, TrendingUp, Clock, Star, Play, MessageSquare, Plus } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

export default function DashboardPage() {
  const [userRole, setUserRole] = useState("learner")
  const [userName, setUserName] = useState("")

  useEffect(() => {
    // Get user data from localStorage
    const storedName = localStorage.getItem("userName")
    const storedRole = localStorage.getItem("userRole")
    
    if (storedName) {
      setUserName(storedName)
    }
    if (storedRole) {
      setUserRole(storedRole)
    }
  }, [])

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

  const studentStats = [
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

  const adminStats = [
    {
      title: "Total Users",
      value: "2,847",
      icon: Users,
      change: "+156 this month",
    },
    {
      title: "Active Courses",
      value: "156",
      icon: BookOpen,
      change: "+12 this week",
    },
    {
      title: "Pending Reviews",
      value: "23",
      icon: Award,
      change: "+5 today",
    },
    {
      title: "Platform Revenue",
      value: "$12.5K",
      icon: TrendingUp,
      change: "+8.2% this month",
    },
  ]

  const facultyStats = [
    {
      title: "My Courses",
      value: "6",
      icon: BookOpen,
      change: "+1 this semester",
    },
    {
      title: "Total Students",
      value: "342",
      icon: Users,
      change: "+23 this week",
    },
    {
      title: "Teaching Rating",
      value: "4.9",
      icon: Award,
      change: "+0.1 this month",
    },
    {
      title: "Office Hours",
      value: "12",
      icon: Clock,
      change: "This week",
    },
  ]

  // Select stats based on user role
  const stats = userRole === "admin" ? adminStats : 
                userRole === "faculty" ? facultyStats : 
                studentStats

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar showBrowseCourses showCreateCourse />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {userName || "User"}! 👋
          </h1>
          <p className="text-gray-600">
            {userRole === "admin" 
              ? "Manage the platform and oversee all activities" 
              : userRole === "faculty"
              ? "Manage your courses and support student learning"
              : "Continue your learning journey and track your progress"
            }
          </p>
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

        <Tabs defaultValue={userRole === "admin" ? "overview" : "learning"} className="space-y-6">
          <TabsList>
            {userRole === "admin" ? (
              <>
                <TabsTrigger value="overview">Platform Overview</TabsTrigger>
                <TabsTrigger value="users">User Management</TabsTrigger>
                <TabsTrigger value="courses">Course Management</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </>
            ) : userRole === "faculty" ? (
              <>
                <TabsTrigger value="learning">My Courses</TabsTrigger>
                <TabsTrigger value="students">Students</TabsTrigger>
                <TabsTrigger value="assignments">Assignments</TabsTrigger>
                <TabsTrigger value="office-hours">Office Hours</TabsTrigger>
              </>
            ) : (
              <>
                <TabsTrigger value="learning">My Learning</TabsTrigger>
                <TabsTrigger value="activity">Recent Activity</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </>
            )}
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

          {/* Admin-specific tabs */}
          {userRole === "admin" && (
            <>
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      Platform Overview
                    </CardTitle>
                    <CardDescription>Key metrics and platform health</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold">Recent Activity</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                            <div>
                              <p className="font-medium text-green-800">New course published</p>
                              <p className="text-sm text-green-600">React Advanced by Sarah Johnson</p>
                            </div>
                            <span className="text-xs text-green-600">2 hours ago</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                            <div>
                              <p className="font-medium text-blue-800">New user registration</p>
                              <p className="text-sm text-blue-600">+45 new students today</p>
                            </div>
                            <span className="text-xs text-blue-600">1 hour ago</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                            <div>
                              <p className="font-medium text-yellow-800">Course review pending</p>
                              <p className="text-sm text-yellow-600">5 courses awaiting approval</p>
                            </div>
                            <span className="text-xs text-yellow-600">30 min ago</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-semibold">Quick Actions</h3>
                        <div className="space-y-3">
                          <Button className="w-full justify-start" variant="outline">
                            <Users className="h-4 w-4 mr-2" />
                            Review Pending Users
                          </Button>
                          <Button className="w-full justify-start" variant="outline">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Approve Course Submissions
                          </Button>
                          <Button className="w-full justify-start" variant="outline">
                            <TrendingUp className="h-4 w-4 mr-2" />
                            View Analytics Report
                          </Button>
                          <Button className="w-full justify-start" variant="outline">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Manage Support Tickets
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="users" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      User Management
                    </CardTitle>
                    <CardDescription>Manage platform users and permissions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">Recent Users</h3>
                        <Button variant="outline">View All Users</Button>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                              <span className="text-sm font-medium text-indigo-600">JD</span>
                            </div>
                            <div>
                              <p className="font-medium">John Doe</p>
                              <p className="text-sm text-gray-600">john@example.com</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary">Student</Badge>
                            <Button size="sm" variant="outline">View</Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <span className="text-sm font-medium text-green-600">SJ</span>
                            </div>
                            <div>
                              <p className="font-medium">Sarah Johnson</p>
                              <p className="text-sm text-gray-600">sarah@example.com</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="default">Instructor</Badge>
                            <Button size="sm" variant="outline">View</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="courses" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="h-5 w-5 mr-2" />
                      Course Management
                    </CardTitle>
                    <CardDescription>Review and manage platform courses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">Pending Reviews</h3>
                        <Button variant="outline">View All Courses</Button>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">Advanced React Patterns</p>
                            <p className="text-sm text-gray-600">by Mike Chen • 12 lessons</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline">Pending</Badge>
                            <Button size="sm">Review</Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">Data Science Fundamentals</p>
                            <p className="text-sm text-gray-600">by Emma Davis • 8 lessons</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline">Pending</Badge>
                            <Button size="sm">Review</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      Platform Analytics
                    </CardTitle>
                    <CardDescription>Comprehensive platform performance metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold">Growth Metrics</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span>Monthly Active Users</span>
                            <span className="font-semibold">+23%</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span>Course Completion Rate</span>
                            <span className="font-semibold">78%</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span>Average Session Duration</span>
                            <span className="font-semibold">24 min</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-semibold">Revenue Overview</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                            <span>Monthly Revenue</span>
                            <span className="font-semibold text-green-600">$45.2K</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                            <span>Instructor Payouts</span>
                            <span className="font-semibold text-blue-600">$32.1K</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                            <span>Platform Fee</span>
                            <span className="font-semibold text-purple-600">$13.1K</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </>
          )}

          {/* Faculty-specific tabs */}
          {userRole === "faculty" ? (
            <>
              <TabsContent value="learning" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="h-5 w-5 mr-2" />
                      My Courses
                    </CardTitle>
                    <CardDescription>Manage your teaching courses and materials</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      {enrolledCourses.slice(0, 3).map((course) => (
                        <div key={course.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                          <img
                            src={course.thumbnail || "/placeholder.svg"}
                            alt={course.title}
                            className="w-20 h-14 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{course.title}</h3>
                            <p className="text-sm text-gray-600">{course.totalLessons} lectures • {course.students || 0} enrolled students</p>
                            <div className="flex items-center space-x-4 mt-2">
                              <Badge variant="secondary">Active</Badge>
                              <span className="text-sm text-gray-600">Teaching Rating: 4.9 ⭐</span>
                            </div>
                          </div>
                          <Button variant="outline">Manage Course</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="students" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      My Students
                    </CardTitle>
                    <CardDescription>Track student progress and provide support</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">Current Students</h3>
                        <Button variant="outline">View All Students</Button>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                              <span className="text-sm font-medium text-indigo-600">JD</span>
                            </div>
                            <div>
                              <p className="font-medium">John Doe</p>
                              <p className="text-sm text-gray-600">Computer Science • Year 2</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary">75% Complete</Badge>
                            <Button size="sm" variant="outline">Send Message</Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <span className="text-sm font-medium text-green-600">AS</span>
                            </div>
                            <div>
                              <p className="font-medium">Alice Smith</p>
                              <p className="text-sm text-gray-600">Software Engineering • Year 3</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary">45% Complete</Badge>
                            <Button size="sm" variant="outline">Send Message</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="assignments" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="h-5 w-5 mr-2" />
                      Assignments & Grading
                    </CardTitle>
                    <CardDescription>Manage assignments and grade student submissions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">Pending Grading</h3>
                        <Button variant="outline">View All Assignments</Button>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">React Project Submission</p>
                            <p className="text-sm text-gray-600">Course: React Fundamentals • 23 submissions</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline">Due: 2 days ago</Badge>
                            <Button size="sm">Grade Now</Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">Node.js API Assignment</p>
                            <p className="text-sm text-gray-600">Course: Backend Development • 18 submissions</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline">Due: Today</Badge>
                            <Button size="sm">Grade Now</Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">Database Design Quiz</p>
                            <p className="text-sm text-gray-600">Course: Database Systems • 31 submissions</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary">Due: Tomorrow</Badge>
                            <Button size="sm" variant="outline">Preview</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="office-hours" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      Office Hours
                    </CardTitle>
                    <CardDescription>Schedule and manage student consultations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold">This Week's Schedule</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                            <div>
                              <p className="font-medium">Monday</p>
                              <p className="text-sm text-blue-600">2:00 PM - 4:00 PM</p>
                            </div>
                            <Badge variant="secondary">3 Booked</Badge>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                            <div>
                              <p className="font-medium">Wednesday</p>
                              <p className="text-sm text-green-600">10:00 AM - 12:00 PM</p>
                            </div>
                            <Badge variant="secondary">5 Booked</Badge>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                            <div>
                              <p className="font-medium">Friday</p>
                              <p className="text-sm text-purple-600">1:00 PM - 3:00 PM</p>
                            </div>
                            <Badge variant="secondary">2 Booked</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-semibold">Upcoming Appointments</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <p className="font-medium">John Doe</p>
                              <p className="text-sm text-gray-600">React Project Help</p>
                              <p className="text-xs text-gray-500">Today, 2:30 PM</p>
                            </div>
                            <Button size="sm" variant="outline">Join Meeting</Button>
                          </div>
                          <div className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <p className="font-medium">Alice Smith</p>
                              <p className="text-sm text-gray-600">Database Design Questions</p>
                              <p className="text-xs text-gray-500">Tomorrow, 10:15 AM</p>
                            </div>
                            <Button size="sm" variant="outline">Join Meeting</Button>
                          </div>
                        </div>
                        <Button className="w-full" variant="outline">
                          <Clock className="h-4 w-4 mr-2" />
                          Schedule New Office Hours
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </>
          ) : null}
        </Tabs>
      </div>
    </div>
  )
}
