export default function Playlists() {
  return (
    <div className="min-h-screen bg-background text-text px-4 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-8">Playlists</h1>

        <div className="space-y-4">
          <div className="glass-card p-4">
            <h3 className="font-semibold mb-2">Your Playlists</h3>
            <p className="text-text-muted text-sm">0 playlists</p>
          </div>

          <div className="glass-card p-4">
            <h3 className="font-semibold mb-2">Smart Playlists</h3>
            <p className="text-text-muted text-sm">AI-generated playlists will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
