"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Users,
  BookOpen,
  MessageSquare,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  Ban,
  Shield,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [pendingCourses, setPendingCourses] = useState([
    {
      id: 1,
      title: "Advanced JavaScript Patterns",
      instructor: "John Doe",
      category: "Web Development",
      submittedDate: "2024-12-15",
      status: "pending",
    },
    {
      id: 2,
      title: "Machine Learning Basics",
      instructor: "Jane Smith",
      category: "Data Science",
      submittedDate: "2024-12-14",
      status: "pending",
    },
  ])

  const [reportedContent, setReportedContent] = useState([
    {
      id: 1,
      type: "discussion",
      content: "Inappropriate comment in React course discussion",
      reporter: "User123",
      reported: "BadUser456",
      date: "2024-12-16",
      status: "pending",
    },
    {
      id: 2,
      type: "course",
      content: "Course contains plagiarized content",
      reporter: "Instructor789",
      reported: "CourseCreator101",
      date: "2024-12-15",
      status: "pending",
    },
  ])

  const stats = [
    {
      title: "Total Users",
      value: "12,543",
      change: "+234 this month",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Active Courses",
      value: "1,876",
      change: "+45 this week",
      icon: BookOpen,
      color: "text-green-600",
    },
    {
      title: "Pending Reviews",
      value: "23",
      change: "+5 today",
      icon: AlertTriangle,
      color: "text-yellow-600",
    },
    {
      title: "Reports",
      value: "8",
      change: "+2 today",
      icon: MessageSquare,
      color: "text-red-600",
    },
  ]

  const approveCourse = (courseId) => {
    setPendingCourses((courses) =>
      courses.map((course) => (course.id === courseId ? { ...course, status: "approved" } : course)),
    )
  }

  const rejectCourse = (courseId) => {
    setPendingCourses((courses) =>
      courses.map((course) => (course.id === courseId ? { ...course, status: "rejected" } : course)),
    )
  }

  const resolveReport = (reportId, action) => {
    setReportedContent((reports) =>
      reports.map((report) => (report.id === reportId ? { ...report, status: action } : report)),
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">Admin Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="outline">Back to Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList>
            <TabsTrigger value="courses">Course Reviews</TabsTrigger>
            <TabsTrigger value="reports">Content Reports</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pending Course Approvals</CardTitle>
                <CardDescription>Review and approve new courses submitted by instructors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingCourses
                    .filter((course) => course.status === "pending")
                    .map((course) => (
                      <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{course.title}</h3>
                          <p className="text-sm text-gray-600">by {course.instructor}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <Badge variant="outline">{course.category}</Badge>
                            <span className="text-sm text-gray-500">Submitted: {course.submittedDate}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            Review
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => approveCourse(course.id)}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Approve
                          </Button>
                          <Button variant="destructive" size="sm" onClick={() => rejectCourse(course.id)}>
                            <XCircle className="h-4 w-4 mr-2" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    ))}
                  {pendingCourses.filter((course) => course.status === "pending").length === 0 && (
                    <div className="text-center py-8 text-gray-500">No pending course approvals</div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Content Reports</CardTitle>
                <CardDescription>Review reported content and take appropriate action</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reportedContent
                    .filter((report) => report.status === "pending")
                    .map((report) => (
                      <div key={report.id} className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge variant={report.type === "discussion" ? "default" : "secondary"}>
                                {report.type}
                              </Badge>
                              <span className="text-sm text-gray-500">{report.date}</span>
                            </div>
                            <p className="text-gray-900 mb-2">{report.content}</p>
                            <p className="text-sm text-gray-600">
                              Reported by: <span className="font-medium">{report.reporter}</span> | Against:{" "}
                              <span className="font-medium">{report.reported}</span>
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => resolveReport(report.id, "resolved")}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Resolve
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => resolveReport(report.id, "action_taken")}
                          >
                            <Ban className="h-4 w-4 mr-2" />
                            Take Action
                          </Button>
                        </div>
                      </div>
                    ))}
                  {reportedContent.filter((report) => report.status === "pending").length === 0 && (
                    <div className="text-center py-8 text-gray-500">No pending reports</div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage user accounts and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "John Doe",
                      email: "john@example.com",
                      role: "Instructor",
                      status: "Active",
                      joined: "2024-01-15",
                    },
                    {
                      name: "Jane Smith",
                      email: "jane@example.com",
                      role: "Learner",
                      status: "Active",
                      joined: "2024-02-20",
                    },
                    {
                      name: "Mike Johnson",
                      email: "mike@example.com",
                      role: "Instructor",
                      status: "Suspended",
                      joined: "2024-03-10",
                    },
                  ].map((user, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-gray-900">{user.name}</h3>
                          <p className="text-sm text-gray-600">{user.email}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline">{user.role}</Badge>
                            <Badge variant={user.status === "Active" ? "default" : "destructive"}>{user.status}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View Profile
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        {user.status === "Active" ? (
                          <Button variant="destructive" size="sm">
                            <Ban className="h-4 w-4 mr-2" />
                            Suspend
                          </Button>
                        ) : (
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Activate
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Platform Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">New Users (This Month)</span>
                      <span className="font-semibold">+234</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">New Courses (This Month)</span>
                      <span className="font-semibold">+45</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Course Completions</span>
                      <span className="font-semibold">1,234</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Revenue (This Month)</span>
                      <span className="font-semibold">$12,450</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popular Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Web Development", courses: 245, percentage: 35 },
                      { name: "Data Science", courses: 156, percentage: 22 },
                      { name: "Design", courses: 134, percentage: 19 },
                      { name: "Marketing", courses: 98, percentage: 14 },
                      { name: "Mobile Development", courses: 67, percentage: 10 },
                    ].map((category, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{category.name}</span>
                          <span>{category.courses} courses</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-indigo-600 h-2 rounded-full"
                            style={{ width: `${category.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
