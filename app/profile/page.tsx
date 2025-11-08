"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Edit2, Save, X, Plus, Calendar, TrendingUp, Heart, Flame } from "lucide-react"

interface UserProfile {
  name: string
  email: string
  avatar: string
  gender: "Male" | "Female" | "Other"
  age: number
  height: string
  weight: string
  goal: string
  joinDate: string
}

interface ProgressEntry {
  date: string
  weight: string
  measurement: string
  notes: string
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [showAddProgress, setShowAddProgress] = useState(false)

  const [profile, setProfile] = useState<UserProfile>({
    name: "Sarah Johnson",
    email: "sarah@example.com",
    avatar: "/fit-woman-smiling-in-gym.jpg",
    gender: "Female",
    age: 28,
    height: "5'6\"",
    weight: "150 lbs",
    goal: "Weight Loss & Muscle Gain",
    joinDate: "January 2023",
  })

  const [editData, setEditData] = useState(profile)

  const [progressHistory, setProgressHistory] = useState<ProgressEntry[]>([
    { date: "Dec 1, 2024", weight: "155 lbs", measurement: '32" waist', notes: "Started strength training" },
    { date: "Nov 15, 2024", weight: "158 lbs", measurement: '33" waist', notes: "Added cardio sessions" },
    { date: "Nov 1, 2024", weight: "160 lbs", measurement: '34" waist', notes: "Initial measurement" },
  ])

  const [newProgress, setNewProgress] = useState({ weight: "", measurement: "", notes: "" })

  const stats = [
    { icon: Calendar, label: "Sessions Completed", value: "42", color: "text-[#84FF00]" },
    { icon: Flame, label: "Calories Burned", value: "12,450", color: "text-[#FF6B00]" },
    { icon: TrendingUp, label: "Weight Lost", value: "8 lbs", color: "text-[#00D9FF]" },
    { icon: Heart, label: "Current Trainer", value: "Alex Morgan", color: "text-[#FF00FF]" },
  ]

  const trainingHistory = [
    {
      date: "Dec 20, 2024",
      type: "Strength Training",
      trainer: "Alex Morgan",
      duration: "60 min",
      result: "Completed",
    },
    { date: "Dec 19, 2024", type: "Cardio & HIIT", trainer: "Marcus Johnson", duration: "45 min", result: "Completed" },
    {
      date: "Dec 18, 2024",
      type: "Yoga & Flexibility",
      trainer: "Sarah Chen",
      duration: "60 min",
      result: "Completed",
    },
  ]

  const handleEdit = () => {
    setIsEditing(true)
    setEditData(profile)
  }

  const handleSave = () => {
    setProfile(editData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditData(profile)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setEditData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddProgress = () => {
    if (newProgress.weight) {
      setProgressHistory([
        {
          date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
          weight: newProgress.weight,
          measurement: newProgress.measurement,
          notes: newProgress.notes,
        },
        ...progressHistory,
      ])
      setNewProgress({ weight: "", measurement: "", notes: "" })
      setShowAddProgress(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />
      <div className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Profile Header */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <img
                  src={profile.avatar || "/placeholder.svg"}
                  alt={profile.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#84FF00] shadow-[0_0_30px_rgba(132,255,0,0.3)]"
                />
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                {isEditing ? (
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      value={editData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-2xl font-black text-white focus:border-[#84FF00] focus:outline-none"
                    />
                    <input
                      type="email"
                      name="email"
                      value={editData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#84FF00] focus:outline-none"
                    />
                  </div>
                ) : (
                  <div>
                    <h1 className="text-4xl font-black text-white mb-2">{profile.name}</h1>
                    <p className="text-gray-400 mb-4">{profile.email}</p>
                  </div>
                )}

                <p className="text-[#84FF00] font-bold mb-6">Member since {profile.joinDate}</p>

                {isEditing ? (
                  <div className="flex gap-3">
                    <Button onClick={handleSave} className="bg-[#84FF00] text-black hover:bg-[#84FF00]/90 font-bold">
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                    <Button
                      onClick={handleCancel}
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={handleEdit}
                    className="bg-white/10 text-white hover:bg-white/20 font-bold border border-white/20"
                  >
                    <Edit2 className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                )}
              </div>
            </div>

            {/* Edit Profile Fields */}
            {isEditing && (
              <div className="mt-8 pt-8 border-t border-white/10 grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Gender</label>
                  <select
                    name="gender"
                    value={editData.gender}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#84FF00] focus:outline-none"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={editData.age}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#84FF00] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Height</label>
                  <input
                    type="text"
                    name="height"
                    value={editData.height}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#84FF00] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Weight</label>
                  <input
                    type="text"
                    name="weight"
                    value={editData.weight}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#84FF00] focus:outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-400 mb-2">Fitness Goal</label>
                  <input
                    type="text"
                    name="goal"
                    value={editData.goal}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#84FF00] focus:outline-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#84FF00]/50 transition-all"
              >
                <stat.icon className={`h-8 w-8 ${stat.color} mb-3`} />
                <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-black text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Progress History */}
            <div className="lg:col-span-2">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Progress Report</h2>
                  <Button
                    onClick={() => setShowAddProgress(!showAddProgress)}
                    size="sm"
                    className="bg-[#84FF00] text-black hover:bg-[#84FF00]/90 font-bold"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Update
                  </Button>
                </div>

                {showAddProgress && (
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6 space-y-3">
                    <input
                      type="text"
                      placeholder="Weight (e.g., 150 lbs)"
                      value={newProgress.weight}
                      onChange={(e) => setNewProgress({ ...newProgress, weight: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:border-[#84FF00] focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Measurements (e.g., 32&quot; waist)"
                      value={newProgress.measurement}
                      onChange={(e) => setNewProgress({ ...newProgress, measurement: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:border-[#84FF00] focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Notes"
                      value={newProgress.notes}
                      onChange={(e) => setNewProgress({ ...newProgress, notes: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:border-[#84FF00] focus:outline-none"
                    />
                    <div className="flex gap-2">
                      <Button
                        onClick={handleAddProgress}
                        className="flex-1 bg-[#84FF00] text-black hover:bg-[#84FF00]/90 font-bold"
                      >
                        Save Update
                      </Button>
                      <Button
                        onClick={() => setShowAddProgress(false)}
                        variant="outline"
                        className="flex-1 border-white/20 text-white hover:bg-white/10"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  {progressHistory.map((entry, index) => (
                    <div key={index} className="border-l-4 border-[#84FF00] pl-4 py-2">
                      <p className="text-white font-bold">{entry.date}</p>
                      <p className="text-[#84FF00]">{entry.weight}</p>
                      <p className="text-gray-400 text-sm">{entry.measurement}</p>
                      {entry.notes && <p className="text-gray-500 text-sm italic">{entry.notes}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Training History */}
            <div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Recent Training</h2>
                <div className="space-y-4">
                  {trainingHistory.map((session, index) => (
                    <Link key={index} href={`/chat/trainer-${index}`} className="group">
                      <div className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-[#84FF00]/50 transition-all group-hover:bg-[#84FF00]/10">
                        <p className="text-white font-bold text-sm">{session.type}</p>
                        <p className="text-gray-400 text-xs mb-2">{session.date}</p>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-[#84FF00] text-xs font-bold">{session.trainer}</p>
                            <p className="text-gray-500 text-xs">{session.duration}</p>
                          </div>
                          <span className="text-[#84FF00] text-xs font-bold">{session.result}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
