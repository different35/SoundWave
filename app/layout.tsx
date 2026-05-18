import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SoundWave - Your Music, Unified",
  description: "Aggregate music from Spotify, YouTube, and SoundCloud in one beautiful interface",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-text antialiased">
        {children}
      </body>
    </html>
  );
}
