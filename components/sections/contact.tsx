"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { businessConfig } from "@/lib/config"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    message: "",
  })

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

  const submitToGoogleSheets = async (data: typeof formData) => {
    try {
      setIsSubmitting(true)

      const formDataToSubmit = new FormData()
      formDataToSubmit.append("Name", data.name)
      formDataToSubmit.append("Phone", data.phone)
      formDataToSubmit.append("Email", data.email)
      formDataToSubmit.append("Service", data.service)
      formDataToSubmit.append("Location", data.location)
      formDataToSubmit.append("Message", data.message)
      formDataToSubmit.append("Timestamp", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }))

      await fetch(businessConfig.googleSheetScriptUrl, {
        method: "POST",
        body: formDataToSubmit,
        mode: "no-cors",
      })

      setSubmitStatus("success")
      setTimeout(() => {
        setFormData({ name: "", phone: "", email: "", service: "", location: "", message: "" })
        setSubmitStatus("idle")
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    submitToGoogleSheets(formData)

    const message = `Hi, I'm ${formData.name}. I need ${formData.service} service. Phone: ${formData.phone}, Email: ${formData.email}, Location: ${formData.location}. Message: ${formData.message}`
    const whatsappUrl = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const contactMethods = [
    {
      title: "Call Us",
      value: businessConfig.phoneFormatted,
      icon: "phone",
      link: `tel:${businessConfig.phone.replace(/\s/g, "")}`,
    },
    {
      title: "WhatsApp Support",
      value: "Message us anytime",
      icon: "chat",
      link: `https://wa.me/${businessConfig.whatsappNumber}`,
    },
    {
      title: "Email",
      value: businessConfig.email,
      icon: "mail",
      link: `mailto:${businessConfig.email}`,
    },
    {
      title: "Location",
      value: "Nand Tower, Sultanpur Road, Arjunganj",
      icon: "location",
      link: businessConfig.googleMapsLink,
    },
  ]

  const icons = {
    phone: (
      <svg className="text-primary w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    chat: (
      <svg className="text-secondary w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    mail: (
      <svg className="text-accent w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    location: (
      <svg className="text-primary w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  }

  return (
    <section id="contact" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Get In Touch</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Contact us for services, quotes, or support. We're always ready to help!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Contact Info */}
          <div
            ref={ref}
            className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.icon === "chat" || method.icon === "location" ? "_blank" : undefined}
                rel={method.icon === "chat" || method.icon === "location" ? "noopener noreferrer" : undefined}
                className="flex gap-3 sm:gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  {icons[method.icon as keyof typeof icons]}
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm sm:text-base text-foreground mb-1">{method.title}</h3>
                  <p className="text-xs sm:text-sm text-primary hover:underline break-words">{method.value}</p>
                </div>
              </a>
            ))}

            {/* Hours */}
            <div className="flex gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <svg className="text-secondary w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-foreground mb-1">Business Hours</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {businessConfig.daysOpen}
                  <br />
                  {businessConfig.hours}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-card/50 border border-border/50 rounded-xl sm:rounded-2xl p-4 sm:p-8"
            >
              {submitStatus === "success" && (
                <div className="p-3 sm:p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-600 text-xs sm:text-sm">
                  ✓ Form submitted successfully! Check WhatsApp for confirmation.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-3 sm:p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-600 text-xs sm:text-sm">
                  Error submitting form. Please try again or contact us directly.
                </div>
              )}

              <div>
                <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 text-sm"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 text-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">Service Required *</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 text-sm"
                >
                  <option value="">Select a service</option>
                  <option value="Laptop Battery Repair">Laptop Battery Repair</option>
                  <option value="Charging Issues">Charging Issues</option>
                  <option value="Display Repair">Display Repair</option>
                  <option value="Keyboard Repair">Keyboard Repair</option>
                  <option value="CCTV Installation">CCTV Installation</option>
                  <option value="Computer Assembly">Computer Assembly</option>
                  <option value="Data Recovery">Data Recovery</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 text-sm"
                  placeholder="Your area/locality"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="w-full px-3 sm:px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 resize-none text-sm"
                  placeholder="Describe your issue..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-2 sm:py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all hover:shadow-lg hover:shadow-primary/20 disabled:opacity-50 text-sm sm:text-base"
              >
                {isSubmitting ? "Submitting..." : "Send via WhatsApp"}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Data is saved to our system & shared via WhatsApp. We'll respond within 1 hour during business hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
