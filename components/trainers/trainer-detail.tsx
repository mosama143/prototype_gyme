import Link from "next/link"
import { Instagram, Twitter, Facebook, Award, Calendar, CheckCircle2, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TrainerDetailProps {
  trainer: {
    name: string
    specialty: string
    image: string
    certifications: string[]
    experience: string
    bio: string
    fullBio: string
    specialties: string[]
    achievements: string[]
    social: {
      instagram?: string
      twitter?: string
      facebook?: string
    }
    certificates?: Array<{
      id: string
      title: string
      image: string
      issuer: string
      year: string
      description: string
    }>
  }
}

export function TrainerDetail({ trainer }: TrainerDetailProps) {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border-4 border-[#84FF00]">
                <img
                  src={trainer.image || "/placeholder.svg"}
                  alt={trainer.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-4">{trainer.name}</h1>
              <p className="text-2xl text-[#84FF00] font-bold mb-6">{trainer.specialty}</p>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="h-5 w-5" />
                  <span>{trainer.experience} experience</span>
                </div>
              </div>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">{trainer.bio}</p>

              {/* Certifications */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-3">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {trainer.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="bg-white/10 border border-white/20 text-gray-300 px-4 py-2 rounded-full text-sm"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mb-8">
                {trainer.social.instagram && (
                  <a
                    href={trainer.social.instagram}
                    className="bg-white/10 p-3 rounded-full hover:bg-[#84FF00] hover:text-black transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                )}
                {trainer.social.twitter && (
                  <a
                    href={trainer.social.twitter}
                    className="bg-white/10 p-3 rounded-full hover:bg-[#84FF00] hover:text-black transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
                {trainer.social.facebook && (
                  <a
                    href={trainer.social.facebook}
                    className="bg-white/10 p-3 rounded-full hover:bg-[#84FF00] hover:text-black transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                )}
              </div>

              {/* CTA */}
              <Link href={`/book-trainer?trainer=${trainer.name}`}>
                <Button size="lg" className="bg-[#84FF00] text-black hover:bg-[#84FF00]/90 font-bold">
                  Book a Session
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Full Bio Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-white mb-6">About {trainer.name.split(" ")[0]}</h2>
            <div className="text-gray-300 leading-relaxed space-y-4 whitespace-pre-line">{trainer.fullBio}</div>
          </div>
        </div>
      </section>

      {/* Certificates & Achievements Section */}
      {trainer.certificates && trainer.certificates.length > 0 && (
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black text-white mb-6 flex items-center gap-2">
                <Trophy className="h-8 w-8 text-[#84FF00]" />
                Certifications & Achievements
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {trainer.certificates.map((cert) => (
                  <div
                    key={cert.id}
                    className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#84FF00] hover:shadow-[0_0_30px_rgba(132,255,0,0.2)] transition-all duration-300 group"
                  >
                    <div className="aspect-video overflow-hidden bg-white/5">
                      <img
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-white text-lg">{cert.title}</h3>
                        <span className="text-xs bg-[#84FF00]/20 text-[#84FF00] px-2 py-1 rounded-full font-bold">
                          {cert.year}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">{cert.issuer}</p>
                      <p className="text-sm text-gray-300 line-clamp-2">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Specialties & Achievements */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Specialties */}
            <div>
              <h2 className="text-3xl font-black text-white mb-6 flex items-center gap-2">
                <Award className="h-8 w-8 text-[#84FF00]" />
                Specialties
              </h2>
              <ul className="space-y-3">
                {trainer.specialties.map((specialty) => (
                  <li key={specialty} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-[#84FF00] mt-0.5 flex-shrink-0" />
                    <span>{specialty}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-3xl font-black text-white mb-6 flex items-center gap-2">
                <Award className="h-8 w-8 text-[#FF6B00]" />
                Achievements
              </h2>
              <ul className="space-y-3">
                {trainer.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-black text-white mb-4">Ready to Train with {trainer.name.split(" ")[0]}?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Book your first session today and start your transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/book-trainer?trainer=${trainer.name}`}>
                <Button size="lg" className="bg-[#84FF00] text-black hover:bg-[#84FF00]/90 font-bold">
                  Book a Session
                </Button>
              </Link>
              <Link href="/trainers">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  View All Trainers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
