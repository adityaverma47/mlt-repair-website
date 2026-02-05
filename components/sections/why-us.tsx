"use client"

import { useEffect, useRef, useState } from "react"

const whyUs = [
  {
    title: "Best Service",
    description: "Recognized as the best laptop and CCTV service in Lucknow",
    icon: "award",
  },
  {
    title: "Fast Turnaround",
    description: "Quick diagnosis and repair with same-day service available",
    icon: "zap",
  },
  {
    title: "Trusted by 2000+",
    description: "Thousands of satisfied customers across Lucknow",
    icon: "users",
  },
  {
    title: "Expert Technicians",
    description: "Highly trained and certified professionals",
    icon: "wrench",
  },
  {
    title: "100% Genuine Parts",
    description: "Only authentic components used in all repairs",
    icon: "trending",
  },
  {
    title: "24/7 Support",
    description: "Always available to assist with your needs",
    icon: "clock",
  },
]

const whyUsIcons = {
  award: (
    <svg className="text-primary w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>
  ),
  zap: (
    <svg className="text-primary w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  users: (
    <svg className="text-primary w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 8.048M12 4.354a4 4 0 110 8.048m0 0a3.72 3.72 0 00-7.662 0M12 4.354a4 4 0 110 8.048m0 0a3.72 3.72 0 00-7.662 0M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  wrench: (
    <svg className="text-primary w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
      />
    </svg>
  ),
  trending: (
    <svg className="text-primary w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7H5v12h12V9m0-2L9 9" />
    </svg>
  ),
  clock: (
    <svg className="text-primary w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
}

export function WhyUs() {
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

  return (
    <section id="why-us" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Why Choose Maa Laptop Technology</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            We stand out with our commitment to quality, customer satisfaction, and technical excellence
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {whyUs.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg sm:rounded-2xl border border-blue-500/20 bg-gradient-to-br from-card/60 to-card/40 p-4 sm:p-8 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 flex items-center justify-center mb-4 group-hover:from-blue-500/40 group-hover:to-cyan-500/20 transition-all duration-300 border border-blue-500/20 group-hover:border-blue-400/40">
                  {whyUsIcons[item.icon as keyof typeof whyUsIcons]}
                </div>

                <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-8 bg-gradient-to-r from-blue-500/15 via-cyan-500/10 to-purple-500/10 rounded-2xl sm:rounded-3xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
          <div className="text-center group hover:scale-110 transition-transform duration-300 cursor-default">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">2000+</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Happy Customers</p>
          </div>
          <div className="text-center group hover:scale-110 transition-transform duration-300 cursor-default">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">2023</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Established</p>
          </div>
          <div className="text-center group hover:scale-110 transition-transform duration-300 cursor-default">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400 mb-2">100%</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Genuine Parts</p>
          </div>
          <div className="text-center group hover:scale-110 transition-transform duration-300 cursor-default">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-2">5★</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Rated</p>
          </div>
        </div>
      </div>
    </section>
  )
}
