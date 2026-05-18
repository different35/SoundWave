export default function Discover() {
  return (
    <div className="min-h-screen bg-background text-text px-4 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-8">Discover</h1>

        <div className="space-y-4">
          <button className="glass-button w-full py-3 font-semibold">
            🎤 Shazam a Song
          </button>

          <div className="glass-card p-4">
            <h3 className="font-semibold mb-2">Cross-Platform Recommendations</h3>
            <p className="text-text-muted text-sm">Connect your music platforms to see recommendations</p>
          </div>

          <div className="glass-card p-4">
            <h3 className="font-semibold mb-2">Trending Now</h3>
            <p className="text-text-muted text-sm">Loading trending tracks...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
