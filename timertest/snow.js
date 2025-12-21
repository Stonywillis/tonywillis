const snowContainer = document.getElementById("snow-container");

// Tune these
const MAX_FLAKES = 300;
const SPAWN_INTERVAL_MS = 120;

function createSnowflake() {
  if (!snowContainer) return;
  if (snowContainer.childElementCount >= MAX_FLAKES) return;

  const flake = document.createElement("div");
  flake.className = "snowflake";
  flake.textContent = "✶"; // change to ❄ * · etc.

  const size = 0.4 + Math.random() * 1.2;       // rem
  const fallDuration = 8 + Math.random() * 10;  // seconds
  const swayDuration = 3 + Math.random() * 5;   // seconds

  flake.style.left = Math.random() * 100 + "vw";
  flake.style.fontSize = size + "rem";
  flake.style.opacity = 0.4 + Math.random() * 0.6;

  // Different durations so it feels organic
  flake.style.animationDuration = `${fallDuration}s, ${swayDuration}s`;

  snowContainer.appendChild(flake);

  // Remove after it’s fallen, to avoid DOM bloat
  setTimeout(() => {
    flake.remove();
  }, fallDuration * 1000 + 1000);
}

// Spawn flakes at intervals
setInterval(createSnowflake, SPAWN_INTERVAL_MS);

// Create a few instantly so it’s not empty at start
for (let i = 0; i < 20; i++) {
  setTimeout(createSnowflake, Math.random() * 2000);

}
