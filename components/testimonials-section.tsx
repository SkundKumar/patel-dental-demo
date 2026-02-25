import { TestimonialSlider, type Testimonial } from "@/components/ui/testimonial-slider"

const testimonials: Testimonial[] = [
  {
    image: "/images/patient-1.jpg",
    quote:
      "I've been a patient at Patel Dental Clinic for two years. Had a root canal and a new cap fitted—the entire process was handled professionally and with great care. Highly recommend.",
    name: "Vaibhav Kumar",
    role: "Patient, Greater Noida",
    rating: 5,
  },
  {
    image: "/images/patient-2.jpg",
    quote:
      "Really a good clinic. Soft spoken and professional doctor who takes the time to explain everything. I felt completely at ease.",
    name: "Anita S.",
    role: "Patient, Greater Noida",
    rating: 5,
  },
  {
    image: "/images/patient-3.jpg",
    quote:
      "Excellent service with a personal touch. I highly recommend this place for all your dental problems. The team genuinely cares.",
    name: "Deepak R.",
    role: "Patient, Greater Noida",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 px-4 bg-background overflow-visible" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">What Our Patients Are Saying</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from patients who've experienced our gentle, professional care.
          </p>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  )
}
