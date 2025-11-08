"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    })
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                GET IN <span className="text-[#84FF00]">TOUCH</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Have questions? Want to schedule a tour? We're here to help you start your fitness journey.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-black text-white mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#84FF00]/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-[#84FF00]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Address</h3>
                      <p className="text-gray-400">
                        123 Fitness Street
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#84FF00]/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-[#84FF00]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Phone</h3>
                      <p className="text-gray-400">+1 (234) 567-890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#84FF00]/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-[#84FF00]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Email</h3>
                      <p className="text-gray-400">info@fitzone.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#84FF00]/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-[#84FF00]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Hours</h3>
                      <p className="text-gray-400">
                        Monday - Friday: 5:00 AM - 11:00 PM
                        <br />
                        Saturday - Sunday: 6:00 AM - 10:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-8 aspect-video bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Map location"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-black text-white mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#84FF00] focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#84FF00] focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-white mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#84FF00] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#84FF00] focus:outline-none resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#84FF00] text-black hover:bg-[#84FF00]/90 font-bold"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
