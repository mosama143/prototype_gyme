import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BlogPostProps {
  post: {
    title: string;
    category: string;
    author: string;
    authorRole: string;
    date: string;
    readTime: string;
    image: string;
    content: string;
  };
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="bg-black">
      {/* Hero */}
      <section className="relative py-12 overflow-hidden">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-[#84FF00] mb-8 -ml-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <span className="bg-[#84FF00] text-black px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#84FF00]/20 flex items-center justify-center">
                  <span className="text-[#84FF00] font-bold">
                    {post.author[0]}
                  </span>
                </div>
                <div>
                  <div className="text-white font-bold">{post.author}</div>
                  <div className="text-sm">{post.authorRole}</div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <div
              className="text-gray-300 leading-relaxed space-y-6"
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.75",
              }}
            >
              {post.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="text-3xl font-black text-white mt-12 mb-6"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                } else if (paragraph.startsWith("### ")) {
                  return (
                    <h3
                      key={index}
                      className="text-2xl font-bold text-white mt-8 mb-4"
                    >
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                } else if (
                  paragraph.startsWith("**") &&
                  paragraph.endsWith("**")
                ) {
                  return (
                    <p key={index} className="font-bold text-[#84FF00] mt-6">
                      {paragraph.replace(/\*\*/g, "")}
                    </p>
                  );
                } else if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n");
                  return (
                    <ul
                      key={index}
                      className="list-disc list-inside space-y-2 ml-4"
                    >
                      {items.map((item, i) => (
                        <li key={i} className="text-gray-300">
                          {item.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  );
                } else if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-gray-300">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>

          {/* Share & CTA */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="text-center">
              <h3 className="text-2xl font-black text-white mb-4">
                Ready to Transform Your Fitness?
              </h3>
              <p className="text-gray-400 mb-6">
                Join FitZone and get access to expert trainers, programs, and
                support.
              </p>
              <Link href="/membership">
                <Button
                  size="lg"
                  className="bg-[#84FF00] text-black hover:bg-[#84FF00]/90 font-bold"
                >
                  View Membership Plans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
