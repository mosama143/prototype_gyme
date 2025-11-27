"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Send,
  Paperclip,
  Phone,
  Video,
  Info,
  ArrowLeft,
  Circle,
} from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "trainer";
  content: string;
  timestamp: string;
  avatar: string;
  name: string;
}

export default function ChatPage({
  params,
}: {
  params: { trainerId: string };
}) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "trainer",
      content: "Hey! Ready for today's session?",
      timestamp: "10:30 AM",
      avatar: "/male-trainer-strength.jpg",
      name: "Alex Morgan",
    },
    {
      id: "2",
      sender: "user",
      content: "Yes! I did my warm-up already. What should we focus on today?",
      timestamp: "10:31 AM",
      avatar: "/fit-woman-smiling-in-gym.jpg",
      name: "You",
    },
    {
      id: "3",
      sender: "trainer",
      content:
        "Great! Let's work on your bench press form. I want to focus on your chest and triceps today.",
      timestamp: "10:32 AM",
      avatar: "/male-trainer-strength.jpg",
      name: "Alex Morgan",
    },
    {
      id: "4",
      sender: "user",
      content: "Sounds good. I've been struggling with my form lately.",
      timestamp: "10:33 AM",
      avatar: "/fit-woman-smiling-in-gym.jpg",
      name: "You",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Simulate trainer typing and response
  useEffect(() => {
    const typingTimer = setTimeout(() => {
      if (newMessage === "") {
        setIsTyping(false);
      }
    }, 2000);

    return () => clearTimeout(typingTimer);
  }, [newMessage]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        sender: "user",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        avatar: "/fit-woman-smiling-in-gym.jpg",
        name: "You",
      };

      setMessages((prev) => [...prev, userMessage]);
      setNewMessage("");

      // Simulate trainer response
      setIsTyping(true);
      setTimeout(() => {
        const trainerMessage: Message = {
          id: (Date.now() + 1).toString(),
          sender: "trainer",
          content: "That's great! Let's work on that together.",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          avatar: "/male-trainer-strength.jpg",
          name: "Alex Morgan",
        };
        setMessages((prev) => [...prev, trainerMessage]);
        setIsTyping(false);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col pt-25   pb-25">
      <Navigation />
      <div className="flex-1 flex">
        {/* Chat Container */}
        <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full border-l border-r border-white/10">
          {/* Chat Header */}
          <div className="border-b border-white/10 p-4 md:p-6 bg-white/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href="/" className="md:hidden">
                  <ArrowLeft className="h-5 w-5 text-white hover:text-[#84FF00]" />
                </Link>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src="/male-trainer-strength.jpg"
                      alt="Trainer"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <Circle className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 text-green-500 rounded-full border-2 border-black" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white">Alex Morgan</h2>
                    <p className="text-xs text-green-400 flex items-center gap-1">
                      <Circle className="h-2 w-2 fill-green-400" /> Online
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:text-[#84FF00] hover:bg-white/10"
                >
                  <Phone className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:text-[#84FF00] hover:bg-white/10"
                >
                  <Video className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:text-[#84FF00] hover:bg-white/10"
                >
                  <Info className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-black">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 animate-[fadeInUp_0.3s_ease-out] ${
                  message.sender === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <img
                  src={message.avatar || "/placeholder.svg"}
                  alt={message.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div
                  className={`flex flex-col gap-1 max-w-xs ${
                    message.sender === "user" ? "items-end" : ""
                  }`}
                >
                  <span className="text-xs text-gray-400">{message.name}</span>
                  <div
                    className={`rounded-2xl px-4 py-2 ${
                      message.sender === "user"
                        ? "bg-[#84FF00] text-black"
                        : "bg-white/10 text-white border border-white/20"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                  <span className="text-xs text-gray-500">
                    {message.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 animate-[fadeInUp_0.3s_ease-out]">
                <img
                  src="/male-trainer-strength.jpg"
                  alt="Trainer"
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="bg-white/10 border border-white/20 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="border-t border-white/10 p-4 md:p-6 bg-white/5">
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:text-[#84FF00] hover:bg-white/10 flex-shrink-0"
              >
                <Paperclip className="h-5 w-5" />
              </Button>
              <input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white placeholder-gray-500 focus:border-[#84FF00] focus:outline-none transition-colors"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="bg-[#84FF00] text-black hover:bg-[#84FF00]/90 flex-shrink-0 transition-all hover:shadow-[0_0_20px_rgba(132,255,0,0.5)]"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Sidebar - Trainer Info (hidden on mobile) */}
        <div className="hidden lg:flex lg:w-80 flex-col border-r border-white/10 bg-white/5">
          <div className="p-6 border-b border-white/10">
            <img
              src="/male-trainer-strength.jpg"
              alt="Trainer"
              className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-white text-center">
              Alex Morgan
            </h3>
            <p className="text-[#84FF00] text-sm text-center font-medium">
              Strength & Conditioning
            </p>
          </div>

          <div className="flex-1 p-6 space-y-6 overflow-y-auto">
            <div>
              <p className="text-xs text-gray-500 uppercase mb-2">Experience</p>
              <p className="text-white">8 years</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase mb-2">
                Certifications
              </p>
              <div className="flex flex-wrap gap-2">
                {["NASM-CPT", "CSCS"].map((cert) => (
                  <span
                    key={cert}
                    className="bg-[#84FF00]/20 text-[#84FF00] text-xs px-2 py-1 rounded"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase mb-2">Bio</p>
              <p className="text-gray-300 text-sm">
                Specializing in powerlifting and functional strength training.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <Link href={`/trainers/alex-morgan`}>
                <Button className="w-full bg-[#84FF00] text-black hover:bg-[#84FF00]/90 font-bold">
                  View Full Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
