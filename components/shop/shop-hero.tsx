export function ShopHero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            GEAR UP FOR <span className="text-[#84FF00]">SUCCESS</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Premium supplements, workout gear, and fitness essentials to fuel your transformation. Members get 15% off
            all products.
          </p>
        </div>
      </div>
    </section>
  )
}
