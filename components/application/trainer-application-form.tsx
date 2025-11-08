"use client"

import type React from "react"

import { useState } from "react"
import { User, Mail, Phone, Upload, FileText, Award, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export function TrainerApplicationForm() {
  const { toast } = useToast()
  const [cvFile, setCvFile] = useState<File | null>(null)
  const [certFiles, setCertFiles] = useState<File[]>([])
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    bio: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleCvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "CV must be less than 5MB",
          variant: "destructive",
        })
        return
      }
      setCvFile(file)
    }
  }

  const handleCertUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const validFiles = files.filter((file) => {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: `${file.name} must be less than 5MB`,
          variant: "destructive",
        })
        return false
      }
      return true
    })
    setCertFiles((prev) => [...prev, ...validFiles])
  }

  const removeCertFile = (index: number) => {
    setCertFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.fullName) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required"
    }

    if (!formData.bio) {
      newErrors.bio = "Bio is required"
    } else if (formData.bio.length < 50) {
      newErrors.bio = "Bio must be at least 50 characters"
    }

    if (!cvFile) {
      newErrors.cv = "CV is required"
    }

    if (certFiles.length === 0) {
      newErrors.certs = "At least one certification is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      toast({
        title: "Application submitted!",
        description: "We'll review your application and get back to you within 3-5 business days.",
      })
      // Handle application submission logic here
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <Dumbbell className="h-10 w-10 text-[#84FF00]" />
            <span className="text-3xl font-black text-white">
              FIT<span className="text-[#84FF00]">ZONE</span>
            </span>
          </Link>
          <h1 className="text-5xl font-black text-white mb-4">
            Join Our <span className="text-[#84FF00]">Trainer Team</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Apply to become a certified trainer at FitZone and help transform lives through fitness
          </p>
        </div>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8">
          {/* Personal Information Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
              <User className="h-6 w-6 text-[#84FF00]" />
              Personal Information
            </h2>

            {/* Full Name */}
            <div className="mb-6">
              <label htmlFor="fullName" className="block text-sm font-bold text-white mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full bg-white/5 border ${
                    errors.fullName ? "border-red-500" : "border-white/10"
                  } rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#84FF00] transition-colors`}
                  placeholder="John Doe"
                />
              </div>
              {errors.fullName && <p className="text-red-400 text-sm mt-2">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-bold text-white mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full bg-white/5 border ${
                    errors.email ? "border-red-500" : "border-white/10"
                  } rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#84FF00] transition-colors`}
                  placeholder="your@email.com"
                />
              </div>
              {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-bold text-white mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full bg-white/5 border ${
                    errors.phone ? "border-red-500" : "border-white/10"
                  } rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#84FF00] transition-colors`}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              {errors.phone && <p className="text-red-400 text-sm mt-2">{errors.phone}</p>}
            </div>
          </div>

          {/* Professional Information Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-[#84FF00]" />
              Professional Information
            </h2>

            {/* Bio */}
            <div className="mb-6">
              <label htmlFor="bio" className="block text-sm font-bold text-white mb-2">
                Professional Bio * (minimum 50 characters)
              </label>
              <textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                rows={6}
                className={`w-full bg-white/5 border ${
                  errors.bio ? "border-red-500" : "border-white/10"
                } rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#84FF00] transition-colors resize-none`}
                placeholder="Tell us about your experience, specializations, training philosophy, and what makes you a great trainer..."
              />
              <div className="flex justify-between items-center mt-2">
                {errors.bio && <p className="text-red-400 text-sm">{errors.bio}</p>}
                <p className="text-gray-400 text-sm ml-auto">{formData.bio.length} characters</p>
              </div>
            </div>

            {/* CV Upload */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-white mb-2">
                Upload CV/Resume * (PDF or DOC, max 5MB)
              </label>
              <div
                className={`border-2 border-dashed ${
                  errors.cv ? "border-red-500" : "border-white/10"
                } rounded-xl p-6 text-center hover:border-[#84FF00]/50 transition-colors`}
              >
                {cvFile ? (
                  <div className="flex items-center justify-between bg-white/5 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <FileText className="h-8 w-8 text-[#84FF00]" />
                      <div className="text-left">
                        <p className="text-white font-bold text-sm">{cvFile.name}</p>
                        <p className="text-gray-400 text-xs">{(cvFile.size / 1024).toFixed(2)} KB</p>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setCvFile(null)}
                      className="text-red-400 hover:text-red-300"
                    >
                      Remove
                    </Button>
                  </div>
                ) : (
                  <label className="cursor-pointer">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-white font-bold mb-1">Click to upload CV</p>
                    <p className="text-gray-400 text-sm">PDF or DOC format</p>
                    <input type="file" accept=".pdf,.doc,.docx" onChange={handleCvUpload} className="hidden" />
                  </label>
                )}
              </div>
              {errors.cv && <p className="text-red-400 text-sm mt-2">{errors.cv}</p>}
            </div>

            {/* Certifications Upload */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-white mb-2">
                Upload Certifications * (Images or PDFs, max 5MB each)
              </label>
              <div
                className={`border-2 border-dashed ${
                  errors.certs ? "border-red-500" : "border-white/10"
                } rounded-xl p-6 text-center hover:border-[#84FF00]/50 transition-colors mb-4`}
              >
                <label className="cursor-pointer">
                  <Award className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-white font-bold mb-1">Click to upload certifications</p>
                  <p className="text-gray-400 text-sm">Images or PDF format</p>
                  <input type="file" accept="image/*,.pdf" multiple onChange={handleCertUpload} className="hidden" />
                </label>
              </div>

              {/* Uploaded Certifications List */}
              {certFiles.length > 0 && (
                <div className="space-y-2">
                  {certFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-white/5 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <Award className="h-6 w-6 text-[#84FF00]" />
                        <div className="text-left">
                          <p className="text-white font-bold text-sm">{file.name}</p>
                          <p className="text-gray-400 text-xs">{(file.size / 1024).toFixed(2)} KB</p>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeCertFile(index)}
                        className="text-red-400 hover:text-red-300"
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              )}
              {errors.certs && <p className="text-red-400 text-sm mt-2">{errors.certs}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full bg-[#84FF00] text-black hover:bg-[#84FF00]/90 font-bold text-lg h-14">
            Submit Application
          </Button>

          {/* Info Text */}
          <p className="text-center text-gray-400 text-sm mt-6">
            By submitting this application, you agree to our terms and conditions. We'll review your application and
            contact you within 3-5 business days.
          </p>
        </form>
      </div>
    </div>
  )
}
