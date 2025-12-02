"use client"

import { useEffect, useRef, useState } from "react"

const galleryImages = [
  {
    title: "Laptop Battery Replacement",
    description:
      "Professional laptop battery replacement service. We use genuine high-capacity batteries ensuring long battery life and optimal performance for your device.",
    query: "laptop battery replacement service workshop",
  },
  {
    title: "CCTV Installation",
    description:
      "Complete CCTV camera installation and setup. We provide professional installation with secure mounting, proper wiring, and configuration for maximum coverage and security.",
    query: "professional CCTV camera installation setup",
  },
  {
    title: "Keyboard Repair",
    description:
      "Expert laptop and desktop keyboard repair service. We handle key replacement, mechanical repairs, and cleaning to restore full functionality to your keyboard.",
    query: "laptop keyboard repair replacement service",
  },
  {
    title: "Display Repair & Replacement",
    description:
      "High-quality laptop and desktop display repair. We replace cracked screens, fix backlight issues, and ensure crystal-clear visuals with genuine replacement parts.",
    query: "laptop screen display repair replacement service",
  },
  {
    title: "Computer Assembly",
    description:
      "Professional computer building and assembly service. We source genuine components, assemble systems to specifications, and provide full testing before delivery.",
    query: "computer PC assembly building service workshop",
  },
  {
    title: "System Maintenance",
    description:
      "Comprehensive computer maintenance including cleaning, software optimization, virus removal, and system updates to keep your device running at peak performance.",
    query: "computer system maintenance cleaning optimization service",
  },
]

export function Gallery() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
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
    <section id="gallery" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Our Work Gallery</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Click on images to see detailed descriptions of our professional services
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-video bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 cursor-pointer text-left ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={`/.jpg?height=400&width=600&query=${encodeURIComponent(image.query)}`}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 sm:p-4">
                <p className="text-white font-semibold text-sm sm:text-base">{image.title}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Modal - Improved responsive modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in-up"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-8 max-w-2xl w-full border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4 sm:mb-6 gap-4">
                <h3 className="text-lg sm:text-2xl font-bold text-foreground">{selectedImage.title}</h3>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                {selectedImage.description}
              </p>
              <button
                onClick={() => {
                  setSelectedImage(null)
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="w-full px-6 py-2 sm:py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all text-sm sm:text-base"
              >
                Request Service
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
