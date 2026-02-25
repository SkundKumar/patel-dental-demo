"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/3d-button"
import { IconMapPin, IconClock, IconPhone } from "@tabler/icons-react"

export function FindUsSection() {
  return (
    <section className="py-24 px-6 bg-background" id="find-us">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Find Us in Greater Noida
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Conveniently located at Gaur Atulyam, Omicron I—easy to reach with parking available nearby.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-border shadow-lg h-[400px] md:h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps?q=Patel+Dental+Clinic,+Gaur+Atulyam,+Greater+Noida&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Patel Dental Clinic Location"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Address */}
            <div className="bg-secondary p-6 rounded-2xl border border-border">
              <div className="flex gap-4">
                <IconMapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Shop No. G-20, Gravity Shop, Gaur Atulyam, Omicron I, Greater Noida, Uttar Pradesh 201310
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-secondary p-6 rounded-2xl border border-border">
              <div className="flex gap-4">
                <IconClock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Opening Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Saturday
                  </p>
                  <p className="text-muted-foreground">
                    10:00 AM - 1:00 PM
                  </p>
                  <p className="text-muted-foreground">
                    5:00 PM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-secondary p-6 rounded-2xl border border-border">
              <div className="flex gap-4">
                <IconPhone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Get in Touch</h3>
                  <a
                    href="tel:+917982769147"
                    className="text-primary hover:text-primary/80 transition-colors font-medium block mb-2"
                  >
                    079827 69147
                  </a>
                  <a
                    href="https://wa.me/917982769147?text=Hi%20Patel%20Dental%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a href="https://maps.google.com/?q=Patel+Dental+Clinic,+Gaur+Atulyam,+Greater+Noida" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full w-full">
                Get Directions
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
