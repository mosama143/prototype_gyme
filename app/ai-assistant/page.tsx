"use client"

import { useState, useEffect, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Send, MessageSquare, Zap, Users, BookOpen, Phone } from "lucide-react"

interface ChatMessage {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: string
}

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      type: "bot",
      content:
        "Hey there! I'm your FitZone AI Assistant. I'm here to help you with workout tips, diet plans, fitness tracking, and more. What can I help you with today?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ])

  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const quickSuggestions = [
    { icon: Zap, label: "Workout Tips", action: "Give me a quick workout routine" },
    { icon: BookOpen, label: "Diet Plan", action: "Create a meal plan for muscle gain" },
    { icon: Users, label: "Book Trainer", action: "Help me book a session with a trainer" },
    { icon: Phone, label: "Contact Support", action: "I need to speak with support" },
  ]

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMsg: ChatMessage = {
        id: Date.now().toString(),
        type: "user",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }

      setMessages((prev) => [...prev, userMsg])
      setNewMessage("")
      setIsTyping(true)

      // Simulate AI response
      setTimeout(() => {
        const botMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          content: getAIResponse(newMessage),
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }
        setMessages((prev) => [...prev, botMsg])
        setIsTyping(false)
      }, 1500)
    }
  }

  const handleQuickAction = (action: string) => {
    setNewMessage(action)
    setTimeout(() => {
      handleSendMessage()
    }, 100)
  }

  const getAIResponse = (userInput: string): string => {
    const responses: { [key: string]: string } = {
      workout:
        "Here's a quick 30-minute full-body workout:\n1. Warm-up (5 min)\n2. Squats - 3x12\n3. Push-ups - 3x10\n4. Rows - 3x10\n5. Cool-down (5 min)\n\nRest 60-90 seconds between sets. Let me know if you need modifications!",
      diet: "For muscle gain, focus on:\n- Protein: 0.8-1g per lb bodyweight\n- Carbs: Complex carbs like oats, rice, sweet potatoes\n- Fats: Healthy sources like avocado, nuts\n- Hydration: 3-4 liters daily\n\nWould you like specific meal recommendations?",
      trainer:
        "I can help you find the perfect trainer! What are your fitness goals? Are you interested in:\n- Strength training\n- Cardio & HIIT\n- Yoga & Flexibility\n- CrossFit\n- Other specialties?",
      support:
        "Our support team is here to help! You can:\n- Email: support@fitzone.com\n- Phone: 1-800-FIT-ZONE\n- Chat with an agent (available 24/7)\n\nWhat's your concern?",
    }

    const lowerInput = userInput.toLowerCase()
    for (const [key, response] of Object.entries(responses)) {
      if (lowerInput.includes(key)) {
        return response
      }
    }

    return "That's a great question! To give you the best advice, could you provide more details? For example:\n- What are your fitness goals?\n- How much experience do you have?\n- Any specific areas you want to focus on?\n\nFeel free to ask me anything about workouts, nutrition, memberships, or booking trainers!"
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />
      <div className="flex-1 flex">
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
          {/* Chatbot Header */}
          <div className="border-b border-white/10 p-6 bg-gradient-to-r from-black via-black to-[#84FF00]/5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#84FF00] to-[#00D9FF] flex items-center justify-center shadow-[0_0_30px_rgba(132,255,0,0.3)]">
                <MessageSquare className="w-7 h-7 text-black" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-white">FitZone AI Assistant</h1>
                <p className="text-gray-400 text-sm">Always here to help with your fitness journey</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-black">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-4 animate-[fadeInUp_0.3s_ease-out] ${
                  message.type === "user" ? "flex-row-reverse" : ""
                }`}
              >
                {message.type === "bot" && (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#84FF00] to-[#00D9FF] flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-black" />
                  </div>
                )}
                <div className={`flex flex-col gap-2 max-w-2xl ${message.type === "user" ? "items-end" : ""}`}>
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      message.type === "user"
                        ? "bg-[#84FF00] text-black"
                        : "bg-white/5 text-white border border-white/20"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                  <span className="text-xs text-gray-500">{message.timestamp}</span>
                </div>
                {message.type === "user" && (
                  <div className="w-10 h-10 rounded-full bg-[#84FF00] flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-sm">You</span>
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-4 animate-[fadeInUp_0.3s_ease-out]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#84FF00] to-[#00D9FF] flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-black" />
                </div>
                <div className="bg-white/5 border border-white/20 rounded-2xl px-4 py-3">
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

          {/* Quick Actions (Show when no extended conversation) */}
          {messages.length <= 1 && !isTyping && (
            <div className="px-6 pb-6">
              <p className="text-gray-400 text-sm mb-4">Quick Actions:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {quickSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(suggestion.action)}
                    className="flex flex-col items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-lg hover:border-[#84FF00]/50 hover:bg-[#84FF00]/10 transition-all duration-300 group"
                  >
                    <suggestion.icon className="w-5 h-5 text-[#84FF00] group-hover:scale-110 transition-transform" />
                    <span className="text-xs text-white text-center font-medium">{suggestion.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Message Input */}
          <div className="border-t border-white/10 p-6 bg-white/5">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Ask me anything about fitness, nutrition, or training..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-white placeholder-gray-500 focus:border-[#84FF00] focus:outline-none transition-colors"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="bg-[#84FF00] text-black hover:bg-[#84FF00]/90 flex-shrink-0 transition-all hover:shadow-[0_0_20px_rgba(132,255,0,0.5)]"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              AI Assistant powered by FitZone. Always consult professionals for serious health concerns.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
