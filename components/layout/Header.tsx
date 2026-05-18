"use client";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/80 backdrop-blur-glass">
      <div className="px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            SoundWave
          </h1>
          <div className="text-text-muted text-sm">
            {new Date().toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
