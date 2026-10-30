
/* ==========================================
   HOUSSEMOS 2.0 — MAIN SYSTEM
========================================== */

document.addEventListener("DOMContentLoaded", () => {
    initializeOS();
});

function initializeOS() {
    initializeClock();
    initializeStartMenu();
    initializeAppSearch();
    initializeSystemPanels();
    initializeQuickSettings();
    initializeCalendar();
    initializeWallpaper();

    console.log("HoussemOS 2.0 initialized.");
}


/* ==========================================
   SYSTEM CLOCK
========================================== */

function initializeClock() {
    const clock = document.getElementById("clock");
    const date = document.getElementById("date");
    const calendarClock = document.getElementById("calendar-clock");
    const calendarDate = document.getElementById("calendar-full-date");

    function updateClock() {
        const now = new Date();

        const time = now.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit"
        });

        clock.textContent = time;
        date.textContent = now.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });

        calendarClock.textContent = time;

        calendarDate.textContent = now.toLocaleDateString("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    }

    updateClock();
    setInterval(updateClock, 1000);
}


/* ==========================================
   START MENU
========================================== */

function initializeStartMenu() {
    const button = document.getElementById("start-button");
    const menu = document.getElementById("start-menu");

    button.addEventListener("click", (event) => {
        event.stopPropagation();

        closeSystemPanels();

        menu.classList.toggle("hidden");
    });

    menu.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    document.addEventListener("click", () => {
        menu.classList.add("hidden");
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            menu.classList.add("hidden");
            closeSystemPanels();
        }
    });
}


/* ==========================================
   APPLICATION SEARCH
========================================== */

function initializeAppSearch() {
    const input = document.getElementById("app-search");

    const buttons = document.querySelectorAll(
        ".start-apps button"
    );

    input.addEventListener("input", () => {
        const value = input.value.toLowerCase();

        buttons.forEach((button) => {
            const name = button.textContent.toLowerCase();

            button.style.display = name.includes(value)
                ? "flex"
                : "none";
        });
    });
}


/* ==========================================
   SYSTEM PANELS
========================================== */

function initializeSystemPanels() {
    const panels = {
        quick: document.getElementById("quick-settings"),
        calendar: document.getElementById("calendar-panel"),
        notification: document.getElementById("notification-panel")
    };

    const buttons = {
        quick: document.getElementById("quick-settings-button"),
        calendar: document.getElementById("calendar-button"),
        notification: document.getElementById("notification-button")
    };

    function togglePanel(name) {
        const target = panels[name];
        const wasOpen = !target.classList.contains("hidden");

        closeSystemPanels();

        if (!wasOpen) {
            target.classList.remove("hidden");
        }
    }

    buttons.quick.addEventListener("click", () => {
        togglePanel("quick");
    });

    buttons.calendar.addEventListener("click", () => {
        togglePanel("calendar");
    });

    buttons.notification.addEventListener("click", () => {
        togglePanel("notification");
    });

    Object.values(panels).forEach((panel) => {
        panel.addEventListener("click", (event) => {
            event.stopPropagation();
        });
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest("#taskbar")) {
            closeSystemPanels();
        }
    });

    document.getElementById("clear-notifications")
        .addEventListener("click", () => {
            document.getElementById("notification-content").innerHTML = `
                <div class="empty-notifications">
                    <svg><use href="#icon-bell"></use></svg>
                    <strong>You're all caught up</strong>
                    <span>No new notifications</span>
                </div>
            `;
        });
}

function closeSystemPanels() {
    document.querySelectorAll(".system-panel").forEach((panel) => {
        panel.classList.add("hidden");
    });
}


/* ==========================================
   QUICK SETTINGS
========================================== */

function initializeQuickSettings() {
    const wifi = createToggle(
        "wifi-toggle",
        "wifi-status"
    );

    const volume = createToggle(
        "volume-toggle",
        "volume-status"
    );

    const theme = document.getElementById("theme-toggle");

    theme.addEventListener("click", () => {
        document.body.classList.toggle("soft-theme");

        const active = theme.classList.toggle("active");

        document.getElementById("theme-status").textContent =
            active ? "Frost" : "Soft";
    });

    const fullscreen = document.getElementById("fullscreen-toggle");

    fullscreen.addEventListener("click", async () => {
        try {
            if (!document.fullscreenElement) {
                await document.documentElement.requestFullscreen();
            } else {
                await document.exitFullscreen();
            }
        } catch (error) {
            console.warn("Fullscreen is unavailable.", error);
        }
    });
}

function createToggle(buttonId, statusId) {
    const button = document.getElementById(buttonId);
    const status = document.getElementById(statusId);

    button.addEventListener("click", () => {
        const active = button.classList.toggle("active");

        status.textContent = active ? "On" : "Off";
    });

    return button;
}


/* ==========================================
   CALENDAR
========================================== */

function initializeCalendar() {
    const container = document.getElementById("calendar-content");

    function renderCalendar() {
        const now = new Date();

        const year = now.getFullYear();
        const month = now.getMonth();

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const offset = (firstDay + 6) % 7;

        const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

        let html = weekdays.map(day =>
            `<div class="calendar-weekday">${day}</div>`
        ).join("");

        for (let i = 0; i < offset; i++) {
            html += "<div></div>";
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const today = day === now.getDate();

            html += `
                <div class="calendar-day ${today ? "today" : ""}">
                    ${day}
                </div>
            `;
        }

        container.innerHTML = html;
    }

    renderCalendar();
}


/* ==========================================
   SHOW DESKTOP
========================================== */

document.getElementById("show-desktop")
    .addEventListener("click", () => {
        document.querySelectorAll(".app-window").forEach((window) => {
            window.classList.add("minimized");
        });

        document.getElementById("start-menu").classList.add("hidden");

        closeSystemPanels();
    });


/* ==========================================
   ANIMATED WALLPAPER
========================================== */

function initializeWallpaper() {
    const canvas = document.getElementById("wallpaper-canvas");
    const context = canvas.getContext("2d");

    const desktop = document.getElementById("desktop");

    const reduceMotion =
        typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let animationFrame;

    const mouse = {
        x: -1000,
        y: -1000
    };

    const particles = [];

    const particleCount = Math.min(
        85,
        Math.floor(window.innerWidth / 14)
    );

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;

            this.size = Math.random() * 2 + 0.7;

            this.speedX = (Math.random() - 0.5) * 0.35;
            this.speedY = (Math.random() - 0.5) * 0.35;

            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > width) {
                this.speedX *= -1;
            }

            if (this.y < 0 || this.y > height) {
                this.speedY *= -1;
            }

            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;

            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 110 && distance > 0) {
                this.x += (dx / distance) * 0.45;
                this.y += (dy / distance) * 0.45;
            }
        }

        draw() {
            context.beginPath();

            context.arc(
                this.x,
                this.y,
                this.size,
                0,
                Math.PI * 2
            );

            context.fillStyle =
                `rgba(73, 133, 190, ${this.opacity})`;

            context.fill();
        }
    }

    function resizeCanvas() {
        const rect = desktop.getBoundingClientRect();

        width = rect.width;
        height = rect.height;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        canvas.width = width * dpr;
        canvas.height = height * dpr;

        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        context.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticles() {
        particles.length = 0;

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const a = particles[i];
                const b = particles[j];

                const dx = a.x - b.x;
                const dy = a.y - b.y;

                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 115) {
                    const opacity = (1 - distance / 115) * 0.19;

                    context.beginPath();

                    context.moveTo(a.x, a.y);
                    context.lineTo(b.x, b.y);

                    context.strokeStyle =
                        `rgba(71, 126, 180, ${opacity})`;

                    context.lineWidth = 0.7;

                    context.stroke();
                }
            }
        }
    }

    function animate() {
        context.clearRect(0, 0, width, height);

        particles.forEach((particle) => {
            particle.update();
            particle.draw();
        });

        drawConnections();

        animationFrame = requestAnimationFrame(animate);
    }

    desktop.addEventListener("pointermove", (event) => {
        const rect = desktop.getBoundingClientRect();

        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
    });

    desktop.addEventListener("pointerleave", () => {
        mouse.x = -1000;
        mouse.y = -1000;
    });

    resizeCanvas();
    createParticles();

    if (reduceMotion) {
        particles.forEach(particle => particle.draw());
        drawConnections();
        return;
    }

    animate();

    window.addEventListener("resize", () => {
        cancelAnimationFrame(animationFrame);
        resizeCanvas();
        createParticles();
        animate();
    });

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            cancelAnimationFrame(animationFrame);
        } else {
            animate();
        }
    });
}
