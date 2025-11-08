"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Lock, CheckCircle, CreditCard, Smartphone, Apple, DollarSign } from "lucide-react"

export default function BookingPaymentPage() {
  const [step, setStep] = useState<"booking" | "payment" | "confirmation">("booking")
  const [selectedPayment, setSelectedPayment] = useState<"card" | "paypal" | "apple" | "google">("card")
  const [bookingData, setBookingData] = useState({
    trainerName: "Alex Johnson",
    sessionDate: "",
    sessionTime: "",
    sessionType: "Personal Training",
    duration: "60 mins",
  })
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  })

  const sessionPrice = 99.99
  const tax = sessionPrice * 0.1
  const total = sessionPrice + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setBookingData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePayment = () => {
    setStep("confirmation")
  }

  const paymentMethods = [
    { id: "card", label: "Credit/Debit Card", icon: CreditCard },
    { id: "paypal", label: "PayPal", icon: DollarSign },
    { id: "apple", label: "Apple Pay", icon: Apple },
    { id: "google", label: "Google Pay", icon: Smartphone },
  ]

  if (step === "confirmation") {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center py-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center mb-12">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#84FF00] to-[#00D9FF] rounded-full flex items-center justify-center animate-[pulse-glow_2s_ease-in-out_infinite]">
                <CheckCircle className="w-12 h-12 text-black" />
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                BOOKING <span className="text-[#84FF00]">CONFIRMED</span>
              </h1>
              <p className="text-xl text-gray-400 mb-4">Your training session has been booked!</p>
              <p className="text-gray-500">Confirmation has been sent to {formData.email}</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Session Details</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-gray-400">Trainer</span>
                  <span className="text-white font-bold">{bookingData.trainerName}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-gray-400">Session Type</span>
                  <span className="text-white font-bold">{bookingData.sessionType}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-gray-400">Date</span>
                  <span className="text-white font-bold">{bookingData.sessionDate}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-gray-400">Time</span>
                  <span className="text-white font-bold">{bookingData.sessionTime}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-gray-400">Duration</span>
                  <span className="text-white font-bold">{bookingData.duration}</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 space-y-2">
                <div className="flex justify-between text-gray-300">
                  <span>Session Fee:</span>
                  <span>${sessionPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Tax (10%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#84FF00] font-bold text-lg pt-4 border-t border-white/10">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/trainers" className="flex-1">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  View Other Trainers
                </Button>
              </Link>
              <Link href="/profile" className="flex-1">
                <Button size="lg" className="w-full bg-[#84FF00] text-black hover:bg-[#84FF00]/90 font-bold">
                  View My Bookings
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />
      <div className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <Link
            href="/trainers"
            className="flex items-center gap-2 text-[#84FF00] hover:text-[#84FF00]/80 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Trainers
          </Link>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-12">
            BOOK A <span className="text-[#84FF00]">SESSION</span>
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Session Booking */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6">
                <h2 className="text-2xl font-bold text-white mb-6">Session Details</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="sessionDate"
                    value={bookingData.sessionDate}
                    onChange={handleBookingChange}
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#84FF00] focus:outline-none transition-colors"
                  />
                  <input
                    type="time"
                    name="sessionTime"
                    value={bookingData.sessionTime}
                    onChange={handleBookingChange}
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#84FF00] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Billing Information */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6">
                <h2 className="text-2xl font-bold text-white mb-6">Billing Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="col-span-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#84FF00] focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="col-span-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#84FF00] focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="col-span-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#84FF00] focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#84FF00] focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#84FF00] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6">
                <h2 className="text-2xl font-bold text-white mb-6">Payment Method</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedPayment(method.id as any)}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 flex flex-col items-center gap-2 ${
                        selectedPayment === method.id
                          ? "border-[#84FF00] bg-[#84FF00]/10"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    >
                      <method.icon className="h-6 w-6 text-[#84FF00]" />
                      <span className="text-sm text-white font-medium text-center">{method.label}</span>
                    </button>
                  ))}
                </div>

                {selectedPayment === "card" && (
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#84FF00] focus:outline-none transition-colors"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="expiry"
                        placeholder="MM/YY"
                        value={formData.expiry}
                        onChange={handleInputChange}
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#84FF00] focus:outline-none transition-colors"
                      />
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#84FF00] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                )}

                {selectedPayment !== "card" && (
                  <div className="text-center py-8 text-gray-400">
                    <p>
                      Click "Complete Booking" to proceed with{" "}
                      {selectedPayment === "paypal"
                        ? "PayPal"
                        : selectedPayment === "apple"
                          ? "Apple Pay"
                          : "Google Pay"}
                      .
                    </p>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <Lock className="h-5 w-5 text-[#84FF00]" />
                <span className="text-sm">Your payment information is secure and encrypted</span>
              </div>
            </div>

            {/* Booking Summary */}
            <div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sticky top-20">
                <h2 className="text-2xl font-bold text-white mb-6">Booking Summary</h2>
                <div className="space-y-4 mb-6">
                  <div className="pb-4 border-b border-white/10">
                    <p className="text-gray-400 text-sm">Trainer</p>
                    <p className="text-white font-bold text-lg">{bookingData.trainerName}</p>
                  </div>
                  <div className="pb-4 border-b border-white/10">
                    <p className="text-gray-400 text-sm">Session Type</p>
                    <p className="text-white font-bold">{bookingData.sessionType}</p>
                  </div>
                  <div className="pb-4 border-b border-white/10">
                    <p className="text-gray-400 text-sm">Duration</p>
                    <p className="text-white font-bold">{bookingData.duration}</p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 space-y-2 mb-6">
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>Session Fee:</span>
                    <span>${sessionPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>Tax:</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#84FF00] font-bold text-lg pt-2 border-t border-white/10">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  onClick={handlePayment}
                  size="lg"
                  className="w-full bg-[#84FF00] text-black hover:bg-[#84FF00]/90 font-bold mb-4 transition-all hover:shadow-[0_0_30px_rgba(132,255,0,0.5)]"
                >
                  Complete Booking
                </Button>

                <Link href="/trainers">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    Cancel
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
