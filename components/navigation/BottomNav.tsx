"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, LibraryIcon, DiscoverIcon, PlaylistIcon, ProfileIcon } from "../icons/NavigationIcons";

const navItems = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Library", href: "/library", icon: LibraryIcon },
  { name: "Discover", href: "/discover", icon: DiscoverIcon },
  { name: "Playlists", href: "/playlists", icon: PlaylistIcon },
  { name: "Profile", href: "/profile", icon: ProfileIcon },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-card border-t border-border">
      <div className="flex justify-around h-16">
        {navItems.map(({ name, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex-1 flex flex-col items-center justify-center gap-1 transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-text-muted hover:text-text"
              }`}
              title={name}
            >
              <Icon />
              <span className="text-xs">{name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
