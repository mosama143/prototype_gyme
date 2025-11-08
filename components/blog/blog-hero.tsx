export function BlogHero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            FITNESS <span className="text-[#84FF00]">INSIGHTS</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Expert tips, workout guides, nutrition advice, and success stories to fuel your fitness journey.
          </p>
        </div>
      </div>
    </section>
  )
}
