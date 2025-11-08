import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BlogGrid() {
  const posts = [
    {
      id: "5-exercises-build-muscle",
      title: "5 Essential Exercises to Build Muscle Fast",
      excerpt:
        "Discover the compound movements that deliver maximum results. Learn proper form and programming strategies.",
      category: "Workouts",
      author: "Alex Morgan",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "/blog-post-cardio.jpg",
      featured: true,
    },
    {
      id: "nutrition-guide-beginners",
      title: "Complete Nutrition Guide for Beginners",
      excerpt:
        "Master the fundamentals of macros, meal timing, and sustainable eating habits for long-term success.",
      category: "Nutrition",
      author: "Emily Rodriguez",
      date: "March 12, 2024",
      readTime: "8 min read",
      image: "/blog-post-recovery.jpg",
      featured: true,
    },
    {
      id: "hiit-vs-steady-cardio",
      title: "HIIT vs Steady-State Cardio: Which is Better?",
      excerpt:
        "Compare the benefits of high-intensity intervals versus traditional cardio for fat loss and fitness.",
      category: "Workouts",
      author: "Marcus Johnson",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "/blog-post-strength.jpg",
      featured: false,
    },
    {
      id: "yoga-flexibility-benefits",
      title: "How Yoga Improves Athletic Performance",
      excerpt:
        "Explore the science behind yoga's impact on flexibility, recovery, and mental focus for athletes.",
      category: "Wellness",
      author: "Sarah Chen",
      date: "March 8, 2024",
      readTime: "7 min read",
      image: "/blog-workout-recovery.jpg",
      featured: false,
    },
    {
      id: "meal-prep-tips",
      title: "Meal Prep Like a Pro: 10 Time-Saving Tips",
      excerpt:
        "Streamline your nutrition with these expert meal preparation strategies for busy schedules.",
      category: "Nutrition",
      author: "Emily Rodriguez",
      date: "March 5, 2024",
      readTime: "5 min read",
      image: "/blog-fitness-lifestyle.jpg",
      featured: false,
    },
    {
      id: "recovery-importance",
      title: "Why Recovery is Just as Important as Training",
      excerpt:
        "Learn how proper rest, sleep, and recovery techniques maximize your fitness gains and prevent burnout.",
      category: "Wellness",
      author: "Jessica Williams",
      date: "March 3, 2024",
      readTime: "6 min read",
      image: "/group-fitness-class.jpg",
      featured: false,
    },
    {
      id: "transformation-story-sarah",
      title: "From Couch to 5K: Sarah's Transformation",
      excerpt:
        "Read how Sarah went from zero running experience to completing her first 5K in just 8 weeks.",
      category: "Success Stories",
      author: "FitZone Team",
      date: "March 1, 2024",
      readTime: "4 min read",
      image: "/diverse-athlete.png",
      featured: false,
    },
    {
      id: "strength-training-women",
      title: "Strength Training for Women: Myths Debunked",
      excerpt:
        "Break through common misconceptions and discover why lifting weights is essential for women's health.",
      category: "Tips & Tricks",
      author: "Alex Morgan",
      date: "February 28, 2024",
      readTime: "7 min read",
      image: "/testimonial-client-female.jpg",
      featured: false,
    },
    {
      id: "supplements-guide",
      title: "The Ultimate Guide to Fitness Supplements",
      excerpt:
        "Navigate the world of supplements with evidence-based recommendations for your fitness goals.",
      category: "Nutrition",
      author: "Emily Rodriguez",
      date: "February 25, 2024",
      readTime: "10 min read",
      image: "/strength-training-class.jpg",
      featured: false,
    },
  ];

  const featuredPosts = posts.filter((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-black text-white mb-8">
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#84FF00]/50 transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#84FF00] text-black px-3 py-1 rounded-full text-xs font-bold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#84FF00] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-4">
                        <span>{post.author}</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div>
          <h2 className="text-3xl font-black text-white mb-8">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#84FF00]/50 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#84FF00] text-black px-2 py-1 rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#84FF00] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.author}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-[#84FF00] hover:text-black hover:border-[#84FF00] bg-transparent"
          >
            Load More Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
