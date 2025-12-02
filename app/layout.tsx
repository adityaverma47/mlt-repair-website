import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Maa Laptop Technology - Laptop Repair & CCTV Installation Lucknow",
  description:
    "Best laptop repair, CCTV installation, and computer services in Lucknow. Expert technicians, fast service, trusted by thousands.",
  keywords: "laptop repair Lucknow, CCTV installation Lucknow, computer repair, laptop battery, laptop charging",
  openGraph: {
    title: "Maa Laptop Technology - Laptop Repair & CCTV Installation",
    description: "Professional laptop repair and CCTV services in Lucknow",
    url: "https://maalaptoptechnology.com",
    siteName: "Maa Laptop Technology",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  )
}
