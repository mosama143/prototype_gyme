import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Target, Users, Award, Heart } from "lucide-react"

export default function AboutPage() {
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
                ABOUT <span className="text-[#84FF00]">FITZONE</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                More than a gym. We're a community dedicated to transforming lives through fitness, nutrition, and
                unwavering support.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <Target className="h-12 w-12 text-[#84FF00] mb-4" />
                <h2 className="text-3xl font-black text-white mb-4">Our Mission</h2>
                <p className="text-gray-400 leading-relaxed">
                  To empower individuals to achieve their fitness goals through expert guidance, state-of-the-art
                  facilities, and a supportive community that celebrates every victory, big or small.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <Heart className="h-12 w-12 text-[#FF6B00] mb-4" />
                <h2 className="text-3xl font-black text-white mb-4">Our Vision</h2>
                <p className="text-gray-400 leading-relaxed">
                  To be the leading fitness destination where people don't just work out—they transform their lives,
                  build lasting habits, and inspire others to do the same.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-black text-white mb-8 text-center">Our Story</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p>
                  FitZone was founded in 2010 by a group of fitness enthusiasts who believed that everyone deserves
                  access to world-class training and support. What started as a small neighborhood gym has grown into a
                  thriving fitness community with over 500 members.
                </p>
                <p>
                  Our founders experienced firsthand how the right environment, expert guidance, and supportive
                  community could transform not just bodies, but entire lives. They set out to create a space where
                  people of all fitness levels could feel welcome, challenged, and supported.
                </p>
                <p>
                  Today, FitZone stands as a testament to that vision. We've helped thousands achieve their fitness
                  goals, from first-time gym-goers to competitive athletes. Our certified trainers, cutting-edge
                  equipment, and diverse class offerings ensure that every member has the tools they need to succeed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-black text-white mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Users,
                  title: "Community",
                  description: "We believe in the power of training together and supporting each other.",
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description: "We maintain the highest standards in equipment, training, and service.",
                },
                {
                  icon: Heart,
                  title: "Inclusivity",
                  description: "Everyone is welcome here, regardless of fitness level or background.",
                },
                {
                  icon: Target,
                  title: "Results",
                  description: "We're committed to helping you achieve measurable, lasting results.",
                },
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <value.icon className="h-12 w-12 text-[#84FF00] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-black text-white mb-12 text-center">
              WORLD-CLASS <span className="text-[#84FF00]">FACILITIES</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Strength Training Zone",
                  image: "/facility-strength-zone.jpg",
                  description: "Premium free weights, power racks, and Olympic platforms",
                },
                {
                  title: "Cardio Theater",
                  image: "/facility-cardio-zone.jpg",
                  description: "State-of-the-art treadmills, bikes, and rowing machines",
                },
                {
                  title: "Group Fitness Studios",
                  image: "/facility-studio.jpg",
                  description: "Spacious studios for yoga, HIIT, and group classes",
                },
              ].map((facility, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                  <div className="aspect-video">
                    <img
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{facility.title}</h3>
                    <p className="text-gray-400">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
