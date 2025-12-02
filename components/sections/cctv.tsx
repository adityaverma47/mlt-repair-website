"use client"

import { useEffect, useRef, useState } from "react"

const cctvFeatures = [
  {
    title: "Professional Installation",
    description: "Expert technicians with years of experience in CCTV setup and configuration",
    icon: "home",
  },
  {
    title: "Remote Monitoring",
    description: "Access your cameras anytime, anywhere through mobile app or web portal",
    icon: "wifi",
  },
  {
    title: "Full Maintenance",
    description: "Regular maintenance, cleaning, and repair services included",
    icon: "settings",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock customer support for any issues or concerns",
    icon: "eye",
  },
]

const iconMap = {
  home: (
    <svg className="text-secondary" size={24} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h2a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h2a1 1 0 001-1V9M9 5h6m0 0l-4-2m4 2l4-2"
      />
    </svg>
  ),
  wifi: (
    <svg className="text-secondary" size={24} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
      />
    </svg>
  ),
  settings: (
    <svg className="text-secondary" size={24} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  eye: (
    <svg className="text-secondary" size={24} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  ),
}

export function CCTV() {
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            ref={ref}
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <div>
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
                CCTV Security Solutions
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional CCTV Services</h2>
              <p className="text-lg text-muted-foreground">
                From installation to maintenance, we provide complete CCTV solutions for homes and businesses.
                High-quality cameras, professional setup, and ongoing support.
              </p>
            </div>

            <div className="space-y-4">
              {cctvFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    {iconMap[feature.icon as keyof typeof iconMap]}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="tel:+919876543210"
              className="inline-block px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all hover:shadow-lg hover:shadow-secondary/20"
            >
              Request CCTV Quote
            </a>
          </div>

          {/* Right Visual */}
          <div
            className={`relative h-96 transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent rounded-3xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl opacity-20 blur-2xl" />
              <div className="relative z-10 text-center">
                <svg
                  className="w-24 h-24 text-secondary mx-auto mb-4 opacity-80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <p className="text-foreground font-bold">Complete Security Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
