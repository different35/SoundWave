export default function Profile() {
  return (
    <div className="min-h-screen bg-background text-text px-4 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-8">Profile</h1>

        <div className="space-y-4">
          <div className="glass-card p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Welcome to SoundWave</h2>
            <p className="text-text-muted text-sm mb-6">Connect your music platforms to get started</p>
            <button className="glass-button w-full py-2 font-semibold">
              Connect Spotify
            </button>
          </div>

          <div className="glass-card p-4">
            <h3 className="font-semibold mb-4">Connected Platforms</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2">
                <span>Spotify</span>
                <span className="text-text-muted">Not connected</span>
              </div>
              <div className="flex items-center justify-between p-2">
                <span>YouTube</span>
                <span className="text-text-muted">Not connected</span>
              </div>
              <div className="flex items-center justify-between p-2">
                <span>SoundCloud</span>
                <span className="text-text-muted">Not connected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
