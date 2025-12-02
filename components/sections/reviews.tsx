"use client"

import { useEffect, useRef, useState } from "react"

const reviews = [
  {
    name: "Shubham Rawat",
    title: "Laptop & CCTV Services",
    rating: 5,
    text: "Best service center for laptop, computer and CCTV camera. Best computer sales and service center.",
  },
  {
    name: "Sonu Verma",
    title: "Comprehensive Tech Solutions",
    rating: 5,
    text: "Best laptop, computer and camera service centre in Lucknow.",
  },
  {
    name: "Aman Choudhary",
    title: "Excellent Advisors",
    rating: 5,
    text: "Best service in computer/laptop repairing. Best advisor about PC/Laptop. Very satisfied with Maa Laptop Technology.",
  },
  {
    name: "Gungun Kanaujiya",
    title: "CCTV & Computer Specialist",
    rating: 5,
    text: "CCTV camera work very best and satisfying work. Neat and clean work. Also work with computer repair and upgrade computers.",
  },
  {
    name: "Krishna Singh",
    title: "Complete Tech Services",
    rating: 5,
    text: "Best computer repair, best laptop repair, best CCTV camera installation and service.",
  },
  {
    name: "SS Computer Academy",
    title: "Professional Installation",
    rating: 5,
    text: "Best Service and sale Computer, Laptop and CCTV in Arjunganj Lucknow.",
  },
]

export function Reviews() {
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
    <section id="reviews" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Customer Reviews</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            What our satisfied customers say about our services
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`group bg-card border border-border/50 rounded-xl sm:rounded-2xl p-4 sm:p-8 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array(review.rating)
                  .fill(0)
                  .map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-accent text-accent" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">"{review.text}"</p>

              {/* Author */}
              <div className="border-t border-border/30 pt-4">
                <p className="font-bold text-sm sm:text-base text-foreground">{review.name}</p>
                <p className="text-xs sm:text-sm text-secondary">{review.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
