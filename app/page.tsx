export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text px-4 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-2">Good morning</h1>
        <p className="text-text-muted mb-8">Ready to discover new music?</p>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Made for You</h2>
          <div className="glass-card p-4">
            <p className="text-text-muted text-sm">Loading your personalized playlists...</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Continue Listening</h2>
          <div className="glass-card p-4">
            <p className="text-text-muted text-sm">Your listening history will appear here</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">New Releases</h2>
          <div className="glass-card p-4">
            <p className="text-text-muted text-sm">Fresh tracks from your favorite artists</p>
          </div>
        </section>
      </div>
    </div>
  );
}
