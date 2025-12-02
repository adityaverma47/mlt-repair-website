"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { businessConfig } from "@/lib/config"

export function QuoteRequest() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    description: "",
    budget: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Submit to Google Sheets
      const formDataToSubmit = new FormData()
      formDataToSubmit.append("Name", formData.name)
      formDataToSubmit.append("Phone", formData.phone)
      formDataToSubmit.append("Email", formData.email)
      formDataToSubmit.append("Service", formData.service)
      formDataToSubmit.append("Description", formData.description)
      formDataToSubmit.append("Budget", formData.budget)
      formDataToSubmit.append("Source", "Quote Request Form")
      formDataToSubmit.append("Timestamp", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }))

      await fetch(businessConfig.googleSheetScriptUrl, {
        method: "POST",
        body: formDataToSubmit,
        mode: "no-cors",
      })

      setSubmitStatus("success")
      setFormData({ name: "", phone: "", email: "", service: "", description: "", budget: "" })

      // Send WhatsApp notification
      const message = `New Quote Request from ${formData.name}. Service: ${formData.service}. Phone: ${formData.phone}`
      window.open(`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank")
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }
  }

  return (
    <section id="quote" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Request a Quote</h2>
          <p className="text-lg text-muted-foreground">
            Get a free quote for your service. We'll respond within 1 hour with detailed pricing and timeline.
          </p>
        </div>

        <div
          ref={ref}
          className={`bg-card border border-border/50 rounded-2xl p-8 md:p-12 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitStatus === "success" && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-600">
                ✓ Quote request submitted successfully! We'll contact you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-600">
                Error submitting quote. Please try again.
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Service Required *</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                >
                  <option value="">Select a service</option>
                  <option value="Laptop Repair">Laptop Repair</option>
                  <option value="CCTV Installation">CCTV Installation</option>
                  <option value="Computer Services">Computer Services</option>
                  <option value="Data Recovery">Data Recovery</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Describe Your Issue *</label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 resize-none"
                placeholder="Describe your device issue in detail..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Budget (Optional)</label>
              <input
                type="text"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                placeholder="Your budget range (e.g., ₹1000 - ₹5000)"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Get Quote"}
              </button>
              <a
                href={`https://wa.me/${businessConfig.whatsappNumber}?text=Hi%20Maa%20Laptop%20Technology%2C%20I%20need%20a%20quote%20for%20your%20services`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.782 1.276c-1.314.734-2.46 1.78-3.282 2.961C2.957 10.718 2.226 12.75 2.226 15.046c0 4.993 3.975 9.014 9.013 9.014 2.206 0 4.29-.774 5.961-2.173l.04-.032 4.181.779-1.994-4.868-.02-.03a8.997 8.997 0 002.348-5.676c0-4.993-3.975-9.014-9.013-9.014zM16.38 2.534A11.9 11.9 0 0012 2c6.622 0 12 5.378 12 12s-5.378 12-12 12A11.898 11.898 0 01.039 15.789c3.851.564 7.687-.107 10.604-1.985.889.552 1.944.862 3.087.862 3.995 0 7.233-3.238 7.233-7.233 0-1.063-.231-2.073-.644-3.015 2.738-1.35 4.601-4.119 4.601-7.284 0-4.622-3.75-8.372-8.372-8.372z" />
                </svg>
                WhatsApp Quote
              </a>
            </div>

            <p className="text-xs text-muted-foreground text-center pt-4 border-t border-border">
              Your information is secure and will only be used to contact you about your quote.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
