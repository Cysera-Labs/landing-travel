import { useState } from 'react'
import './App.css'

const mapsUrl = 'https://maps.app.goo.gl/pNUw2Yv9XfNoUv5b7'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.25" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#beranda" aria-label="TOPSON Tours & Travel - Beranda" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="15.5" />
              <path d="m22.5 12.5-3 8-8 3 3-8 8-3Z" />
              <circle cx="18" cy="18" r="1.5" />
            </svg>
          </span>
          <span className="brand-name">
            <strong>TOPSON</strong>
            <small>TOURS &amp; TRAVEL</small>
          </span>
        </a>

        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>

        <nav id="primary-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'}>
          <a href="#tentang" onClick={closeMenu}>Tentang</a>
          <a href="#perencanaan" onClick={closeMenu}>Rencanakan perjalanan</a>
          <a href="#lokasi" onClick={closeMenu}>Lokasi</a>
          <a className="nav-cta" href={mapsUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Temukan kami <ArrowIcon />
          </a>
        </nav>
      </header>

      <section className="hero" id="beranda">
        <div className="hero-copy">
          <p className="eyebrow"><span /> BERANGKAT DARI SURABAYA</p>
          <h1>Perjalanan baik dimulai dari <em>rencana.</em></h1>
          <p className="hero-description">
            Punya tujuan yang ingin dikunjungi? Mulai obrolan perjalanan Anda bersama TOPSON Tours &amp; Travel.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href={mapsUrl} target="_blank" rel="noreferrer">
              Kunjungi lokasi <ArrowIcon />
            </a>
            <a className="text-link" href="#tentang">Kenali TOPSON</a>
          </div>
          <div className="hero-location">
            <span className="location-icon"><PinIcon /></span>
            <span><strong>Surabaya, Jawa Timur</strong><small>Lokasi TOPSON Tours &amp; Travel</small></span>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=85"
            alt="Pemandangan danau dan pegunungan yang menginspirasi perjalanan"
          />
          <div className="image-caption">
            <span className="caption-line" />
            <span>JALAN-JALAN DIMULAI DARI SINI</span>
          </div>
          <div className="photo-stamp" aria-hidden="true">
            <span>BUAT</span>
            <span>RUTE</span>
            <span className="stamp-star">✳</span>
            <span>CERITAMU</span>
          </div>
        </div>
        <span className="hero-index" aria-hidden="true">01 — 03</span>
      </section>

      <section className="intro-section" id="tentang">
        <div className="section-label"><span>01</span> TENTANG TOPSON</div>
        <div className="intro-content">
          <h2>Jauh terasa dekat saat semuanya <em>direncanakan.</em></h2>
          <div className="intro-text">
            <p>
              TOPSON Tours &amp; Travel hadir di Surabaya untuk menjadi titik awal rencana perjalanan Anda.
              Sampaikan tujuan dan gambaran perjalanan yang ada di benak—lalu mulai susun langkah berikutnya.
            </p>
            <a className="text-link" href={mapsUrl} target="_blank" rel="noreferrer">
              Lihat TOPSON di peta <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="planning-section" id="perencanaan">
        <div className="planning-heading">
          <div>
            <div className="section-label"><span>02</span> MULAI DARI SINI</div>
            <h2>Ada rencana di kepala?</h2>
          </div>
          <p>Setiap perjalanan punya cerita yang berbeda. Ini beberapa hal sederhana untuk memulai obrolan Anda.</p>
        </div>
        <div className="planning-grid">
          <article className="planning-card">
            <span className="card-number">01</span>
            <div className="card-icon" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="14" /><path d="m24 16-3 8-8 3 3-8 8-3Z" /><circle cx="20" cy="20" r="1.5" /></svg>
            </div>
            <h3>Tentukan tujuan</h3>
            <p>Punya tempat yang ingin dikunjungi? Ceritakan destinasi atau suasana yang Anda cari.</p>
          </article>
          <article className="planning-card">
            <span className="card-number">02</span>
            <div className="card-icon" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none"><rect x="8" y="11" width="24" height="21" rx="3" /><path d="M14 8v6m12-6v6M8 18h24m-17 6h4m-4 4h9" /></svg>
            </div>
            <h3>Bayangkan waktunya</h3>
            <p>Gambaran tanggal atau durasi akan membantu Anda menyampaikan rencana dengan lebih jelas.</p>
          </article>
          <article className="planning-card">
            <span className="card-number">03</span>
            <div className="card-icon" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none"><circle cx="16" cy="14" r="5" /><path d="M7 31v-3a9 9 0 0 1 18 0v3H7Zm20-17a5 5 0 0 1 0 10m2 3a7 7 0 0 1 4 6v1h-5" /></svg>
            </div>
            <h3>Ajak teman perjalanan</h3>
            <p>Berangkat sendiri, berdua, atau bersama rombongan? Catat siapa saja yang akan ikut.</p>
          </article>
        </div>
      </section>

      <section className="location-section" id="lokasi">
        <div className="location-copy">
          <div className="section-label"><span>03</span> TEMUKAN KAMI</div>
          <h2>Titik awal perjalanan Anda ada di <em>Surabaya.</em></h2>
          <p>Temukan lokasi TOPSON Tours &amp; Travel dan lihat petunjuk arah melalui Google Maps.</p>
          <a className="button button-light" href={mapsUrl} target="_blank" rel="noreferrer">
            Buka Google Maps <ArrowIcon />
          </a>
          <div className="address-line"><PinIcon /> Surabaya, Jawa Timur, Indonesia</div>
        </div>
        <div className="map-preview">
          <iframe
            title="Peta lokasi TOPSON Tours & Travel di Surabaya"
            src="https://maps.google.com/maps?q=-7.3164889%2C112.7518467&z=14&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a className="map-open" href={mapsUrl} target="_blank" rel="noreferrer">LIHAT PETA <ArrowIcon /></a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#beranda">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="15.5" /><path d="m22.5 12.5-3 8-8 3 3-8 8-3Z" /><circle cx="18" cy="18" r="1.5" /></svg>
          </span>
          <span className="brand-name"><strong>TOPSON</strong><small>TOURS &amp; TRAVEL</small></span>
        </a>
        <p>Awali perjalanan Anda dari Surabaya.</p>
        <a className="footer-map-link" href={mapsUrl} target="_blank" rel="noreferrer">Temukan di Google Maps <ArrowIcon /></a>
        <span className="copyright">© {new Date().getFullYear()} TOPSON Tours &amp; Travel</span>
      </footer>
    </main>
  )
}

export default App
