"use client"

import { motion } from "framer-motion"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      client: "Vaibhav Kumar",
      project: "Root Canal — Pain Free",
      metric: "Complete Relief",
      description: "Came in with severe tooth pain, left with a smile. Gentle treatment and zero discomfort.",
      image: "/images/dental-treatment.jpg",
    },
    {
      client: "Pratima Verma",
      project: "Family Dental Checkup",
      metric: "Whole Family Care",
      description: "The whole family comes here now. Doctor is soft spoken, patient, and incredibly thorough.",
      image: "/images/dental-hero.jpg",
    },
    {
      client: "Patient",
      project: "Smile Makeover",
      metric: "Wedding Ready",
      description: "Wanted to fix my smile before my wedding. The results were beyond what I expected.",
      image: "/images/dental-smile.jpg",
    },
    {
      client: "Parent",
      project: "Child's First Visit",
      metric: "Happy & Confident",
      description: "My daughter was nervous but the doctor made her feel completely at ease. Best experience.",
      image: "/images/dental-hero.jpg",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Real Patients. Real Results.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            See how we've helped patients achieve their smile goals with gentle, professional care.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-secondary rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.project}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-sm font-semibold text-primary mb-2">{study.client}</div>
                <h3 className="font-serif text-2xl font-bold mb-3">{study.project}</h3>
                <div className="text-3xl font-bold text-primary mb-4">{study.metric}</div>
                <p className="text-muted-foreground leading-relaxed">{study.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
