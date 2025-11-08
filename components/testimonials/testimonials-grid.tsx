"use client"

import { Star } from "lucide-react"
import { ScrollAnimatedCard } from "@/components/scroll-animated-card"

const testimonials = [
  {
    id: 1,
    name: "John Martinez",
    role: "Software Engineer",
    content:
      "FitZone completely transformed my fitness journey. The trainers are incredible and the facilities are top-notch!",
    rating: 5,
    image: "/testimonial-john.jpg",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Accountant",
    content:
      "Best investment I've made in my health. The personalized training programs really work and results speak for themselves.",
    rating: 5,
    image: "/testimonial-sarah.jpg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Teacher",
    content: "The community here is amazing. Everyone pushes each other to be better. Highly recommend FitZone!",
    rating: 5,
    image: "/testimonial-mike.jpg",
  },
]

export function TestimonialsGrid() {
  return (
    <section className="py-24 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimatedCard key={testimonial.id} animation="scale-in" delay={index * 150}>
                <div className="h-full bg-black border border-white/10 rounded-2xl p-8 hover:border-[#84FF00] hover:shadow-[0_0_30px_rgba(132,255,0,0.2)] transition-all duration-500">
                  <div className="flex items-center gap-2 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#84FF00] text-[#84FF00]" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6">{testimonial.content}</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border border-[#84FF00]"
                    />
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
