const snowContainer = document.getElementById("snow-container");

// Tune these
const MAX_FLAKES = 300;
const SPAWN_INTERVAL_MS = 100;

function createSnowflake() {
  if (!snowContainer) return;
  if (snowContainer.childElementCount >= MAX_FLAKES) return;

  const flake = document.createElement("div");
  flake.className = "snowflake";
  flake.textContent = "✶"; // change to ❄ * · etc.

  const size = 0.4 + Math.random() * 1.3;       // rem
  const fallDuration = 13 + Math.random() * 10;  // seconds
  const swayDuration = 0 + Math.random() * 1;   // seconds

  flake.style.left = Math.random() * 100 + "vw";
  flake.style.fontSize = size + "rem";
  flake.style.opacity = 0.2 + Math.random() * 0.8;

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











