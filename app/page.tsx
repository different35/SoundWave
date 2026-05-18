"use client";

import { BottomNav } from "@/components/navigation/BottomNav";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <Header />

      {/* Main content area with safe bottom padding for mobile nav */}
      <main className="flex-1 overflow-y-auto mobile-nav-safe">
        <div className="p-4 md:p-6">
          {/* Placeholder sections */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Welcome</h2>
            <div className="glass-card p-6">
              <p className="text-text-muted">
                Connect your music platforms to get started
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Connect Your Platforms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["Spotify", "YouTube", "SoundCloud"].map((platform) => (
                <div
                  key={platform}
                  className="glass-card-hover p-6 text-center"
                >
                  <h3 className="font-semibold mb-2">{platform}</h3>
                  <button className="w-full bg-primary hover:bg-primary-glow text-white rounded-lg py-2 transition-colors">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
