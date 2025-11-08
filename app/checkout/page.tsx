"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Lock, CheckCircle, CreditCard, Smartphone, Apple, DollarSign } from "lucide-react"

export default function CheckoutPage() {
  const [step, setStep] = useState<"cart" | "payment" | "confirmation">("cart")
  const [selectedPayment, setSelectedPayment] = useState<"card" | "paypal" | "apple" | "google">("card")
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

  // Sample cart items
  const cartItems = [
    { id: 1, name: "Premium Whey Protein", price: 49.99, quantity: 2 },
    { id: 2, name: "Pre-Workout Supplement", price: 39.99, quantity: 1 },
    { id: 3, name: "Performance Training Shirt", price: 29.99, quantity: 1 },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.1
  const shipping = subtotal > 100 ? 0 : 9.99
  const total = subtotal + tax + shipping

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckout = () => {
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
                ORDER <span className="text-[#84FF00]">CONFIRMED</span>
              </h1>
              <p className="text-xl text-gray-400 mb-4">Thank you for your purchase!</p>
              <p className="text-gray-500">Order confirmation has been sent to {formData.email}</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Order Details</h2>
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-medium">{item.name}</p>
                      <p className="text-gray-400 text-sm">Quantity: {item.quantity}</p>
                    </div>
                    <p className="text-[#84FF00] font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-4 space-y-2">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Tax (10%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping:</span>
                  <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-[#84FF00] font-bold text-lg pt-4 border-t border-white/10">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop" className="flex-1">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  Continue Shopping
                </Button>
              </Link>
              <Link href={`/receipt/${Date.now()}`} className="flex-1">
                <Button size="lg" className="w-full bg-[#84FF00] text-black hover:bg-[#84FF00]/90 font-bold">
                  View Receipt
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
          {/* Breadcrumb */}
          <Link
            href="/shop"
            className="flex items-center gap-2 text-[#84FF00] hover:text-[#84FF00]/80 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-12">
            SECURE <span className="text-[#84FF00]">CHECKOUT</span>
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
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
                  <input
                    type="text"
                    name="zip"
                    placeholder="ZIP Code"
                    value={formData.zip}
                    onChange={handleInputChange}
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#84FF00] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Payment Method Selection */}
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

                {/* Card Payment Form */}
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

                {selectedPayment === "paypal" && (
                  <div className="text-center py-8 text-gray-400">
                    <p>You will be redirected to PayPal to complete your purchase securely.</p>
                  </div>
                )}

                {(selectedPayment === "apple" || selectedPayment === "google") && (
                  <div className="text-center py-8 text-gray-400">
                    <p>
                      Click the button below to authenticate with {selectedPayment === "apple" ? "Apple" : "Google"}{" "}
                      Pay.
                    </p>
                  </div>
                )}
              </div>

              {/* Security Notice */}
              <div className="flex items-center gap-3 text-gray-300 mb-6">
                <Lock className="h-5 w-5 text-[#84FF00]" />
                <span className="text-sm">Your payment information is secure and encrypted</span>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sticky top-20">
                <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-gray-300">
                      <div>
                        <p className="text-white font-medium">{item.name}</p>
                        <p className="text-xs text-gray-500">x{item.quantity}</p>
                      </div>
                      <p className="text-[#84FF00] font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-4 space-y-2 mb-6">
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>Tax:</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>Shipping:</span>
                    <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-[#84FF00] font-bold text-lg pt-2 border-t border-white/10">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  onClick={handleCheckout}
                  size="lg"
                  className="w-full bg-[#84FF00] text-black hover:bg-[#84FF00]/90 font-bold mb-4 transition-all hover:shadow-[0_0_30px_rgba(132,255,0,0.5)]"
                >
                  Complete Purchase
                </Button>

                <Link href="/shop">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    Continue Shopping
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
