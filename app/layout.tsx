import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Montserrat } from "next/font/google" // Import new fonts
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" }) // Define Inter as a CSS variable
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
}) // Define Playfair Display as a CSS variable
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
}) // Define Montserrat as a CSS variable

export const metadata: Metadata = {
  title: "Relative - Modern Next.js Template",
  description:
    "A modern, fully featured Next.js template built with Shadcn/UI, TailwindCSS and TypeScript, perfect for your next web application.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} ${montserrat.variable} font-sans`} // Apply font variables to body
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
