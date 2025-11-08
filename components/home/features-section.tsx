import { Dumbbell, Users, Calendar, TrendingUp, Award, Clock } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Dumbbell,
      title: "Modern Equipment",
      description: "State-of-the-art machines and free weights for every fitness level and goal.",
      color: "text-[#84FF00]",
      image: "/modern-gym-equipment.jpg",
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description: "Certified professionals dedicated to helping you achieve your fitness goals.",
      color: "text-[#FF6B00]",
      image: "/personal-trainer-coaching.jpg",
    },
    {
      icon: Calendar,
      title: "Flexible Classes",
      description: "100+ weekly classes from yoga to HIIT, designed to fit your schedule.",
      color: "text-[#00D9FF]",
      image: "/group-fitness-class.jpg",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Advanced analytics to monitor your improvements and celebrate milestones.",
      color: "text-[#84FF00]",
      image: "/fitness-progress-tracking.jpg",
    },
    {
      icon: Award,
      title: "Nutrition Plans",
      description: "Personalized meal plans and dietary guidance from certified nutritionists.",
      color: "text-[#FF6B00]",
      image: "/healthy-meal-prep.jpg",
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Train on your schedule with round-the-clock gym access for all members.",
      color: "text-[#00D9FF]",
      image: "/24-hour-gym-access.jpg",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            WHY CHOOSE <span className="text-[#84FF00]">FITZONE</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to transform your fitness journey in one premium facility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-[#84FF00]/50 hover:shadow-[0_10px_40px_rgba(132,255,0,0.15)] hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image || `/placeholder.svg?height=200&width=400&query=${feature.title}`}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                {/* Icon overlay */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-black/80 backdrop-blur-sm p-3 rounded-lg">
                    <feature.icon
                      className={`h-8 w-8 ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#84FF00] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
