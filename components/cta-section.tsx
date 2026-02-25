"use client"

import { Button } from "@/components/ui/3d-button"
import { IconSparkles, IconArrowRight } from "@tabler/icons-react"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative bg-background rounded-3xl border-4 border-b-8 border-border shadow-2xl overflow-hidden"
        >
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6"
            >
              <IconSparkles className="w-8 h-8 text-[rgba(255,117,38,1)]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
            >
              Ready for a Healthier Smile?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              Book your appointment today—no long waits, no pressure, just honest and gentle dental care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a href="https://wa.me/917982769147?text=Hi%20Patel%20Dental%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full" leadingIcon={IconArrowRight}>
                  Book on WhatsApp
                </Button>
              </a>
              <a href="tel:+917982769147">
                <Button size="lg" variant="outline" className="rounded-full bg-transparent">
                  Call Us Now
                </Button>
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm text-muted-foreground mt-6"
            >
              Morning & Evening slots available • Trusted by 1,000+ patients • 4.8 ⭐ on Google
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
