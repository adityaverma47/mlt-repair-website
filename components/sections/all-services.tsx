"use client"

import { useEffect, useRef, useState } from "react"
import { businessConfig } from "@/lib/config"

export function AllServices() {
  const [expandedCategory, setExpandedCategory] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const allServices = [
    {
      category: "Laptop Repair Services",
      services: [
        { name: "Laptop System Formatting", duration: "1-3 hrs" },
        { name: "Touchpad Issue", duration: "30 min - 2 hrs" },
        { name: "USB/HDMI/Ethernet Port Issue", duration: "3-7 days" },
        { name: "Water Damage", duration: "1-3 days" },
        { name: "Overheating Issue", duration: "3-5 days" },
        { name: "Not Charging / Plugged In But Not Charging", duration: "2-5 days" },
        { name: "Keypad Issue", duration: "3-7 days" },
        { name: "Hard Disk Repair/Replacement", duration: "1-3 days" },
        { name: "Battery Repair/Replacement", duration: "1-2 hrs" },
        { name: "Display Issue/Replacement", duration: "3-7 days" },
        { name: "Cooling Pad Issue", duration: "30 min - 1 hr" },
        { name: "Physical Damage Repair", duration: "3-5 days" },
        { name: "Motherboard Repair", duration: "5-7 days" },
        { name: "Graphics Card Repair", duration: "3-5 days" },
        { name: "BIOS/UEFI Issues", duration: "2-3 hrs" },
        { name: "Software Installation", duration: "30 min - 1 hr" },
        { name: "Virus Removal", duration: "1-2 hrs" },
        { name: "Memory Upgrade", duration: "30 min" },
        { name: "Storage Upgrade (SSD)", duration: "30 min - 1 hr" },
        { name: "Performance Optimization", duration: "1-2 hrs" },
        { name: "Keyboard Replacement", duration: "1-2 hrs" },
      ],
    },
    {
      category: "CCTV & Security",
      services: [
        { name: "CCTV Installation", duration: "Same day" },
        { name: "CCTV Dealer Services", duration: "Consultation" },
        { name: "CCTV Repair & Maintenance", duration: "Varies" },
        { name: "DVR/NVR Setup", duration: "Same day" },
        { name: "Camera Calibration", duration: "1-2 hrs" },
        { name: "Network Setup", duration: "2-3 hrs" },
      ],
    },
    {
      category: "Computer Services",
      services: [
        { name: "Desktop Repair", duration: "Varies" },
        { name: "PC Assembly", duration: "2-3 hrs" },
        { name: "Network Setup", duration: "2-3 hrs" },
        { name: "Printer Setup", duration: "1 hr" },
      ],
    },
  ]

  const handleQuoteClick = (serviceName: string) => {
    const quoteSection = document.getElementById("contact")
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" })
      const serviceSelect = document.querySelector("select[name='service']") as HTMLSelectElement
      if (serviceSelect) {
        serviceSelect.value = serviceName
      }
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="all-services" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Complete Service Catalog</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Explore our comprehensive range of laptop repair, CCTV services, and computer solutions
          </p>
        </div>

        {/* Services Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {allServices.map((categoryItem, categoryIndex) => (
            <div
              key={categoryIndex}
              className="border border-border/50 rounded-lg sm:rounded-xl overflow-hidden hover:border-primary/50 transition-all"
            >
              <button
                onClick={() => setExpandedCategory(expandedCategory === categoryIndex ? -1 : categoryIndex)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between bg-card hover:bg-card/80 transition-colors text-left gap-3"
              >
                <h3 className="text-base sm:text-lg font-bold text-foreground">{categoryItem.category}</h3>
                <svg
                  className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${expandedCategory === categoryIndex ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {expandedCategory === categoryIndex && (
                <div className="px-4 sm:px-6 py-4 border-t border-border/30 bg-background/50 animate-fade-in-up">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {categoryItem.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="flex items-start justify-between gap-3 p-3 sm:p-4 rounded-lg bg-card/30 hover:bg-card/60 transition-all group cursor-pointer"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-xs sm:text-sm text-foreground group-hover:text-primary transition-colors break-words">
                            {service.name}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">⏱ {service.duration}</p>
                        </div>
                        <button
                          onClick={() => handleQuoteClick(service.name)}
                          className="px-2 sm:px-3 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-lg font-medium text-xs whitespace-nowrap hover:bg-primary hover:text-primary-foreground transition-all flex-shrink-0"
                        >
                          Quote
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-sm sm:text-base text-muted-foreground mb-4">
            Need a custom solution? We handle all tech-related issues.
          </p>
          <a
            href={`tel:${businessConfig.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
