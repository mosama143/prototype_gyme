import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TrainerDetail } from "@/components/trainers/trainer-detail"
import { notFound } from "next/navigation"

const trainersData = {
  "alex-morgan": {
    name: "Alex Morgan",
    specialty: "Strength & Conditioning",
    image: "/male-trainer-strength.jpg",
    certifications: ["NASM-CPT", "CSCS", "FMS Level 2"],
    experience: "8 years",
    bio: "Alex is a dedicated strength and conditioning coach with over 8 years of experience transforming athletes and fitness enthusiasts. His approach combines powerlifting principles with functional movement patterns to build real-world strength.",
    fullBio: `With a background in competitive powerlifting and a passion for helping others achieve their strength goals, Alex has worked with everyone from beginners to elite athletes. His training philosophy emphasizes proper form, progressive overload, and sustainable programming.

Alex holds multiple certifications including NASM-CPT and CSCS, and continues to expand his knowledge through ongoing education. He specializes in compound movements, Olympic lifting variations, and sport-specific conditioning.

When he's not coaching, Alex competes in powerlifting meets and enjoys sharing his knowledge through workshops and seminars.`,
    specialties: [
      "Powerlifting & Strength Training",
      "Functional Movement",
      "Sport-Specific Conditioning",
      "Olympic Lifting",
      "Injury Prevention",
    ],
    achievements: [
      "Coached 50+ clients to personal records",
      "State Powerlifting Champion 2022",
      "Published in Strength & Conditioning Journal",
    ],
    social: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  "sarah-chen": {
    name: "Sarah Chen",
    specialty: "Yoga & Flexibility",
    image: "/female-trainer-yoga.jpg",
    certifications: ["RYT-500", "ACE", "Yin Yoga Certified"],
    experience: "6 years",
    bio: "Sarah brings mindfulness and movement together through her expert yoga instruction. With 6 years of teaching experience, she helps students find balance, flexibility, and inner peace.",
    fullBio: `Sarah's journey with yoga began over a decade ago when she discovered its transformative power for both body and mind. After completing her 500-hour yoga teacher training, she dedicated herself to sharing this practice with others.

Her classes blend traditional vinyasa flow with modern movement science, creating sequences that build strength, flexibility, and mindfulness. Sarah specializes in helping athletes improve mobility and assisting beginners in building a sustainable practice.

Beyond the mat, Sarah leads yoga retreats and workshops focused on stress management and holistic wellness.`,
    specialties: [
      "Vinyasa Flow Yoga",
      "Restorative Yoga",
      "Flexibility Training",
      "Mindfulness & Meditation",
      "Mobility for Athletes",
    ],
    achievements: [
      "Led 10+ international yoga retreats",
      "Featured in Yoga Journal Magazine",
      "Trained 200+ students in yoga fundamentals",
    ],
    social: {
      instagram: "#",
      twitter: "#",
    },
  },
  "marcus-johnson": {
    name: "Marcus Johnson",
    specialty: "HIIT & Cardio",
    image: "/male-trainer-cardio.jpg",
    certifications: ["ACSM-CPT", "TRX", "Spinning Instructor"],
    experience: "10 years",
    bio: "Marcus is a high-energy HIIT specialist and marathon coach who pushes clients to discover their true potential. His dynamic training style delivers results through intensity and motivation.",
    fullBio: `With a decade of experience in high-intensity training, Marcus has perfected the art of pushing clients beyond their perceived limits while maintaining safety and proper form. His background as a competitive marathon runner informs his approach to cardiovascular conditioning.

Marcus designs programs that maximize calorie burn, improve cardiovascular health, and build mental toughness. His classes are known for their energetic atmosphere and challenging yet achievable workouts.

He has coached numerous clients through their first 5K, half-marathon, and marathon races, and continues to compete himself.`,
    specialties: [
      "High-Intensity Interval Training",
      "Marathon Training",
      "Cardiovascular Conditioning",
      "TRX Suspension Training",
      "Spinning & Cycling",
    ],
    achievements: [
      "Completed 15+ marathons",
      "Trained 100+ first-time marathon runners",
      "HIIT Program Developer for FitZone",
    ],
    social: {
      instagram: "#",
      facebook: "#",
    },
  },
  "emily-rodriguez": {
    name: "Emily Rodriguez",
    specialty: "Nutrition & Wellness",
    image: "/female-trainer-nutrition.jpg",
    certifications: ["RD", "NASM-CPT", "Precision Nutrition L2"],
    experience: "7 years",
    bio: "Emily is a registered dietitian and certified personal trainer who takes a holistic approach to health and fitness. She helps clients optimize their nutrition for performance and longevity.",
    fullBio: `Emily's dual expertise in nutrition and exercise science allows her to provide comprehensive wellness coaching. As a registered dietitian, she understands the crucial role nutrition plays in achieving fitness goals and overall health.

Her approach focuses on sustainable lifestyle changes rather than restrictive diets. Emily works with clients to develop personalized nutrition plans that support their training, enhance recovery, and improve overall well-being.

She regularly conducts nutrition workshops and seminars, helping educate the FitZone community on evidence-based nutritional strategies.`,
    specialties: [
      "Performance Nutrition",
      "Weight Management",
      "Meal Planning & Prep",
      "Sports Supplementation",
      "Metabolic Health",
    ],
    achievements: [
      "Published nutrition research in peer-reviewed journals",
      "Developed FitZone's nutrition program",
      "Helped 200+ clients achieve sustainable weight loss",
    ],
    social: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  "david-kim": {
    name: "David Kim",
    specialty: "CrossFit & Functional",
    image: "/male-trainer-crossfit.jpg",
    certifications: ["CF-L2", "USAW", "Mobility Specialist"],
    experience: "9 years",
    bio: "David is a CrossFit Level 2 trainer with expertise in Olympic weightlifting and functional fitness. His programs build strength, power, and work capacity for real-world performance.",
    fullBio: `David discovered CrossFit 9 years ago and immediately fell in love with its emphasis on functional movements and varied training. His background in Olympic weightlifting adds technical precision to his coaching style.

He believes in building well-rounded athletes who can handle any physical challenge. David's programs incorporate strength training, metabolic conditioning, and skill work to develop complete fitness.

His coaching has helped numerous athletes qualify for CrossFit competitions and achieve movements they never thought possible.`,
    specialties: [
      "CrossFit Training",
      "Olympic Weightlifting",
      "Functional Fitness",
      "Metabolic Conditioning",
      "Movement Quality",
    ],
    achievements: ["CrossFit Regional Competitor", "USAW National Coach", "Coached 30+ athletes to competition level"],
    social: {
      instagram: "#",
      twitter: "#",
    },
  },
  "jessica-williams": {
    name: "Jessica Williams",
    specialty: "Pilates & Core",
    image: "/female-trainer-pilates.jpg",
    certifications: ["PMA-CPT", "ACE", "Pre/Postnatal Specialist"],
    experience: "5 years",
    bio: "Jessica is a Pilates instructor who specializes in core strength and rehabilitation. Her precise, controlled approach helps clients build stability and prevent injuries.",
    fullBio: `Jessica's introduction to Pilates came through her own rehabilitation journey after a sports injury. Experiencing firsthand how Pilates restored her strength and mobility, she became passionate about sharing this method with others.

Her teaching emphasizes the mind-body connection and proper alignment. Jessica works with clients of all levels, from those recovering from injuries to athletes looking to enhance their core strength and stability.

She has additional training in pre and postnatal Pilates, helping new mothers safely return to fitness.`,
    specialties: [
      "Classical Pilates",
      "Core Strengthening",
      "Rehabilitation & Recovery",
      "Pre/Postnatal Fitness",
      "Postural Alignment",
    ],
    achievements: [
      "Certified Pilates Method Alliance Instructor",
      "Helped 100+ clients recover from injuries",
      "Developed FitZone's Pilates program",
    ],
    social: {
      instagram: "#",
      facebook: "#",
    },
  },
}

export default function TrainerDetailPage({ params }: { params: { id: string } }) {
  const trainer = trainersData[params.id as keyof typeof trainersData]

  if (!trainer) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-16">
        <TrainerDetail trainer={trainer} />
      </main>
      <Footer />
    </div>
  )
}
