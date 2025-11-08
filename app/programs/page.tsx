import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProgramsHero } from "@/components/programs/programs-hero"
import { ProgramCategories } from "@/components/programs/program-categories"
import { ClassSchedule } from "@/components/programs/class-schedule"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-16">
        <ProgramsHero />
        <ProgramCategories />
        <ClassSchedule />
      </main>
      <Footer />
    </div>
  )
}
