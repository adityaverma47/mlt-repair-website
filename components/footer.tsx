"use client"

import { businessConfig } from "@/lib/config"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
          {/* About */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-lg">ML</span>
              </div>
              <div>
                <p className="font-bold text-xs sm:text-sm text-foreground">Maa Laptop</p>
                <p className="text-xs text-secondary">Technology</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4">{businessConfig.description}</p>
            <p className="text-xs text-muted-foreground font-medium">Established: {businessConfig.established}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4 text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-foreground mb-4 text-sm sm:text-base">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#all-services"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Laptop Repair
                </a>
              </li>
              <li>
                <a
                  href="#all-services"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  CCTV Installation
                </a>
              </li>
              <li>
                <a
                  href="#all-services"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Computer Services
                </a>
              </li>
              <li>
                <a
                  href="#all-services"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Data Recovery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4 text-sm sm:text-base">Contact</h3>
            <div className="space-y-2">
              <div className="flex gap-2">
                <svg
                  className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href={`tel:${businessConfig.phone.replace(/\s/g, "")}`}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  {businessConfig.phoneFormatted}
                </a>
              </div>
              <div className="flex gap-2">
                <svg
                  className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${businessConfig.email}`}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-secondary transition-colors break-all"
                >
                  {businessConfig.email}
                </a>
              </div>
              <div className="flex gap-2">
                <svg
                  className="w-4 h-4 text-accent flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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
                <a
                  href={businessConfig.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-colors break-all"
                >
                  View Location
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-border pt-6 sm:pt-8 mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm font-medium text-foreground mb-3">Payment Methods Accepted</p>
          <p className="text-xs sm:text-sm text-muted-foreground">{businessConfig.paymentMethods.join(" • ")}</p>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-6 sm:pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
            {/* Socials */}
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              <a
                href={businessConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-card hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={businessConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-card hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08a14.985 14.985 0 01-.06 4.043c-.049 1.064-.218 1.791-.465 2.427a4.903 4.903 0 01-1.153 1.772 4.99 4.99 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08a14.985 14.985 0 01-4.043-.06c-1.064-.049-1.791-.218-2.427-.465a4.903 4.903 0 01-1.772-1.153 4.99 4.99 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 4.041v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
            </div>

            {/* Legal */}
            <div className="flex justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </a>
              <span className="text-border">•</span>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center sm:text-right">
              <p className="text-xs sm:text-sm text-muted-foreground">
                © {currentYear} {businessConfig.name}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
