// ========== EMAILJS CONFIGURATION ==========
emailjs.init("byBeW_d1HrZ36CZVa");

const EMAILJS_CONFIG = {
  SERVICE_ID: "service_fzpmxxm",
  TEMPLATE_ID: "template_byj0l2n",
};

// ========== PROJECTS DATA - 16 UNIQUE PROJECTS, NO DUPLICATES ==========
const projectsData = [
  // ===== DEVOPS PROJECTS (7 projects) =====
  {
    id: 14,
    title: "GitHub Actions CI/CD Pipeline",
    category: "devops",
    icon: "fa-brands fa-github-actions",
    image: "assets/images/github-actions.jpg",
    badges: ["GitHub Actions", "CI/CD", "Python", "Automation"],
    description:
      "Automated CI/CD pipeline with GitHub Actions. Runs Python unit tests automatically on every push. Features workflow automation, test reporting, and continuous integration.",
    demo: "https://github.com/FergusonRevaldo25/python-cicd-demo",
    repo: "https://github.com/FergusonRevaldo25/python-cicd-demo",
  },
  {
    id: 15,
    title: "Terraform Infrastructure as Code",
    category: "devops",
    icon: "fa-brands fa-terraform",
    image: "assets/images/terraform.jpg",
    badges: ["Terraform", "Docker", "IaC", "Nginx"],
    description:
      "Infrastructure as Code using Terraform to provision Docker containers. Deploys Nginx web server with declarative configuration and state management.",
    demo: "http://localhost:8080",
    repo: "https://github.com/FergusonRevaldo25/terraform-docker-demo",
  },
  {
    id: 16,
    title: "Kubernetes with Minikube",
    category: "devops",
    icon: "fa-brands fa-kubernetes",
    image: "assets/images/kubernetes.jpg",
    badges: ["Kubernetes", "Minikube", "Pods", "Scaling"],
    description:
      "Local Kubernetes cluster with Minikube. Features 5-replica Nginx deployment, self-healing pods, NodePort service, and container orchestration.",
    demo: "http://localhost:30080",
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
      "Complete monitoring stack with Prometheus metrics collection and Grafana dashboards for real-time visualization.",
    demo: "http://localhost:3000",
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
      "Bash script that automatically compresses logs with timestamps, archives them, and schedules daily backups via cron. Deletes logs older than 7 days.",
    demo: "#",
    repo: "https://github.com/FergusonRevaldo25/nqf5-devops-portfolio/tree/main/project1-log-archiver",
  },
  {
    id: 11,
    title: "Nginx Static Portfolio",
    category: "devops",
    icon: "fa-solid fa-server",
    image: "assets/images/nginx.jpg",
    badges: ["Nginx", "Linux", "HTML/CSS", "Reverse Proxy"],
    description:
      "Manual Linux server provisioning with Nginx hosting a static website. Configured security headers and reverse proxy routing.",
    demo: "http://localhost:8080",
    repo: "https://github.com/FergusonRevaldo25/nqf5-devops-portfolio/tree/main/project2-nginx-website",
  },
  {
    id: 12,
    title: "Containerized Python App",
    category: "devops",
    icon: "fa-brands fa-docker",
    image: "assets/images/docker.jpg",
    badges: ["Docker", "Python", "Flask", "Multi-stage"],
    description:
      "Multi-stage Docker containerization of a Python Flask app. 84% size reduction (1.2GB → 194MB) with non-root user and health checks.",
    demo: "http://localhost:5001",
    repo: "https://github.com/FergusonRevaldo25/nqf5-devops-portfolio/tree/main/project3-docker-app",
  },

  // ===== AUTH PROJECTS (3 projects) =====
  {
    id: 1,
    title: "Glass Morphic Auth",
    category: "auth",
    icon: "fa-solid fa-shield-halbed",
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
    icon: "fa-solid fa-split",
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

  // ===== DASHBOARD PROJECTS (3 projects) =====
  {
    id: 4,
    title: "Glass Dashboard",
    category: "dashboard",
    icon: "fa-solid fa-chalkboard-user",
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

  // ===== AI & CHAT PROJECTS (2 projects) =====
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

  // ===== SHOWCASE PROJECTS (1 project) =====
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

// ========== FILTER FUNCTIONALITY ==========
let currentFilter = "all";

function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid");
  if (!projectsGrid) return;

  const filteredProjects =
    currentFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === currentFilter);

  projectsGrid.innerHTML = filteredProjects
    .map(
      (project) => `
    <div class="project-card" data-category="${project.category}">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" 
          onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'250\' viewBox=\'0 0 400 250\'%3E%3Crect width=\'400\' height=\'250\' fill=\'%236366f1\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'.3em\' fill=\'white\' font-family=\'Arial\' font-size=\'20\'%3E${encodeURIComponent(project.title)}%3C/text%3E%3C/svg%3E'">
        <div class="project-overlay">
          <div class="project-icon"><i class="${project.icon}"></i></div>
        </div>
      </div>
      <div class="project-info">
        <h3>${project.title}</h3>
        <div class="project-badges">
          ${project.badges.map((badge) => `<span class="badge">${badge}</span>`).join("")}
        </div>
        <p>${project.description}</p>
        <div class="project-links">
          ${project.demo !== "#" ? `<a href="${project.demo}" target="_blank">Live Demo →</a>` : '<span class="demo-soon">Local Demo</span>'}
          <a href="${project.repo}" target="_blank">Source Code</a>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

function initFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      renderProjects();
    });
  });
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
      showFormStatus("❌ Please fill in all fields", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormStatus("❌ Please enter a valid email address", "error");
      return;
    }

    showFormStatus("📧 Sending message...", "info");

    const templateParams = {
      from_name: name,
      reply_email: email,
      message_html: message,
    };

    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
      );
      if (response.status === 200) {
        showFormStatus(
          `✅ Thank you ${name}! Your message has been sent. I'll get back to you soon.`,
          "success",
        );
        contactForm.reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      showFormStatus(
        "❌ Failed to send. Please email me directly at revaldo.ferguson01@gmail.com",
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

// ========== DARK MODE ==========
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
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

// ========== BACK TO TOP ==========
const backToTop = document.getElementById("backToTop");
if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 300);
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ========== INITIALIZE ==========
window.addEventListener("load", () => {
  renderProjects();
  initFilters();
  console.log("🚀 Portfolio loaded with 16 unique projects!");
  console.log("✅ DevOps: 7 | Auth: 3 | Dashboard: 3 | AI: 2 | Showcase: 1");
});
