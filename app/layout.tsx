import type { Metadata } from 'next';
import BottomNav from '../components/navigation/BottomNav';
import './globals.css';

export const metadata: Metadata = {
  title: 'SoundWave - Unified Music Discovery',
  description: 'Discover music across Spotify, YouTube, SoundCloud, and Shazam',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-text">
        <main className="pb-24">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
