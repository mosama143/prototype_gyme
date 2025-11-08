import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogPost } from "@/components/blog/blog-post"
import { notFound } from "next/navigation"

const blogPosts = {
  "5-exercises-build-muscle": {
    title: "5 Essential Exercises to Build Muscle Fast",
    category: "Workouts",
    author: "Alex Morgan",
    authorRole: "Strength & Conditioning Coach",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/blog-muscle-building.jpg",
    content: `
Building muscle doesn't require complicated routines or fancy equipment. Focus on these five compound movements that have stood the test of time and deliver maximum results.

## 1. Barbell Squat

The king of all exercises. Squats work your entire lower body and core, stimulating massive muscle growth through heavy loading and full-body tension.

**How to perform:**
- Stand with feet shoulder-width apart
- Keep chest up and core braced
- Lower until thighs are parallel to ground
- Drive through heels to stand

**Programming:** 3-4 sets of 6-10 reps, 2-3 times per week

## 2. Deadlift

Nothing builds total body strength like the deadlift. This movement engages over 200 muscles and teaches proper hip hinge mechanics.

**Key points:**
- Maintain neutral spine throughout
- Push through the floor with your feet
- Keep the bar close to your body
- Finish with hips and shoulders aligned

**Programming:** 3-4 sets of 5-8 reps, once per week

## 3. Bench Press

The ultimate upper body builder. Bench press develops chest, shoulders, and triceps while teaching proper pressing mechanics.

**Form tips:**
- Retract shoulder blades
- Maintain slight arch in lower back
- Lower bar to mid-chest
- Press in slight arc toward face

**Programming:** 3-4 sets of 6-10 reps, 2 times per week

## 4. Pull-Ups

The best bodyweight exercise for back development. Pull-ups build width and thickness while improving grip strength.

**Variations:**
- Wide grip for lat emphasis
- Close grip for bicep involvement
- Weighted for advanced lifters

**Programming:** 3-4 sets to near failure, 2-3 times per week

## 5. Overhead Press

Build powerful shoulders and a strong core with this standing press variation. The overhead press is unmatched for developing pressing strength.

**Execution:**
- Start with bar at shoulder height
- Brace core and glutes
- Press straight up, moving head back slightly
- Lock out overhead with biceps by ears

**Programming:** 3-4 sets of 6-10 reps, 2 times per week

## Putting It Together

These five exercises form the foundation of any effective muscle-building program. Focus on progressive overload, adding weight or reps over time while maintaining perfect form.

Remember: consistency beats complexity. Master these movements and watch your physique transform.
    `,
  },
  "nutrition-guide-beginners": {
    title: "Complete Nutrition Guide for Beginners",
    category: "Nutrition",
    author: "Emily Rodriguez",
    authorRole: "Registered Dietitian",
    date: "March 12, 2024",
    readTime: "8 min read",
    image: "/blog-nutrition-guide.jpg",
    content: `
Nutrition doesn't have to be complicated. This guide breaks down everything you need to know to fuel your fitness journey effectively.

## Understanding Macronutrients

The three macronutrients - protein, carbohydrates, and fats - form the foundation of your diet.

### Protein
Essential for muscle repair and growth. Aim for 0.8-1g per pound of bodyweight daily.

**Best sources:**
- Chicken breast
- Fish
- Eggs
- Greek yogurt
- Lean beef

### Carbohydrates
Your body's primary energy source. Focus on complex carbs for sustained energy.

**Quality options:**
- Brown rice
- Oatmeal
- Sweet potatoes
- Quinoa
- Whole grain bread

### Fats
Critical for hormone production and nutrient absorption. Include healthy fats daily.

**Healthy choices:**
- Avocados
- Nuts and seeds
- Olive oil
- Fatty fish
- Nut butters

## Meal Timing Strategies

While total daily intake matters most, meal timing can optimize your results.

**Pre-workout:** Carbs + moderate protein 1-2 hours before training
**Post-workout:** Protein + carbs within 2 hours after training
**Throughout day:** Spread protein across 3-5 meals

## Hydration Matters

Water is often overlooked but crucial for performance and recovery.

**Guidelines:**
- Drink half your bodyweight in ounces daily
- Add 16-20oz per hour of exercise
- Monitor urine color (pale yellow is ideal)

## Building Sustainable Habits

The best diet is one you can maintain long-term. Focus on:

1. Eating whole, minimally processed foods
2. Including vegetables with most meals
3. Preparing meals in advance
4. Allowing flexibility for social occasions
5. Tracking progress, not perfection

Start with these fundamentals and adjust based on your individual response and goals.
    `,
  },
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-16">
        <BlogPost post={post} />
      </main>
      <Footer />
    </div>
  )
}
