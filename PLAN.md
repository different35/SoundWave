# SoundWave Implementation Plan

## Temel Felsefe

Platformlar zaten recommendation yapıyor. Tekerleği yeniden icat etmeyeceğiz.
Platformların yaptıklarını ALIP, BİRLEŞTİRİP, daha iyi bir deneyim sunacağız.

---

## BÖLÜM 1: SPOTIFY'DAN NE ALACAĞIM

### 1.1 Kullanıcı Profili Verileri

**GET /me/top/artists?time_range=long_term&limit=50**
- Ne alıyorum: Kullanıcının en çok dinlediği 50 sanatçı (son 6 ay)
- Nasıl kullanacağım: Bu sanatçı listesi = kullanıcının müzik zevkinin DNA'sı

**GET /me/top/tracks?time_range=medium_term&limit=50**
- Ne alıyorum: En çok dinlenen 50 şarkı (son 6 ay)
- Nasıl kullanacağım: Favori şarkılar listesi + bunların sanatçıları

**GET /me/following?type=artist**
- Ne alıyorum: Takip edilen tüm sanatçılar
- Nasıl kullanacağım: Kullanıcının bilinçli olarak "bunu seviyorum" dediği sanatçılar

**GET /me/tracks**
- Ne alıyorum: Kaydedilen tüm şarkılar (liked songs)
- Nasıl kullanacağım: Kullanıcının kütüphanesi

**GET /me/player/recently-played?limit=50**
- Ne alıyorum: Son dinlenen 50 şarkı
- Nasıl kullanacağım: Anlık mood tespiti, "şu an ne dinliyor"

### 1.2 Spotify'ın Kendi Önerileri

**GET /recommendations?seed_artists={artist_ids}&seed_tracks={track_ids}&limit=100**
- Ne alıyorum: Spotify'ın algoritmasının önerdiği şarkılar
- Nasıl kullanacağım: Spotify'ın yıllardır geliştirdiği algoritmanın çıktısı - direkt kullanacağım

**GET /artists/{id}/related-artists**
- Ne alıyorum: Bir sanatçıya benzer sanatçılar
- Nasıl kullanacağım: "X dinliyorsan Y'yi de seversin" - Spotify zaten hesaplamış

### 1.3 Sosyal Veri

**GET /playlists/{playlist_id}**
**GET /playlists/{playlist_id}/tracks**
- Ne alıyorum: Kullanıcının oluşturduğu playlistler ve içindeki şarkılar
- Nasıl kullanacağım: Kullanıcının kendi kurduğu mantık - hangi şarkıları bir arada tutuyor

---

## BÖLÜM 2: YOUTUBE MUSIC'TEN NE ALACAĞIM

### 2.1 YouTube Data API v3

**GET /subscriptions?mine=true&part=snippet**
- Ne alıyorum: Abone olunan kanallar (müzik kanalları)
- Nasıl kullanacağım: Takip edilen sanatçılar (Spotify'daki following gibi)

**GET /videos?myRating=like&part=snippet**
- Ne alıyorum: Beğenilen videolar (müzik videoları)
- Nasıl kullanacağım: Liked songs karşılığı

**GET /playlistItems?playlistId={id}&part=snippet**
- Ne alıyorum: Kullanıcının playlistlerindeki şarkılar
- Nasıl kullanacağım: YouTube tarafındaki müzik koleksiyonu

### 2.2 YouTube Music Önerileri

**GET /activities?mine=true&part=contentDetails**
- Ne alıyorum: Kullanıcının aktiviteleri
- Nasıl kullanacağım: Dinleme geçmişi

YouTube "Mix" Playlistleri:
- "My Mix" - YouTube'un kişiselleştirilmiş önerisi
- "Discover Mix" - Yeni keşifler
- "New Release Mix" - Takip edilen sanatçıların yeni çıkanları
- Nasıl kullanacağım: YouTube zaten bu mixleri oluşturmuş, ben bunları çekeceğim

---

## BÖLÜM 3: SOUNDCLOUD'DAN NE ALACAĞIM

### 3.1 Kullanıcı Verileri

**GET /me/favorites**
- Ne alıyorum: Beğenilen şarkılar
- Nasıl kullanacağım: SoundCloud tarafındaki liked songs

**GET /me/followings**
- Ne alıyorum: Takip edilen sanatçılar
- Nasıl kullanacağım: SoundCloud'daki following list

**GET /me/activities**
- Ne alıyorum: Dinleme geçmişi, repost'lar
- Nasıl kullanacağım: Kullanıcının SoundCloud'daki aktivitesi

### 3.2 SoundCloud Önerileri

**GET /me/recommended**
- Ne alıyorum: SoundCloud'un önerileri
- Nasıl kullanacağım: Platformun kendi algoritmasının çıktısı

**GET /tracks/{id}/related**
- Ne alıyorum: Bir şarkıya benzer şarkılar
- Nasıl kullanacağım: "Bu şarkıyı dinleyenler bunları da dinledi"

---

## BÖLÜM 4: SHAZAM'DAN NE ALACAĞIM

### 4.1 Shazam API (RapidAPI)

**POST /songs/detect**
Body: { audio: base64_encoded_audio }
- Ne alıyorum: Ses kaydından şarkı tanıma
- Nasıl kullanacağım: Kullanıcı bir şarkı duyduğunda tanımlayabilsin

**GET /shazams/get-details?id={shazam_id}**
- Ne alıyorum: Tanınan şarkının detayları (artist, track, album, Spotify URI, Apple Music ID)
- Nasıl kullanacağım: Cross-platform matching için

### 4.2 Shazam Charts

**GET /charts/track**
- Ne alıyorum: Popüler şarkılar
- Nasıl kullanacağım: Trending içerik

---

## BÖLÜM 5: YOUTUBE'DAN NE ALACAĞIM (Video olarak)

### 5.1 Müzik Videoları

**GET /search?q={artist}+{track}&type=video&videoCategoryId=10**
- Ne alıyorum: Müzik videoları (category 10 = Music)
- Nasıl kullanacağım: Şarkının video versiyonunu bulmak

**GET /videos?id={video_id}&part=statistics**
- Ne alıyorum: View count, like count
- Nasıl kullanacağım: Popülerlik göstergesi

---

## BÖLÜM 6: BİRLEŞTİRME STRATEJİSİ

### 6.1 Cross-Platform Artist Matching

Spotify'da takip edilen: [Artist A, Artist B, Artist C]
YouTube'da abone olunan: [Artist A, Artist D, Artist E]
SoundCloud'da takip edilen: [Artist A, Artist F]

Sonuç:
- Ortak kesim: Artist A → GÜÇLÜ TERCİH
- Sadece Spotify: Artist B, C → Spotify zevki
- Sadece YouTube: Artist D, E → Video/görsel odaklı zevk
- Sadece SoundCloud: Artist F → Underground/indie zevk

### 6.2 Öneri Birleştirme

```typescript
interface AggregatedRecommendation {
  track: {
    name: string;
    artist: string;
    // Cross-platform IDs
    spotifyId?: string;
    youtubeId?: string;
    soundcloudId?: string;
  };
  sources: {
    // Hangi platformlar öneriyor?
    spotify: boolean;
    youtube: boolean;
    soundcloud: boolean;
  };
  confidence: number; // Birden fazla platform öneriyorsa güven artar
}
```

Birleştirme Mantığı:
1. Spotify önerileri al → Liste A
2. YouTube önerileri al → Liste B
3. SoundCloud önerileri al → Liste C
4. Cross-match yap:
   - Aynı şarkı 3 platformda da varsa → confidence = 1.0 (kesin öneri)
   - 2 platformda varsa → confidence = 0.8
   - 1 platformda varsa → confidence = 0.5
5. Sırala: confidence'a göre DESC

### 6.3 Yeni Keşif Stratejisi

Kullanıcının dinlemediği ama dinleyebileceği:

1. Spotify'daki "related artists" → kullanıcı bunları dinlemiyor mu? → ÖNERİ
2. Takip ettiği sanatçının yeni çıkan şarkısı → ÖNERİ
3. Beğendiği şarkının "bu şarkıyı dinleyenler" listesi → ÖNERİ

---

## BÖLÜM 7: SMART PLAYLIST OLUŞTURMA

### 7.1 Kaynak Bazlı Playlistler

**"Your Spotify Favorites"**
- Kaynak: /me/top/tracks
- İçerik: En çok dinlenen 50 şarkı

**"YouTube Discoveries"**
- Kaynak: YouTube'da beğenilen ama Spotify'da olmayan şarkılar
- İçerik: Cross-platform keşifler

**"SoundCloud Underground"**
- Kaynak: SoundCloud favorites
- İçerik: Mainstream olmayan keşifler

### 7.2 Cross-Platform Mix

**"Best of All Platforms"**
- Kaynak: Tüm platformlardan top tracks
- İçerik: En çok dinlenen şarkılar (platform fark etmez)

**"Artists You Love"**
- Kaynak: 2+ platformda takip edilen sanatçılar
- İçerik: Bu sanatçıların en popüler şarkıları

### 7.3 Mood/Activity Bazlı (Platform Verilerinden)

**"Workout Mix"**
- Kaynak: Spotify audio features'dan high energy şarkılar
- NOT: Burada Spotify'ın ZATEN HESAPLADIĞI energy değerini kullanıyorum, kendim hesaplamıyorum

**"Chill Vibes"**
- Kaynak: Spotify audio features'dan low energy, high acousticness
- Yine Spotify'ın verisi

### 7.4 Otomatik İsimlendirme

```typescript
function generatePlaylistName(tracks: Track[]): string {
  // Dominant genre bul (tracks'lerin genre'larına bak)
  const genres = tracks.flatMap(t => t.genres);
  const dominantGenre = mostFrequent(genres);
  
  // Dominant mood bul (Spotify'ın valence değerinden)
  const avgValence = average(tracks.map(t => t.valence));
  const mood = avgValence > 0.6 ? "Happy" : avgValence > 0.4 ? "Chill" : "Melancholic";
  
  // Template seç
  const templates = [
    `${mood} ${dominantGenre}`,
    `${dominantGenre} Vibes`,
    `${mood} Mix`,
    `Best of ${dominantGenre}`
  ];
  
  return pickRandom(templates);
}
```

---

## BÖLÜM 8: SÜRDÜRÜLEBİLİ TAKİP

### 8.1 Periyodik Senkronizasyon

**Her gün 1 kez:**
- Spotify recently played güncelle
- Yeni çıkan şarkıları kontrol et
- Takip edilen sanatçıların yeni release'lerini çek

**Her hafta 1 kez:**
- Top artists/tracks güncelle
- Cross-platform matching güncelle
- Smart playlist'leri yeniden oluştur

### 8.2 Trend Takibi

```typescript
interface UserTrend {
  // Zaman içinde değişen tercihler
  genreShift: {
    lastMonth: { rock: 40%, pop: 30%, jazz: 30% },
    thisMonth: { rock: 30%, pop: 40%, jazz: 30% }
  };
  // Pop dinlemeye başlamış, rock azalmış → pop önerilerini artır
  
  newArtistDiscoveries: Artist[]; // Bu ay keşfettiği yeni sanatçılar
  
  listeningPatterns: {
    morning: Genre[],   // Sabah ne dinliyor
    evening: Genre[],   // Akşam ne dinliyor
    weekend: Genre[]    // Hafta sonu ne dinliyor
  };
}
```

---

## BÖLÜM 9: VERİTABANI ŞEMASI

```sql
-- Kullanıcılar
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  email TEXT,
  created_at DATETIME
);

-- Bağlı platformlar
CREATE TABLE connected_platforms (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users(id),
  platform TEXT, -- 'spotify', 'youtube', 'soundcloud'
  access_token TEXT,
  refresh_token TEXT,
  expires_at DATETIME,
  platform_user_id TEXT -- platformdaki user id
);

-- Sanatçılar (tüm platformlardan birleşik)
CREATE TABLE artists (
  id TEXT PRIMARY KEY,
  name TEXT,
  spotify_id TEXT,
  youtube_channel_id TEXT,
  soundcloud_id TEXT,
  image_url TEXT
);

-- Şarkılar (tüm platformlardan birleşik)
CREATE TABLE tracks (
  id TEXT PRIMARY KEY,
  name TEXT,
  artist_id TEXT REFERENCES artists(id),
  album TEXT,
  duration_ms INTEGER,
  spotify_id TEXT,
  youtube_id TEXT,
  soundcloud_id TEXT,
  -- Spotify'dan gelen özellikler (kendi hesaplamıyorum)
  spotify_energy REAL,
  spotify_valence REAL,
  spotify_danceability REAL,
  spotify_tempo REAL
);

-- Kullanıcının takip ettiği sanatçılar
CREATE TABLE user_follows (
  user_id TEXT REFERENCES users(id),
  artist_id TEXT REFERENCES artists(id),
  platform TEXT, -- hangi platformda takip ediyor
  followed_at DATETIME,
  PRIMARY KEY (user_id, artist_id, platform)
);

-- Kullanıcının beğendiği şarkılar
CREATE TABLE user_likes (
  user_id TEXT REFERENCES users(id),
  track_id TEXT REFERENCES tracks(id),
  platform TEXT,
  liked_at DATETIME,
  PRIMARY KEY (user_id, track_id, platform)
);

-- Dinleme geçmişi
CREATE TABLE listening_history (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users(id),
  track_id TEXT REFERENCES tracks(id),
  platform TEXT,
  played_at DATETIME,
  play_duration_ms INTEGER
);

-- Playlistler
CREATE TABLE playlists (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users(id),
  name TEXT,
  description TEXT,
  is_smart BOOLEAN, -- otomatik oluşturulan mı
  smart_rules TEXT, -- JSON: smart playlist kuralları
  created_at DATETIME,
  updated_at DATETIME
);

-- Playlist şarkıları
CREATE TABLE playlist_tracks (
  playlist_id TEXT REFERENCES playlists(id),
  track_id TEXT REFERENCES tracks(id),
  position INTEGER,
  added_at DATETIME,
  PRIMARY KEY (playlist_id, track_id)
);

-- Platform önerileri (cache)
CREATE TABLE platform_recommendations (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users(id),
  platform TEXT,
  track_id TEXT REFERENCES tracks(id),
  recommendation_type TEXT, -- 'similar', 'discover', 'new_release'
  fetched_at DATETIME,
  expires_at DATETIME
);
```

---

## BÖLÜM 10: UYGULAMA YAPISI

```
/app
  /page.tsx                    # Ana sayfa - öneriler, quick access
  /library
    /page.tsx                  # Kütüphane - tüm şarkılar, sanatçılar
  /playlists
    /page.tsx                  # Playlistler
    /[id]/page.tsx            # Playlist detay
  /discover
    /page.tsx                  # Keşif - cross-platform öneriler
  /connect
    /page.tsx                  # Platform bağlantıları
  /api
    /auth
      /spotify/route.ts       # Spotify OAuth
      /youtube/route.ts       # YouTube OAuth
      /soundcloud/route.ts    # SoundCloud OAuth
    /sync
      /spotify/route.ts       # Spotify verilerini çek
      /youtube/route.ts       # YouTube verilerini çek
      /soundcloud/route.ts    # SoundCloud verilerini çek
    /recommendations
      /route.ts               # Birleştirilmiş öneriler
    /playlists
      /generate/route.ts      # Smart playlist oluştur
    /shazam
      /detect/route.ts        # Şarkı tanıma

/components
  /player
    /MiniPlayer.tsx           # Alt kısımda mini player
    /FullPlayer.tsx           # Tam ekran player (drawer)
  /track
    /TrackCard.tsx            # Şarkı kartı
    /TrackList.tsx            # Şarkı listesi
  /playlist
    /PlaylistCard.tsx         # Playlist kartı
    /SmartPlaylistBadge.tsx   # "AI Generated" badge
  /navigation
    /BottomNav.tsx            # Mobile bottom navigation
    /Sidebar.tsx              # Desktop sidebar
  /platform
    /ConnectButton.tsx        # Platform bağlantı butonu
    /PlatformIcon.tsx         # Platform ikonları

/lib
  /db
    /index.ts                 # SQLite bağlantısı
    /queries.ts               # SQL sorguları
  /platforms
    /spotify.ts               # Spotify API wrapper
    /youtube.ts               # YouTube API wrapper
    /soundcloud.ts            # SoundCloud API wrapper
    /shazam.ts               # Shazam API wrapper
  /recommendation
    /aggregator.ts            # Öneri birleştirici
    /cross-match.ts           # Cross-platform eşleştirme
  /playlist
    /generator.ts             # Smart playlist generator
    /naming.ts                # Otomatik isimlendirme
```

---

## BÖLÜM 11: UI/UX TASARIM

### 11.1 Mobile-First Yaklaşım

**Bottom Navigation (5 tab):**
- Home - Öneriler, quick access
- Library - Kütüphane
- Discover - Keşif
- Playlists - Listeler
- Profile - Ayarlar, bağlantılar

**Player:**
- Mini player: Ekranın altında, şarkı bilgisi + play/pause
- Full player: Yukarı swipe ile açılan drawer
- Gesture: Sağa swipe = sonraki, sola swipe = önceki

### 11.2 Renk Paleti

```css
--background: #0a0a0f;        /* Koyu arka plan */
--card: #12121a;              /* Kart arka planı */
--primary: #8b5cf6;           /* Mor - ana renk */
--primary-glow: #a78bfa;      /* Açık mor - hover */
--secondary: #06b6d4;         /* Cyan - ikincil */
--text: #ffffff;              /* Beyaz text */
--text-muted: #71717a;        /* Gri text */
--border: #27272a;            /* Border */
--spotify: #1db954;           /* Spotify yeşil */
--youtube: #ff0000;           /* YouTube kırmızı */
--soundcloud: #ff5500;        /* SoundCloud turuncu */
```

### 11.3 Glassmorphism Kartlar

```css
.card {
  background: rgba(18, 18, 26, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}
```

---

## BÖLÜM 12: UYGULAMA AKIŞI

### 12.1 İlk Kullanım

1. Uygulama açılır
2. "Connect your music platforms" ekranı
3. Kullanıcı Spotify bağlar → OAuth
4. Kullanıcı YouTube bağlar → OAuth (opsiyonel)
5. Kullanıcı SoundCloud bağlar → OAuth (opsiyonel)
6. "Syncing your music..." loading
7. İlk senkronizasyon:
   - Top artists çekilir
   - Top tracks çekilir
   - Likes çekilir
   - Following çekilir
8. Smart playlistler otomatik oluşturulur
9. Ana sayfaya yönlendirilir

### 12.2 Normal Kullanım

1. Uygulama açılır
2. Ana sayfa:
   - "Good morning, [Name]"
   - "Continue listening" - son dinlenenler
   - "Made for you" - smart playlistler
   - "New releases" - takip edilen sanatçıların yenileri
   - "Discover" - cross-platform öneriler
3. Kullanıcı bir şarkıya tıklar → çalmaya başlar
4. Mini player görünür
5. Swipe up → full player

### 12.3 Shazam Kullanımı

1. Discover sayfasında "Shazam" butonu
2. Butona basılır → mikrofon izni
3. Ses kaydı başlar (5 saniye)
4. API'ye gönderilir
5. Sonuç gelir:
   - Şarkı bulundu → şarkı kartı gösterilir
   - "Add to library" butonu
   - Hangi platformlarda var gösterilir
6. Bulunamadı → "Couldn't identify the song"

---

## BÖLÜM 13: GEREKLI API ANAHTARLARI

```
# Spotify
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=

# YouTube/Google
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
YOUTUBE_API_KEY=

# SoundCloud
SOUNDCLOUD_CLIENT_ID=
SOUNDCLOUD_CLIENT_SECRET=

# Shazam (RapidAPI)
RAPIDAPI_KEY=
```

---

## BÖLÜM 14: İMPLEMENTASYON SIRASI

### Faz 1: Temel Altyapı

- Proje yapısı ve routing
- SQLite kurulumu (sql.js browser için)
- UI bileşenleri (navigation, cards, player shell)
- Tasarım sistemi (renkler, glassmorphism)

### Faz 2: Platform Entegrasyonları

- Spotify OAuth + temel veri çekme
- YouTube OAuth + veri çekme
- SoundCloud OAuth + veri çekme
- Cross-platform eşleştirme

### Faz 3: Öneri Sistemi

- Platform önerilerini birleştirme
- Confidence scoring
- Cross-platform keşif

### Faz 4: Smart Playlists

- Playlist generator
- Otomatik isimlendirme
- Periyodik güncelleme

### Faz 5: Player ve Shazam

- Müzik çalar (web audio)
- Shazam entegrasyonu
- Gesture kontrolleri

### Faz 6: Polish

- Animasyonlar
- Loading states
- Error handling
- Offline desteği
