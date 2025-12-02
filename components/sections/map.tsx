"use client"

import { useEffect, useRef, useState } from "react"
import { businessConfig } from "@/lib/config"

export function Map() {
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
    <section id="map" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Visit Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {businessConfig.address}, {businessConfig.city}-{businessConfig.pincode}, {businessConfig.state}
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Map Link */}
          <div className="rounded-2xl overflow-hidden border border-border/50 h-96 shadow-xl bg-card flex flex-col items-center justify-center">
            <svg className="w-16 h-16 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <a
              href={businessConfig.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-primary hover:underline"
            >
              Open Google Maps
            </a>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Get Directions</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Visit our professional service center at Nand Tower. We're located on Sultanpur Road in Arjunganj,
                easily accessible from all parts of Lucknow.
              </p>
              <a
                href={businessConfig.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Open in Google Maps
              </a>
            </div>

            {/* Location Details */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Address</h4>
                  <p className="text-sm text-muted-foreground">{businessConfig.address}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Hours</h4>
                  <p className="text-sm text-muted-foreground">
                    {businessConfig.daysOpen}: {businessConfig.hours}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Phone</h4>
                  <a
                    href={`tel:${businessConfig.phone.replace(/\s/g, "")}`}
                    className="text-sm text-accent hover:underline"
                  >
                    {businessConfig.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
