import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MembershipHero } from "@/components/membership/membership-hero"
import { PricingPlans } from "@/components/membership/pricing-plans"
import { MembershipBenefits } from "@/components/membership/membership-benefits"
import { MembershipFAQ } from "@/components/membership/membership-faq"

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-16">
        <MembershipHero />
        <PricingPlans />
        <MembershipBenefits />
        <MembershipFAQ />
      </main>
      <Footer />
    </div>
  )
}
