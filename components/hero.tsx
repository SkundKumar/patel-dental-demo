"use client"

import { Button } from "@/components/ui/3d-button"
import { Handshake } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="pt-32 pb-12 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8 text-sm text-muted-foreground flex-wrap"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
            {"4.8 ⭐ Google Rated"}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
            {"10+ Years Experience"}
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-center leading-[1.1] mb-6 text-balance"
        >
          Trusted Dental Care,{" "}
          <span className="inline-flex items-center gap-3">
            Close to
            <span className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full text-[rgba(192,12,12,0.22)] bg-[rgba(10,10,10,0.14673913043478262)]">
              <Handshake className="w-5 h-5 md:w-7 md:h-7 text-[rgba(255,117,38,1)]" />
            </span>
            Home.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Gentle, professional dental treatment for the whole family. Serving Greater Noida with a personal touch—because your smile deserves the best.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="https://wa.me/917982769147?text=Hi%20Patel%20Dental%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full px-8 text-base">
              Book on WhatsApp 💬
            </Button>
          </a>
          <a href="tel:+917982769147">
            <Button size="lg" variant="outline" className="rounded-full px-8 text-base bg-transparent">
              Call Us → 079827 69147
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
