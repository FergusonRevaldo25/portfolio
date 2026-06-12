emailjs.init("byBeW_d1HrZ36CZVa");
const EMAILJS_CONFIG = {
  SERVICE_ID: "service_fzpmxxm",
  TEMPLATE_ID: "template_byj0l2n",
};

const projectsData = [
  {
    id: 14,
    title: "GitHub Actions CI/CD Pipeline",
    category: "devops",
    icon: "fa-brands fa-github",
    image: "assets/images/github-actions.jpg",
    badges: ["GitHub Actions", "CI/CD", "Python", "Automation"],
    description:
      "Automated CI/CD pipeline with GitHub Actions. Runs Python unit tests automatically on every push.",
    demo: "https://github.com/FergusonRevaldo25/python-cicd-demo",
    repo: "https://github.com/FergusonRevaldo25/python-cicd-demo",
  },
  {
    id: 15,
    title: "Terraform Infrastructure as Code",
    category: "devops",
    icon: "fa-solid fa-gear",
    image: "assets/images/terraform.jpg",
    badges: ["Terraform", "Docker", "IaC", "Nginx"],
    description:
      "Infrastructure as Code using Terraform to provision Docker containers with Nginx web server.",
    demo: "#",
    repo: "https://github.com/FergusonRevaldo25/terraform-docker-demo",
  },
  {
    id: 16,
    title: "Kubernetes with Minikube",
    category: "devops",
    icon: "fa-solid fa-cubes",
    image: "assets/images/kubernetes.jpg",
    badges: ["Kubernetes", "Minikube", "Pods", "Scaling"],
    description:
      "Local Kubernetes cluster with Minikube featuring 5-replica Nginx deployment and self-healing pods.",
    demo: "#",
    repo: "https://github.com/FergusonRevaldo25/kubernetes-minikube-demo",
  },
  {
    id: 17,
    title: "Prometheus + Grafana Stack",
    category: "devops",
    icon: "fa-solid fa-chart-line",
    image: "assets/images/prometheus-grafana.jpg",
    badges: ["Prometheus", "Grafana", "Docker", "Monitoring"],
    description:
      "Complete monitoring stack with Prometheus metrics collection and Grafana dashboards.",
    demo: "#",
    repo: "https://github.com/FergusonRevaldo25/prometheus-grafana-stack",
  },
  {
    id: 10,
    title: "Automated Log Archiver",
    category: "devops",
    icon: "fa-solid fa-file-archive",
    image: "assets/images/log-archiver.jpg",
    badges: ["Bash", "Cron", "Linux", "Automation"],
    description:
      "Bash script that compresses logs with timestamps, archives them, and schedules daily backups via cron.",
    demo: "#",
    repo: "https://github.com/FergusonRevaldo25/nqf5-devops-portfolio",
  },
  {
    id: 11,
    title: "Nginx Static Portfolio",
    category: "devops",
    icon: "fa-solid fa-server",
    image: "assets/images/nginx.jpg",
    badges: ["Nginx", "Linux", "HTML/CSS"],
    description:
      "Manual Linux server provisioning with Nginx hosting a static website with security headers.",
    demo: "#",
    repo: "https://github.com/FergusonRevaldo25/nqf5-devops-portfolio",
  },
  {
    id: 12,
    title: "Containerized Python App",
    category: "devops",
    icon: "fa-brands fa-docker",
    image: "assets/images/docker.jpg",
    badges: ["Docker", "Python", "Flask"],
    description:
      "Multi-stage Docker containerization of a Python Flask app with 84% size reduction.",
    demo: "#",
    repo: "https://github.com/FergusonRevaldo25/nqf5-devops-portfolio",
  },
  {
    id: 1,
    title: "Glass Morphic Auth",
    category: "auth",
    icon: "fa-solid fa-shield-halved",
    image: "assets/images/glass.auth.jpg",
    badges: ["Authentication", "Security", "UI/UX"],
    description:
      "Modern authentication system with glass morphic design, behavioral CAPTCHA, and 2FA support.",
    demo: "https://fergusonrevaldo25.github.io/auth-system",
    repo: "https://github.com/FergusonRevaldo25/auth-system",
  },
  {
    id: 2,
    title: "Split-Screen Login",
    category: "auth",
    icon: "fa-solid fa-right-left",
    image: "assets/images/split.jpg",
    badges: ["Login", "Cloudflare", "Security"],
    description:
      "50/50 split-screen login design with Cloudflare Turnstile CAPTCHA integration.",
    demo: "https://fergusonrevaldo25.github.io/split-login",
    repo: "https://github.com/FergusonRevaldo25/split-login",
  },
  {
    id: 3,
    title: "Neo-Brutalist Gamified",
    category: "auth",
    icon: "fa-solid fa-gamepad",
    image: "assets/images/neo.jpg",
    badges: ["Gamification", "XP System", "Interactive"],
    description:
      "Gamified authentication with XP earning system and battle CAPTCHA mechanics.",
    demo: "https://fergusonrevaldo25.github.io/neo-brutalist-login",
    repo: "https://github.com/FergusonRevaldo25/neo-brutalist-login",
  },
  {
    id: 4,
    title: "Glass Dashboard",
    category: "dashboard",
    icon: "fa-solid fa-chart-pie",
    image: "assets/images/glassd.jpg",
    badges: ["Dashboard", "Analytics", "CRUD"],
    description:
      "Complete admin dashboard with user management, real-time analytics, and dark mode.",
    demo: "https://fergusonrevaldo25.github.io/Glass-Morphic-Authentication-Dashboard/",
    repo: "https://github.com/FergusonRevaldo25/Glass-Morphic-Authentication-Dashboard",
  },
  {
    id: 7,
    title: "Weather Dashboard",
    category: "dashboard",
    icon: "fa-solid fa-cloud-sun-rain",
    image: "assets/images/weather.jpg",
    badges: ["Weather", "API", "Live Data"],
    description:
      "Live weather monitoring dashboard with 3-day forecast and city search.",
    demo: "https://fergusonrevaldo25.github.io/weather-dashboard",
    repo: "https://github.com/FergusonRevaldo25/weather-dashboard",
  },
  {
    id: 8,
    title: "IT Pro Solutions",
    category: "dashboard",
    icon: "fa-solid fa-store",
    image: "assets/images/it.jpg",
    badges: ["E-commerce", "Real-time", "Payments"],
    description:
      "IT services marketplace with real-time chat, shopping cart, and Stripe payments.",
    demo: "https://fergusonrevaldo25.github.io/IT-Services-Dashboard/",
    repo: "https://github.com/FergusonRevaldo25/IT-Services-Dashboard",
  },
  {
    id: 5,
    title: "AI Real-Time Chat Bot",
    category: "ai",
    icon: "fa-solid fa-robot",
    image: "assets/images/Al.jpg",
    badges: ["AI", "Real-time", "Socket.io"],
    description:
      "Intelligent AI chat companion with real-time messaging and smart responses.",
    demo: "https://realtime-ai-chat-whil.onrender.com",
    repo: "https://github.com/FergusonRevaldo25/Real-Time-App",
  },
  {
    id: 9,
    title: "Calculator & Chat Assistant",
    category: "ai",
    icon: "fa-solid fa-calculator",
    image: "assets/images/cal.jpg",
    badges: ["Calculator", "NLP", "Assistant"],
    description:
      "Classic calculator with natural language chat assistant for math operations.",
    demo: "https://fergusonrevaldo25.github.io/classic-calculator-chat",
    repo: "https://github.com/FergusonRevaldo25/classic-calculator-chat",
  },
  {
    id: 18,
    title: "J.A.R.V.I.S. AI Assistant",
    category: "ai",
    icon: "fa-solid fa-microchip",
    image: "assets/images/jarvis.jpg",
    badges: ["AI", "Voice", "Python", "Next.js", "FastAPI", "Groq", "Whisper"],
    description:
      "Iron Man-inspired AI voice assistant with holographic UI. Voice commands, Spotify control, system automation, persistent memory, and real-time speech synthesis.",
    demo: "https://github.com/FergusonRevaldo25/jarvis-platform",
    repo: "https://github.com/FergusonRevaldo25/jarvis-platform",
  },
  {
    id: 6,
    title: "Lamborghini Showcase",
    category: "showcase",
    icon: "fa-solid fa-car",
    image: "assets/images/lam.jpg",
    badges: ["Gallery", "Filtering", "Interactive"],
    description:
      "Interactive car showcase with real-time filtering and detailed specifications.",
    demo: "https://fergusonrevaldo25.github.io/LABOGINIS-WEBSITE/",
    repo: "https://github.com/FergusonRevaldo25/LABOGINIS-WEBSITE",
  },
];

let currentFilter = "all";

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  const filtered =
    currentFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === currentFilter);
  grid.innerHTML = filtered
    .map(
      (p) => `
    <div class="project-card" data-category="${p.category}">
      <div class="project-image">
        <img src="${p.image}" alt="${p.title}" onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27400%27 height=%27250%27%3E%3Crect width=%27400%27 height=%27250%27 fill=%27%236366f1%27/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 text-anchor=%27middle%27 dy=%27.3em%27 fill=%27white%27 font-family=%27Arial%27 font-size=%2720%27%3E${encodeURIComponent(p.title)}%3C/text%3E%3C/svg%3E'">
        <div class="project-overlay"><div class="project-icon"><i class="${p.icon}"></i></div></div>
      </div>
      <div class="project-info">
        <h3>${p.title}</h3>
        <div class="project-badges">${p.badges.map((b) => `<span class="badge">${b}</span>`).join("")}</div>
        <p>${p.description}</p>
        <div class="project-links">
          ${p.demo !== "#" ? `<a href="${p.demo}" target="_blank">Live Demo →</a>` : '<span class="demo-soon">Local Demo</span>'}
          <a href="${p.repo}" target="_blank">Source Code</a>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

function initFilters() {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      renderProjects();
    });
  });
}

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name")?.value;
    const email = document.getElementById("email")?.value;
    const message = document.getElementById("message")?.value;
    if (!name || !email || !message) {
      showFormStatus("Please fill in all fields", "error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showFormStatus("Please enter a valid email address", "error");
      return;
    }
    showFormStatus("Sending message...", "info");
    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        { from_name: name, reply_email: email, message_html: message },
      );
      if (response.status === 200) {
        showFormStatus(
          `Thank you ${name}! Your message has been sent.`,
          "success",
        );
        contactForm.reset();
      } else throw new Error("Failed");
    } catch (error) {
      showFormStatus(
        "Failed to send. Email me at revaldo.ferguson01@gmail.com",
        "error",
      );
    }
  });
}
function showFormStatus(message, type) {
  if (!formStatus) return;
  formStatus.textContent = message;
  formStatus.className = `form-status ${type}`;
  formStatus.style.display = "block";
  setTimeout(() => {
    formStatus.style.display = "none";
  }, 5000);
}

const themeToggle = document.getElementById("themeToggle");
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    themeToggle.innerHTML = isDark
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

const backToTop = document.getElementById("backToTop");
if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 300);
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

window.addEventListener("load", () => {
  renderProjects();
  initFilters();
});
