"use client"

import { useState, useEffect } from "react"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  const WHATSAPP_NUMBER = "917844013398"
  const WHATSAPP_MESSAGE = "Hi Maa Laptop Technology, I need your services!"

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
      }`}
      aria-label="Chat on WhatsApp"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.782 1.276c-1.314.734-2.46 1.78-3.282 2.961C2.957 10.718 2.226 12.75 2.226 15.046c0 4.993 3.975 9.014 9.013 9.014 2.206 0 4.29-.774 5.961-2.173l.04-.032 4.181.779-1.994-4.868-.02-.03a8.997 8.997 0 002.348-5.676c0-4.993-3.975-9.014-9.013-9.014zM16.38 2.534A11.9 11.9 0 0012 2c6.622 0 12 5.378 12 12s-5.378 12-12 12A11.898 11.898 0 01.039 15.789c3.851.564 7.687-.107 10.604-1.985.889.552 1.944.862 3.087.862 3.995 0 7.233-3.238 7.233-7.233 0-1.063-.231-2.073-.644-3.015 2.738-1.35 4.601-4.119 4.601-7.284 0-4.622-3.75-8.372-8.372-8.372z" />
      </svg>
    </a>
  )
}
