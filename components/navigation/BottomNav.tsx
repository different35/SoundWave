'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
  icon: (active: boolean) => React.ReactNode;
}

const HomeIcon = ({ active }: { active: boolean }) => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const MusicIcon = ({ active }: { active: boolean }) => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const CompassIcon = ({ active }: { active: boolean }) => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 10.88 14.12 7.76 16.24 13.12 9.88 16.24 7.76" />
  </svg>
);

const PlaylistIcon = ({ active }: { active: boolean }) => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 4h12M6 10h12M6 16h12M4 6v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6" />
  </svg>
);

const ProfileIcon = ({ active }: { active: boolean }) => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const navItems: NavItem[] = [
  { label: 'Home', href: '/', icon: HomeIcon },
  { label: 'Library', href: '/library', icon: MusicIcon },
  { label: 'Discover', href: '/discover', icon: CompassIcon },
  { label: 'Playlists', href: '/playlists', icon: PlaylistIcon },
  { label: 'Profile', href: '/profile', icon: ProfileIcon },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="tab-nav">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center gap-1 w-full h-full transition-colors ${
              isActive ? 'tab-active text-primary' : 'tab-inactive text-text-muted hover:text-text'
            }`}
          >
            <div className="tab-icon">{item.icon(isActive)}</div>
            <span className="text-xs">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
