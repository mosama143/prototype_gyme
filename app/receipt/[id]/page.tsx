"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Download, Printer as Print, ArrowLeft } from "lucide-react"
import { useRef } from "react"

export default function ReceiptPage() {
  const receiptRef = useRef<HTMLDivElement>(null)

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    const element = receiptRef.current
    if (element) {
      const html2pdf = require("html2pdf.js")
      html2pdf()
        .set({
          margin: 10,
          filename: "receipt.pdf",
          image: { type: "image/png", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { orientation: "portrait", unit: "mm", format: "a4" },
        })
        .from(element)
        .save()
    }
  }

  const orderItems = [
    { id: 1, name: "Premium Whey Protein", price: 49.99, quantity: 2, total: 99.98 },
    { id: 2, name: "Pre-Workout Supplement", price: 39.99, quantity: 1, total: 39.99 },
    { id: 3, name: "Performance Training Shirt", price: 29.99, quantity: 1, total: 29.99 },
  ]

  const subtotal = orderItems.reduce((sum, item) => sum + item.total, 0)
  const tax = subtotal * 0.1
  const shipping = subtotal > 100 ? 0 : 9.99
  const total = subtotal + tax + shipping

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />
      <div className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/shop"
            className="flex items-center gap-2 text-[#84FF00] hover:text-[#84FF00]/80 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>

          <div className="flex gap-4 mb-8">
            <Button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-[#84FF00] text-black hover:bg-[#84FF00]/90 font-bold"
            >
              <Print className="h-4 w-4" />
              Print Receipt
            </Button>
            <Button
              onClick={handleDownload}
              variant="outline"
              className="flex items-center gap-2 border-white/20 text-white hover:bg-white/10 bg-transparent"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>

          <div
            ref={receiptRef}
            className="bg-white/5 border border-white/10 rounded-2xl p-12 print:border-0 print:shadow-none"
          >
            {/* Receipt Header */}
            <div className="mb-8 pb-8 border-b border-white/10">
              <div className="mb-6">
                <h1 className="text-3xl font-black text-white mb-2">
                  FIT<span className="text-[#84FF00]">ZONE</span>
                </h1>
                <p className="text-gray-400">Premium Fitness Equipment & Supplements</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">ORDER NUMBER</p>
                  <p className="text-white font-bold">#ORD-2024-001234</p>
                </div>
                <div>
                  <p className="text-gray-500">ORDER DATE</p>
                  <p className="text-white font-bold">{new Date().toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-gray-500">STATUS</p>
                  <p className="text-[#84FF00] font-bold">COMPLETED</p>
                </div>
              </div>
            </div>

            {/* Billing Information */}
            <div className="grid md:grid-cols-2 gap-12 mb-8 pb-8 border-b border-white/10">
              <div>
                <p className="text-gray-500 text-sm uppercase mb-3">BILLING ADDRESS</p>
                <div className="text-white">
                  <p className="font-bold">John Smith</p>
                  <p>123 Main Street</p>
                  <p>New York, NY 10001</p>
                  <p>United States</p>
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase mb-3">SHIPPING ADDRESS</p>
                <div className="text-white">
                  <p className="font-bold">John Smith</p>
                  <p>123 Main Street</p>
                  <p>New York, NY 10001</p>
                  <p>United States</p>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="mb-8 pb-8 border-b border-white/10">
              <h2 className="text-lg font-bold text-white mb-4">ORDER ITEMS</h2>
              <div className="space-y-3">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-2 border-b border-white/5">
                    <div>
                      <p className="text-white font-medium">{item.name}</p>
                      <p className="text-gray-500 text-sm">
                        {item.quantity}x ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <p className="text-[#84FF00] font-bold">${item.total.toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="mb-8 pb-8 border-b border-white/10">
              <div className="flex justify-end mb-6 max-w-xs ml-auto">
                <div className="w-full space-y-2">
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>Shipping:</span>
                    <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>Tax (10%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#84FF00] font-bold text-lg pt-2 border-t border-white/10">
                    <span>TOTAL:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="mb-8">
              <p className="text-gray-500 text-sm uppercase mb-3">PAYMENT METHOD</p>
              <div className="flex items-center gap-2">
                <div className="w-12 h-8 bg-gradient-to-r from-[#1A1F71] to-[#0066CC] rounded"></div>
                <div className="text-white">
                  <p className="font-bold">Visa</p>
                  <p className="text-gray-500 text-sm">**** **** **** 4242</p>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-center pt-8 border-t border-white/10">
              <p className="text-gray-500 text-sm">
                Thank you for your purchase! If you have any questions, please contact support@fitzone.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
