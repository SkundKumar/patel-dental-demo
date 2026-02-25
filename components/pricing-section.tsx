"use client"

import { Button } from "@/components/ui/3d-button"
import { IconCheck } from "@tabler/icons-react"
import { motion } from "framer-motion"

export function PricingSection() {
  const plans = [
    {
      name: "Routine Care",
      price: "Contact for Pricing",
      period: "Get a Quote",
      description: "Perfect for regular maintenance and preventive care.",
      features: [
        "Checkups and cleanings",
        "X-rays and diagnostics",
        "Fillings",
        "Fluoride treatments",
        "Family dentistry",
        "Preventive care plans",
      ],
    },
    {
      name: "Specialist Treatments",
      price: "Contact for Pricing",
      period: "Get a Quote",
      description: "Comprehensive treatments handled with precision and care.",
      features: [
        "Root canals",
        "Crowns and caps",
        "Extractions",
        "Restorative procedures",
        "Gentle, modern techniques",
        "Personalized treatment plans",
      ],
      featured: true,
    },
    {
      name: "Cosmetic & Advanced",
      price: "Contact for Pricing",
      period: "Get a Quote",
      description: "Transform your smile with cosmetic and advanced treatments.",
      features: [
        "Teeth whitening",
        "Veneers",
        "Smile makeovers",
        "Advanced treatments",
        "Tailored to your goals",
        "Consultation included",
      ],
    },
  ]

  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Our Treatments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Transparent, affordable dental care with no hidden costs. Contact us for a personalised quote.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-2xl p-8 border-2 ${
                plan.featured ? "bg-background border-primary shadow-lg scale-105" : "bg-background border-border"
              }`}
            >
              {plan.featured && (
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Most Popular</div>
              )}
              <h3 className="font-serif text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-2">{plan.period}</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{plan.description}</p>
              <a href="https://wa.me/917982769147?text=Hi%20Patel%20Dental%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="block">
                <Button stretch className="mb-6 rounded-full">
                  Book on WhatsApp
                </Button>
              </a>
              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
