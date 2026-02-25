"use client"

import { motion } from "framer-motion"

export function StatsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-center mb-16 leading-tight text-balance"
        >
          <span className="text-accent">Award-winning dental care</span>, trusted by thousands, and{" "}
          <span className="text-accent">transforming smiles</span> in Greater Noida.
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border-2 border-dashed border-border rounded-3xl p-8 text-center"
          >
            <div className="mb-4">
              <span className="font-serif text-7xl md:text-8xl font-bold">4.8</span>
              <span className="text-accent text-5xl md:text-6xl font-serif font-bold">⭐</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Google Rating</h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Trusted by 43 verified patients on Google with consistent 5-star reviews for exceptional care.
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-2 border-dashed border-border rounded-3xl p-8 text-center"
          >
            <div className="mb-4">
              <span className="font-serif text-7xl md:text-8xl font-bold">10</span>
              <span className="text-accent text-5xl md:text-6xl font-serif font-bold">+</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Years Experience</h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Over a decade of trusted dental care serving Greater Noida with professional expertise and personal touch.
            </p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-2 border-dashed border-border rounded-3xl p-8 text-center"
          >
            <div className="mb-4">
              <span className="font-serif text-7xl md:text-8xl font-bold">1,000</span>
              <span className="text-accent text-5xl md:text-6xl font-serif font-bold">+</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Smiles Treated</h3>
            <p className="text-muted-foreground font-sans leading-relaxed">
              More than 1,000 happy patients have entrusted us with their dental health and smile transformations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
