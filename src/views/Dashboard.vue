<template>
  <div class="dashboard">
    <!-- Sidebar Navigation -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <div class="logo">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C13.1 2 14 2.9 14 4V12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12V4C10 2.9 10.9 2 12 2Z" fill="url(#gradient1)"/>
            <defs>
              <linearGradient id="gradient1" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                <stop stop-color="#a855f7"/>
                <stop offset="1" stop-color="#38bdf8"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1 class="sidebar-title">Save your Voice</h1>
      </div>

      <nav class="sidebar-nav">
        <a href="#" class="nav-item active">
          <span class="nav-icon">📊</span>
          <span>Dashboard</span>
        </a>
        <a href="#" class="nav-item">
          <span class="nav-icon">👤</span>
          <span>Artist Profiles</span>
        </a>
        <a href="#" class="nav-item">
          <span class="nav-icon">🔍</span>
          <span>Deep Scan</span>
        </a>
        <a href="#" class="nav-item">
          <span class="nav-icon">📝</span>
          <span>Reports</span>
        </a>
        <a href="#" class="nav-item">
          <span class="nav-icon">⚖️</span>
          <span>Legal & Compliance</span>
        </a>
        <a href="#" class="nav-item">
          <span class="nav-icon">📹</span>
          <span>Video Issues</span>
        </a>
        <a href="#" class="nav-item">
          <span class="nav-icon">⚙️</span>
          <span>Automation</span>
        </a>
      </nav>

      <button class="back-button" @click="goToLanding">
        ← Zurück zur Startseite
      </button>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Top Header -->
      <header class="dashboard-header">
        <div class="header-left">
          <h1 class="page-title">Overview Metrics</h1>
        </div>
        <div class="header-right">
          <button class="icon-button">
            <span>⚙️</span>
          </button>
          <button class="icon-button">
            <span>🔔</span>
          </button>
          <button class="add-artist-button">+ Add Artist</button>
          <button class="vendor-access-button">Vendor Access</button>
        </div>
      </header>

      <!-- Metrics Cards -->
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-label">Total Scan Hours</div>
          <div class="metric-value">
            <span class="value-large">10 / 25</span>
            <span class="value-small">hrs used</span>
          </div>
          <div class="metric-footer">
            <span class="metric-change">5 hrs remaining</span>
          </div>
        </div>

        <div class="metric-card">
          <div class="metric-label">Infringements Found</div>
          <div class="metric-value">
            <span class="value-large">118</span>
            <span class="value-small">(last 30 days)</span>
          </div>
          <div class="metric-footer">
            <span class="metric-change positive">+24 since last week</span>
          </div>
        </div>

        <div class="metric-card">
          <div class="metric-label">Discovery Rate (KPI)</div>
          <div class="metric-value">
            <span class="value-large">72%</span>
            <span class="value-small">(goal ≥ 70%)</span>
          </div>
          <div class="metric-footer">
            <span class="metric-change positive">+8%</span>
          </div>
        </div>

        <div class="metric-card">
          <div class="metric-label">False Positives (KPI)</div>
          <div class="metric-value">
            <span class="value-large">6.5%</span>
            <span class="value-small">(goal ≤ 10%)</span>
          </div>
          <div class="metric-footer">
            <span class="metric-change negative">-2.3%</span>
          </div>
        </div>

        <div class="metric-card chart-card">
          <div class="metric-label">Average Listening</div>
          <div class="chart-placeholder">
            <svg viewBox="0 0 200 80" class="line-chart">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#a855f7" stop-opacity="0.3"/>
                  <stop offset="100%" stop-color="#a855f7" stop-opacity="0"/>
                </linearGradient>
              </defs>
              <path d="M 0 60 L 20 45 L 40 50 L 60 35 L 80 40 L 100 25 L 120 30 L 140 20 L 160 25 L 180 15 L 200 20" 
                    fill="none" stroke="#a855f7" stroke-width="2"/>
              <path d="M 0 60 L 20 45 L 40 50 L 60 35 L 80 40 L 100 25 L 120 30 L 140 20 L 160 25 L 180 15 L 200 20 L 200 80 L 0 80 Z" 
                    fill="url(#chartGradient)"/>
              
              <path d="M 0 70 L 20 55 L 40 60 L 60 50 L 80 52 L 100 40 L 120 45 L 140 35 L 160 38 L 180 30 L 200 32" 
                    fill="none" stroke="#38bdf8" stroke-width="2" opacity="0.7"/>
            </svg>
          </div>
          <div class="chart-legend">
            <span class="legend-item">
              <span class="legend-dot" style="background: #a855f7;"></span>
              Infound Band = 290
            </span>
          </div>
        </div>
      </div>

      <!-- Detected Infringements Section -->
      <section class="infringements-section">
        <div class="section-header">
          <h2 class="section-title">Detected Infringements</h2>
          <div class="section-actions">
            <div class="filter-group">
              <button class="filter-button active">
                <span class="filter-icon">🔍</span>
                Deep Scan Filter
              </button>
              <button class="filter-button">
                <span class="filter-icon">📁</span>
                Platform
              </button>
              <button class="filter-button">
                <span class="filter-icon">🏷️</span>
                Categories
              </button>
              <button class="filter-button">
                <span class="filter-icon">⚠️</span>
                Danger
              </button>
              <button class="filter-button">
                <span class="filter-icon">👤</span>
                In Progress
              </button>
              <button class="filter-button">
                <span class="filter-icon">📅</span>
                Date
              </button>
              <button class="filter-button">
                <span class="filter-icon">📤</span>
                Upload
              </button>
            </div>
          </div>
        </div>

        <!-- Filters Bar -->
        <div class="filters-bar">
          <span class="filter-label">Video Title/Content</span>
          <span class="filter-label">Platform</span>
          <span class="filter-label">Infringement Type</span>
          <span class="filter-label">Detection Date</span>
          <span class="filter-label">Actions</span>
        </div>

        <!-- Infringements Table -->
        <div class="infringements-table">
          <div v-for="infringement in infringements" :key="infringement.id" class="infringement-row">
            <div class="infringement-content">
              <div class="infringement-thumbnail">
                <img v-if="infringement.thumbnail" :src="infringement.thumbnail" :alt="infringement.title">
                <div v-else class="thumbnail-placeholder">
                  {{ infringement.icon }}
                </div>
              </div>
              <div class="infringement-details">
                <div class="infringement-title">{{ infringement.title }}</div>
                <div class="infringement-artist">{{ infringement.artist }}</div>
              </div>
            </div>

            <div class="infringement-platform">
              <span :class="['platform-badge', infringement.platformClass]">
                {{ infringement.platform }}
              </span>
            </div>

            <div class="infringement-type">
              <div class="detection-score">
                <span class="score-label">Detection Score</span>
                <span class="score-value">{{ infringement.detectionScore }}</span>
              </div>
              <div class="detection-meta">
                <span class="meta-item">{{ infringement.count1 }}</span>
                <span class="meta-item">{{ infringement.count2 }}</span>
              </div>
            </div>

            <div class="infringement-date">
              <div class="date-text">{{ infringement.date }}</div>
            </div>

            <div class="infringement-actions">
              <button :class="['action-button', infringement.actionClass]">
                {{ infringement.actionText }}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToLanding = () => {
  router.push('/')
}

const infringements = ref([
  {
    id: 1,
    icon: '🎵',
    title: 'AI Voice Cover - "Echoes of a Pop Star"',
    artist: 'Ave Shelling',
    platform: 'Youtube',
    platformClass: 'youtube',
    detectionScore: '93%',
    count1: '1',
    count2: '2',
    date: '2024-06-01 14:35',
    actionText: 'Content Report',
    actionClass: 'report'
  },
  {
    id: 2,
    icon: '🎤',
    title: 'Ave Shelling',
    artist: 'Ave Shelling',
    platform: 'YouTube',
    platformClass: 'youtube',
    detectionScore: '91%',
    count1: '1',
    count2: '2',
    date: '',
    actionText: 'Content Report',
    actionClass: 'report'
  },
  {
    id: 3,
    icon: '🎧',
    title: 'Arlist',
    artist: 'Ave Shiling',
    platform: 'AI Clone',
    platformClass: 'ai-clone',
    detectionScore: '88%',
    count1: '1',
    count2: '2',
    date: '',
    actionText: 'Report to Platform',
    actionClass: 'platform'
  },
  {
    id: 4,
    icon: '🎵',
    title: 'Unauthorized Sample',
    artist: 'Ave Shilling',
    platform: 'Unauthorized Sample',
    platformClass: 'sample',
    detectionScore: '34%',
    count1: '1',
    count2: '2',
    date: '',
    actionText: 'Report to Platform',
    actionClass: 'platform'
  },
  {
    id: 5,
    icon: '🎶',
    title: 'Ave Shelling',
    artist: 'Ave Shelling',
    platform: 'Instagram',
    platformClass: 'instagram',
    detectionScore: '',
    count1: '',
    count2: '',
    date: '2024-06-01 16:31',
    actionText: 'Under Review',
    actionClass: 'review'
  }
])
</script>

<style scoped>
.dashboard {
  display: flex;
  min-height: 100vh;
  background: var(--dark-bg);
}

/* Sidebar */
.sidebar {
  width: 240px;
  background: var(--dark-card);
  border-right: 1px solid var(--dark-border);
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
  overflow-y: auto;
}

.sidebar-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--dark-border);
}

.logo {
  margin-bottom: 0.75rem;
}

.sidebar-title {
  font-size: 1.125rem;
  font-weight: 700;
  text-align: center;
  background: linear-gradient(135deg, var(--neon-purple), var(--neon-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sidebar-nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s;
  font-size: 0.875rem;
}

.nav-item:hover {
  background: rgba(168, 85, 247, 0.1);
  color: var(--neon-purple);
}

.nav-item.active {
  background: rgba(168, 85, 247, 0.2);
  color: var(--neon-purple);
  border-left: 3px solid var(--neon-purple);
}

.nav-icon {
  font-size: 1.25rem;
}

.back-button {
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  background: transparent;
  color: var(--neon-blue);
  border: 1px solid var(--dark-border);
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s;
}

.back-button:hover {
  background: rgba(56, 189, 248, 0.1);
  border-color: var(--neon-blue);
}

/* Main Content */
.main-content {
  margin-left: 240px;
  flex: 1;
  padding: 2rem;
  min-height: 100vh;
}

/* Dashboard Header */
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--dark-border);
}

.page-title {
  font-size: 1.75rem;
  font-weight: 700;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon-button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dark-card);
  border: 1px solid var(--dark-border);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1.25rem;
}

.icon-button:hover {
  border-color: var(--neon-purple);
  background: rgba(168, 85, 247, 0.1);
}

.add-artist-button {
  padding: 0.625rem 1.25rem;
  background: linear-gradient(135deg, var(--neon-purple), var(--neon-blue));
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s;
}

.add-artist-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(168, 85, 247, 0.4);
}

.vendor-access-button {
  padding: 0.625rem 1.25rem;
  background: transparent;
  color: white;
  border: 1px solid var(--dark-border);
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s;
}

.vendor-access-button:hover {
  border-color: var(--neon-blue);
  color: var(--neon-blue);
}

/* Metrics Grid */
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.metric-card {
  background: var(--dark-card);
  border: 1px solid var(--dark-border);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s;
}

.metric-card:hover {
  border-color: var(--neon-purple);
  box-shadow: 0 5px 20px rgba(168, 85, 247, 0.2);
}

.metric-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 1rem;
}

.metric-value {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.value-large {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--neon-purple), var(--neon-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.value-small {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
}

.metric-footer {
  font-size: 0.875rem;
}

.metric-change {
  color: rgba(255, 255, 255, 0.6);
}

.metric-change.positive {
  color: #22c55e;
}

.metric-change.negative {
  color: #ef4444;
}

/* Chart Card */
.chart-card {
  grid-column: span 1;
}

.chart-placeholder {
  margin: 1rem 0;
  height: 80px;
}

.line-chart {
  width: 100%;
  height: 100%;
}

.chart-legend {
  display: flex;
  gap: 1rem;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.legend-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

/* Infringements Section */
.infringements-section {
  background: var(--dark-card);
  border: 1px solid var(--dark-border);
  border-radius: 12px;
  padding: 1.5rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 700;
}

.filter-group {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--dark-border);
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-button:hover {
  border-color: var(--neon-purple);
  color: var(--neon-purple);
}

.filter-button.active {
  background: rgba(168, 85, 247, 0.2);
  border-color: var(--neon-purple);
  color: var(--neon-purple);
}

.filter-icon {
  font-size: 1rem;
}

/* Filters Bar */
.filters-bar {
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr 1.5fr 1fr;
  gap: 1rem;
  padding: 1rem;
  background: rgba(168, 85, 247, 0.05);
  border-radius: 8px;
  margin-bottom: 1rem;
}

.filter-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
}

/* Infringements Table */
.infringements-table {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.infringement-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr 1.5fr 1fr;
  gap: 1rem;
  padding: 1rem;
  background: rgba(26, 26, 46, 0.5);
  border: 1px solid var(--dark-border);
  border-radius: 8px;
  align-items: center;
  transition: all 0.3s;
}

.infringement-row:hover {
  border-color: var(--neon-purple);
  background: rgba(168, 85, 247, 0.05);
}

.infringement-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.infringement-thumbnail {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}

.infringement-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnail-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(56, 189, 248, 0.2));
  font-size: 1.5rem;
}

.infringement-details {
  flex: 1;
  min-width: 0;
}

.infringement-title {
  font-weight: 600;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.infringement-artist {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
}

.platform-badge {
  display: inline-block;
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
}

.platform-badge.youtube {
  background: rgba(255, 0, 0, 0.2);
  color: #ff0000;
  border: 1px solid rgba(255, 0, 0, 0.3);
}

.platform-badge.instagram {
  background: rgba(193, 53, 132, 0.2);
  color: #c13584;
  border: 1px solid rgba(193, 53, 132, 0.3);
}

.platform-badge.ai-clone {
  background: rgba(168, 85, 247, 0.2);
  color: var(--neon-purple);
  border: 1px solid rgba(168, 85, 247, 0.3);
}

.platform-badge.sample {
  background: rgba(56, 189, 248, 0.2);
  color: var(--neon-blue);
  border: 1px solid rgba(56, 189, 248, 0.3);
}

.infringement-type {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.detection-score {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.score-label {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
}

.score-value {
  font-weight: 700;
  color: var(--neon-purple);
}

.detection-meta {
  display: flex;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
}

.meta-item {
  padding: 0.25rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

.infringement-date {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
}

.action-button {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  border: none;
  white-space: nowrap;
}

.action-button.report {
  background: rgba(56, 189, 248, 0.2);
  color: var(--neon-blue);
  border: 1px solid var(--neon-blue);
}

.action-button.report:hover {
  background: var(--neon-blue);
  color: white;
}

.action-button.platform {
  background: rgba(168, 85, 247, 0.2);
  color: var(--neon-purple);
  border: 1px solid var(--neon-purple);
}

.action-button.platform:hover {
  background: var(--neon-purple);
  color: white;
}

.action-button.review {
  background: rgba(234, 179, 8, 0.2);
  color: #eab308;
  border: 1px solid #eab308;
}

.action-button.review:hover {
  background: #eab308;
  color: white;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .sidebar {
    width: 80px;
    padding: 1rem 0.5rem;
  }

  .sidebar-title,
  .nav-item span:not(.nav-icon) {
    display: none;
  }

  .main-content {
    margin-left: 80px;
    padding: 1rem;
  }

  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .dashboard-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .header-right {
    width: 100%;
    flex-wrap: wrap;
  }

  .filters-bar,
  .infringement-row {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .infringement-content {
    flex-direction: column;
    text-align: center;
  }

  .filter-button {
    font-size: 0.75rem;
    padding: 0.375rem 0.75rem;
  }
}
</style>
