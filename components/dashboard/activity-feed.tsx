"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Heart, MessageCircle } from "lucide-react"

const activities = [
  {
    user: "Sarah M.",
    action: "completed a workout",
    time: "2h ago",
    icon: Trophy,
    color: "text-primary",
  },
  {
    user: "Mike R.",
    action: "liked your progress",
    time: "4h ago",
    icon: Heart,
    color: "text-red-500",
  },
  {
    user: "Coach Emma",
    action: "commented on your form",
    time: "6h ago",
    icon: MessageCircle,
    color: "text-blue-500",
  },
  {
    user: "John D.",
    action: "achieved a new PR",
    time: "8h ago",
    icon: Trophy,
    color: "text-primary",
  },
]

export function ActivityFeed() {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="text-xl font-heading">Activity Feed</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={`/diverse-athlete.png?height=40&width=40&query=athlete ${index}`} />
                <AvatarFallback>{activity.user[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm">
                  <span className="font-semibold">{activity.user}</span>{" "}
                  <span className="text-muted-foreground">{activity.action}</span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
              <activity.icon className={`h-4 w-4 ${activity.color}`} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
