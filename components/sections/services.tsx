"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const popularServices = [
  {
    title: "Laptop Battery Repair",
    description: "Battery replacement and repair services",
    duration: "1-2 hrs",
    image: "/services/battery.jpg",
    gradient: "from-yellow-400 to-yellow-600",
  },
  {
    title: "Charging Issues",
    description: "Fix charging port and adapter problems",
    duration: "2-5 days",
    image: "/services/charging.jpg",
    gradient: "from-orange-400 to-orange-600",
  },
  {
    title: "Display Repair",
    description: "Screen replacement and repair",
    duration: "3-7 days",
    image: "/services/display.jpg",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    title: "Keyboard & Touchpad",
    description: "Keyboard replacement and repair",
    duration: "2-4 days",
    image: "/services/keyboard.jpg",
    gradient: "from-purple-400 to-purple-600",
  },
  {
    title: "CCTV Installation",
    description: "Professional CCTV camera setup",
    duration: "Same day",
    image: "/services/cctv.jpg",
    gradient: "from-red-400 to-red-600",
  },
  {
    title: "Data Recovery",
    description: "Recover lost data from drives",
    duration: "1-3 days",
    image: "/services/data.jpg",
    gradient: "from-cyan-400 to-cyan-600",
  },
]

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleQuoteClick = () => {
    const quoteSection = document.getElementById("quote")
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Popular Services</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Quick access to our most requested services. Get expert solutions for your laptop and tech needs.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {popularServices.map((service, index) => (
            <div
              key={index}
              className={`group bg-background border border-border/50 rounded-xl sm:rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-2xl cursor-pointer ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-32 sm:h-40 bg-gradient-to-br overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = "none"
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`} />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">{service.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-border gap-3">
                  <span className="text-xs sm:text-sm font-medium text-secondary whitespace-nowrap">
                    ⏱ {service.duration}
                  </span>
                  <button
                    onClick={handleQuoteClick}
                    className="px-3 sm:px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium text-xs sm:text-sm hover:bg-primary hover:text-primary-foreground transition-colors group-hover:translate-x-1"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="#all-services"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 border border-primary/30 text-foreground font-semibold rounded-lg hover:bg-primary/10 transition-all group text-sm sm:text-base"
          >
            View All 25+ Services
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
