<template>
  <div class="landing-page">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="container">
        <div class="nav-content">
          <div class="logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C13.1 2 14 2.9 14 4V12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12V4C10 2.9 10.9 2 12 2Z" fill="url(#gradient1)"/>
              <path d="M19 10V12C19 15.866 15.866 19 12 19C8.134 19 5 15.866 5 12V10H7V12C7 14.761 9.239 17 12 17C14.761 17 17 14.761 17 12V10H19Z" fill="url(#gradient1)"/>
              <path d="M12 19V22M8 22H16" stroke="url(#gradient1)" stroke-width="2" stroke-linecap="round"/>
              <defs>
                <linearGradient id="gradient1" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#a855f7"/>
                  <stop offset="1" stop-color="#38bdf8"/>
                </linearGradient>
              </defs>
            </svg>
            <span>Save your Voice</span>
          </div>
          <button class="cta-button" @click="goToDashboard">Dashboard ansehen</button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">KI-Schutz für Kreative</div>
          <h1 class="hero-title">
            Gewinne die <span class="gradient-text">Hoheit</span> über deine Stimme zurück
          </h1>
          <p class="hero-subtitle">
            Schütze deine kreative Identität vor KI-Deepfakes und Urheberrechtsverletzungen. 
            Automatisierte Überwachung, forensische Analyse und Rechtsdurchsetzung – alles in einer Plattform.
          </p>
          <div class="hero-actions">
            <button class="primary-button" @click="goToDashboard">
              Demo ansehen
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="secondary-button">Mehr erfahren</button>
          </div>
        </div>
        <div class="hero-visual">
          <div class="floating-card card-1">
            <div class="card-icon">🎵</div>
            <div class="card-text">Stimmerkennung</div>
          </div>
          <div class="floating-card card-2">
            <div class="card-icon">🔍</div>
            <div class="card-text">KI-Analyse</div>
          </div>
          <div class="floating-card card-3">
            <div class="card-icon">🛡️</div>
            <div class="card-text">Schutz</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="vision-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Unsere Vision</h2>
          <p class="section-subtitle">Digitale Transparenz wiederherstellen</p>
        </div>
        <div class="vision-content">
          <div class="vision-card">
            <div class="vision-icon">🎯</div>
            <h3>Mission</h3>
            <p>Kreativschaffende – insbesondere Musiker und Künstler – vor Identitätsdiebstahl und Urheberrechtsverletzungen durch KI schützen.</p>
          </div>
          <div class="vision-card">
            <div class="vision-icon">👥</div>
            <h3>Zielgruppe</h3>
            <p>Künstler, Labels, Rechteinhaber und größere Medienunternehmen, die ihre digitale Identität schützen möchten.</p>
          </div>
          <div class="vision-card">
            <div class="vision-icon">💎</div>
            <h3>Versprechen</h3>
            <p>Künstlern die vollständige Kontrolle und Hoheit über ihre eigenen Werke zurückgeben.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- USP Section -->
    <section class="usp-section">
      <div class="container">
        <div class="usp-grid">
          <div class="usp-content">
            <div class="label">Alleinstellungsmerkmal</div>
            <h2 class="usp-title">Intelligenter Schutz durch <span class="gradient-text">KI-Technologie</span></h2>
            <p class="usp-description">
              Unsere Plattform verbindet Deepfake-Erkennung mit der Durchsetzung von IP- und Urheberrechten.
            </p>
            <div class="usp-features">
              <div class="feature-item">
                <div class="feature-icon">🧠</div>
                <div>
                  <h4>KI-Modelle</h4>
                  <p>Explizit auf die Stimme bestimmter Personen trainiert</p>
                </div>
              </div>
              <div class="feature-item">
                <div class="feature-icon">⚡</div>
                <div>
                  <h4>Automatisierung</h4>
                  <p>Automatisierte Melde-Workflows an Plattformen und Rechteinhaber</p>
                </div>
              </div>
              <div class="feature-item">
                <div class="feature-icon">📊</div>
                <div>
                  <h4>Forensische Reports</h4>
                  <p>Detaillierte Analysen und rechtssichere Dokumentation</p>
                </div>
              </div>
              <div class="feature-item">
                <div class="feature-icon">💰</div>
                <div>
                  <h4>Kosteneffizient</h4>
                  <p>Günstigere Alternative zur händischen Überwachung</p>
                </div>
              </div>
            </div>
          </div>
          <div class="usp-visual">
            <div class="stats-box">
              <div class="stat-item">
                <div class="stat-number gradient-text">72%</div>
                <div class="stat-label">Discovery Rate</div>
              </div>
              <div class="stat-item">
                <div class="stat-number gradient-text">118</div>
                <div class="stat-label">Infringements Found</div>
              </div>
              <div class="stat-item">
                <div class="stat-number gradient-text">24/7</div>
                <div class="stat-label">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How it Works -->
    <section class="how-it-works">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Wie es funktioniert</h2>
          <p class="section-subtitle">Vollautomatische Überwachung in drei Schritten</p>
        </div>
        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">01</div>
            <div class="step-icon">🕷️</div>
            <h3>Crawler</h3>
            <p>Kontinuierliche Datenbeschaffung von sozialen Plattformen und Video-Portalen</p>
          </div>
          <div class="step-card">
            <div class="step-number">02</div>
            <div class="step-icon">🤖</div>
            <h3>KI-Analyse</h3>
            <p>Intelligente Stimmerkennung durch spezialisierte Machine-Learning-Modelle</p>
          </div>
          <div class="step-card">
            <div class="step-number">03</div>
            <div class="step-icon">📱</div>
            <h3>Dashboard</h3>
            <p>Intuitives Web-Dashboard zur Darstellung aller Verstöße und Meldungen</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Transparente Preisgestaltung</h2>
          <p class="section-subtitle">Software-as-a-Service im Abonnement-Modell</p>
        </div>
        <div class="pricing-cards">
          <div class="pricing-card">
            <div class="pricing-label">Starter</div>
            <div class="pricing-price">
              <span class="price-amount">€99</span>
              <span class="price-period">/Monat</span>
            </div>
            <ul class="pricing-features">
              <li>✓ 100 Stunden Analyse pro Monat</li>
              <li>✓ Basis-Modellgröße</li>
              <li>✓ Web-Dashboard</li>
              <li>✓ E-Mail Support</li>
            </ul>
            <button class="pricing-button">Starten</button>
          </div>
          <div class="pricing-card featured">
            <div class="pricing-badge">Beliebt</div>
            <div class="pricing-label">Professional</div>
            <div class="pricing-price">
              <span class="price-amount">€299</span>
              <span class="price-period">/Monat</span>
            </div>
            <ul class="pricing-features">
              <li>✓ 500 Stunden Analyse pro Monat</li>
              <li>✓ Erweiterte Modellgröße</li>
              <li>✓ Automatische Meldungen</li>
              <li>✓ Forensische Reports</li>
              <li>✓ Priority Support</li>
            </ul>
            <button class="pricing-button primary">Starten</button>
          </div>
          <div class="pricing-card">
            <div class="pricing-label">Enterprise</div>
            <div class="pricing-price">
              <span class="price-amount">Custom</span>
            </div>
            <ul class="pricing-features">
              <li>✓ Unbegrenzte Analyse</li>
              <li>✓ Maximale Modellgröße</li>
              <li>✓ API-Zugang</li>
              <li>✓ Dedizierter Account Manager</li>
              <li>✓ SLA-Garantien</li>
            </ul>
            <button class="pricing-button">Kontakt</button>
          </div>
        </div>
        <div class="pricing-note">
          <p>💡 Pay-per-Scan: Bezahle nur für tatsächlich analysierte Videostunden</p>
        </div>
      </div>
    </section>

    <!-- Security Section -->
    <section class="security-section">
      <div class="container">
        <div class="security-grid">
          <div class="security-content">
            <div class="label">Sicherheit & Compliance</div>
            <h2 class="security-title">Deine Daten sind <span class="gradient-text">geschützt</span></h2>
            <div class="security-features">
              <div class="security-item">
                <div class="security-icon">🔒</div>
                <div>
                  <h4>Datenspeicherung</h4>
                  <p>Speicherung von Voiceprints – mathematische, unumkehrbare Darstellungen statt roher Audiodaten</p>
                </div>
              </div>
              <div class="security-item">
                <div class="security-icon">⚖️</div>
                <div>
                  <h4>Rechtsrahmen</h4>
                  <p>Vollständige Konformität mit DSGVO und EU AI Act</p>
                </div>
              </div>
              <div class="security-item">
                <div class="security-icon">✅</div>
                <div>
                  <h4>Transparenz</h4>
                  <p>Ausführliche Information und explizite Zustimmung vor Vertragsabschluss</p>
                </div>
              </div>
            </div>
          </div>
          <div class="security-visual">
            <div class="shield-icon">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 20L160 40V90C160 130 130 160 100 180C70 160 40 130 40 90V40L100 20Z" fill="url(#gradient2)" opacity="0.1"/>
                <path d="M100 20L160 40V90C160 130 130 160 100 180C70 160 40 130 40 90V40L100 20Z" stroke="url(#gradient2)" stroke-width="3"/>
                <path d="M80 100L95 115L120 85" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                  <linearGradient id="gradient2" x1="100" y1="20" x2="100" y2="180" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#a855f7"/>
                    <stop offset="1" stop-color="#38bdf8"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Bereit, deine Stimme zu schützen?</h2>
          <p class="cta-subtitle">Starte jetzt und schütze deine kreative Identität</p>
          <button class="primary-button large" @click="goToDashboard">
            Dashboard ansehen
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="logo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C13.1 2 14 2.9 14 4V12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12V4C10 2.9 10.9 2 12 2Z" fill="url(#gradient3)"/>
                <defs>
                  <linearGradient id="gradient3" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#a855f7"/>
                    <stop offset="1" stop-color="#38bdf8"/>
                  </linearGradient>
                </defs>
              </svg>
              <span>Save your Voice</span>
            </div>
            <p class="footer-tagline">Schütze deine kreative Identität</p>
          </div>
          <div class="footer-links">
            <div class="footer-column">
              <h4>Produkt</h4>
              <a href="#">Features</a>
              <a href="#">Preise</a>
              <a href="#">Sicherheit</a>
            </div>
            <div class="footer-column">
              <h4>Unternehmen</h4>
              <a href="#">Über uns</a>
              <a href="#">Kontakt</a>
              <a href="#">Karriere</a>
            </div>
            <div class="footer-column">
              <h4>Rechtliches</h4>
              <a href="#">Datenschutz</a>
              <a href="#">AGB</a>
              <a href="#">Impressum</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Save your Voice. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToDashboard = () => {
  router.push('/dashboard')
}
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  background: var(--dark-bg);
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--dark-border);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
}

.cta-button {
  padding: 0.5rem 1.5rem;
  background: transparent;
  color: var(--neon-purple);
  border: 2px solid var(--neon-purple);
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.cta-button:hover {
  background: var(--neon-purple);
  color: white;
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
}

/* Hero Section */
.hero {
  padding: 8rem 0 4rem;
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
}

.hero-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 20px;
  color: var(--neon-purple);
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 2rem;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.gradient-text {
  background: linear-gradient(135deg, var(--neon-purple), var(--neon-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.primary-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--neon-purple), var(--neon-blue));
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 40px rgba(168, 85, 247, 0.4);
}

.primary-button.large {
  padding: 1.25rem 2.5rem;
  font-size: 1.125rem;
}

.secondary-button {
  padding: 1rem 2rem;
  background: transparent;
  color: white;
  border: 2px solid var(--dark-border);
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.secondary-button:hover {
  border-color: var(--neon-purple);
  color: var(--neon-purple);
}

.hero-visual {
  position: relative;
  height: 300px;
  margin-top: 4rem;
}

.floating-card {
  position: absolute;
  padding: 1.5rem;
  background: var(--dark-card);
  border: 1px solid var(--dark-border);
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 1rem;
  animation: float 3s ease-in-out infinite;
}

.card-1 {
  left: 10%;
  top: 20%;
  animation-delay: 0s;
}

.card-2 {
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
  animation-delay: 1s;
}

.card-3 {
  right: 10%;
  top: 20%;
  animation-delay: 2s;
}

.card-icon {
  font-size: 2rem;
}

.card-text {
  font-weight: 600;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Section Headers */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.6);
}

/* Vision Section */
.vision-section {
  padding: 6rem 0;
  background: linear-gradient(180deg, var(--dark-bg) 0%, #0f0f1a 100%);
}

.vision-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.vision-card {
  padding: 2rem;
  background: var(--dark-card);
  border: 1px solid var(--dark-border);
  border-radius: 16px;
  transition: all 0.3s;
}

.vision-card:hover {
  transform: translateY(-5px);
  border-color: var(--neon-purple);
  box-shadow: 0 10px 40px rgba(168, 85, 247, 0.2);
}

.vision-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.vision-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--neon-purple), var(--neon-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.vision-card p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

/* USP Section */
.usp-section {
  padding: 6rem 0;
}

.usp-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.label {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 20px;
  color: var(--neon-purple);
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.usp-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.usp-description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.usp-features {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.feature-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.feature-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.feature-item h4 {
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}

.feature-item p {
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
}

.stats-box {
  padding: 3rem;
  background: var(--dark-card);
  border: 1px solid var(--dark-border);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
}

/* How it Works */
.how-it-works {
  padding: 6rem 0;
  background: linear-gradient(180deg, var(--dark-bg) 0%, #0f0f1a 100%);
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.step-card {
  padding: 2.5rem;
  background: var(--dark-card);
  border: 1px solid var(--dark-border);
  border-radius: 16px;
  text-align: center;
  position: relative;
  transition: all 0.3s;
}

.step-card:hover {
  transform: translateY(-5px);
  border-color: var(--neon-blue);
  box-shadow: 0 10px 40px rgba(56, 189, 248, 0.2);
}

.step-number {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 3rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.05);
}

.step-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
}

.step-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.step-card p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

/* Pricing Section */
.pricing-section {
  padding: 6rem 0;
}

.pricing-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.pricing-card {
  padding: 2.5rem;
  background: var(--dark-card);
  border: 1px solid var(--dark-border);
  border-radius: 16px;
  position: relative;
  transition: all 0.3s;
}

.pricing-card:hover {
  transform: translateY(-5px);
  border-color: var(--neon-purple);
}

.pricing-card.featured {
  border: 2px solid var(--neon-purple);
  box-shadow: 0 0 40px rgba(168, 85, 247, 0.3);
}

.pricing-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, var(--neon-purple), var(--neon-blue));
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}

.pricing-label {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--neon-blue);
}

.pricing-price {
  margin-bottom: 2rem;
}

.price-amount {
  font-size: 3rem;
  font-weight: 800;
}

.price-period {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
}

.pricing-features {
  list-style: none;
  margin-bottom: 2rem;
}

.pricing-features li {
  padding: 0.75rem 0;
  color: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid var(--dark-border);
}

.pricing-button {
  width: 100%;
  padding: 1rem;
  background: transparent;
  color: white;
  border: 2px solid var(--dark-border);
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.pricing-button:hover {
  border-color: var(--neon-purple);
  color: var(--neon-purple);
}

.pricing-button.primary {
  background: linear-gradient(135deg, var(--neon-purple), var(--neon-blue));
  border: none;
  color: white;
}

.pricing-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(168, 85, 247, 0.4);
}

.pricing-note {
  text-align: center;
  padding: 1.5rem;
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 12px;
  color: var(--neon-purple);
}

/* Security Section */
.security-section {
  padding: 6rem 0;
  background: linear-gradient(180deg, var(--dark-bg) 0%, #0f0f1a 100%);
}

.security-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.security-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  line-height: 1.2;
}

.security-features {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.security-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.security-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.security-item h4 {
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}

.security-item p {
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
}

.security-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.shield-icon {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

/* CTA Section */
.cta-section {
  padding: 6rem 0;
}

.cta-content {
  text-align: center;
  padding: 4rem;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(56, 189, 248, 0.1));
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 24px;
}

.cta-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.cta-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2.5rem;
}

/* Footer */
.footer {
  padding: 4rem 0 2rem;
  border-top: 1px solid var(--dark-border);
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-brand .logo {
  margin-bottom: 1rem;
}

.footer-tagline {
  color: rgba(255, 255, 255, 0.6);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-column h4 {
  margin-bottom: 1rem;
  color: var(--neon-purple);
}

.footer-column a {
  display: block;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  margin-bottom: 0.75rem;
  transition: color 0.3s;
}

.footer-column a:hover {
  color: var(--neon-purple);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--dark-border);
  color: rgba(255, 255, 255, 0.5);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .usp-grid,
  .security-grid {
    grid-template-columns: 1fr;
  }
  
  .floating-card {
    display: none;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
  }
}
</style>
