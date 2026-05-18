# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Philosophy

**SoundWave** is a multi-platform music aggregator, not a recommendation engine builder. We don't reinvent the wheel—we leverage existing platform algorithms (Spotify, YouTube, SoundCloud, Shazam) and combine their outputs intelligently.

### Core Strategy
- **Don't calculate**: Use platform-provided data (Spotify's energy/valence, YouTube's popularity, etc.)
- **Don't mock**: Every piece of code must work with real APIs
- **Aggregate intelligently**: Cross-platform matching, confidence scoring, unified experience
- **Real-world usage**: Production-ready code from day one

## Tech Stack

- **Frontend**: Next.js 14+ (App Router), TypeScript, Tailwind CSS
- **Database**: SQLite (via sql.js for browser persistence)
- **APIs**: Spotify, YouTube/Google, SoundCloud, Shazam (RapidAPI)
- **Auth**: OAuth 2.0 for each platform
- **UI Pattern**: Mobile-first glassmorphism, bottom navigation, swipeable player

## Architecture Overview

### Data Flow
```
Platform APIs → SQLite Cache → React Components
    ↓
User Profiles (top artists, top tracks, follows, likes)
    ↓
Platform Recommendations (Spotify recommendations, YouTube mixes, SoundCloud recommendations)
    ↓
Cross-Platform Aggregation (matching same tracks across platforms)
    ↓
Confidence Scoring (1.0 = 3 platforms, 0.8 = 2 platforms, 0.5 = 1 platform)
    ↓
Smart Playlists (auto-generated, mood-based, genre-based)
```

### Key Entities
- **Artists**: Unified cross-platform identity (Spotify ID + YouTube channel ID + SoundCloud ID)
- **Tracks**: Same track across platforms (Spotify → YouTube → SoundCloud matching)
- **User Follows/Likes**: Track which platforms user follows/likes on
- **Listening History**: Timestamped play events per platform
- **Playlists**: User-created and auto-generated (smart playlists)

### Cross-Platform Matching Strategy
When a user has:
- Spotify top artists: [Artist A, B, C]
- YouTube subscriptions: [Artist A, D, E]
- SoundCloud follows: [Artist A, F]

→ Artist A is high-confidence preference (3 platforms)
→ Artist B/C are Spotify-specific zest
→ Artist D/E are YouTube/visual-focused zest
→ Artist F is underground/indie exploration

## Implementation Phases

### Phase 1: Foundation (Current)
- Project structure and routing
- SQLite setup (sql.js)
- UI components (navigation, cards, player shell)
- Design system (colors, glassmorphism, responsive)

### Phase 2: Platform Integration
- Spotify OAuth + data fetching
- YouTube OAuth + data fetching
- SoundCloud OAuth + data fetching
- Cross-platform ID matching logic

### Phase 3: Recommendation System
- Aggregate platform recommendations
- Confidence scoring algorithm
- Cross-platform discovery (similar artists, new releases)

### Phase 4: Smart Playlists
- Auto-generated playlists from user data
- Mood/activity classification (energy, valence)
- Automatic naming templates
- Periodic sync strategy

### Phase 5: Player & Shazam
- Web Audio API player
- Shazam song detection
- Gesture controls (swipe, long-press)

### Phase 6: Polish
- Animations and transitions
- Error handling and offline support
- Performance optimization

## Folder Structure (High-Level)

```
/app                          # Next.js pages and layouts
  /api                        # API routes (OAuth, sync, recommendations)
  /library                    # Music library pages
  /playlists                  # Playlist pages
  /discover                   # Discovery page
  /connect                    # Platform connection page

/components                   # React components
  /player                     # Player components
  /track                      # Track cards and lists
  /playlist                   # Playlist UI
  /navigation                 # Navigation (sidebar, bottom nav)
  /platform                   # Platform-specific UI (buttons, icons)

/lib                          # Utilities and business logic
  /db                         # SQLite queries and schema
  /platforms                  # Platform API wrappers (Spotify, YouTube, etc.)
  /recommendation             # Aggregation and matching logic
  /playlist                   # Smart playlist generation

/styles                       # Global styles and design tokens
/types                        # TypeScript type definitions
```

## Database Schema (SQLite)

Core tables:
- `users` - User identity
- `connected_platforms` - OAuth tokens per platform
- `artists` - Unified artist identity (cross-platform IDs)
- `tracks` - Unified track identity (platform IDs + Spotify audio features)
- `user_follows` - Artist follows per platform
- `user_likes` - Track likes per platform
- `listening_history` - Play events
- `playlists` - User and smart playlists
- `playlist_tracks` - Playlist contents

## Important Rules

### Code Quality
- **No mocks or stubs**: Every integration connects to real APIs
- **No "coming soon"**: Placeholder features violate project integrity
- **Real-world design**: Code must work in production from day one
- **API token management**: Use environment variables, refresh token strategy

### API Integration Patterns
- Wrap platform APIs in `/lib/platforms/*` modules
- Cache responses in SQLite with `expires_at` timestamps
- Handle rate limiting with backoff retry logic
- Normalize platform responses to unified types

### Recommendation Aggregation
- Collect recommendations from all connected platforms
- Match same tracks across platforms (by name/artist fuzzy matching initially, API IDs when available)
- Score confidence based on platform agreement
- Expose via `/api/recommendations` endpoint

## Required Environment Variables

```
# Spotify
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=

# YouTube/Google
NEXT_PUBLIC_GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXT_PUBLIC_YOUTUBE_API_KEY=

# SoundCloud
NEXT_PUBLIC_SOUNDCLOUD_CLIENT_ID=
SOUNDCLOUD_CLIENT_SECRET=

# Shazam (RapidAPI)
RAPIDAPI_KEY=
```

## Development Workflow

(Commands will be added after Phase 1 setup is complete)

For now:
1. Install dependencies: `npm install`
2. Set up environment variables in `.env.local`
3. Run dev server: `npm run dev`
4. Open http://localhost:3000

## Reference

See the full implementation plan in `PLAN.md` for:
- Detailed API endpoint mapping
- Confidence scoring algorithm
- Smart playlist naming logic
- UI/UX design specifications
