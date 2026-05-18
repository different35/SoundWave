# SoundWave

A mobile-first web platform that aggregates music recommendations from Spotify, YouTube, and SoundCloud into a unified, beautiful interface.

## Philosophy

We don't reinvent recommendation algorithms. Instead, we leverage the existing, battle-tested algorithms from major music platforms and combine them intelligently to provide better discovery experiences.

## Features (Roadmap)

- **Cross-Platform Integration**: Connect Spotify, YouTube Music, and SoundCloud
- **Unified Recommendations**: Aggregate and rank recommendations based on platform agreement
- **Smart Playlists**: Auto-generated playlists with intelligent naming
- **Music Discovery**: Find new music across multiple platforms simultaneously
- **Shazam Integration**: Identify songs and add them to your library
- **Mobile-First Design**: Optimized for mobile with responsive desktop support

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Database**: SQLite (sql.js for browser)
- **APIs**: Spotify, YouTube, SoundCloud, Shazam (RapidAPI)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/different35/soundwave.git
cd soundwave

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Add your API credentials to .env.local
```

### Development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

See [CLAUDE.md](./CLAUDE.md) for detailed architecture and [PLAN.md](./PLAN.md) for complete implementation specifications.

## Environment Variables

See [.env.example](./.env.example) for required variables:

- Spotify API credentials
- YouTube/Google API credentials
- SoundCloud API credentials
- Shazam RapidAPI key

## Implementation Phases

1. **Phase 1** ✅ Foundation - Project structure, UI components, design system
2. **Phase 2** Platform Integration - OAuth and data fetching
3. **Phase 3** Recommendation System - Cross-platform aggregation
4. **Phase 4** Smart Playlists - Auto-generated collections
5. **Phase 5** Player & Shazam - Playback and song detection
6. **Phase 6** Polish - Animations, error handling, optimization

## License

MIT
