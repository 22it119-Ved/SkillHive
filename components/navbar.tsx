"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { BookOpen, Plus, User, Settings, LogOut, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface NavbarProps {
  showCreateCourse?: boolean
  showBrowseCourses?: boolean
  showDashboard?: boolean
  showBackToCourses?: boolean
  showSaveDraft?: boolean
  onSaveDraft?: () => void
}

export function Navbar({
  showCreateCourse = false,
  showBrowseCourses = false,
  showDashboard = false,
  showBackToCourses = false,
  showSaveDraft = false,
  onSaveDraft,
}: NavbarProps) {
  const [user, setUser] = useState<{
    name: string
    email: string
    role: string
  } | null>(null)

  useEffect(() => {
    // Get user data from localStorage
    const userName = localStorage.getItem("userName")
    const userEmail = localStorage.getItem("userEmail")
    const userRole = localStorage.getItem("userRole")
    
    if (userName && userEmail && userRole) {
      setUser({
        name: userName,
        email: userEmail,
        role: userRole,
      })
    }
  }, [])

  const handleLogout = () => {
    // Clear all user data from localStorage
    localStorage.removeItem("userName")
    localStorage.removeItem("userEmail")
    localStorage.removeItem("userRole")
    localStorage.removeItem("token")
    
    // Redirect to login page
    window.location.href = "/login"
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">SkillHive</span>
          </Link>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-4">
            {showBrowseCourses && (
              <Button variant="outline" asChild>
                <Link href="/courses">Browse Courses</Link>
              </Button>
            )}
            
            {showDashboard && (
              <Button variant="outline" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            )}
            
            {showBackToCourses && (
              <Button variant="outline" asChild>
                <Link href="/courses">Back to Courses</Link>
              </Button>
            )}
            
            {showCreateCourse && user && (user.role === "faculty" || user.role === "admin") && (
              <Button asChild>
                <Link href="/create-course">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Course
                </Link>
              </Button>
            )}
            
            {showSaveDraft && onSaveDraft && (
              <Button variant="outline" onClick={onSaveDraft}>
                <Plus className="h-4 w-4 mr-2" />
                Save Draft
              </Button>
            )}

            {/* Profile Menu */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="" alt={user.name} />
                      <AvatarFallback className="bg-indigo-100 text-indigo-600">
                        {getInitials(user.name)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground capitalize">
                        {user.role}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link href="/register">
                  <Button>Get Started</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
