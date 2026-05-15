const cards = [
  {
    id: "01",
    title: "Mirage City",
    prompt: "What are you projecting onto the place you want to reach?",
    image: "assets/images/mirage-city.jpg",
    art: {
      primary:
        "radial-gradient(circle at 50% 50%, transparent 0 26%, currentColor 26.2% 26.7%, transparent 27% 100%), linear-gradient(90deg, transparent 0 33%, currentColor 33.2% 33.5%, transparent 33.8% 66%, currentColor 66.2% 66.5%, transparent 66.8% 100%)",
      secondary:
        "linear-gradient(180deg, transparent 0 22%, currentColor 22.2% 22.5%, transparent 22.8% 77%, currentColor 77.2% 77.5%, transparent 77.8% 100%)",
    },
  },
  {
    id: "02",
    title: "Tender Orbit",
    prompt: "What inside you is still alive and worth protecting?",
    image: "assets/images/tender-orbit.jpg",
    art: {
      primary:
        "linear-gradient(135deg, transparent 0 49%, currentColor 49.2% 49.6%, transparent 49.8% 100%), linear-gradient(45deg, transparent 0 64%, currentColor 64.2% 64.6%, transparent 64.8% 100%)",
      secondary:
        "radial-gradient(circle at 36% 36%, currentColor 0 1.4%, transparent 1.7%), radial-gradient(circle at 63% 61%, currentColor 0 1.2%, transparent 1.5%), linear-gradient(180deg, transparent 0 14%, currentColor 14.2% 14.5%, transparent 14.8% 86%, currentColor 86.2% 86.5%, transparent 86.8% 100%)",
    },
  },
  {
    id: "03",
    title: "Distant Castle",
    prompt: "What dream have you placed too far away?",
    image: "assets/images/distant-castle.jpg",
    art: {
      primary:
        "radial-gradient(ellipse at 50% 36%, currentColor 0 0.8%, transparent 1.2%), radial-gradient(ellipse at 42% 51%, transparent 0 18%, currentColor 18.2% 18.5%, transparent 18.8%), radial-gradient(ellipse at 58% 67%, transparent 0 24%, currentColor 24.2% 24.5%, transparent 24.8%)",
      secondary:
        "linear-gradient(180deg, transparent 0 29%, currentColor 29.2% 29.5%, transparent 29.8% 58%, currentColor 58.2% 58.5%, transparent 58.8% 100%)",
    },
  },
  {
    id: "04",
    title: "The In-Between",
    prompt: "Where do you belong when everything is shifting?",
    image: "assets/images/the-in-between.jpg",
    art: {
      primary:
        "linear-gradient(135deg, transparent 0 34%, currentColor 34.2% 34.5%, transparent 34.8% 66%, currentColor 66.2% 66.5%, transparent 66.8% 100%)",
      secondary:
        "radial-gradient(circle at 50% 50%, transparent 0 30%, currentColor 30.2% 30.5%, transparent 30.8% 100%)",
    },
  },
  {
    id: "05",
    title: "The Familiar",
    prompt: "What part of you sees clearly, even in the dark?",
    image: "assets/images/the-familiar.jpg",
    art: {
      primary:
        "radial-gradient(circle at 41% 44%, currentColor 0 1.1%, transparent 1.5%), radial-gradient(circle at 59% 44%, currentColor 0 1.1%, transparent 1.5%), linear-gradient(180deg, transparent 0 54%, currentColor 54.2% 54.5%, transparent 54.8% 100%)",
      secondary:
        "linear-gradient(90deg, transparent 0 25%, currentColor 25.2% 25.5%, transparent 25.8% 74%, currentColor 74.2% 74.5%, transparent 74.8% 100%)",
    },
  },
  {
    id: "06",
    title: "Her Planet",
    prompt: "What makes you feel like you belong here, too?",
    image: "assets/images/her-planet.jpg",
    art: {
      primary:
        "radial-gradient(circle at 50% 52%, transparent 0 22%, currentColor 22.2% 22.5%, transparent 22.8% 100%), radial-gradient(circle at 50% 52%, currentColor 0 1%, transparent 1.4%)",
      secondary:
        "linear-gradient(180deg, transparent 0 18%, currentColor 18.2% 18.5%, transparent 18.8% 82%, currentColor 82.2% 82.5%, transparent 82.8% 100%)",
    },
  },
  {
    id: "07",
    title: "Signal Garden",
    prompt: "What is trying to reach you through the noise?",
    image: "assets/images/signal-garden.jpg",
    art: {
      primary:
        "linear-gradient(90deg, transparent 0 17%, currentColor 17.2% 17.5%, transparent 17.8% 50%, currentColor 50.2% 50.5%, transparent 50.8% 83%, currentColor 83.2% 83.5%, transparent 83.8% 100%)",
      secondary:
        "radial-gradient(circle at 31% 64%, currentColor 0 1.2%, transparent 1.6%), radial-gradient(circle at 69% 36%, currentColor 0 1.2%, transparent 1.6%)",
    },
  },
  {
    id: "08",
    title: "Private Gallery",
    prompt: "What dream are you hiding even from yourself?",
    image: "assets/images/private-gallery.jpg",
    art: {
      primary:
        "linear-gradient(180deg, transparent 0 15%, currentColor 15.2% 15.5%, transparent 15.8% 50%, currentColor 50.2% 50.5%, transparent 50.8% 85%, currentColor 85.2% 85.5%, transparent 85.8% 100%)",
      secondary:
        "linear-gradient(90deg, transparent 0 20%, currentColor 20.2% 20.5%, transparent 20.8% 80%, currentColor 80.2% 80.5%, transparent 80.8% 100%)",
    },
  },
  {
    id: "09",
    title: "Behind the Glass",
    prompt: "What are you ready to see without interrupting?",
    image: "assets/images/behind-the-glass.jpg",
    art: {
      primary:
        "linear-gradient(90deg, transparent 0 9%, currentColor 9.2% 9.5%, transparent 9.8% 91%, currentColor 91.2% 91.5%, transparent 91.8% 100%), linear-gradient(180deg, transparent 0 9%, currentColor 9.2% 9.5%, transparent 9.8% 91%, currentColor 91.2% 91.5%, transparent 91.8% 100%)",
      secondary:
        "radial-gradient(circle at 50% 50%, transparent 0 34%, currentColor 34.2% 34.5%, transparent 34.8% 100%)",
    },
  },
  {
    id: "10",
    title: "Sky Instruments",
    prompt: "What tools help you understand the unknown?",
    image: "assets/images/sky-instruments.jpg",
    art: {
      primary:
        "radial-gradient(circle at 50% 28%, currentColor 0 1.1%, transparent 1.5%), linear-gradient(180deg, transparent 0 28%, currentColor 28.2% 28.5%, transparent 28.8% 72%, currentColor 72.2% 72.5%, transparent 72.8% 100%)",
      secondary:
        "linear-gradient(45deg, transparent 0 48%, currentColor 48.2% 48.5%, transparent 48.8% 100%), linear-gradient(135deg, transparent 0 52%, currentColor 52.2% 52.5%, transparent 52.8% 100%)",
    },
  },
  {
    id: "11",
    title: "The Current",
    prompt: "What is moving through you before you understand it?",
    image: "assets/images/the-current.jpg",
    art: {
      primary:
        "linear-gradient(180deg, transparent 0 18%, currentColor 18.2% 18.5%, transparent 18.8% 47%, currentColor 47.2% 47.5%, transparent 47.8% 76%, currentColor 76.2% 76.5%, transparent 76.8% 100%)",
      secondary:
        "radial-gradient(circle at 28% 40%, currentColor 0 1.2%, transparent 1.6%), radial-gradient(circle at 71% 63%, currentColor 0 1.2%, transparent 1.6%)",
    },
  },
  {
    id: "12",
    title: "The Game World",
    prompt: "What rules would make this world worth playing in?",
    image: "assets/images/the-game-world.jpg",
    art: {
      primary:
        "linear-gradient(90deg, transparent 0 12%, currentColor 12.2% 12.5%, transparent 12.8% 38%, currentColor 38.2% 38.5%, transparent 38.8% 62%, currentColor 62.2% 62.5%, transparent 62.8% 88%, currentColor 88.2% 88.5%, transparent 88.8% 100%)",
      secondary:
        "linear-gradient(180deg, transparent 0 24%, currentColor 24.2% 24.5%, transparent 24.8% 76%, currentColor 76.2% 76.5%, transparent 76.8% 100%)",
    },
  },
  {
    id: "13",
    title: "The Absolute",
    prompt: "What calls you beyond the life you already know?",
    image: "assets/images/the-absolute.jpg",
    art: {
      primary:
        "radial-gradient(circle at 50% 50%, transparent 0 20%, currentColor 20.2% 20.5%, transparent 20.8% 100%), linear-gradient(180deg, transparent 0 16%, currentColor 16.2% 16.5%, transparent 16.8% 84%, currentColor 84.2% 84.5%, transparent 84.8% 100%)",
      secondary:
        "linear-gradient(45deg, transparent 0 49%, currentColor 49.2% 49.5%, transparent 49.8% 100%), linear-gradient(135deg, transparent 0 51%, currentColor 51.2% 51.5%, transparent 51.8% 100%)",
    },
  },
  {
    id: "14",
    title: "The Long Way",
    prompt: "What kind of companion do you need for this passage?",
    image: "assets/images/the-long-way.jpg",
    art: {
      primary:
        "linear-gradient(180deg, transparent 0 14%, currentColor 14.2% 14.5%, transparent 14.8% 41%, currentColor 41.2% 41.5%, transparent 41.8% 68%, currentColor 68.2% 68.5%, transparent 68.8% 100%)",
      secondary:
        "linear-gradient(45deg, transparent 0 32%, currentColor 32.2% 32.5%, transparent 32.8% 100%), radial-gradient(circle at 76% 72%, currentColor 0 1.2%, transparent 1.6%)",
    },
  },
  {
    id: "15",
    title: "The Presence",
    prompt: "What is watching you from the edge of awareness?",
    image: "assets/images/the-presence.jpg",
    art: {
      primary:
        "radial-gradient(circle at 50% 38%, currentColor 0 1.2%, transparent 1.6%), radial-gradient(circle at 50% 58%, transparent 0 24%, currentColor 24.2% 24.5%, transparent 24.8% 100%)",
      secondary:
        "linear-gradient(90deg, transparent 0 22%, currentColor 22.2% 22.5%, transparent 22.8% 78%, currentColor 78.2% 78.5%, transparent 78.8% 100%)",
    },
  },
  {
    id: "16",
    title: "Moon Station",
    prompt: "What small thing keeps you connected to everything?",
    image: "assets/images/moon-station.jpg",
    art: {
      primary:
        "radial-gradient(circle at 50% 50%, transparent 0 18%, currentColor 18.2% 18.5%, transparent 18.8% 100%), linear-gradient(180deg, transparent 0 20%, currentColor 20.2% 20.5%, transparent 20.8% 80%, currentColor 80.2% 80.5%, transparent 80.8% 100%)",
      secondary:
        "linear-gradient(45deg, transparent 0 47%, currentColor 47.2% 47.5%, transparent 47.8% 100%), linear-gradient(135deg, transparent 0 53%, currentColor 53.2% 53.5%, transparent 53.8% 100%)",
    },
  },
];

// ─── DOM refs ──────────────────────────────────────────────────────────────────
const themeKey = "quiet-deck-theme";
const root = document.documentElement;
const cardElement = document.querySelector("[data-card]");
const deckStack = document.querySelector("[data-deck-stack]");
const idElement = document.querySelector("[data-card-id]");
const titleElement = document.querySelector("[data-card-title]");
const promptElement = document.querySelector("[data-card-prompt]");
const visualElement = document.querySelector("[data-card-visual]");
const cardImageElement = document.querySelector("[data-card-image]");
const prevVisualElement = document.querySelector("[data-prev-visual]");
const nextVisualElement = document.querySelector("[data-next-visual]");
const drawButton = document.querySelector("[data-draw-card]");
const themeButton = document.querySelector("[data-theme-toggle]");

// ─── State ─────────────────────────────────────────────────────────────────────
let currentCardIndex = 0;
let hasPickedOnce = false;

// Shuffled deck: array of card indices dealt in order, refilled when empty.
// This guarantees all cards are seen before any repeats.
let shuffledDeck = [];

function buildShuffledDeck() {
  // Fisher-Yates shuffle of all indices
  const indices = cards.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  // If the first card of the new deck is the same as the current card,
  // move it to the end so there's no repeat at the seam between two decks.
  if (indices[0] === currentCardIndex && indices.length > 1) {
    indices.push(indices.shift());
  }

  shuffledDeck = indices;
}

function drawFromDeck() {
  if (shuffledDeck.length === 0) {
    buildShuffledDeck();
  }
  return shuffledDeck.shift();
}

// ─── Helpers ───────────────────────────────────────────────────────────────────
function resolveImagePath(imagePath) {
  if (!imagePath) return "";
  if (window.location.protocol === "file:" && imagePath.startsWith("/")) {
    return `.${imagePath}`;
  }
  return imagePath;
}

function getAdjacentIndex(direction) {
  const total = cards.length;
  return (currentCardIndex + direction + total) % total;
}

function setPreviewArt(element, card) {
  if (!element) return;
  element.style.setProperty("--art-primary", card.art.primary);
  element.style.setProperty("--art-secondary", card.art.secondary);
}

function updateButtonCopy() {
  drawButton.textContent = hasPickedOnce ? "Pick Another" : "Pick a Card";
}

// ─── Theme ─────────────────────────────────────────────────────────────────────
function setTheme(theme) {
  const themeText =
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  root.setAttribute("data-theme", theme);
  themeButton.setAttribute("aria-label", themeText);
  themeButton.innerHTML = `
    <svg class="theme-toggle__icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      ${
        theme === "dark"
          ? '<path d="M21 12.8A8.9 8.9 0 1 1 11.2 3a7.2 7.2 0 0 0 9.8 9.8Z"></path>'
          : '<circle cx="12" cy="12" r="4.1"></circle><path d="M12 1.9v2.2M12 19.9v2.2M4.22 4.22l1.56 1.56M18.22 18.22l1.56 1.56M1.9 12h2.2M19.9 12h2.2M4.22 19.78l1.56-1.56M18.22 5.78l1.56-1.56"></path>'
      }
    </svg>
    <span class="theme-toggle__label">${themeText}</span>
  `;
  localStorage.setItem(themeKey, theme);
}

function getPreferredTheme() {
  const storedTheme = localStorage.getItem(themeKey);
  if (storedTheme === "light" || storedTheme === "dark") return storedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// ─── Card rendering ────────────────────────────────────────────────────────────
function applyCard(card) {
  idElement.textContent = card.id;
  titleElement.textContent = card.title;
  promptElement.textContent = card.prompt;
  visualElement.style.setProperty("--art-primary", card.art.primary);
  visualElement.style.setProperty("--art-secondary", card.art.secondary);

  const imagePath = resolveImagePath(card.image);
  cardImageElement.src = imagePath;
  cardImageElement.alt = "";
  visualElement.classList.remove("has-image");

  setPreviewArt(prevVisualElement, cards[getAdjacentIndex(-1)]);
  setPreviewArt(nextVisualElement, cards[getAdjacentIndex(1)]);
  updateButtonCopy();
}

// ─── Draw ──────────────────────────────────────────────────────────────────────
function drawNextCard() {
  if (cards.length < 2) return;

  const nextIndex = drawFromDeck();

  // FIX: preload the image NOW, before the animation starts.
  // The browser gets 170ms head-start to fetch the file,
  // so it's likely ready by the time the card flips in.
  const preloadImg = new Image();
  preloadImg.src = resolveImagePath(cards[nextIndex].image);

  hasPickedOnce = true;
  deckStack.classList.add("is-animating");
  cardElement.classList.add("is-changing");

  window.setTimeout(() => {
    currentCardIndex = nextIndex;
    applyCard(cards[currentCardIndex]);
    cardElement.classList.remove("is-changing");
  }, 170);

  window.setTimeout(() => {
    deckStack.classList.remove("is-animating");
  }, 420);
}

// ─── Events ────────────────────────────────────────────────────────────────────
themeButton.addEventListener("click", () => {
  const nextTheme =
    root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  setTheme(nextTheme);
});

drawButton.addEventListener("click", drawNextCard);

cardImageElement.addEventListener("load", () => {
  visualElement.classList.add("has-image");
});

cardImageElement.addEventListener("error", () => {
  visualElement.classList.remove("has-image");
});

// ─── Init ──────────────────────────────────────────────────────────────────────
setTheme(getPreferredTheme());
applyCard(cards[currentCardIndex]);

// Preload all card images on init so switching is instant
function preloadAllImages() {
  cards.forEach((card) => {
    const img = new Image();
    img.src = resolveImagePath(card.image);
  });
}

preloadAllImages();
