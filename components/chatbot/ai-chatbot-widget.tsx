"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Dumbbell } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const quickActions = [
  { label: "Recommend a workout", icon: "💪" },
  { label: "My subscription", icon: "📋" },
  { label: "Diet tips", icon: "🥗" },
  { label: "Class schedule", icon: "📅" },
]

export function AIChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hi! I'm your AI fitness assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(text),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const getBotResponse = (userText: string): string => {
    const lowerText = userText.toLowerCase()

    if (lowerText.includes("workout") || lowerText.includes("exercise")) {
      return "I'd recommend starting with our Strength Training program! It's perfect for building muscle and improving overall fitness. Would you like to see our class schedule?"
    }
    if (lowerText.includes("subscription") || lowerText.includes("membership")) {
      return "We have three membership tiers: Basic ($29/month), Pro ($59/month), and Elite ($99/month). Each offers different benefits. Would you like to learn more about a specific plan?"
    }
    if (lowerText.includes("diet") || lowerText.includes("nutrition")) {
      return "Great question! For optimal results, focus on high protein intake (1g per lb of body weight), stay hydrated, and eat whole foods. Our nutrition coach Sarah can create a personalized meal plan for you!"
    }
    if (lowerText.includes("schedule") || lowerText.includes("class")) {
      return "We have classes running throughout the week! Popular times are 6 AM, 12 PM, and 6 PM. Check out our Programs page to see the full schedule and book your spot."
    }

    return "Thanks for your question! I'm here to help with workouts, nutrition, memberships, and class schedules. Feel free to ask me anything fitness-related!"
  }

  const handleQuickAction = (action: string) => {
    handleSendMessage(action)
  }

  return (
    <>
      {/* Chat Bubble Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#84FF00] shadow-lg shadow-[#84FF00]/50 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#84FF00]/60"
        aria-label="Open chat"
      >
        {isOpen ? <X className="h-6 w-6 text-black" /> : <MessageCircle className="h-6 w-6 text-black" />}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-28 left-8 z-50 flex h-[600px] w-[380px] flex-col rounded-2xl border border-[#84FF00]/20 bg-black shadow-2xl shadow-[#84FF00]/20 transition-all duration-300">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-[#84FF00]/20 bg-[#84FF00]/10 p-4 rounded-t-2xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#84FF00]">
              <Dumbbell className="h-5 w-5 text-black" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-white">FitBot</h3>
              <p className="text-xs text-gray-400">AI Fitness Assistant</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 transition-colors hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-[#84FF00] text-black font-medium"
                      : "bg-gray-900 text-white border border-[#84FF00]/20"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className="border-t border-[#84FF00]/20 p-4">
              <p className="mb-3 text-xs font-medium text-gray-400">Quick Actions:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action) => (
                  <button
                    key={action.label}
                    onClick={() => handleQuickAction(action.label)}
                    className="flex items-center gap-2 rounded-lg border border-[#84FF00]/20 bg-gray-900 px-3 py-2 text-xs text-white transition-all hover:border-[#84FF00] hover:bg-[#84FF00]/10"
                  >
                    <span>{action.icon}</span>
                    <span className="text-left leading-tight">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-[#84FF00]/20 p-4">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage(inputValue)
                  }
                }}
                placeholder="Type your message..."
                className="flex-1 border-[#84FF00]/20 bg-gray-900 text-white placeholder:text-gray-500 focus:border-[#84FF00]"
              />
              <Button
                onClick={() => handleSendMessage(inputValue)}
                size="icon"
                className="bg-[#84FF00] text-black hover:bg-[#84FF00]/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
