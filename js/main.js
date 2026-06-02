// ========== PROJECTS DATA ==========
const projectsData = [
  {
    id: 1,
    title: "Glass Morphic Auth",
    category: "auth",
    icon: "fa-solid fa-shield-halbed",
    badges: ["DEFENSIVE ART", "2FA"],
    description: "Ancient authentication techniques with glass morphic design.",
    demo: "https://fergusonrevaldo25.github.io/auth-system",
    repo: "https://github.com/FergusonRevaldo25/auth-system",
  },
  {
    id: 2,
    title: "Split-Screen Login",
    category: "auth",
    icon: "fa-solid fa-shield-virus",
    badges: ["CLOUDFLARE GUARD"],
    description: "50/50 defensive formation with Cloudflare Turnstile.",
    demo: "https://fergusonrevaldo25.github.io/split-login",
    repo: "https://github.com/FergusonRevaldo25/split-login",
  },
  {
    id: 3,
    title: "Neo-Brutalist Gamified",
    category: "auth",
    icon: "fa-solid fa-dice-d6",
    badges: ["GAMIFIED BATTLE"],
    description: "Gamified authentication with XP earning system.",
    demo: "https://fergusonrevaldo25.github.io/neo-brutalist-login",
    repo: "https://github.com/FergusonRevaldo25/neo-brutalist-login",
  },
  {
    id: 4,
    title: "Glass Dashboard",
    category: "dashboard",
    icon: "fa-solid fa-crown",
    badges: ["COMMAND CENTER"],
    description: "Complete war room dashboard with user management.",
    demo: "https://fergusonrevaldo25.github.io/Glass-Morphic-Authentication-Dashboard/",
    repo: "https://github.com/FergusonRevaldo25/Glass-Morphic-Authentication-Dashboard",
  },
  {
    id: 5,
    title: "AI Real-Time Chat Bot",
    category: "ai",
    icon: "fa-solid fa-robot",
    badges: ["INTELLIGENT BLADE"],
    description: "Intelligent AI companion with real-time messaging.",
    demo: "https://realtime-ai-chat-whil.onrender.com",
    repo: "https://github.com/FergusonRevaldo25/Real-Time-App",
  },
  {
    id: 6,
    title: "Lamborghini Showcase",
    category: "showcase",
    icon: "fa-solid fa-horse",
    badges: ["LEGENDARY STEED"],
    description: "Showcase of legendary steeds with real-time filtering.",
    demo: "https://fergusonrevaldo25.github.io/LABOGINIS-WEBSITE/",
    repo: "https://github.com/FergusonRevaldo25/LABOGINIS-WEBSITE",
  },
  {
    id: 7,
    title: "Weather Dashboard",
    category: "dashboard",
    icon: "fa-solid fa-cloud-moon",
    badges: ["ELEMENTAL MAGIC"],
    description: "Control the elements! Live weather monitoring.",
    demo: "https://fergusonrevaldo25.github.io/weather-dashboard",
    repo: "https://github.com/FergusonRevaldo25/weather-dashboard",
  },
  {
    id: 8,
    title: "IT Pro Solutions",
    category: "dashboard",
    icon: "fa-solid fa-store",
    badges: ["MERCHANT GUILD"],
    description: "Complete merchant marketplace with real-time chat.",
    demo: "https://fergusonrevaldo25.github.io/IT-Services-Dashboard/",
    repo: "https://github.com/FergusonRevaldo25/IT-Services-Dashboard",
  },
  {
    id: 9,
    title: "Calculator & Chat Assistant",
    category: "ai",
    icon: "fa-solid fa-calculator",
    badges: ["SOROBAN"],
    description: "Ancient soroban calculator with chat assistant.",
    demo: "https://fergusonrevaldo25.github.io/classic-calculator-chat",
    repo: "https://github.com/FergusonRevaldo25/classic-calculator-chat",
  },
];

// ========== RENDER PROJECTS ==========
let currentFilter = "all";
const projectsGrid = document.getElementById("projectsGrid");

function renderProjects() {
  if (!projectsGrid) return;
  const filtered =
    currentFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === currentFilter);
  projectsGrid.innerHTML = filtered
    .map(
      (p) => `
        <div class="project-card" data-id="${p.id}">
            <div class="project-icon"><i class="${p.icon}"></i></div>
            <h3>⚔️ ${p.title}</h3>
            <div class="project-badges">${p.badges.map((b) => `<span class="badge">🗡️ ${b}</span>`).join("")}</div>
            <p>${p.description}</p>
            <div class="project-links"><a href="${p.demo}" target="_blank">Wield Blade →</a><a href="${p.repo}" target="_blank">Forge Details</a></div>
        </div>
    `,
    )
    .join("");

  initDragDrop();
  attachConfettiToProjects();
  attachWalkingListeners();
}

function initDragDrop() {
  if (projectsGrid && typeof Sortable !== "undefined") {
    new Sortable(projectsGrid, { animation: 300, handle: ".project-card" });
  }
}

// ========== CONFETTI ==========
function triggerVictoryConfetti() {
  const colors = ["#dc143c", "#8b0000", "#ff6b6b", "#ffd700"];
  for (let i = 0; i < 80; i++) {
    const conf = document.createElement("div");
    conf.style.position = "fixed";
    conf.style.width = "10px";
    conf.style.height = "10px";
    conf.style.background = colors[Math.floor(Math.random() * colors.length)];
    conf.style.left = Math.random() * window.innerWidth + "px";
    conf.style.top = "-10px";
    conf.style.clipPath =
      "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)";
    conf.style.pointerEvents = "none";
    conf.style.zIndex = "9999";
    document.body.appendChild(conf);
    const anim = conf.animate(
      [
        { top: "-10px", opacity: 1, transform: "rotate(0deg)" },
        {
          top: window.innerHeight + "px",
          opacity: 0,
          transform: "rotate(360deg)",
        },
      ],
      { duration: 1500 },
    );
    anim.onfinish = () => conf.remove();
  }
}

function attachConfettiToProjects() {
  document.querySelectorAll(".project-links a").forEach((link) => {
    link.addEventListener("click", () => triggerVictoryConfetti());
  });
}

// ========== TYPING ANIMATION ==========
const words = [
  "Code of Bushido ⚔️",
  "Way of the Warrior 🗡️",
  "Yeat Mode 🎵",
  "If We Being Rëal 🐍",
  "Victory's Edge 🏯",
];
let wordIndex = 0,
  charIndex = 0,
  isDeleting = false;
const typingEl = document.getElementById("typing-text");

function typeEffect() {
  if (!typingEl) return;
  const current = words[wordIndex];
  if (isDeleting) {
    typingEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(typeEffect, 2000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }
  setTimeout(typeEffect, isDeleting ? 80 : 120);
}
if (typingEl) typeEffect();

// ========== SKILL BARS ==========
function animateSkillBars() {
  document.querySelectorAll(".progress-fill").forEach((bar) => {
    const width = bar.getAttribute("data-width");
    if (width) bar.style.width = width + "%";
  });
}

// ========== TESTIMONIAL CAROUSEL ==========
let currentSlide = 0;
const track = document.getElementById("testimonialTrack");
const prev = document.getElementById("prevTestimonial");
const next = document.getElementById("nextTestimonial");
const dotsContainer = document.getElementById("sliderDots");
let slides = [];

function updateCarousel() {
  if (!track || slides.length === 0) return;
  const slideWidth = slides[0]?.offsetWidth + 32;
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  document
    .querySelectorAll(".dot")
    .forEach((d, i) => d.classList.toggle("active", i === currentSlide));
}

function buildDots() {
  if (!dotsContainer) return;
  dotsContainer.innerHTML = "";
  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === currentSlide) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentSlide = i;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  });
}

if (prev)
  prev.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
  });
if (next)
  next.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
  });

// ========== VISITOR COUNTER ==========
function updateVisitorCount() {
  let visitors = localStorage.getItem("visitorCount");
  if (!visitors) {
    visitors = Math.floor(Math.random() * 1000) + 1247;
    localStorage.setItem("visitorCount", visitors);
  }
  const countElement = document.getElementById("visitorCount");
  if (countElement) {
    animateNumber(countElement, 0, parseInt(visitors), 1000);
  }
}

function animateNumber(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
}

// ========== CONTACT FORM ==========
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name")?.value;
    const email = document.getElementById("email")?.value;
    const message = document.getElementById("message")?.value;

    if (!name || !email || !message) {
      formStatus.textContent = "❌ Complete your war scroll!";
      formStatus.className = "form-status error";
      formStatus.style.display = "block";
      setTimeout(() => (formStatus.style.display = "none"), 3000);
      return;
    }

    formStatus.textContent = "📜 Sending raven...";
    formStatus.className = "form-status";
    formStatus.style.display = "block";

    setTimeout(() => {
      formStatus.textContent = `✅ Thank you ${name}! Your raven has been received.`;
      formStatus.className = "form-status success";
      contactForm.reset();
      triggerVictoryConfetti();
      setTimeout(() => (formStatus.style.display = "none"), 5000);
    }, 1500);
  });
}

// ========== VOICE COMMANDS ==========
const voiceBtn = document.getElementById("voiceTriggerBtn");

function speakMessage(msg) {
  const avatarSpeech = document.getElementById("avatarSpeech");
  if (avatarSpeech) {
    avatarSpeech.textContent = msg;
    avatarSpeech.style.animation = "none";
    setTimeout(
      () => (avatarSpeech.style.animation = "speechBubble 0.3s ease-out"),
      10,
    );
    setTimeout(() => {
      if (avatarSpeech.textContent === msg) {
        avatarSpeech.textContent = "👋 Yo! Click any tab!";
      }
    }, 3000);
  }
}

if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
  const SpeechRecognition =
    window.webkitSpeechRecognition || window.SpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = "en-US";

  if (voiceBtn) {
    voiceBtn.addEventListener("click", () => {
      recognition.start();
      speakMessage("🎤 Listening...");
    });
  }

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();

    if (command.includes("dark mode")) {
      document.getElementById("darkModeToggle")?.click();
      speakMessage("⚔️ Dark mode!");
    } else if (command.includes("scroll down")) {
      window.scrollBy({ top: 500, behavior: "smooth" });
      speakMessage("🗡️ Scrolling!");
    } else if (command.includes("projects")) {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
      speakMessage("⚔️ Weapons arsenal!");
    } else if (command.includes("yeat")) {
      document.getElementById("yeatToggle")?.click();
      speakMessage("🎵 Yeat toggled!");
    } else {
      speakMessage(`Try "dark mode" or "projects"`);
    }
  };
}

// ========== REAL YEAT MUSIC PLAYER - 3 SONGS ==========
const yeatToggle = document.getElementById("yeatToggle");
const yeatVolume = document.getElementById("yeatVolume");
const yeatSongName = document.getElementById("yeatSongName");
const yeatAudioPlayer = document.getElementById("yeatAudioPlayer");
let isYeatPlaying = false;
let currentSong = 1;

// Your 3 Yeat songs
const yeatSongs = {
  1: {
    name: "🎤 Yeat - Nun id change",
    file: "Nun id change [Official Audio].mp3",
  },
  2: { name: "🎤 Yeat - Bëttr 0ff", file: "Bëttr 0ff [Official Audio].mp3" },
  3: {
    name: "🎤 Yeat - If We Being Rëal",
    file: "If We Being Rëal [Official Audio].mp3",
  },
};

function loadYeatSong(songId) {
  const song = yeatSongs[songId];
  if (!song) return;

  yeatAudioPlayer.src = `assets/music/${song.file}`;
  yeatAudioPlayer.volume = yeatVolume ? parseFloat(yeatVolume.value) : 0.5;
  yeatAudioPlayer.loop = true;

  if (yeatSongName) yeatSongName.textContent = song.name;
  currentSong = songId;

  if (isYeatPlaying) {
    yeatAudioPlayer.play().catch((e) => console.log("Click YEAT to play"));
  }
}

function playYeatMusic() {
  if (!yeatAudioPlayer) return;

  yeatAudioPlayer
    .play()
    .then(() => {
      isYeatPlaying = true;
      yeatToggle.innerHTML = '<i class="fas fa-pause"></i><span>YEAT</span>';
      speakMessage(`🎵 Yeat mode: ${yeatSongs[currentSong].name} 🐍`);
      startYeatLyrics();
    })
    .catch((err) => {
      speakMessage("🎵 Click YEAT button again!");
    });
}

function pauseYeatMusic() {
  if (yeatAudioPlayer) {
    yeatAudioPlayer.pause();
    isYeatPlaying = false;
    yeatToggle.innerHTML = '<i class="fas fa-play"></i><span>YEAT</span>';
    speakMessage("🎵 Yeat paused.");
    stopYeatLyrics();
  }
}

if (yeatToggle) {
  yeatToggle.addEventListener("click", () => {
    if (isYeatPlaying) {
      pauseYeatMusic();
    } else {
      if (!yeatAudioPlayer.src) {
        loadYeatSong(1);
      }
      playYeatMusic();
    }
  });
}

if (yeatVolume) {
  yeatVolume.addEventListener("input", (e) => {
    if (yeatAudioPlayer) yeatAudioPlayer.volume = e.target.value;
  });
}

// Song selection buttons - NOW WITH 3 SONGS
document.querySelectorAll(".yeat-song-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const songId = parseInt(btn.dataset.song);
    loadYeatSong(songId);
    if (isYeatPlaying) {
      yeatAudioPlayer.play();
      speakMessage(`🎵 Now playing: ${yeatSongs[songId].name}`);
    } else {
      playYeatMusic();
    }
    btn.style.transform = "scale(1.1)";
    setTimeout(() => (btn.style.transform = "scale(1)"), 200);
  });
});

// Load default song on page load
loadYeatSong(1);

let lyricsInterval = null;
const yeatLyrics = [
  "🐍 Nun id change, I'm the same",
  "💰 Twizzy rich, can't stop",
  "🎤 Bëttr 0ff without them",
  "🔥 If we being rëal, I'm the one",
  "💎 Yeat, yeat, yeat",
  "🤘 Out thë way, out thë way",
];

function startYeatLyrics() {
  if (lyricsInterval) clearInterval(lyricsInterval);
  lyricsInterval = setInterval(() => {
    if (isYeatPlaying) {
      const randomLyric =
        yeatLyrics[Math.floor(Math.random() * yeatLyrics.length)];
      const speechBubble = document.getElementById("avatarSpeech");
      if (
        speechBubble &&
        !speechBubble.textContent.includes("✅") &&
        !speechBubble.textContent.includes("⚔️")
      ) {
        speechBubble.textContent = `🎤 ${randomLyric}`;
        setTimeout(() => {
          if (speechBubble.textContent.includes("🎤")) {
            speechBubble.textContent = "👋 Yo! Click a tab!";
          }
        }, 4000);
      }
    }
  }, 10000);
}

function stopYeatLyrics() {
  if (lyricsInterval) {
    clearInterval(lyricsInterval);
    lyricsInterval = null;
  }
}

// ========== PROPER TWO-STEP WALKING AVATAR - STAYS WHERE HE WALKS ==========
const avatarContainer = document.getElementById("avatarContainer");
const avatarCharacter = document.getElementById("avatarCharacter");
let isMoving = false;
let stepInterval = null;
let currentStep = 0;
let stepPositions = [];
let stepCycle = 0;

function takeStep(x, y, legSide) {
  return new Promise((resolve) => {
    const startX = parseFloat(avatarContainer.style.left);
    const startY = parseFloat(avatarContainer.style.top);
    const stepDuration = 120;
    const startTime = performance.now();
    const legs = document.querySelectorAll(".avatar-leg");

    function animateStep(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / stepDuration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 2);

      const currentX = startX + (x - startX) * easeProgress;
      const currentY = startY + (y - startY) * easeProgress;
      const bounce = Math.sin(progress * Math.PI) * 10;

      avatarContainer.style.left = currentX + "px";
      avatarContainer.style.top = currentY - bounce + "px";

      if (legs.length >= 2) {
        if (legSide === "left") {
          legs[0].style.transform = "rotate(25deg)";
          legs[1].style.transform = "rotate(-10deg)";
        } else {
          legs[0].style.transform = "rotate(-10deg)";
          legs[1].style.transform = "rotate(25deg)";
        }
      }

      if (progress < 1) {
        requestAnimationFrame(animateStep);
      } else {
        if (legs.length >= 2) {
          legs[0].style.transform = "rotate(0deg)";
          legs[1].style.transform = "rotate(0deg)";
        }
        resolve();
      }
    }

    requestAnimationFrame(animateStep);
  });
}

async function walkToElement(targetElement) {
  if (isMoving) return;
  isMoving = true;
  stepCycle = 0;

  const avatarRect = avatarContainer.getBoundingClientRect();
  const targetRect = targetElement.getBoundingClientRect();

  const startX = avatarRect.left;
  const startY = avatarRect.top;
  const endX = targetRect.left + targetRect.width / 2 - avatarRect.width / 2;
  const endY = targetRect.top - 70;

  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const stepsCount = Math.max(8, Math.ceil(Math.abs(distanceX) / 30));

  stepPositions = [];
  for (let i = 1; i <= stepsCount; i++) {
    const t = i / stepsCount;
    const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    stepPositions.push({
      x: startX + distanceX * ease,
      y: startY + distanceY * ease,
    });
  }

  avatarContainer.style.position = "fixed";
  avatarContainer.style.right = "auto";
  avatarContainer.style.bottom = "auto";
  avatarContainer.style.left = startX + "px";
  avatarContainer.style.top = startY + "px";
  avatarCharacter.classList.add("walking");

  const walkMessages = [
    "👋 Let's go!",
    "⚔️ On my way!",
    "🗡️ Walking!",
    "🏯 Almost there!",
    "🐍 Twizzy!",
  ];
  const speech = document.getElementById("avatarSpeech");
  if (speech)
    speech.textContent =
      walkMessages[Math.floor(Math.random() * walkMessages.length)];

  for (let i = 0; i < stepPositions.length; i++) {
    const step = stepPositions[i];
    const legSide = stepCycle % 2 === 0 ? "left" : "right";
    await takeStep(step.x, step.y, legSide);
    stepCycle++;
  }

  avatarCharacter.classList.remove("walking");

  const legs = document.querySelectorAll(".avatar-leg");
  if (legs.length >= 2) {
    legs[0].style.transform = "rotate(0deg)";
    legs[1].style.transform = "rotate(0deg)";
  }

  if (speech) speech.textContent = "✨ PRESSED! ✨";

  avatarContainer.style.transform = "scale(0.95)";
  setTimeout(() => {
    avatarContainer.style.transform = "scale(1)";
  }, 100);
  triggerVictoryConfetti();

  // AVATAR STAYS HERE - DOES NOT RETURN TO CORNER
  setTimeout(() => {
    if (speech) speech.textContent = "👋 I stay here now!";
    setTimeout(() => {
      if (speech && speech.textContent === "👋 I stay here now!") {
        speech.textContent = "👋 Yo! Click another tab!";
      }
    }, 2000);
    isMoving = false;
  }, 400);
}

function attachWalkingListeners() {
  const clickableElements = document.querySelectorAll(
    ".nav-tab, .filter, .btn, .project-card, .yeat-btn, .samurai-btn, .yeat-song-btn, .read-more, .social a",
  );
  clickableElements.forEach((el) => {
    el.removeEventListener("click", window.walkingHandler);
    const handler = async (e) => {
      if (
        el.classList.contains("nav-tab") ||
        el.classList.contains("filter") ||
        el.classList.contains("btn")
      ) {
        e.preventDefault();
        await walkToElement(el);
        if (el.classList.contains("nav-tab")) {
          const href = el.getAttribute("href");
          if (href && href !== "#")
            document
              .querySelector(href)
              ?.scrollIntoView({ behavior: "smooth" });
        }
        if (el.classList.contains("filter")) {
          setTimeout(() => {
            filterBtns.forEach((b) => b.classList.remove("active"));
            el.classList.add("active");
            currentFilter = el.dataset.filter;
            renderProjects();
          }, 800);
        }
      } else {
        await walkToElement(el);
      }
    };
    window.walkingHandler = handler;
    el.addEventListener("click", handler);
  });
}

// ========== PARALLAX ==========
window.addEventListener("scroll", () => {
  const heroImg = document.querySelector(".hero-image img");
  if (heroImg)
    heroImg.style.transform = `translateY(${window.pageYOffset * 0.15}px)`;
});

// ========== BLOOD MOON PARTICLES ==========
const bloodCanvas = document.getElementById("bloodMoonCanvas");
if (bloodCanvas) {
  const ctx = bloodCanvas.getContext("2d");
  let particles = [];

  function initParticles() {
    bloodCanvas.width = window.innerWidth;
    bloodCanvas.height = window.innerHeight;
    particles = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * bloodCanvas.width,
        y: Math.random() * bloodCanvas.height,
        radius: 1 + Math.random() * 3,
        speedY: 0.3 + Math.random() * 1.5,
        color: `rgba(220, 20, 60, ${0.2 + Math.random() * 0.3})`,
      });
    }
  }

  function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, bloodCanvas.width, bloodCanvas.height);
    particles.forEach((p) => {
      p.y += p.speedY;
      if (p.y > bloodCanvas.height) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  initParticles();
  draw();
  window.addEventListener("resize", () => initParticles());
}

// ========== KATANA CURSOR TRAIL ==========
let lastTrailTime = 0;
document.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastTrailTime > 120) {
    const trail = document.createElement("div");
    trail.innerHTML = "⚔️";
    trail.style.cssText =
      "position:fixed; left:" +
      e.clientX +
      "px; top:" +
      e.clientY +
      "px; pointer-events:none; z-index:9998; font-size:16px; opacity:0.8; transition:all 0.5s;";
    document.body.appendChild(trail);
    setTimeout(() => {
      trail.style.opacity = "0";
      trail.style.transform = "translate(20px, -20px) rotate(45deg)";
      setTimeout(() => trail.remove(), 500);
    }, 50);
    lastTrailTime = now;
  }
});

// ========== CURSOR RING ==========
const ring = document.createElement("div");
ring.className = "cursor-ring";
document.body.appendChild(ring);

document.addEventListener("mousemove", (e) => {
  ring.style.left = e.clientX + "px";
  ring.style.top = e.clientY + "px";
});

document
  .querySelectorAll(
    "a, button, .btn, .project-card, .filter, .samurai-btn, .yeat-btn",
  )
  .forEach((el) => {
    el.addEventListener("mouseenter", () => {
      ring.style.width = "55px";
      ring.style.height = "55px";
      ring.style.borderColor = "#ff6b6b";
      ring.style.backgroundColor = "rgba(220,20,60,0.1)";
    });
    el.addEventListener("mouseleave", () => {
      ring.style.width = "40px";
      ring.style.height = "40px";
      ring.style.borderColor = "#dc143c";
      ring.style.backgroundColor = "transparent";
    });
  });

// ========== FILTERS ==========
const filterBtns = document.querySelectorAll(".filter");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderProjects();
  });
});

// ========== DARK MODE ==========
const darkToggle = document.getElementById("darkModeToggle");
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
  if (darkToggle) darkToggle.textContent = "☀️ 陽";
}
if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    darkToggle.textContent = isDark ? "☀️ 陽" : "🌙 闇";
    localStorage.setItem("darkMode", isDark);
  });
}

// ========== SMOOTH SCROLL ==========
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const hash = this.getAttribute("href");
    if (hash && hash.startsWith("#")) {
      e.preventDefault();
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ========== BACK TO TOP ==========
const backBtn = document.getElementById("backToTop");
if (backBtn) {
  window.addEventListener("scroll", () => {
    backBtn.classList.toggle("show", window.scrollY > 300);
  });
  backBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ========== PDF EXPORT ==========
document.getElementById("exportPDF")?.addEventListener("click", () => {
  alert("📜 Samurai Resume would download here!");
});

// ========== INITIALIZE ==========
window.addEventListener("load", () => {
  renderProjects();
  animateSkillBars();
  updateVisitorCount();
  slides = document.querySelectorAll(".testimonial-card");
  buildDots();
  updateCarousel();
  attachWalkingListeners();

  console.log("⚔️ SAMURAI PORTFOLIO ACTIVATED ⚔️");
  console.log("🎵 3 YEAT SONGS: Nun id change, Bëttr 0ff, If We Being Rëal");
  console.log("👆 Click the YEAT button to play music!");
  console.log("👆 Click any tab - the samurai walks AND STAYS THERE!");

  speakMessage("⚔️ Samurai ready! 3 Yeat songs loaded! 🐍");
});

window.addEventListener("scroll", () => {
  const skillsSection = document.querySelector(".skills-section");
  if (
    skillsSection &&
    skillsSection.getBoundingClientRect().top < window.innerHeight - 100
  ) {
    animateSkillBars();
  }
});
