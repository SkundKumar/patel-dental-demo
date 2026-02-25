export function ClientLogos() {
  const badges = [
    "4.8 ⭐ Google Rated",
    "43 Happy Reviews",
    "Root Canal Specialists",
    "Family Dentistry",
    "Greater Noida's Trusted Clinic",
  ]

  return (
    <section className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-center mb-8 text-foreground/60">Why Choose Us</h2>
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {badges.map((badge, index) => (
            <div key={index} className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground border border-border">
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
