"use client"

import { useState } from "react"
import { Calendar, Clock, CheckCircle2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function BookTrainerSection() {
  const { toast } = useToast()
  const [selectedTrainer, setSelectedTrainer] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [showConfirmation, setShowConfirmation] = useState(false)

  const trainers = [
    {
      id: "mike-johnson",
      name: "Mike Johnson",
      specialty: "Strength Training",
      image: "/male-trainer-strength.jpg",
      rating: 4.9,
      sessions: 500,
      price: 75,
    },
    {
      id: "sarah-williams",
      name: "Sarah Williams",
      specialty: "Yoga & Flexibility",
      image: "/female-trainer-yoga.jpg",
      rating: 4.8,
      sessions: 450,
      price: 65,
    },
    {
      id: "david-chen",
      name: "David Chen",
      specialty: "Cardio & HIIT",
      image: "/male-trainer-cardio.jpg",
      rating: 4.9,
      sessions: 520,
      price: 70,
    },
    {
      id: "emma-davis",
      name: "Emma Davis",
      specialty: "Nutrition & Wellness",
      image: "/female-trainer-nutrition.jpg",
      rating: 4.7,
      sessions: 380,
      price: 80,
    },
    {
      id: "alex-rodriguez",
      name: "Alex Rodriguez",
      specialty: "CrossFit",
      image: "/male-trainer-crossfit.jpg",
      rating: 4.8,
      sessions: 420,
      price: 75,
    },
    {
      id: "lisa-thompson",
      name: "Lisa Thompson",
      specialty: "Pilates",
      image: "/female-trainer-pilates.jpg",
      rating: 4.9,
      sessions: 460,
      price: 70,
    },
  ]

  const availableDates = [
    "2025-01-15",
    "2025-01-16",
    "2025-01-17",
    "2025-01-18",
    "2025-01-19",
    "2025-01-20",
    "2025-01-21",
  ]

  const availableTimes = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
  ]

  const handleBooking = () => {
    if (!selectedTrainer || !selectedDate || !selectedTime) {
      toast({
        title: "Missing information",
        description: "Please select a trainer, date, and time.",
        variant: "destructive",
      })
      return
    }
    setShowConfirmation(true)
  }

  const confirmBooking = () => {
    const trainer = trainers.find((t) => t.id === selectedTrainer)
    toast({
      title: "Booking confirmed!",
      description: `Your session with ${trainer?.name} is scheduled for ${selectedDate} at ${selectedTime}.`,
    })
    setShowConfirmation(false)
    setSelectedTrainer(null)
    setSelectedDate("")
    setSelectedTime("")
  }

  const selectedTrainerData = trainers.find((t) => t.id === selectedTrainer)

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black text-white mb-4">
          Book a <span className="text-[#84FF00]">Personal Trainer</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Choose from our expert trainers and schedule your personalized training session
        </p>
      </div>

      {/* Trainers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            className={`bg-white/5 border-2 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
              selectedTrainer === trainer.id
                ? "border-[#84FF00] shadow-[0_0_30px_rgba(132,255,0,0.3)]"
                : "border-white/10 hover:border-[#84FF00]/50"
            }`}
            onClick={() => setSelectedTrainer(trainer.id)}
          >
            {/* Trainer Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
              <img
                src={trainer.image || "/placeholder.svg"}
                alt={trainer.name}
                className="w-full h-full object-cover"
              />
              {selectedTrainer === trainer.id && (
                <div className="absolute top-4 right-4 bg-[#84FF00] text-black rounded-full p-2">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
              )}
            </div>

            {/* Trainer Info */}
            <div className="p-6">
              <h3 className="text-xl font-black text-white mb-1">{trainer.name}</h3>
              <p className="text-[#84FF00] text-sm font-bold mb-3">{trainer.specialty}</p>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <span>⭐ {trainer.rating} Rating</span>
                <span>{trainer.sessions}+ Sessions</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-white">${trainer.price}/hr</span>
                <Button
                  size="sm"
                  className={`font-bold ${
                    selectedTrainer === trainer.id
                      ? "bg-[#84FF00] text-black"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {selectedTrainer === trainer.id ? "Selected" : "Select"}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Details */}
      {selectedTrainer && (
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-3xl font-black text-white mb-6">Select Date & Time</h2>

          {/* Date Selection */}
          <div className="mb-8">
            <label className="flex items-center gap-2 text-lg font-bold text-white mb-4">
              <Calendar className="h-5 w-5 text-[#84FF00]" />
              Choose a Date
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {availableDates.map((date) => {
                const dateObj = new Date(date)
                const dayName = dateObj.toLocaleDateString("en-US", { weekday: "short" })
                const dayNum = dateObj.getDate()
                const month = dateObj.toLocaleDateString("en-US", { month: "short" })

                return (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedDate === date
                        ? "border-[#84FF00] bg-[#84FF00]/10"
                        : "border-white/10 bg-white/5 hover:border-[#84FF00]/50"
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-xs text-gray-400 mb-1">{dayName}</div>
                      <div className="text-2xl font-black text-white">{dayNum}</div>
                      <div className="text-xs text-gray-400">{month}</div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Time Selection */}
          <div className="mb-8">
            <label className="flex items-center gap-2 text-lg font-bold text-white mb-4">
              <Clock className="h-5 w-5 text-[#84FF00]" />
              Choose a Time
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {availableTimes.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-xl border-2 font-bold transition-all ${
                    selectedTime === time
                      ? "border-[#84FF00] bg-[#84FF00]/10 text-[#84FF00]"
                      : "border-white/10 bg-white/5 text-white hover:border-[#84FF00]/50"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Booking Summary */}
          {selectedDate && selectedTime && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-black text-white mb-4">Booking Summary</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex justify-between">
                  <span>Trainer:</span>
                  <span className="text-white font-bold">{selectedTrainerData?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Specialty:</span>
                  <span className="text-white font-bold">{selectedTrainerData?.specialty}</span>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span className="text-white font-bold">
                    {new Date(selectedDate).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Time:</span>
                  <span className="text-white font-bold">{selectedTime}</span>
                </div>
                <div className="border-t border-white/10 pt-2 mt-2 flex justify-between text-lg">
                  <span className="font-bold text-white">Total:</span>
                  <span className="font-black text-[#84FF00] text-2xl">${selectedTrainerData?.price}</span>
                </div>
              </div>
            </div>
          )}

          {/* Book Button */}
          <Button
            onClick={handleBooking}
            disabled={!selectedDate || !selectedTime}
            className="w-full bg-[#84FF00] text-black hover:bg-[#84FF00]/90 font-bold text-lg h-14 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirm Booking
          </Button>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <>
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" onClick={() => setShowConfirmation(false)} />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-black border-2 border-[#84FF00] rounded-2xl p-8 z-50 shadow-[0_0_50px_rgba(132,255,0,0.3)]">
            <button
              onClick={() => setShowConfirmation(false)}
              className="absolute top-4 right-4 p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-gray-400" />
            </button>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#84FF00]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 text-[#84FF00]" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Confirm Your Booking?</h3>
              <p className="text-gray-400 mb-6">
                You're about to book a session with{" "}
                <span className="text-white font-bold">{selectedTrainerData?.name}</span> on{" "}
                <span className="text-white font-bold">{selectedDate}</span> at{" "}
                <span className="text-white font-bold">{selectedTime}</span>.
              </p>
              <div className="flex gap-3">
                <Button
                  onClick={() => setShowConfirmation(false)}
                  variant="outline"
                  className="flex-1 border-white/10 text-white hover:bg-white/5"
                >
                  Cancel
                </Button>
                <Button
                  onClick={confirmBooking}
                  className="flex-1 bg-[#84FF00] text-black hover:bg-[#84FF00]/90 font-bold"
                >
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
