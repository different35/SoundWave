"use client";

import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/navigation/BottomNav";

export default function Profile() {
  return (
    <div className="h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 overflow-y-auto mobile-nav-safe">
        <div className="p-4 md:p-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Profile</h1>
          <div className="glass-card p-6 text-center text-text-muted">
            <p>Sign in to manage your profile</p>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
