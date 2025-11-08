"use client"

import { useState } from "react"
import { User, Bell, Shield, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

export function AdminSettings() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white mb-2">Settings</h1>
        <p className="text-gray-400">Manage your admin account and preferences</p>
      </div>

      {/* Profile Settings */}
      <Card className="bg-white/5 border-white/10 p-6">
        <div className="flex items-center gap-3 mb-6">
          <User className="w-5 h-5 text-[#84FF00]" />
          <h3 className="text-xl font-bold text-white">Profile Settings</h3>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-400 mb-2">Full Name</label>
            <Input defaultValue="Admin User" className="bg-white/5 border-white/10 text-white" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-400 mb-2">Email</label>
            <Input defaultValue="admin@fitnessgym.com" className="bg-white/5 border-white/10 text-white" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-400 mb-2">Phone</label>
            <Input defaultValue="+1 (555) 123-4567" className="bg-white/5 border-white/10 text-white" />
          </div>
          <Button className="bg-[#84FF00] text-black hover:bg-[#84FF00]/90 font-bold">Save Changes</Button>
        </div>
      </Card>

      {/* Notifications */}
      <Card className="bg-white/5 border-white/10 p-6">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-5 h-5 text-[#84FF00]" />
          <h3 className="text-xl font-bold text-white">Notifications</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-bold text-white">Email Notifications</div>
              <div className="text-sm text-gray-400">Receive email updates about orders and users</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-bold text-white">Order Alerts</div>
              <div className="text-sm text-gray-400">Get notified when new orders are placed</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-bold text-white">Low Stock Alerts</div>
              <div className="text-sm text-gray-400">Alert when products are running low</div>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </Card>

      {/* Security */}
      <Card className="bg-white/5 border-white/10 p-6">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-5 h-5 text-[#84FF00]" />
          <h3 className="text-xl font-bold text-white">Security</h3>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-400 mb-2">Current Password</label>
            <Input type="password" className="bg-white/5 border-white/10 text-white" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-400 mb-2">New Password</label>
            <Input type="password" className="bg-white/5 border-white/10 text-white" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-400 mb-2">Confirm New Password</label>
            <Input type="password" className="bg-white/5 border-white/10 text-white" />
          </div>
          <Button className="bg-[#84FF00] text-black hover:bg-[#84FF00]/90 font-bold">Update Password</Button>
        </div>
      </Card>

      {/* Appearance */}
      <Card className="bg-white/5 border-white/10 p-6">
        <div className="flex items-center gap-3 mb-6">
          <Palette className="w-5 h-5 text-[#84FF00]" />
          <h3 className="text-xl font-bold text-white">Appearance</h3>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-bold text-white">Dark Mode</div>
            <div className="text-sm text-gray-400">Use dark theme for the admin panel</div>
          </div>
          <Switch checked={darkMode} onCheckedChange={setDarkMode} />
        </div>
      </Card>
    </div>
  )
}
