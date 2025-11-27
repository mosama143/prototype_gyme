"use client";

import Link from "next/link";
import { Dumbbell, Flame, Swords, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProgramCategories() {
  const categories = [
    {
      id: "strength",
      name: "Strength Training",
      icon: Dumbbell,
      description: "Build muscle and power with our strength-focused programs.",
      image: "/strength-training-class.jpg",
      color: "text-[#84FF00]",
    },
    {
      id: "cardio",
      name: "Cardio & HIIT",
      icon: Flame,
      description: "Burn calories and push your endurance to the limit.",
      image: "/cardio-hiit-class.jpg",
      color: "text-[#FF6B00]",
    },
    {
      id: "crossfit",
      name: "CrossFit",
      icon: Swords,
      description: "High intensity training blending strength and agility.",
      image: "/crossfit-class.jpg",
      color: "text-[#84FF00]",
    },
    {
      id: "wellness",
      name: "Wellness & Recovery",
      icon: Heart,
      description: "Restore mobility and relax with recovery-focused sessions.",
      image: "/wellness-class.jpg",
      color: "text-[#00D9FF]",
    },
  ];

  const items = [...categories, ...categories]; // double for perfect loop

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
            EXPLORE <span className="text-[#84FF00]">PROGRAMS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Train your way with elite programs designed for every goal.
          </p>
        </div>

        {/* -------------- THE MONSTER CAROUSEL -------------- */}
        <div className="overflow-hidden relative group">
          <style>{`
            .carousel-track {
              display: flex;
              gap: 32px;
              width: calc(200%);
              animation: scroll 16s linear infinite;
            }
            .group:hover .carousel-track {
              animation-play-state: paused;
            }
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @media (max-width: 768px) {
              .carousel-track { animation-duration: 12s; gap: 18px; }
            }
          `}</style>

          <div className="carousel-track">
            {items.map((category, i) => {
              const Icon = category.icon;

              return (
                <div
                  key={`${category.id}-${i}`}
                  className="min-w-[320px] max-w-[340px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden 
                  hover:border-[#84FF00]/60 hover:shadow-[0_0_40px_rgba(132,255,0,0.4)]
                  transition-all duration-400 cursor-pointer"
                >
                  {/* IMAGE */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:pause-animation hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Icon className={`h-12 w-12 ${category.color}`} />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-2xl font-black text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-5">
                      {category.description}
                    </p>

                    <Link href={`/programs/${category.id}`} className="block">
                      <Button
                        variant="outline"
                        className="w-full border-white/20 text-white hover:bg-[#84FF00] hover:text-black hover:border-[#84FF00]"
                      >
                        Start Training
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
