"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Flame, Target, Clock } from "lucide-react"

const stats = [
  {
    title: "Total Workouts",
    value: "127",
    change: "+12%",
    icon: Dumbbell,
    trend: "up",
  },
  {
    title: "Calories Burned",
    value: "45.2K",
    change: "+8%",
    icon: Flame,
    trend: "up",
  },
  {
    title: "Goals Achieved",
    value: "23/30",
    change: "77%",
    icon: Target,
    trend: "up",
  },
  {
    title: "Active Time",
    value: "156h",
    change: "+15%",
    icon: Clock,
    trend: "up",
  },
]

function Dumbbell({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.5 6.5v11M17.5 6.5v11M3 9.5v5M21 9.5v5M6.5 6.5h-2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h2M17.5 6.5h2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-2M6.5 12h11" />
    </svg>
  )
}

export function WorkoutStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="border-border/50 hover:border-primary/50 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold font-heading">{stat.value}</div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3 text-primary" />
              <span className="text-xs text-primary font-semibold">{stat.change}</span>
              <span className="text-xs text-muted-foreground ml-1">vs last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
