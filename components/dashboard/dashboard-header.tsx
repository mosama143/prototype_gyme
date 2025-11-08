"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Bell, Settings } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold font-heading text-balance">
          Welcome back, <span className="text-primary">Alex</span>
        </h1>
        <p className="text-muted-foreground mt-2 text-lg">Ready to crush your fitness goals today?</p>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        <Avatar className="h-12 w-12 border-2 border-primary">
          <AvatarImage src="/fitness-athlete.jpg" />
          <AvatarFallback>AJ</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
