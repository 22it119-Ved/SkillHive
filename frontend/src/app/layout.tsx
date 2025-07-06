import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SkillHive - Peer Learning Platform",
  description: "Learn skills from peers through micro-courses and interactive learning experiences",
  keywords: "online learning, peer learning, micro-courses, skill development, education",
  authors: [{ name: "SkillHive Team" }],
  openGraph: {
    title: "SkillHive - Peer Learning Platform",
    description: "Learn skills from peers through micro-courses and interactive learning experiences",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkillHive - Peer Learning Platform",
    description: "Learn skills from peers through micro-courses and interactive learning experiences",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
