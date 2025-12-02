"use client"

import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { WhyUs } from "@/components/sections/why-us"
import { AllServices } from "@/components/sections/all-services"
import { CCTV } from "@/components/sections/cctv"
import { Reviews } from "@/components/sections/reviews"
import { Gallery } from "@/components/sections/gallery"
import { QuoteRequest } from "@/components/sections/quote-request"
import { Map } from "@/components/sections/map"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <Hero />
      <Services />
      <AllServices />
      <CCTV />
      <WhyUs />
      <Gallery />
      <Reviews />
      <QuoteRequest />
      <Map />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
