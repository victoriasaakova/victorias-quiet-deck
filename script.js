const cards = [
  {
    id: "01",
    title: "The Observatory",
    prompt: "What becomes visible when you stop trying to enter?",
    image: "assets/images/sketch-observatory.jpg",
    art: {
      primary:
        "radial-gradient(circle at 50% 50%, transparent 0 26%, currentColor 26.2% 26.7%, transparent 27% 100%), linear-gradient(90deg, transparent 0 33%, currentColor 33.2% 33.5%, transparent 33.8% 66%, currentColor 66.2% 66.5%, transparent 66.8% 100%)",
      secondary:
        "linear-gradient(180deg, transparent 0 22%, currentColor 22.2% 22.5%, transparent 22.8% 77%, currentColor 77.2% 77.5%, transparent 77.8% 100%)",
    },
  },
  {
    id: "02",
    title: "The Unsaid",
    prompt: "What part of you has been waiting to be named?",
    image: "/images/sketch-cards/sketch-02.jpg",
    art: {
      primary:
        "linear-gradient(135deg, transparent 0 49%, currentColor 49.2% 49.6%, transparent 49.8% 100%), linear-gradient(45deg, transparent 0 64%, currentColor 64.2% 64.6%, transparent 64.8% 100%)",
      secondary:
        "radial-gradient(circle at 36% 36%, currentColor 0 1.4%, transparent 1.7%), radial-gradient(circle at 63% 61%, currentColor 0 1.2%, transparent 1.5%), linear-gradient(180deg, transparent 0 14%, currentColor 14.2% 14.5%, transparent 14.8% 86%, currentColor 86.2% 86.5%, transparent 86.8% 100%)",
    },
  },
  {
    id: "03",
    title: "Inner Weather",
    prompt: "What is moving through you beneath the surface?",
    image: "/images/sketch-cards/sketch-03.jpg",
    art: {
      primary:
        "radial-gradient(ellipse at 50% 36%, currentColor 0 0.8%, transparent 1.2%), radial-gradient(ellipse at 42% 51%, transparent 0 18%, currentColor 18.2% 18.5%, transparent 18.8%), radial-gradient(ellipse at 58% 67%, transparent 0 24%, currentColor 24.2% 24.5%, transparent 24.8%)",
      secondary:
        "linear-gradient(180deg, transparent 0 29%, currentColor 29.2% 29.5%, transparent 29.8% 58%, currentColor 58.2% 58.5%, transparent 58.8% 100%)",
    },
  },
];

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

let currentCardIndex = 0;
let hasPickedOnce = false;

function resolveImagePath(imagePath) {
  if (!imagePath) {
    return "";
  }

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
  if (!element) {
    return;
  }

  element.style.setProperty("--art-primary", card.art.primary);
  element.style.setProperty("--art-secondary", card.art.secondary);
}

function updateButtonCopy() {
  drawButton.textContent = hasPickedOnce ? "Pick another" : "Pick a card";
}

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
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyCard(card) {
  idElement.textContent = card.id;
  titleElement.textContent = card.title;
  promptElement.textContent = card.prompt;
  visualElement.style.setProperty("--art-primary", card.art.primary);
  visualElement.style.setProperty("--art-secondary", card.art.secondary);

  const imagePath = resolveImagePath(card.image);
  cardImageElement.src = imagePath;
  cardImageElement.alt = `${card.title} sketch placeholder`;
  visualElement.classList.remove("has-image");

  setPreviewArt(prevVisualElement, cards[getAdjacentIndex(-1)]);
  setPreviewArt(nextVisualElement, cards[getAdjacentIndex(1)]);
  updateButtonCopy();
}

function drawNextCard() {
  if (cards.length < 2) {
    return;
  }

  let nextIndex = currentCardIndex;

  while (nextIndex === currentCardIndex) {
    nextIndex = Math.floor(Math.random() * cards.length);
  }

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

themeButton.addEventListener("click", () => {
  const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  setTheme(nextTheme);
});

drawButton.addEventListener("click", drawNextCard);

cardImageElement.addEventListener("load", () => {
  visualElement.classList.add("has-image");
});

cardImageElement.addEventListener("error", () => {
  visualElement.classList.remove("has-image");
});

setTheme(getPreferredTheme());
applyCard(cards[currentCardIndex]);
