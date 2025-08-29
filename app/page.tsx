import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Award, MessageSquare, Star, TrendingUp } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function HomePage() {
  const features = [
    {
      icon: BookOpen,
      title: "Create Courses",
      description: "Share your expertise by creating engaging micro-courses",
    },
    {
      icon: Users,
      title: "Peer Learning",
      description: "Learn from fellow students and professionals",
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Earn certificates upon course completion",
    },
    {
      icon: MessageSquare,
      title: "Discussion Forums",
      description: "Engage in meaningful discussions with instructors and peers",
    },
    {
      icon: Star,
      title: "Reviews & Ratings",
      description: "Rate courses and help others make informed decisions",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics",
    },
  ]

  const stats = [
    { label: "Active Courses", value: "500+" },
    { label: "Students", value: "10K+" },
    { label: "Instructors", value: "1K+" },
    { label: "Certificates Issued", value: "5K+" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Learn Skills from <span className="text-indigo-600">Peers</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join SkillHive, the premier peer learning platform where students and professionals create and share
            micro-courses. Learn new skills, teach others, and grow together.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/courses">
              <Button size="lg" className="px-8">
                Browse Courses
              </Button>
            </Link>
            <Link href="/create-course">
              <Button size="lg" variant="outline" className="px-8">
                Teach a Course
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-indigo-600">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Learn and Teach</h2>
            <p className="text-lg text-gray-600">Powerful features designed for modern peer-to-peer learning</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-indigo-100 mb-8">Join thousands of learners and instructors on SkillHive today</p>
          <Link href="/register">
            <Button size="lg" variant="secondary" className="px-8">
              Join SkillHive Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-indigo-400" />
                <span className="ml-2 text-lg font-bold">SkillHive</span>
              </div>
              <p className="text-gray-400">
                Empowering peer-to-peer learning through micro-courses and community engagement.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/courses">Browse Courses</Link>
                </li>
                <li>
                  <Link href="/create-course">Teach</Link>
                </li>
                <li>
                  <Link href="/dashboard">Dashboard</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help">Help Center</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/community">Community</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SkillHive. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
