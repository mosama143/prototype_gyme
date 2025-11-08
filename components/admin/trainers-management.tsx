"use client"

import { useState } from "react"
import { Search, CheckCircle, XCircle, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export function TrainersManagement() {
  const [searchQuery, setSearchQuery] = useState("")

  const trainers = [
    {
      id: 1,
      name: "Alex Rodriguez",
      specialty: "Strength Training",
      status: "Active",
      rating: 4.8,
      clients: 45,
      image: "/male-trainer-strength.jpg",
    },
    {
      id: 2,
      name: "Emma Wilson",
      specialty: "Yoga & Flexibility",
      status: "Active",
      rating: 4.9,
      clients: 62,
      image: "/female-trainer-yoga.jpg",
    },
    {
      id: 3,
      name: "Marcus Chen",
      specialty: "HIIT & Cardio",
      status: "Active",
      rating: 4.7,
      clients: 38,
      image: "/male-trainer-cardio.jpg",
    },
  ]

  const applications = [
    { id: 1, name: "David Martinez", specialty: "CrossFit", experience: "5 years", date: "2024-03-15" },
    { id: 2, name: "Lisa Anderson", specialty: "Pilates", experience: "3 years", date: "2024-03-14" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white mb-2">Trainers Management</h1>
        <p className="text-gray-400">Manage trainers and review applications</p>
      </div>

      {/* Search */}
      <Card className="bg-white/5 border-white/10 p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Search trainers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/5 border-white/10 text-white"
          />
        </div>
      </Card>

      {/* Active Trainers */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Active Trainers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((trainer) => (
            <Card key={trainer.id} className="bg-white/5 border-white/10 overflow-hidden group">
              <div className="aspect-square overflow-hidden bg-white/5">
                <img
                  src={trainer.image || "/placeholder.svg"}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-1">{trainer.name}</h3>
                <div className="text-sm text-[#84FF00] mb-3">{trainer.specialty}</div>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>Rating: {trainer.rating}</span>
                  <span>{trainer.clients} clients</span>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Pending Applications */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Pending Applications</h2>
        <Card className="bg-white/5 border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">
                    Applicant
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">
                    Specialty
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">
                    Experience
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-400 uppercase tracking-wider">
                    Applied
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {applications.map((app) => (
                  <tr key={app.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-bold text-white">{app.name}</td>
                    <td className="px-6 py-4 text-gray-300">{app.specialty}</td>
                    <td className="px-6 py-4 text-gray-300">{app.experience}</td>
                    <td className="px-6 py-4 text-gray-300">{app.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button size="sm" className="bg-[#84FF00] text-black hover:bg-[#84FF00]/90">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-400/20 text-red-400 hover:bg-red-400/10 bg-transparent"
                        >
                          <XCircle className="w-4 h-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  )
}
