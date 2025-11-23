"use client";

import { useState, useEffect } from "react";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">

      {/* (1) الخلفية */}
      <div className="fixed inset-0 -z-30">
        <img
          src="/view-gym-room-training-sports.jpg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* (2) طبقة تغميق أساسية 80% */}
      <div className="fixed inset-0 -z-20 bg-black/0" />

      {/* (3) منطقة تخفيف السواد إلى 40% */}
      <div
        className="fixed inset-0 pointer-events-none -z-10 transition-all duration-300"
        style={{
          background: `radial-gradient(
            circle 300px at ${mousePos.x}px ${mousePos.y}px,
            rgba(0,0,0,0.40) 0%,     /* ← 20% سواد تحت الماوس */
            rgba(0,0,0,0.80) 70%     /* ← 60% سواد خارج المنطقة */
          )`
        }}
      ></div>

      {/* (4) الفورم */}
      <LoginForm />
    </div>
  );
}
