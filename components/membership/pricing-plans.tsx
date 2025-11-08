import { Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PricingPlans() {
  const plans = [
    {
      name: "Basic",
      price: 29,
      period: "month",
      description: "Perfect for getting started with your fitness journey",
      features: [
        "24/7 Gym Access",
        "Cardio & Weight Equipment",
        "Locker Room & Showers",
        "Free WiFi",
        "Mobile App Access",
      ],
      notIncluded: ["Group Classes", "Personal Training", "Nutrition Consultation", "Guest Passes"],
      popular: false,
      color: "border-white/20",
      buttonClass: "bg-white/10 text-white hover:bg-white/20",
    },
    {
      name: "Standard",
      price: 59,
      period: "month",
      description: "Most popular choice for serious fitness enthusiasts",
      features: [
        "Everything in Basic",
        "Unlimited Group Classes",
        "2 Personal Training Sessions/month",
        "Nutrition Consultation",
        "Priority Equipment Access",
        "2 Guest Passes/month",
        "Towel Service",
      ],
      notIncluded: ["Advanced Programs", "Meal Planning"],
      popular: true,
      color: "border-[#84FF00]",
      buttonClass: "bg-[#84FF00] text-black hover:bg-[#84FF00]/90",
    },
    {
      name: "Premium",
      price: 99,
      period: "month",
      description: "Ultimate fitness experience with all-inclusive benefits",
      features: [
        "Everything in Standard",
        "Unlimited Personal Training",
        "Custom Meal Planning",
        "Advanced Programs Access",
        "Unlimited Guest Passes",
        "Massage Therapy (2/month)",
        "Supplement Discounts (20%)",
        "Priority Class Booking",
        "Private Locker",
      ],
      notIncluded: [],
      popular: false,
      color: "border-[#FF6B00]",
      buttonClass: "bg-[#FF6B00] text-black hover:bg-[#FF6B00]/90",
    },
  ]

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white/5 border-2 ${plan.color} rounded-2xl p-8 ${
                plan.popular ? "md:scale-105 md:shadow-2xl md:shadow-[#84FF00]/20" : ""
              } transition-all duration-300 hover:border-opacity-100`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-[#84FF00] text-black px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Zap className="h-4 w-4" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-5xl font-black text-white">${plan.price}</span>
                  <span className="text-gray-400">/{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#84FF00] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 opacity-40">
                    <Check className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm line-through">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="block">
                <Button className={`w-full font-bold ${plan.buttonClass}`} size="lg">
                  Get Started
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Annual Discount Banner */}
        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-[#84FF00]/10 to-[#00D9FF]/10 border border-[#84FF00]/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-black text-white mb-2">Save 20% with Annual Membership</h3>
          <p className="text-gray-400 mb-4">
            Commit to your fitness journey and save big. Pay annually and get 2 months free!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/5 px-4 py-2 rounded-full">
              <span className="text-gray-400">Basic: </span>
              <span className="text-white font-bold">$278/year</span>
              <span className="text-[#84FF00] ml-2">(Save $70)</span>
            </div>
            <div className="bg-white/5 px-4 py-2 rounded-full">
              <span className="text-gray-400">Standard: </span>
              <span className="text-white font-bold">$566/year</span>
              <span className="text-[#84FF00] ml-2">(Save $142)</span>
            </div>
            <div className="bg-white/5 px-4 py-2 rounded-full">
              <span className="text-gray-400">Premium: </span>
              <span className="text-white font-bold">$950/year</span>
              <span className="text-[#84FF00] ml-2">(Save $238)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
