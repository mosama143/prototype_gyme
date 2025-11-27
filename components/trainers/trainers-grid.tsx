import Link from "next/link"
import { Instagram, Twitter, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { url } from "node:inspector"

export function TrainersGrid() {
  const trainers = [
    {
      id: "alex-morgan",
      name: "Alex Morgan",
      specialty: "Strength & Conditioning",
      image: "/male-trainer-strength.jpg",
      certifications: ["NASM-CPT", "CSCS"],
      experience: "8 years",
      bio: "Specializing in powerlifting and functional strength training.",
      social: {
        instagram: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      id: "sarah-chen",
      name: "Sarah Chen",
      specialty: "Cardio & HIIT",
      image: "/female-trainer-yoga.jpg",
      certifications: ["RYT-500", "ACE"],
      experience: "6 years",
      bio: "Expert in vinyasa flow and restorative yoga practices.",
      social: {
        instagram: "#",
        twitter: "#",
      },
    },
    {
      id: "marcus-johnson",
      name: "Marcus Johnson",
      specialty: "HIIT & Cardio",
      image: "/male-trainer-cardio.jpg",
      certifications: ["ACSM-CPT", "TRX"],
      experience: "10 years",
      bio: "High-intensity interval training specialist and marathon coach.",
      social: {
        instagram: "#",
        facebook: "#",
      },
    },
    {
      id: "emily-rodriguez",
      name: "Emily Rodriguez",
      specialty: "Wellness & Recovery",
      image: "/female-trainer-nutrition.jpg",
      certifications: ["RD", "NASM-CPT"],
      experience: "7 years",
      bio: "Registered dietitian focused on performance nutrition.",
      social: {
        instagram: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      id: "david-kim",
      name: "David Kim",
      specialty: "Strength Training",
      image: "/male-trainer-crossfit.jpg",
      certifications: ["CF-L2", "USAW"],
      experience: "9 years",
      bio: "CrossFit Level 2 trainer with Olympic lifting expertise.",
      social: {
        instagram: "#",
        twitter: "#",
      },
    },
    {
      id: "jessica-williams",
      name: "Jessica Williams",
      specialty: "CrossFit & Functional",
      image: "/female-trainer-pilates.jpg",
      certifications: ["PMA-CPT", "ACE"],
      experience: "5 years",
      bio: "Pilates instructor specializing in core strength and rehabilitation.",
      social: {
        instagram: "#",
        facebook: "#",
      },
    },
  ]

  return (
   <section
  className="py-16 bg-black"
  
>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#84FF00]/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(132,255,0,0.2)]"
            >
              {/* Trainer Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={trainer.image || "/placeholder.svg"}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/50 transition-all duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#84FF00]/15 to-transparent" />

                {/* Social Links Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  {trainer.social.instagram && (
                    <a
                      href={trainer.social.instagram}
                      className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-[#84FF00] hover:text-black transition-all duration-300 hover:scale-125 hover:shadow-[0_0_15px_rgba(132,255,0,0.6)]"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  )}
                  {trainer.social.twitter && (
                    <a
                      href={trainer.social.twitter}
                      className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-[#84FF00] hover:text-black transition-all duration-300 hover:scale-125 hover:shadow-[0_0_15px_rgba(132,255,0,0.6)]"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {trainer.social.facebook && (
                    <a
                      href={trainer.social.facebook}
                      className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-[#84FF00] hover:text-black transition-all duration-300 hover:scale-125 hover:shadow-[0_0_15px_rgba(132,255,0,0.6)]"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Trainer Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{trainer.name}</h3>
                <p className="text-[#84FF00] font-medium mb-3">{trainer.specialty}</p>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{trainer.bio}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {trainer.certifications.map((cert) => (
                    <span key={cert} className="bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full">
                      {cert}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-sm text-gray-400">{trainer.experience} experience</span>
                  <Link href={`/trainers/${trainer.id}`}>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-[#84FF00] text-[#84FF00] hover:bg-[#84FF00] hover:text-black bg-transparent"
                    >
                      View Profile
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
