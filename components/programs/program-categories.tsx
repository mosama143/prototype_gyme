import Link from "next/link"
import { Dumbbell, Heart, Flame, Wind, Swords, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProgramCategories() {
  const categories = [
    {
      id: "strength",
      name: "Strength Training",
      icon: Dumbbell,
      description: "Build muscle and power with our comprehensive strength programs.",
      image: "/strength-training-class.jpg",
      classes: 25,
      difficulty: "All Levels",
      color: "text-[#84FF00]",
      bgColor: "from-[#84FF00]/20",
    },
    {
      id: "cardio",
      name: "Cardio & HIIT",
      icon: Flame,
      description: "Burn calories and boost endurance with high-intensity workouts.",
      image: "/cardio-hiit-class.jpg",
      classes: 30,
      difficulty: "Intermediate",
      color: "text-[#FF6B00]",
      bgColor: "from-[#FF6B00]/20",
    },
    {
      id: "yoga",
      name: "Yoga & Flexibility",
      icon: Wind,
      description: "Find balance and improve flexibility through mindful movement.",
      image: "/yoga-class.jpg",
      classes: 20,
      difficulty: "All Levels",
      color: "text-[#00D9FF]",
      bgColor: "from-[#00D9FF]/20",
    },
    {
      id: "crossfit",
      name: "CrossFit",
      icon: Swords,
      description: "Functional fitness combining strength, cardio, and gymnastics.",
      image: "/crossfit-class.jpg",
      classes: 18,
      difficulty: "Advanced",
      color: "text-[#84FF00]",
      bgColor: "from-[#84FF00]/20",
    },
    {
      id: "martial-arts",
      name: "Martial Arts",
      icon: Users,
      description: "Learn self-defense while getting an incredible full-body workout.",
      image: "/martial-arts-class.jpg",
      classes: 15,
      difficulty: "All Levels",
      color: "text-[#FF6B00]",
      bgColor: "from-[#FF6B00]/20",
    },
    {
      id: "wellness",
      name: "Wellness & Recovery",
      icon: Heart,
      description: "Restore and rejuvenate with stretching, meditation, and recovery.",
      image: "/wellness-class.jpg",
      classes: 12,
      difficulty: "Beginner",
      color: "text-[#00D9FF]",
      bgColor: "from-[#00D9FF]/20",
    },
  ]

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            EXPLORE <span className="text-[#84FF00]">CATEGORIES</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose from diverse training styles to match your goals and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#84FF00]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(132,255,0,0.2)]"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${category.bgColor} to-transparent group-hover:from-black/80 group-hover:via-black/40 transition-all duration-300`}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage: `linear-gradient(to top, ${category.color === "text-[#84FF00]" ? "rgba(132,255,0,0.15)" : category.color === "text-[#FF6B00]" ? "rgba(255,107,0,0.15)" : "rgba(0,217,255,0.15)"}, transparent)`,
                  }}
                />
                <div className="absolute top-4 right-4 opacity-100 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className={`h-12 w-12 ${category.color}`} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-black text-white mb-2">{category.name}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{category.description}</p>

                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="text-gray-400">
                    <span className={category.color}>{category.classes}</span> classes/week
                  </span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-gray-300">{category.difficulty}</span>
                </div>

                <Link href={`/programs/${category.id}`}>
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-[#84FF00] hover:text-black hover:border-[#84FF00] bg-transparent"
                  >
                    View Schedule
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
