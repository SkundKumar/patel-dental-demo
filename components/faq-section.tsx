"use client"

import { useState } from "react"
import { IconChevronDown } from "@tabler/icons-react"
import { motion } from "framer-motion"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What are your opening hours?",
      answer:
        "We are open Monday to Saturday, 10:00 AM to 1:00 PM and 5:00 PM to 9:00 PM. Call or WhatsApp us to book your slot.",
    },
    {
      question: "Do you treat children?",
      answer:
        "Absolutely. We provide gentle, friendly dental care for patients of all ages including young children.",
    },
    {
      question: "Is root canal treatment painful?",
      answer:
        "With modern techniques and our gentle approach, root canal treatment is far more comfortable than most people expect. Most patients are surprised by how easy it is.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "Simply click 'Book on WhatsApp' anywhere on this page or call us directly at 079827 69147.",
    },
    {
      question: "Where are you located?",
      answer:
        "We are at Shop No. G-20, Gravity Shop, Gaur Atulyam, Omicron I, Greater Noida, UP 201310—easily accessible with parking nearby.",
    },
    {
      question: "Do you provide treatment cost estimates?",
      answer:
        "Yes, we provide clear, upfront estimates after your initial consultation. No hidden costs, ever.",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Got Questions? We've Got Answers.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Everything you need to know about Patel Dental Clinic.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-border rounded-xl overflow-hidden bg-secondary"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-background/50 transition-colors"
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                <IconChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 text-muted-foreground leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
