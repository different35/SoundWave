// Platform types
export type Platform = "spotify" | "youtube" | "soundcloud" | "shazam";

// Artist
export interface Artist {
  id: string;
  name: string;
  image_url?: string;
  spotify_id?: string;
  youtube_channel_id?: string;
  soundcloud_id?: string;
}

// Track
export interface Track {
  id: string;
  name: string;
  artist: Artist;
  album?: string;
  duration_ms: number;
  image_url?: string;
  spotify_id?: string;
  youtube_id?: string;
  soundcloud_id?: string;
  // Spotify audio features (provided by platform)
  spotify_energy?: number;
  spotify_valence?: number;
  spotify_danceability?: number;
  spotify_tempo?: number;
}

// Aggregated recommendation with confidence
export interface AggregatedRecommendation {
  track: Track;
  sources: {
    spotify: boolean;
    youtube: boolean;
    soundcloud: boolean;
  };
  confidence: number; // 0.5 (1 platform), 0.8 (2 platforms), 1.0 (3 platforms)
}

// User profile
export interface UserProfile {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  created_at: Date;
}

// Connected platform
export interface ConnectedPlatform {
  platform: Platform;
  user_id: string;
  access_token: string;
  refresh_token?: string;
  expires_at: Date;
  platform_user_id: string;
}

// Playlist
export interface Playlist {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  is_smart: boolean;
  smart_rules?: Record<string, unknown>;
  created_at: Date;
  updated_at: Date;
  tracks?: Track[];
}

// User trend data
export interface UserTrend {
  genreShift: Record<string, { lastMonth: number; thisMonth: number }>;
  newArtistDiscoveries: Artist[];
  listeningPatterns: {
    morning: string[];
    evening: string[];
    weekend: string[];
  };
}
