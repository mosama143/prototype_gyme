"use client"
import { Card } from "@/components/ui/card"
import { Dumbbell, Calendar, TrendingUp, Users } from "lucide-react"

const actions = [
  {
    icon: Dumbbell,
    label: "Start Workout",
    color: "bg-primary text-primary-foreground",
  },
  {
    icon: Calendar,
    label: "Schedule Session",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    icon: TrendingUp,
    label: "View Progress",
    color: "bg-accent text-accent-foreground",
  },
  {
    icon: Users,
    label: "Find Trainer",
    color: "bg-muted text-foreground",
  },
]

export function QuickActions() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {actions.map((action) => (
        <Card
          key={action.label}
          className="p-6 hover:scale-105 transition-transform cursor-pointer border-border/50 hover:border-primary/50"
        >
          <div className="flex flex-col items-center text-center gap-3">
            <div className={`p-4 rounded-xl ${action.color}`}>
              <action.icon className="h-6 w-6" />
            </div>
            <span className="font-semibold">{action.label}</span>
          </div>
        </Card>
      ))}
    </div>
  )
}
