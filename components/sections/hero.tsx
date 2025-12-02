"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { businessConfig } from "@/lib/config"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen pt-24 sm:pt-20 pb-8 sm:pb-12 px-3 sm:px-6 lg:px-8 overflow-hidden flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/maa-laptop-technology-arjunganj-lucknow-computer-repair-and-services-kkv3rkjy5d.jpg"
          alt="Maa Laptop Technology Shop"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-4 sm:space-y-6 transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="inline-block">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/15 text-primary rounded-full text-xs sm:text-sm font-medium border border-primary/30">
                Trusted Since 2023
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              <span className="text-foreground">Expert </span>
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Laptop Repair
              </span>
              <span className="text-foreground"> & </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                CCTV Solutions
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg text-balance leading-relaxed font-medium">
              Best Laptop & CCTV Service in Lucknow. Fast, reliable repair services with genuine parts and 24/7 support.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
              <a
                href={`tel:${businessConfig.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-500/30 group text-sm sm:text-base md:text-lg"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all text-sm sm:text-base md:text-lg"
              >
                View Services
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-border">
              <div>
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  2000+
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Happy Customers</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  2023
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Established</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-yellow-500">5★</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Highly Rated</p>
              </div>
            </div>
          </div>

          {/* Right Visual - Shop Image */}
          <div
            className={`relative h-64 sm:h-96 md:h-[500px] transition-all duration-1000 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} hidden sm:block`}
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
              <Image
                src="/images/maa-laptop-technology-arjunganj-lucknow-computer-repair-and-services-kkv3rkjy5d.jpg"
                alt="Maa Laptop Technology Service Center"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating Badges */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 bg-white rounded-xl p-3 sm:p-4 shadow-xl border border-border">
              <p className="text-xs sm:text-sm font-bold text-gray-900">Professional Technicians</p>
              <p className="text-xs text-gray-600">Certified & Experienced</p>
            </div>
            <div className="hidden sm:block absolute -top-4 -right-4 bg-blue-600 text-white rounded-xl p-3 sm:p-4 shadow-xl">
              <p className="text-xs sm:text-sm font-bold">Same Day Support</p>
              <p className="text-xs">24/7 Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
