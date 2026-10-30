
/* ==========================================
   HOUSSEMOS 2.0 — APPLICATIONS & WINDOW SYSTEM
   Data sourced from the official CV files.
========================================== */

/* ==========================================
   PROFILE DATA
========================================== */

const OS_PROFILE = {
    name: "Houssem Eddine Magra",
    role: "Master 2 Data Science & Intelligent Systems · Software Engineer",
    bio: "Master 2 Data Science & Intelligent Systems student and Software Engineering graduate with a proven track record of delivering production-ready software across AI, mobile and full-stack domains — 19 shipped projects, ranging from predictive-maintenance AI for wireless EV charging to a fully-featured conference SaaS platform.",
    university: "Université Constantine 2 — Abdelhamid Mehri",
    email: "houssemeddinemagra@gmail.com",
    universityEmail: "houssem.magra@univ-constantine2.dz",
    phone: "+213 541 529 890",
    phoneHref: "tel:+213541529890",
    githubUrl: "https://github.com/Houssemeddine-mag",
    linkedinUrl: "https://www.linkedin.com/in/houssem-eddine-magra-880241343",
    address: "Cité El Chourouk, 64 Log. N°26 — El Khroub, Constantine, Algeria",
    born: "20 June 2003"
};

const OS_LANGUAGES = [
    { name: "Arabic", level: "Native", pct: 100 },
    { name: "French", level: "Fluent", pct: 85 },
    { name: "English", level: "Fluent — B2 certified", pct: 90 }
];

/* ==========================================
   PROJECTS DATA (19 PROJECTS)
========================================== */

const OS_PROJECTS = [
    {
        n: "ChargeOps AI", ab: "CA", c1: "#0d9488", c2: "#2dd4bf", cats: ["ai"],
        s: "Python · PyTorch · FastAPI · Docker",
        d: "AI-powered diagnostic & prognostic platform for Wireless Power Transfer (WPT) EV charging infrastructure. A physics-based edge simulator streams telemetry (voltages, currents, coil temperatures, Q-factor) into a Transformer neural network that estimates Remaining Useful Life and detects real-time faults such as resonance frequency drift. Runs as a containerised web service with a live Chart.js dashboard, or as a native desktop app via PyWebView.",
        links: [["GitHub", "https://github.com/Houssemeddine-mag/ChargeOps-AI"]]
    },
    {
        n: "ChargeOps Sys", ab: "CS", c1: "#0891b2", c2: "#22d3ee", cats: ["ai"],
        s: "React · Three.js · Electron · Vite",
        d: "Real-time wireless EV charging diagnostic simulator. Models the complete 11-stage power-transfer chain (AC grid → Tx/Rx coils → battery), auto-detects 8 fault categories (FOD, coil misalignment, capacitor, inverter, thermal, component aging…), walks through step-by-step resolution procedures, and visualises magnetic field lines, power flow, live waveforms and alignment in immersive 3D — then exports a PDF diagnostic report. Runs in the browser or as an Electron desktop app.",
        links: [["GitHub — private, request access", "https://github.com/Houssemeddine-mag/ChargeOps-sys"]]
    },
    {
        n: "Sam Code", ab: "SC", c1: "#4f46e5", c2: "#818cf8", cats: ["web"],
        s: "Electron · React · Monaco Editor · Node.js",
        d: "Open-source cross-platform desktop code editor built on the same engine that powers VS Code: syntax highlighting for 100+ languages, integrated terminal (xterm.js + node-pty), an AI coding assistant powered by OpenAI, a plugin marketplace, Jupyter notebook support and CI/CD pipelines for automated Windows / macOS / Linux builds. Also ships as a CLI agent: pip install samcode-cli.",
        links: [["GitHub", "https://github.com/Houssemeddine-mag/Sam-Code"], ["Download", "https://samcode-26.web.app/#"]]
    },
    {
        n: "ItFits", ab: "IF", c1: "#7c3aed", c2: "#a78bfa", cats: ["mobile"],
        s: "Flutter · Dart · Riverpod · freezed",
        d: "AI interior-design app: scan a room with the camera through 6 guided shots, pick a design style, colour palette and preferences (full redesign, keep furniture, budget, luxury, natural light, cozy) and get AI-generated redesign panoramas — with floor-plan modelling (walls, doors, windows, dimensions) and a saved project history.",
        links: []
    },
    {
        n: "Handzy", ab: "HZ", c1: "#2563eb", c2: "#60a5fa", cats: ["mobile"],
        s: "Flutter · Dart · Kotlin · MediaPipe",
        d: "Hands-free Android device control via real-time hand-gesture recognition. Tracks 21 3D hand landmarks fully on-device and translates gestures (pinch to tap, fist to scroll) into native touch events through the Android Accessibility Service. Works completely offline — no network tracking — with a hybrid Flutter/Kotlin bridge and native C++ MediaPipe integration for low latency.",
        links: [["GitHub", "https://github.com/Houssemeddine-mag/Handzy"]]
    },
    {
        n: "DAC — Image Classifier", ab: "DA", c1: "#0284c7", c2: "#7dd3fc", cats: ["ai"],
        s: "Java · Python · CSS",
        d: "Full-stack image classification application: a Java frontend wired to a Python classifier backend, structured with a dedicated test-image dataset — a demonstration of an end-to-end ML pipeline integrated with a production-style interface.",
        links: [["GitHub", "https://github.com/Houssemeddine-mag/DAC"]],
        sup: "Dr. Boudjlel Nada"
    },
    {
        n: "ScourgifyData", ab: "SD", c1: "#d97706", c2: "#fbbf24", cats: ["ai"],
        s: "Python · Jupyter · NLP · ML",
        d: "Sentiment analysis on tourism platform reviews (Yelp dataset) covering the full data-science pipeline: EDA, cleaning, feature engineering, ML modelling and evaluation across structured notebooks — includes LaTeX report generation and visualisations. Collaborative project with team-based dataset responsibilities.",
        links: [["GitHub", "https://github.com/Houssemeddine-mag/ScourgifyData"]],
        sup: "Dr. Ghammaz Wafa"
    },
    {
        n: "Rif Connect 2.0", ab: "RC", c1: "#1d4ed8", c2: "#7aa7f8", cats: ["mobile"],
        s: "Flutter · React.js · Firebase · Dart",
        d: "Full-stack conference management system built for the RIF 2025 International Conference on Women in Computer Science Research, hosted at Constantine 2: a Flutter mobile app (user & admin interfaces) plus a React web admin panel, both backed by Firebase Firestore, Authentication and Push Notifications. Features a real-time conference schedule, a 5-star presentation rating system, notification broadcasting and a user analytics dashboard.",
        links: [["GitHub", "https://github.com/Houssemeddine-mag/rif2.0"]],
        sup: "Prof. Benchikha Magra Fouzia"
    },
    {
        n: "Al-Amira", ab: "AM", c1: "#db2777", c2: "#f9a8d4", cats: ["web"],
        s: "React.js · Firebase · CSS",
        d: "Showcase website for a real Algerian traditional pastry shop — a 3-page React app (Home, Products, Contact) deployed on Firebase web hosting, demonstrating front-end development and cloud deployment for a live local business.",
        links: [["Live site", "https://al-amira-bbb72.web.app/"]]
    },
    {
        n: "NaviJam", ab: "NJ", c1: "#06b6d4", c2: "#67e8f9", cats: ["mobile"],
        s: "Flutter · Dart · TomTom API · Firebase",
        d: "Cross-platform traffic-awareness app acting as a 15 km real-time radar around the user's location and destination. Integrates the TomTom Traffic Incidents API to detect and visually classify congestion severity (moderate, severe, closed) as live polyline overlays on an OpenStreetMap canvas — with dual-point scanning, alternative route suggestions and smart API caching.",
        links: [["GitHub", "https://github.com/Houssemeddine-mag/NaviJam"]]
    },
    {
        n: "DineFlow", ab: "DF", c1: "#059669", c2: "#34d399", cats: ["web"],
        s: "React · JavaScript · SCSS · Vite",
        d: "Multi-role restaurant management dashboard: Director, Chef and HR (GRH) interfaces with protected routes, authentication context and role-based page access. Covers menu management, restaurant listings, employee forms and a chef-specific cockpit — all styled with modular SCSS.",
        links: [["GitHub", "https://github.com/Houssemeddine-mag/atelier"]]
    },
    {
        n: "MusicalMe", ab: "MM", c1: "#f59e0b", c2: "#fcd34d", cats: ["ai"],
        s: "Python · MediaPipe · OpenCV · Pygame",
        d: "Interactive hand-gesture music system — currently evolving into an educational game for children aged 4 to 8. Uses a standard webcam and MediaPipe to track 21 hand landmarks in real time, mapping pinch combinations to musical notes (DO–SI scale, both hands), with real-time audio synthesis across 4 instrument timbres, pitch bending via hand elevation, chord support and a fully gesture-navigated menu.",
        links: [["GitHub", "https://github.com/Houssemeddine-mag/MusicalMe"]]
    },
    {
        n: "Online Store REST API", ab: "OS", c1: "#4338ca", c2: "#8b93f8", cats: ["backend"],
        s: "Django REST · Python · PostgreSQL",
        d: "Backend API for an e-commerce system managing products, customers and orders — with real business logic: 19% VAT calculation, loyalty-points accrual and a full order status lifecycle (CREATED → PAID).",
        links: [["GitHub", "https://github.com/Houssemeddine-mag/employee"]],
        sup: "Dr. Lezaar Fouzi"
    },
    {
        n: "QR Code Generator", ab: "QR", c1: "#16a34a", c2: "#4ade80", cats: ["mobile"],
        s: "Flutter · Dart · Firebase Storage",
        d: "Cross-platform Flutter app that generates QR codes from any input — URLs, images, videos, PDFs and arbitrary files. Features real-time generation, save-to-gallery and share functionality in a Material Design 3 UI with dark mode, including Android permission scoping across API levels and optional offloading of large files to Firebase Storage.",
        links: []
    },
    {
        n: "Nectar AI", ab: "NA", c1: "#e45a96", c2: "#ff8ac0", cats: ["ai"],
        s: "React · Django · DeepSeek API · Python",
        d: "Full-stack AI chat application: a Django REST backend acts as a secure proxy to the DeepSeek language model — API credentials stay server-side, CORS is handled, and clean health-check and messaging endpoints are exposed. Features a modern chat interface with dark/light mode, typing indicators and message timestamps.",
        links: [],
        sup: "Prof. Benmerzoug Djamel"
    },
    {
        n: "Weather Alert App", ab: "WA", c1: "#0d9b8f", c2: "#4fd1b5", cats: ["backend"],
        s: "React · Django · IFTTT · Webhooks",
        d: "Real-time weather notification system: the backend receives webhook POST requests from automation platforms (IFTTT, n8n) and stores incoming alerts, while the React dashboard auto-refreshes every 10 seconds with weather-condition icons and an alert-history grid.",
        links: [],
        sup: "Prof. Benmerzoug Djamel"
    },
    {
        n: "gRPC Remote Procedure Calls", ab: "GR", c1: "#6c727c", c2: "#98a0ab", cats: ["backend"],
        s: "Python · gRPC · Protocol Buffers",
        d: "Practical implementation of gRPC covering unary and server-streaming RPC patterns: a Protocol Buffers-defined GreetingService with auto-generated client/server stubs, channel management, stub patterns and stateful service tracking across a ThreadPoolExecutor server.",
        links: [],
        sup: "Prof. Benmerzoug Djamel"
    },
    {
        n: "Apache Kafka Streaming", ab: "KF", c1: "#8b5cf6", c2: "#c4b5fd", cats: ["backend"],
        s: "Python · Apache Kafka · Docker",
        d: "End-to-end Kafka producer/consumer setup containerised with Docker Compose (Kafka + Zookeeper): text and JSON message production, consumer group management, partition-aware consumption, offset management, message serialisation and group rebalancing — plus a topic-manager utility.",
        links: [["GitHub", "https://github.com/Houssemeddine-mag"]],
        sup: "Prof. Benmerzoug Djamel"
    },
    {
        n: "Simple Online Store Management", ab: "MC", c1: "#312e81", c2: "#6366f1", cats: ["backend"],
        s: "FastAPI · Consul · NGINX · Docker",
        d: "Microservices architecture with three FastAPI business services (user, product, order) behind an NGINX API gateway. Consul handles the service registry and discovery: services self-register on startup and the order service dynamically resolves peer addresses through the Consul catalog. Fully orchestrated with Docker Compose.",
        links: [],
        sup: "Prof. Benmerzoug Djamel"
    }
];

const PROJECT_FILTERS = [
    { id: "all", label: "All" },
    { id: "ai", label: "AI & Data" },
    { id: "mobile", label: "Mobile" },
    { id: "web", label: "Web & Desktop" },
    { id: "backend", label: "Backend & Systems" }
];

/* ==========================================
   SKILLS DATA
========================================== */

const OS_SKILLS = [
    {
        title: "Programming Languages", style: "",
        items: ["Python", "Java", "Dart", "Kotlin", "JavaScript", "SQL"]
    },
    {
        title: "Frameworks & Libraries", style: "framework",
        items: ["PyTorch", "FastAPI", "Django REST", "Flutter", "React.js", "Electron", "MediaPipe", "OpenCV", "Chart.js", "Tailwind CSS", "Three.js", "React Three Fiber", "Zustand", "Riverpod"]
    },
    {
        title: "Tools & Platforms", style: "tool",
        items: ["Docker", "Firebase", "Supabase", "Clerk", "PostgreSQL", "SQLite", "Git / GitHub", "GitHub Actions", "Render", "Vite", "Jupyter", "SCSS", "VS Code", "Apache Kafka", "gRPC", "Consul", "NGINX", "jsPDF"]
    },
    {
        title: "Domains", style: "domain",
        items: ["Machine Learning", "Computer Vision", "NLP", "IoT / Edge AI", "REST APIs", "Mobile Dev", "Web Dev"]
    }
];

/* ==========================================
   EXPERIENCE DATA
========================================== */

const OS_EXPERIENCE = [
    {
        title: "Web Developer & Problem Solver",
        org: "Ooredoo Algérie — Radio Planning Team",
        date: "Constantine · 2026",
        icon: "icon-code",
        c1: "#3b66f5", c2: "#6b8bff",
        text: "After the radio engineering internship, continued working with the radio planning team — building web tooling and untangling operational problems for the people who plan the network.",
        bullets: [
            "Developing internal web solutions for the radio planning workflow.",
            "Translating messy operational problems into practical software.",
            "Working alongside RAN engineers, transmission and MPLS/IP teams."
        ]
    },
    {
        title: "Radio Engineering Intern",
        org: "Ooredoo Algérie",
        date: "Constantine · 2026",
        icon: "icon-wifi",
        c1: "#dc2626", c2: "#f87171",
        text: "A deep dive into mobile networks — from 2G to 5G — inside the radio engineering team in Constantine. From theory to real cells, real antennas and real KPIs.",
        bullets: [
            "Mobile network architecture: RAN (Radio Access Network), NSS, and the roles of BSC, BTS, NodeB and eNodeB.",
            "Site planning (greenfield & rooftop), sectorization, handover optimisation and KPI improvement.",
            "Frequency bands (GSM900, GSM1800, U2100, LTE, 5G n78) and multiple-access techniques (FDMA, TDMA, CDMA, OFDMA) with FDD/TDD duplexing.",
            "Site lifecycle and radio parameter configuration (BCCH, BSIC, MIMO).",
            "Collaboration with operational, transmission and MPLS/IP teams; routing fundamentals and microwave link technologies.",
            "Real-time network monitoring: service continuity and rapid incident response."
        ]
    }
];

/* ==========================================
   EL MOULTAQA (STARTUP)
========================================== */

const OS_STARTUP = {
    name: "El Moultaqa",
    arabic: "الملتقى — “the gathering”",
    tagline: "The all-in-one conference platform",
    pitch: "El Moultaqa lets anyone launch a professional conference with its own branded mobile app, live program, streaming and attendee engagement — no code, no vendors, no months of development. One platform for organizers, one app for every attendee.",
    what: "A multi-tenant SaaS platform for conferences. An organizer signs up, fills a short wizard — name, dates, program, keynote speakers, sponsors, branding — and instantly gets a working admin panel, an attendee web app, and their very own Android app branded with the conference logo and colours, built automatically.",
    organizers: [
        { n: "Launch in minutes", d: "Conference-builder wizard plus a ready-made admin panel for events, program, sessions, keynote speakers, sponsors and settings. No development team required." },
        { n: "One-click mobile app", d: "A CI/CD pipeline builds, signs and packages a native Android APK using the conference's own name, logo and theme colour — press build, download the installable app." },
        { n: "Live & engaged", d: "HLS live streams per session with an in-app questions panel, attendee session ratings, notifications and direct messaging." },
        { n: "Data & growth", d: "Attendee lists, session stats and CSV/JSON export — plus a public discovery page on the platform so new audiences can find the conference." }
    ],
    attendees: [
        { n: "One app, every conference", d: "Log in once and your schedule, speakers and streams follow you from one conference to the next — no separate apps per event." },
        { n: "Stay in the loop", d: "Full program by day, live streaming with a questions panel, speaker bios, notifications and direct messaging — everything in one place." },
        { n: "Make your voice heard", d: "Rate sessions and presenters after each talk — feedback that organizers use to improve the next edition." },
        { n: "Zero friction", d: "Guest mode to browse, watch and explore without an account, plus a personal profile that remembers your preferences." }
    ],
    why: "Conferences are where communities, research and ideas come together — yet most organizers can't afford custom apps, and attendees juggle a different tool for every event. El Moultaqa turns a week of preparation into a one-hour setup: organizers save months of development, and attendees get one familiar, polished experience for every gathering they join.",
    status: "Building — a production-readiness pass applied ~68 fixes; all 4 web apps (Landing, Webapp, Admin, SuperAdmin) build clean and the Flutter app passes analyze with 0 errors and 0 warnings.",
    stack: ["Flutter", "React 18/19", "Supabase", "Clerk", "PostgreSQL", "GitHub Actions", "HLS"]
};

/* ==========================================
   EDUCATION DATA
========================================== */

const OS_EDUCATION = [
    {
        degree: "Master 2 — Data Science & Intelligent Systems",
        badge: "IN PROGRESS", state: "going",
        school: "Université Constantine 2 — Abdelhamid Mehri",
        date: "In progress"
    },
    {
        degree: "Master 1 — Data Science",
        badge: "COMPLETE ✓", state: "done",
        school: "Université Constantine 2 — Abdelhamid Mehri",
        date: "Completed"
    },
    {
        degree: "Licence — Software Engineering (Génie Logiciel)",
        badge: "COMPLETE ✓", state: "done",
        school: "Université Constantine 2 — Abdelhamid Mehri",
        date: "Completed"
    }
];

/* ==========================================
   CERTIFICATIONS DATA
========================================== */

const OS_CERTIFICATIONS = [
    {
        title: "Python Certification",
        issuer: "Kaggle",
        icon: "icon-code", c1: "#2f6fe8", c2: "#5a8bff",
        desc: "Certified Python programming skills on Kaggle."
    },
    {
        title: "English Certification — B2",
        issuer: "ULC School, Constantine",
        icon: "icon-globe", c1: "#7c3aed", c2: "#a78bfa",
        desc: "English language proficiency certification."
    },
    {
        title: "Certificate of Appreciation",
        issuer: "Mozilla Club",
        icon: "icon-user", c1: "#c2410c", c2: "#ff8a5b",
        desc: "For teaching Databases Fundamentals to university students."
    },
    {
        title: "Canva Teacher Essentials",
        issuer: "Canva",
        icon: "icon-graduation", c1: "#d97706", c2: "#fbbf24",
        desc: "Course-completion certificate from the Canva Teacher Essentials program."
    },
    {
        title: "Certificate of Completion & Appreciation",
        issuer: "RIF Conference — Women in CS Research",
        icon: "icon-medal", c1: "#e45a96", c2: "#ff8ac0",
        desc: "For participating in creating the RIF Connect conference app.",
        link: ["www.univ-constantine2.dz/rif/25/", "https://www.univ-constantine2.dz/rif/25/"]
    },
    {
        title: "Certificate of Internship",
        issuer: "Ooredoo Algérie",
        icon: "icon-wifi", c1: "#dc2626", c2: "#f87171",
        desc: "For successfully completing the mobile-networks engineering internship."
    }
];


/* ==========================================
   APP RENDERERS
========================================== */

function renderAbout() {
    const langs = OS_LANGUAGES.map(lang => `
        <div class="lang-item">
            <div class="lang-meta"><span>${lang.name}</span><span>${lang.level}</span></div>
            <div class="lang-track"><div class="lang-fill" style="width:${lang.pct}%"></div></div>
        </div>
    `).join("");

    return `
        <div class="window-hero">
            <div class="hero-avatar">H</div>
            <div>
                <h2>${OS_PROFILE.name}</h2>
                <div class="window-role">${OS_PROFILE.role}</div>
                <div class="hero-badges">
                    <span class="hero-badge">${OS_PROFILE.university.split(" — ")[0]}</span>
                    <span class="hero-badge">El Khroub, Constantine · Algeria</span>
                    <span class="hero-badge">Born 20 June 2003</span>
                </div>
            </div>
        </div>

        <div class="stat-row">
            <div class="stat-chip"><b>19</b><span>Projects</span></div>
            <div class="stat-chip"><b>6</b><span>Certificates</span></div>
            <div class="stat-chip"><b>3</b><span>Languages</span></div>
            <div class="stat-chip"><b>1</b><span>Startup</span></div>
        </div>

        <div class="window-section">
            <p class="window-lead">${OS_PROFILE.bio}</p>
        </div>

        <div class="window-section">
            <h3 class="block-title">System Properties</h3>
            <table class="prop-table">
                <tr><td>User</td><td>${OS_PROFILE.name}</td></tr>
                <tr><td>Address</td><td>${OS_PROFILE.address}</td></tr>
                <tr><td>University</td><td>${OS_PROFILE.university}</td></tr>
                <tr><td>Core stack</td><td>Python · Java · Dart · Kotlin · JavaScript</td></tr>
                <tr><td>Experience</td><td>Ooredoo Algérie — Radio Engineering Intern, then Radio Planning Team web developer</td></tr>
                <tr><td>Status</td><td>Open to internships and collaborations</td></tr>
            </table>
        </div>

        <div class="window-section">
            <h3 class="block-title">Spoken Languages</h3>
            ${langs}
        </div>

        <div class="window-section">
            <h3 class="block-title">Quick Links</h3>
            <div class="chip-row">
                <a class="chip" href="mailto:${OS_PROFILE.email}"><svg><use href="#icon-mail"></use></svg>Email</a>
                <a class="chip" href="mailto:${OS_PROFILE.universityEmail}"><svg><use href="#icon-mail"></use></svg>University email</a>
                <a class="chip" href="${OS_PROFILE.githubUrl}" target="_blank" rel="noopener noreferrer"><svg><use href="#icon-github"></use></svg>GitHub</a>
                <a class="chip" href="${OS_PROFILE.linkedinUrl}" target="_blank" rel="noopener noreferrer"><svg><use href="#icon-linkedin"></use></svg>LinkedIn</a>
                <a class="chip" href="${OS_PROFILE.phoneHref}"><svg><use href="#icon-phone"></use></svg>${OS_PROFILE.phone}</a>
            </div>
        </div>
    `;
}

function renderProjects(win) {
    const grid = win.querySelector(".proj-grid");
    const note = win.querySelector(".window-footer-note");

    let filter = "all";
    let query = "";

    function render() {
        const q = query.toLowerCase();
        const visible = OS_PROJECTS.filter(p =>
            (filter === "all" || p.cats.includes(filter)) &&
            (!q || `${p.n} ${p.s} ${p.d}`.toLowerCase().includes(q))
        );

        grid.innerHTML = visible.map(p => {
            const links = p.links.map(l =>
                `<a href="${l[1]}" target="_blank" rel="noopener noreferrer">↗ ${l[0]}</a>`
            ).join("");

            return `
                <div class="proj-card">
                    <div class="proj-top">
                        <span class="proj-tile" style="--c1:${p.c1};--c2:${p.c2}">${p.ab}</span>
                        <div class="proj-name">${p.n}</div>
                    </div>
                    <div class="proj-stack">${p.s}</div>
                    <p class="proj-desc">${p.d}</p>
                    ${p.sup ? `
                    <div class="sup-badge">
                        <svg><use href="#icon-graduation"></use></svg>
                        Supervised by ${p.sup}
                    </div>` : ""}
                    ${links ? `<div class="proj-links">${links}</div>` : ""}
                </div>
            `;
        }).join("");

        note.textContent = `// ${visible.length} of ${OS_PROJECTS.length} projects — all handmade ▮`;
    }

    win.querySelectorAll(".filter-chip").forEach(chip => {
        chip.addEventListener("click", () => {
            filter = chip.dataset.filter;
            win.querySelectorAll(".filter-chip").forEach(c =>
                c.classList.toggle("active", c === chip)
            );
            render();
        });
    });

    win.querySelector(".proj-search input")
        .addEventListener("input", (event) => {
            query = event.target.value;
            render();
        });

    render();
}

function renderProjectsShell() {
    const chips = PROJECT_FILTERS.map(f => {
        const count = f.id === "all"
            ? OS_PROJECTS.length
            : OS_PROJECTS.filter(p => p.cats.includes(f.id)).length;

        return `<button class="filter-chip ${f.id === "all" ? "active" : ""}" data-filter="${f.id}">${f.label} · ${count}</button>`;
    }).join("");

    return `
        <div class="filter-bar">
            <div class="proj-search">
                <svg><use href="#icon-search"></use></svg>
                <input type="text" placeholder="Search projects, stacks, supervisors...">
            </div>
            ${chips}
        </div>
        <div class="proj-grid"></div>
        <div class="window-footer-note"></div>
    `;
}

function renderSkills() {
    const groups = OS_SKILLS.map(group => `
        <div class="window-section" style="margin-top:16px;">
            <h3 class="block-title">${group.title}</h3>
            <div class="pill-row">
                ${group.items.map(item => `<span class="skill-pill ${group.style}">${item}</span>`).join("")}
            </div>
        </div>
    `).join("");

    return `
        <div class="window-section" style="margin-top:0;">
            <h3 class="block-title">Installed Packages</h3>
            <p class="window-text">Everything the system runs on — gathered from real projects, not tutorials.</p>
        </div>
        ${groups}
        <div class="window-footer-note">// updated continuously — new packages install every week ▮</div>
    `;
}

function renderExperience() {
    const entries = OS_EXPERIENCE.map(e => `
        <div class="timeline-item">
            <div class="proj-top">
                <span class="proj-tile" style="--c1:${e.c1};--c2:${e.c2}">
                    <svg><use href="#${e.icon}"></use></svg>
                </span>
                <div>
                    <div class="entry-title">${e.title}</div>
                    <div class="entry-org">${e.org}</div>
                    <div class="entry-date">${e.date}</div>
                </div>
            </div>
            <p class="window-text" style="margin-top:9px;">${e.text}</p>
            <ul class="bullets">
                ${e.bullets.map(b => `<li>${b}</li>`).join("")}
            </ul>
        </div>
    `).join("");

    return `
        <div class="window-section" style="margin-top:0;">
            <h3 class="block-title">Work Experience</h3>
            <div class="timeline">
                ${entries}
            </div>
        </div>

        <div class="window-section">
            <h3 class="block-title">Mentors</h3>
            <div class="chip-row">
                <span class="skill-pill tool">Billel Boukarboua</span>
                <span class="skill-pill tool">Mohamed Alkassab</span>
                <span class="skill-pill tool">Badreddine Bouraiou</span>
            </div>
        </div>

        <div class="window-section">
            <p class="window-text">From theory to practice: a full immersion into the world of mobile networks — from 2G to 5G — and the Software that keeps a national operator running behind the scenes.</p>
        </div>
    `;
}

function renderStartup() {
    const tileColors = [
        ["#2563eb", "#60a5fa"], ["#0891b2", "#22d3ee"], ["#7c5aed", "#a78bfa"], ["#0d9488", "#2dd4bf"]
    ];

    function featureCards(list) {
        return list.map((f, i) => `
            <div class="proj-card">
                <div class="proj-top">
                    <span class="proj-tile" style="--c1:${tileColors[i][0]};--c2:${tileColors[i][1]}">${i + 1}</span>
                    <div class="proj-name">${f.n}</div>
                </div>
                <p class="proj-desc">${f.d}</p>
            </div>
        `).join("");
    }

    return `
        <div class="window-hero">
            <div class="hero-avatar">M</div>
            <div>
                <h2>${OS_STARTUP.name} <span class="state-badge going">${OS_STARTUP.arabic}</span></h2>
                <div class="window-role">${OS_STARTUP.tagline}</div>
            </div>
        </div>

        <div class="window-section">
            <p class="window-lead">${OS_STARTUP.pitch}</p>
        </div>

        <div class="window-section">
            <h3 class="block-title">What it is</h3>
            <p class="window-text">${OS_STARTUP.what}</p>
        </div>

        <div class="window-section">
            <h3 class="block-title">For organizers</h3>
            <div class="proj-grid">${featureCards(OS_STARTUP.organizers)}</div>
        </div>

        <div class="window-section">
            <h3 class="block-title">For attendees</h3>
            <div class="proj-grid">${featureCards(OS_STARTUP.attendees)}</div>
        </div>

        <div class="window-section">
            <h3 class="block-title">Why it matters</h3>
            <p class="window-text">${OS_STARTUP.why}</p>
        </div>

        <div class="window-section">
            <h3 class="block-title">Status</h3>
            <p class="window-text">${OS_STARTUP.status}</p>
        </div>

        <div class="window-section">
            <h3 class="block-title">Stack</h3>
            <div class="pill-row">
                ${OS_STARTUP.stack.map(tech => `<span class="skill-pill framework">${tech}</span>`).join("")}
            </div>
        </div>
    `;
}

function renderEducation() {
    const items = OS_EDUCATION.map(e => `
        <div class="timeline-item ${e.state === "going" ? "current" : ""}">
            <div class="entry-title">${e.degree} <span class="state-badge ${e.state}">${e.badge}</span></div>
            <div class="entry-org">${e.school}</div>
            <div class="entry-date">${e.date}</div>
        </div>
    `).join("");

    return `
        <div class="window-section" style="margin-top:0;">
            <h3 class="block-title">Academic Record — XP History</h3>
            <div class="timeline">${items}</div>
        </div>
        <div class="window-footer-note">// grinding XP — thesis mode activated ▮</div>
    `;
}

function renderCertifications() {
    const rows = OS_CERTIFICATIONS.map(cert => `
        <div class="cert-row">
            <span class="cert-icon" style="--c1:${cert.c1};--c2:${cert.c2}">
                <svg><use href="#${cert.icon}"></use></svg>
            </span>
            <div class="cert-body">
                <div class="cert-title">${cert.title}</div>
                <div class="cert-issuer">${cert.issuer}</div>
                <div class="cert-desc">${cert.desc}</div>
                ${cert.link ? `
                <div class="cert-link">
                    <a href="${cert.link[1]}" target="_blank" rel="noopener noreferrer">↗ ${cert.link[0]}</a>
                </div>` : ""}
            </div>
        </div>
    `).join("");

    return `
        <div class="window-section" style="margin-top:0;">
            <h3 class="block-title">Verified Achievements</h3>
            ${rows}
        </div>
        <div class="window-footer-note">// 6 achievements unlocked — collecting more ▮</div>
    `;
}

function renderContact() {
    return `
        <div class="window-section" style="margin-top:0;">
            <p class="window-lead">Send a message, request a collaboration, or open a ticket for one of my projects. I usually reply within a day — unless I'm in the middle of a debugging session.</p>
        </div>

        <div class="window-section">
            <h3 class="block-title">Open a Ticket</h3>
            <div class="contact-grid">
                <a class="contact-btn" style="color:#3f83c7;" href="mailto:${OS_PROFILE.email}">
                    <svg><use href="#icon-mail"></use></svg>
                    <div><div class="c-label">Personal</div><div class="c-value">${OS_PROFILE.email}</div></div>
                </a>
                <a class="contact-btn" style="color:#3f83c7;" href="mailto:${OS_PROFILE.universityEmail}">
                    <svg><use href="#icon-mail"></use></svg>
                    <div><div class="c-label">University</div><div class="c-value">${OS_PROFILE.universityEmail}</div></div>
                </a>
                <a class="contact-btn" style="color:#0d9488;" href="${OS_PROFILE.phoneHref}">
                    <svg><use href="#icon-phone"></use></svg>
                    <div><div class="c-label">Phone</div><div class="c-value">${OS_PROFILE.phone}</div></div>
                </a>
                <a class="contact-btn" style="color:#465d79;" href="${OS_PROFILE.githubUrl}" target="_blank" rel="noopener noreferrer">
                    <svg><use href="#icon-github"></use></svg>
                    <div><div class="c-label">GitHub</div><div class="c-value">Houssemeddine-mag</div></div>
                </a>
                <a class="contact-btn" style="color:#0284c7;" href="${OS_PROFILE.linkedinUrl}" target="_blank" rel="noopener noreferrer">
                    <svg><use href="#icon-linkedin"></use></svg>
                    <div><div class="c-label">LinkedIn</div><div class="c-value">houssem-eddine-magra</div></div>
                </a>
            </div>
        </div>

        <div class="contact-status">status: online — accepting side quests ▮</div>
    `;
}


/* ==========================================
   TERMINAL APPLICATION
========================================== */

function mountTerminal(win) {
    const output = win.querySelector(".terminal-output");
    const input = win.querySelector(".terminal-input");
    const surface = win.querySelector(".terminal-surface");
    const typed = win.querySelector(".terminal-typed");

    const history = [];
    let historyIndex = -1;

    function print(text, cls) {
        const line = document.createElement("div");
        line.className = cls ? ` ${cls}` : "";
        line.textContent = text;
        output.appendChild(line);
        output.scrollTop = output.scrollHeight;
    }

    /* escaping so pasted text can never inject markup */
    function escapeHtml(text) {
        return text.replace(/[&<>"']/g, ch => (
            { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]
        ));
    }

    /* echoed commands reuse the same prompt colours as the live prompt */
    function printEcho(cmdline) {
        const line = document.createElement("div");
        line.innerHTML =
            '<span class="pp-user">houssem@houssemos</span>' +
            '<span class="pp-sign">:</span>' +
            '<span class="pp-path">~</span>' +
            '<span class="pp-sign">$</span> ' +
            escapeHtml(cmdline);
        output.appendChild(line);
        output.scrollTop = output.scrollHeight;
    }

    function syncTyping() {
        typed.textContent = input.value;
    }

    input.addEventListener("input", syncTyping);

    function runCommand(raw) {
        const cmdline = raw.trim();
        printEcho(cmdline);

        const parts = cmdline.split(/\s+/);
        const cmd = parts[0].toLowerCase();
        const arg = parts.slice(1).join(" ");

        switch (cmd) {

            case "": break;

            case "help":
                print(
                    "core    : whoami  about  neofetch  skills\n" +
                    "info    : projects  experience  education  certifications  languages  startup  contact\n" +
                    "deep    : samcode  chargeops  itfits\n" +
                    "actions : open <app>   github   linkedin   email\n" +
                    "fun     : ls  date  uptime  sudo  coffee  hack\n" +
                    "system  : clear  exit",
                    "t-dim"
                );
                break;

            case "whoami":
                print("houssem.eddine.magra — Software Engineer / Master 2 Data Science & Intelligent Systems @ Université Constantine 2");
                break;

            case "about":
                print("Master 2 Data Science & Intelligent Systems student and Software Engineering graduate, delivering production-ready software across AI, mobile and full-stack domains — 19 shipped projects, one startup in the works.");
                break;

            case "neofetch":
                print("        ▄▄▄▄▄          houssem@houssemos");
                print("      ▄█ █ H ██ ▄      ————————");
                print("     █   ▀████▀  █     os     : HoussemOS 2.0 (web)");
                print("     ▀▀▄▄  ▀▀ ▄▄▀▀      role   : Software Engineer");
                print("        ▀▀▀▀▀▀          edu    : M2 Data Science & Intelligent Systems");
                print("                        shell  : cvsh 1.0");
                print("                        born   : 20 June 2003");
                print("                        city   : Constantine, Algeria", "t-info");
                break;

            case "skills":
                print("Languages  : Python, Java, Dart, Kotlin, JavaScript, SQL");
                print("Frameworks : PyTorch, FastAPI, Django REST, Flutter, React.js, Electron, MediaPipe, OpenCV, Three.js");
                print("Tools      : Docker, Firebase, Supabase, Clerk, PostgreSQL, Kafka, gRPC, Consul, NGINX, Git", "t-info");
                break;

            case "projects":
                print(`${OS_PROJECTS.length} projects installed. Favourites:`);
                OS_PROJECTS.slice(0, 8).forEach(p => print(`  · ${p.n}`));
                print("  …open projects.exe for the full quest log.", "t-dim");
                break;

            case "experience":
                print("Web Developer & Problem Solver @ Ooredoo Algérie — Radio Planning Team (2026)");
                print("Radio Engineering Intern      @ Ooredoo Algérie — mobile networks, from 2G to 5G (2026)");
                break;

            case "education":
                print("Master 2 — Data Science & Intelligent Systems (in progress)");
                print("Master 1 — Data Science (completed)");
                print("Licence — Software Engineering / Génie Logiciel (completed)");
                break;

            case "certifications":
            case "certs":
                print("Python Certification — Kaggle");
                print("English B2 — ULC School, Constantine");
                print("Certificate of Appreciation — Mozilla Club (teaching Databases)");
                print("Canva Teacher Essentials — Canva");
                print("Certificate of Completion — RIF Conference (RIF Connect app)");
                print("Certificate of Internship — Ooredoo Algérie");
                break;

            case "languages":
                print("Arabic (native) · French (fluent) · English (fluent — B2 certified)");
                break;

            case "startup":
            case "elmoultaqa":
                print("El Moultaqa — my startup, the all-in-one conference platform.");
                print("Launch a branded conference in minutes: program, HLS live streams,");
                print("ratings, notifications + a one-click branded Android app via CI/CD.");
                print("One platform for organizers, one app for every attendee. Open startup.exe for details.", "t-dim");
                break;

            case "contact":
                print(`email    : ${OS_PROFILE.email}`);
                print(`phone    : ${OS_PROFILE.phone}`);
                print("github   : Houssemeddine-mag");
                print("linkedin : houssem-eddine-magra");
                break;

            case "email":
                print(`Personal : ${OS_PROFILE.email}`);
                print(`University: ${OS_PROFILE.universityEmail}`);
                break;

            case "samcode":
                print("Sam Code — desktop editor & CLI agent.");
                print("Download editor: samcode-26.web.app — reach out for access.");
                print("CLI agent: pip install samcode-cli");
                break;

            case "chargeops":
                print("ChargeOps AI — predictive maintenance for wireless EV charging.");
                print("ChargeOps Sys — 3D diagnostic simulator (repo is private — request access).");
                break;

            case "itfits":
                print("ItFits — AI interior design app.");
                print("Scan your room → pick a style, colours & preferences → get AI-generated redesigns.");
                break;

            case "open": {
                const target = arg.toLowerCase();
                const key = Object.keys(APPS).find(name => name === target);
                if (key) {
                    openApp(key);
                    print(`Launching ${key}…`, "t-ok");
                } else {
                    print(`no window named "${arg}" — try: ${Object.keys(APPS).join(", ")}`, "t-err");
                }
                break;
            }

            case "ls":
                print("README.txt  Projects.exe  Skills.ini  Startup.app  Certifications.exe");
                print("Experience.log  Education.log  Terminal  Contact.app", "t-dim");
                break;

            case "date":
                print(new Date().toString());
                break;

            case "uptime":
                print("uptime: since 20 June 2003 — production instance, zero crashes reported.");
                break;

            case "github":
                print("Opening browser…", "t-ok");
                setTimeout(() => window.open(OS_PROFILE.githubUrl, "_blank"), 300);
                break;

            case "linkedin":
                print("Opening browser…", "t-ok");
                setTimeout(() => window.open(OS_PROFILE.linkedinUrl, "_blank"), 300);
                break;

            case "clear":
                output.innerHTML = "";
                break;

            case "sudo":
                print("houssem is not in the sudoers file. This incident will be reported.", "t-err");
                break;

            case "coffee":
                print("Brewing… /home/houssem/coffee.brew — 100% arabica. Done.", "t-ok");
                break;

            case "hack":
                print("Nice try. My two-factor security is coffee + VS Code.", "t-warn");
                break;

            case "exit":
                print("Nope, you can't quit that easily. Type 'help'.", "t-warn");
                break;

            case "hello":
            case "hi":
            case "hey":
                print("Hello, visitor! Type 'help' to explore my CV.");
                break;

            case "rm":
                print("rm: refusing to delete /home/houssem/projects — still my favourite.", "t-err");
                break;

            default:
                print(`command not found: ${cmd} — try 'help'.`, "t-err");
        }
    }

    print("HoussemOS 2.0 — cvsh 1.0 (houssem terminal)", "t-ok");
    print("© 2026 Houssem Eddine Magra — all systems operational", "t-dim");
    print("Type 'help' for available commands, 'neofetch' for a fancy intro.");
    print("");

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const value = input.value;
            if (value.trim()) {
                history.push(value);
            }
            historyIndex = history.length;
            runCommand(value);
            input.value = "";
            syncTyping();
        } else if (event.key === "ArrowUp") {
            if (historyIndex > 0) {
                historyIndex--;
                input.value = history[historyIndex];
                syncTyping();
            }
            event.preventDefault();
        } else if (event.key === "ArrowDown") {
            if (historyIndex < history.length - 1) {
                historyIndex++;
                input.value = history[historyIndex];
                syncTyping();
            } else {
                historyIndex = history.length;
                input.value = "";
                syncTyping();
            }
            event.preventDefault();
        }
    });

    surface.addEventListener("pointerup", () => input.focus());

    setTimeout(() => input.focus(), 100);
}


/* ==========================================
   APP REGISTRY
========================================== */

const APPS = {
    about: {
        title: "About Me", icon: "icon-user", width: 560, height: 540,
        accent: ["#4e8ed3", "#76b5ec"],
        html: renderAbout
    },
    projects: {
        title: "Projects", icon: "icon-folder", width: 780, height: 560,
        accent: ["#4f63e0", "#8b93f8"],
        html: renderProjectsShell, mount: renderProjects
    },
    skills: {
        title: "Technical Skills", icon: "icon-code", width: 560, height: 480,
        accent: ["#7c5aed", "#a78bfa"],
        html: renderSkills
    },
    experience: {
        title: "Experience", icon: "icon-briefcase", width: 620, height: 520,
        accent: ["#0e9ac8", "#38c3e6"],
        html: renderExperience
    },
    startup: {
        title: "El Moultaqa — Startup", icon: "icon-rocket", width: 720, height: 560,
        accent: ["#6d48d8", "#9b7bf0"],
        html: renderStartup
    },
    education: {
        title: "Education", icon: "icon-graduation", width: 470, height: 400,
        accent: ["#0f9d8c", "#4fd1b5"],
        html: renderEducation
    },
    certifications: {
        title: "Certifications", icon: "icon-medal", width: 560, height: 480,
        accent: ["#d97706", "#fbbf24"],
        html: renderCertifications
    },
    terminal: {
        title: "houssem@houssemos: ~", icon: "icon-terminal", width: 640, height: 460,
        accent: ["#334d7a", "#5c7899"],
        html: () => `
            <div class="terminal-surface">
                <div class="terminal-output"></div>
                <div class="terminal-input-row">
                    <span class="terminal-prompt"><span class="pp-user">houssem@houssemos</span><span class="pp-sign">:</span><span class="pp-path">~</span><span class="pp-sign">$</span></span>
                    <span class="terminal-input-wrap">
                        <span class="terminal-typed"></span>
                        <span class="terminal-cursor"></span>
                        <input class="terminal-input" type="text" spellcheck="false" autocapitalize="off" autocomplete="off">
                    </span>
                </div>
            </div>
        `,
        mount: mountTerminal
    },
    contact: {
        title: "Contact", icon: "icon-mail", width: 540, height: 440,
        accent: ["#2f9bd4", "#5cc3ec"],
        html: renderContact
    }
};


/* ==========================================
   WINDOW MANAGER
========================================== */

const running = new Map();
let zIndex = 300;
let cascadeIndex = 0;

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function placeWindow(win, app) {
    const width = clamp(app.width, 320, window.innerWidth - 24);
    const height = clamp(app.height, 240, window.innerHeight - 110);

    let x;
    let y;

    if (window.innerWidth <= 700) {
        x = Math.max(0, Math.round((window.innerWidth - width) / 2));
        y = 64;
    } else {
        const offset = cascadeIndex % 6;
        x = 135 + offset * 36;
        y = 76 + offset * 30;
        x = Math.min(x, window.innerWidth - width - 16);
        y = Math.min(y, window.innerHeight - height - 90);
    }

    win.style.left = `${Math.max(0, Math.round(x))}px`;
    win.style.top = `${Math.max(0, Math.round(y))}px`;
    win.style.width = `${Math.round(width)}px`;
    win.style.height = `${Math.round(height)}px`;

    cascadeIndex++;
}

function bringToFront(id) {
    if (zIndex >= 940) {
        zIndex = 300;
        document.querySelectorAll(".app-window").forEach(w => {
            w.style.zIndex = ++zIndex;
        });
    }

    running.get(id).win.style.zIndex = ++zIndex;

    running.forEach((state, key) => {
        state.focused = key === id;
    });

    syncTaskbar();
}

function syncTaskbar() {
    running.forEach((state, id) => {
        const open = state.win.classList.contains("open")
            && !state.win.classList.contains("minimized");

        state.btn.classList.toggle("running", open);
        state.btn.classList.toggle("active", open && state.focused);

        const pinned = document.querySelector(`.taskbar-center .pinned-app[data-app="${id}"]`);

        if (pinned) {
            pinned.classList.toggle("running", open);
            pinned.classList.toggle("active", open && state.focused);
        }
    });
}

function buildTaskbarButton(id, app) {
    const button = document.createElement("button");

    button.className = "taskbar-app-btn";
    button.dataset.app = id;
    button.title = app.title;
    button.innerHTML = `<svg><use href="#${app.icon}"></use></svg>`;

    document.getElementById("taskbar-apps").appendChild(button);

    return button;
}

function openApp(id) {
    const app = APPS[id];

    if (!app) {
        return;
    }

    if (running.has(id)) {
        const state = running.get(id);

        if (state.win.classList.contains("minimized")) {
            state.win.classList.remove("minimized");
            state.minimized = false;
        }

        bringToFront(id);
        return;
    }

    const win = document.createElement("div");
    win.className = "app-window open";
    win.id = `win-${id}`;

    win.style.setProperty("--w-accent", app.accent[0]);
    win.style.setProperty("--w-accent-2", app.accent[1]);

    win.innerHTML = `
        <div class="window-titlebar">
            <span class="window-icon"><svg><use href="#${app.icon}"></use></svg></span>
            <span class="window-title">${app.title}</span>
            <span class="window-controls">
                <button class="window-btn" data-action="minimize" title="Minimize">
                    <svg viewBox="0 0 24 24"><path d="M5 12h14"/></svg>
                </button>
                <button class="window-btn window-close" data-action="close" title="Close">
                    <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>
                </button>
            </span>
        </div>
        <div class="window-content">${app.html()}</div>
    `;

    document.getElementById("window-container").appendChild(win);
    placeWindow(win, app);

    running.set(id, {
        win,
        btn: buildTaskbarButton(id, app),
        minimized: false,
        focused: false
    });

    win.addEventListener("pointerdown", () => bringToFront(id));

    win.querySelector(".window-btn[data-action='minimize']")
        .addEventListener("click", () => minimizeApp(id));

    win.querySelector(".window-btn[data-action='close']")
        .addEventListener("click", () => closeApp(id));

    makeDraggable(win, id);

    if (app.mount) {
        app.mount(win);
    }

    bringToFront(id);
}

function minimizeApp(id) {
    const state = running.get(id);

    if (!state) {
        return;
    }

    state.win.classList.add("minimized");
    state.minimized = true;
    state.focused = false;

    syncTaskbar();
}

function closeApp(id) {
    const state = running.get(id);

    if (!state) {
        return;
    }

    state.btn.remove();
    state.win.remove();
    running.delete(id);

    syncTaskbar();
}

function toggleApp(id) {
    const state = running.get(id);

    if (!state) {
        openApp(id);
        return;
    }

    if (state.win.classList.contains("minimized") || !state.focused) {
        if (state.win.classList.contains("minimized")) {
            state.win.classList.remove("minimized");
            state.minimized = false;
        }
        bringToFront(id);
    } else {
        minimizeApp(id);
    }
}

function makeDraggable(win, id) {
    const titlebar = win.querySelector(".window-titlebar");

    titlebar.addEventListener("pointerdown", (event) => {
        if (event.target.closest(".window-btn") || event.pointerType !== "mouse") {
            return;
        }

        const rect = win.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        const move = (moveEvent) => {
            win.style.left = `${clamp(moveEvent.clientX - offsetX, -rect.width + 70, window.innerWidth - 70)}px`;
            win.style.top = `${clamp(moveEvent.clientY - offsetY, 0, window.innerHeight - 84)}px`;
        };

        const release = () => {
            window.removeEventListener("pointermove", move);
            window.removeEventListener("pointerup", release);
        };

        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", release);
    });
}


/* ==========================================
   NOTIFICATIONS
========================================== */

function pushNotification(icon, title, text) {
    const content = document.getElementById("notification-content");
    const empty = content.querySelector(".empty-notifications");

    if (empty) {
        empty.remove();
    }

    const item = document.createElement("div");
    item.className = "notification-item";
    item.innerHTML = `
        <svg><use href="#${icon}"></use></svg>
        <div>
            <strong>${title}</strong>
            <span>${text}</span>
            <small>Just now</small>
        </div>
    `;

    content.prepend(item);

    document.getElementById("notification-button").classList.add("has-unread");
}

function initializeNotifications() {
    pushNotification(
        "icon-medal",
        "Certificates verified",
        "6 achievements — Kaggle, ULC, Mozilla Club, Canva, RIF & Ooredoo."
    );

    pushNotification(
        "icon-folder",
        "Projects indexed",
        "All 19 projects loaded into the quest log."
    );

    pushNotification(
        "icon-rocket",
        "Welcome to HoussemOS 2.0",
        "Click any desktop icon to open an app — try the Terminal."
    );

    document.getElementById("notification-button")
        .addEventListener("click", () => {
            document.getElementById("notification-button")
                .classList.remove("has-unread");
        });
}


/* ==========================================
   KONAMI EASTER EGG
========================================== */

function initializeKonami() {
    const SEQUENCE = [
        "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
        "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"
    ];

    const COLORS = ["#4d8dcc", "#7cc2ee", "#34d399", "#8b5cf6", "#0ea5e9", "#fbbf24", "#db2777"];

    let progress = 0;

    document.addEventListener("keydown", (event) => {
        const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;

        progress = key === SEQUENCE[progress] ? progress + 1 : (key === SEQUENCE[0] ? 1 : 0);

        if (progress === SEQUENCE.length) {
            progress = 0;
            launchConfetti();
            pushNotification(
                "icon-medal",
                "Achievement unlocked",
                "Konami code accepted — you found the easter egg."
            );
        }
    });

    function launchConfetti() {
        let host = document.getElementById("confetti-host");

        if (!host) {
            host = document.createElement("div");
            host.id = "confetti-host";
            document.body.appendChild(host);
        }

        for (let i = 0; i < 130; i++) {
            const piece = document.createElement("div");

            piece.className = "confetti-piece";
            piece.style.left = `${Math.random() * 100}vw`;
            piece.style.background = COLORS[i % COLORS.length];
            piece.style.animationDuration = `${2.2 + Math.random() * 2.4}s`;
            piece.style.animationDelay = `${Math.random() * 0.5}s`;
            piece.style.transform = `rotate(${Math.random() * 360}deg)`;

            host.appendChild(piece);
        }

        setTimeout(() => host.innerHTML = "", 5200);
    }
}


/* ==========================================
   INITIALIZE APPLICATIONS
========================================== */

(function initializeApplications() {
    document.addEventListener("click", (event) => {
        const trigger = event.target.closest("[data-app]");

        if (trigger) {
            toggleApp(trigger.dataset.app);
        }
    });

    initializeNotifications();
    initializeKonami();

    console.log("HoussemOS 2.0 — applications initialized. (psst: try the Konami code)");
})();
