"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Flame, ChevronRight } from "lucide-react"

const workouts = [
  {
    name: "Upper Body Strength",
    date: "Today, 6:30 AM",
    duration: "45 min",
    calories: 420,
    intensity: "High",
    color: "bg-primary/10 text-primary",
  },
  {
    name: "HIIT Cardio Blast",
    date: "Yesterday, 7:00 AM",
    duration: "30 min",
    calories: 380,
    intensity: "High",
    color: "bg-accent/10 text-accent",
  },
  {
    name: "Yoga & Flexibility",
    date: "2 days ago",
    duration: "60 min",
    calories: 180,
    intensity: "Low",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    name: "Leg Day Power",
    date: "3 days ago",
    duration: "50 min",
    calories: 450,
    intensity: "High",
    color: "bg-primary/10 text-primary",
  },
]

export function RecentWorkouts() {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-heading">Recent Workouts</CardTitle>
          <Button variant="ghost" size="sm">
            View All
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {workouts.map((workout, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold">{workout.name}</h4>
                  <Badge className={workout.color}>{workout.intensity}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{workout.date}</p>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{workout.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Flame className="h-4 w-4 text-accent" />
                  <span className="font-semibold">{workout.calories}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
