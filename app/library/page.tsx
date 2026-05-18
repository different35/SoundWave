export default function Library() {
  return (
    <div className="min-h-screen bg-background text-text px-4 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-8">Your Library</h1>

        <div className="space-y-4">
          <div className="glass-card p-4">
            <h3 className="font-semibold mb-2">Liked Songs</h3>
            <p className="text-text-muted text-sm">0 tracks</p>
          </div>

          <div className="glass-card p-4">
            <h3 className="font-semibold mb-2">Followed Artists</h3>
            <p className="text-text-muted text-sm">0 artists</p>
          </div>

          <div className="glass-card p-4">
            <h3 className="font-semibold mb-2">Recently Played</h3>
            <p className="text-text-muted text-sm">Your history will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
