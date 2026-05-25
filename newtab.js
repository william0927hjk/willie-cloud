// ===== Game Data =====
const GAMES = {
  continuePlaying: [
    { title: "Cyber Odyssey 2077", genre: "RPG", color: "#6c63ff", initial: "CO" },
    { title: "Shadow Legends", genre: "Action", color: "#ff4757", initial: "SL" },
    { title: "Galaxy Racers", genre: "Racing", color: "#00d4ff", initial: "GR" },
    { title: "Dragon's Keep", genre: "Adventure", color: "#f39c12", initial: "DK" },
    { title: "Neon Strike", genre: "FPS", color: "#2ecc71", initial: "NS" },
    { title: "Battle Arena X", genre: "MOBA", color: "#e84393", initial: "BA" },
  ],
  popular: [
    { title: "Stellar Warfare", genre: "Strategy", color: "#0984e3", initial: "SW" },
    { title: "Mythic Realms", genre: "MMORPG", color: "#6c5ce7", initial: "MR" },
    { title: "Speed Fury", genre: "Racing", color: "#fdcb6e", initial: "SF" },
    { title: "Zombie Outbreak", genre: "Survival", color: "#d63031", initial: "ZO" },
    { title: "Puzzle Galaxy", genre: "Puzzle", color: "#00cec9", initial: "PG" },
    { title: "Football Pro 26", genre: "Sports", color: "#55efc4", initial: "FP" },
    { title: "Dark Souls IV", genre: "RPG", color: "#2d3436", initial: "DS" },
    { title: "Apex Legends 2", genre: "Battle Royale", color: "#e17055", initial: "AL" },
  ],
  recent: [
    { title: "Cosmic Drift", genre: "Arcade", color: "#a29bfe", initial: "CD" },
    { title: "Iron Siege", genre: "Tower Defense", color: "#636e72", initial: "IS" },
    { title: "Ocean Explorer", genre: "Simulation", color: "#74b9ff", initial: "OE" },
    { title: "Pixel Knight", genre: "Platformer", color: "#fab1a0", initial: "PK" },
    { title: "Quantum Break 2", genre: "Action", color: "#fd79a8", initial: "QB" },
    { title: "Starfield Nexus", genre: "Open World", color: "#81ecec", initial: "SN" },
  ],
};

const CATEGORIES = [
  { name: "Action", icon: "\u2694\uFE0F", color: "#ff4757" },
  { name: "RPG", icon: "\uD83D\uDDE1\uFE0F", color: "#6c63ff" },
  { name: "Racing", icon: "\uD83C\uDFCE\uFE0F", color: "#00d4ff" },
  { name: "Sports", icon: "\u26BD", color: "#2ecc71" },
  { name: "Strategy", icon: "\u265F\uFE0F", color: "#f39c12" },
  { name: "Puzzle", icon: "\uD83E\udDE9", color: "#e84393" },
  { name: "Simulation", icon: "\uD83C\uDFD7\uFE0F", color: "#0984e3" },
  { name: "Horror", icon: "\uD83D\uDC7B", color: "#d63031" },
];

// ===== Create Game Card =====
function createGameCard(game, index) {
  const card = document.createElement("div");
  card.className = "game-card";
  card.style.animationDelay = `${index * 0.05}s`;

  card.innerHTML = `
    <div class="game-card-placeholder" style="background: linear-gradient(135deg, ${game.color}33, ${game.color}11);">
      ${game.initial}
    </div>
    <div class="play-overlay">
      <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
    </div>
    <div class="game-card-info">
      <div class="game-card-title">${game.title}</div>
      <div class="game-card-meta">
        <span class="game-card-tag">${game.genre}</span>
        <span>Cloud Ready</span>
      </div>
    </div>
  `;

  card.addEventListener("click", () => {
    showGameLaunch(game);
  });

  return card;
}

// ===== Create Category Card =====
function createCategoryCard(cat) {
  const card = document.createElement("div");
  card.className = "category-card";
  card.style.background = `linear-gradient(135deg, ${cat.color}18, ${cat.color}08)`;
  card.style.border = `1px solid ${cat.color}22`;

  card.innerHTML = `
    <span class="category-icon">${cat.icon}</span>
    <span>${cat.name}</span>
  `;

  return card;
}

// ===== Populate Sections =====
function populateGames() {
  const continueRow = document.getElementById("continuePlayingRow");
  const popularRow = document.getElementById("popularGamesRow");
  const recentRow = document.getElementById("recentGamesRow");
  const categoriesGrid = document.getElementById("categoriesGrid");

  GAMES.continuePlaying.forEach((game, i) => {
    continueRow.appendChild(createGameCard(game, i));
  });

  GAMES.popular.forEach((game, i) => {
    popularRow.appendChild(createGameCard(game, i));
  });

  GAMES.recent.forEach((game, i) => {
    recentRow.appendChild(createGameCard(game, i));
  });

  CATEGORIES.forEach((cat) => {
    categoriesGrid.appendChild(createCategoryCard(cat));
  });
}

// ===== Game Launch Modal =====
function showGameLaunch(game) {
  const existing = document.querySelector(".launch-modal");
  if (existing) existing.remove();

  const modal = document.createElement("div");
  modal.className = "launch-modal";
  modal.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 200;
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.2s ease;
  `;

  modal.innerHTML = `
    <div style="
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 40px;
      text-align: center;
      max-width: 400px;
      width: 90%;
    ">
      <div style="
        width: 80px;
        height: 80px;
        border-radius: var(--radius-md);
        background: linear-gradient(135deg, ${game.color}44, ${game.color}11);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        font-weight: 800;
        color: ${game.color};
        margin: 0 auto 16px;
      ">${game.initial}</div>
      <h2 style="font-size: 22px; margin-bottom: 6px;">${game.title}</h2>
      <p style="color: var(--text-secondary); font-size: 13px; margin-bottom: 24px;">${game.genre} &bull; Cloud Streaming</p>
      <div class="launch-progress" style="
        width: 100%;
        height: 4px;
        background: var(--bg-card);
        border-radius: 2px;
        overflow: hidden;
        margin-bottom: 12px;
      ">
        <div class="launch-bar" style="
          width: 0%;
          height: 100%;
          background: var(--accent-gradient);
          border-radius: 2px;
          transition: width 2s ease;
        "></div>
      </div>
      <p class="launch-status" style="font-size: 12px; color: var(--text-muted);">Connecting to cloud server...</p>
      <button class="cancel-btn" style="
        margin-top: 20px;
        padding: 8px 24px;
        background: rgba(255,255,255,0.06);
        border: 1px solid var(--border-color);
        color: var(--text-secondary);
        border-radius: var(--radius-sm);
        cursor: pointer;
        font-size: 13px;
      ">Cancel</button>
    </div>
  `;

  document.body.appendChild(modal);

  const bar = modal.querySelector(".launch-bar");
  const status = modal.querySelector(".launch-status");

  requestAnimationFrame(() => {
    bar.style.width = "100%";
  });

  setTimeout(() => {
    status.textContent = "Allocating GPU resources...";
  }, 600);

  setTimeout(() => {
    status.textContent = "Starting game session...";
  }, 1400);

  setTimeout(() => {
    status.textContent = "Game ready! (Demo mode)";
    bar.style.background = "linear-gradient(90deg, #2ecc71, #27ae60)";
  }, 2000);

  modal.querySelector(".cancel-btn").addEventListener("click", () => {
    modal.remove();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });
}

// ===== Search =====
function setupSearch() {
  const input = document.getElementById("searchInput");
  input.addEventListener("input", () => {
    const query = input.value.toLowerCase().trim();
    document.querySelectorAll(".game-card").forEach((card) => {
      const title = card.querySelector(".game-card-title").textContent.toLowerCase();
      card.style.display = title.includes(query) || !query ? "" : "none";
    });
  });
}

// ===== Navigation =====
function setupNavigation() {
  const navItems = document.querySelectorAll(".nav-item, .taskbar-icon[data-section]");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const section = item.dataset.section;
      if (!section) return;

      // Update active states
      document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"));
      document.querySelectorAll(".taskbar-icon[data-section]").forEach((n) => n.classList.remove("active"));

      document.querySelectorAll(`[data-section="${section}"]`).forEach((n) => n.classList.add("active"));
    });
  });
}

// ===== Taskbar Clock =====
function updateClock() {
  const el = document.getElementById("taskbarTime");
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  el.textContent = `${hours}:${minutes}`;
}

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  populateGames();
  setupSearch();
  setupNavigation();
  updateClock();
  setInterval(updateClock, 10000);
});
