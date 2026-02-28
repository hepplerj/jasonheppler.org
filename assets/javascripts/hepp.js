import accessibleFootnotes from "./accessibleFootnotes.js";
import enableFloatingFootnotes from "./marginalia.js";

accessibleFootnotes();
enableFloatingFootnotes();

// ─── Settings panel ───────────────────────────────────────────────────────────

function initPanel() {
    const panel = document.getElementById('settings-panel');
    const toggle = document.getElementById('panelToggle');
    const close = document.getElementById('panelClose');
    const overlay = document.getElementById('overlay');

    if (!panel || !toggle || !close || !overlay) return;

    function openPanel() {
        panel.classList.add('open');
        panel.setAttribute('aria-hidden', 'false');
        toggle.setAttribute('aria-expanded', 'true');
        overlay.classList.add('active');
        close.focus();
    }

    function closePanel() {
        panel.classList.remove('open');
        panel.setAttribute('aria-hidden', 'true');
        toggle.setAttribute('aria-expanded', 'false');
        overlay.classList.remove('active');
        toggle.focus();
    }

    toggle.addEventListener('click', () =>
        panel.classList.contains('open') ? closePanel() : openPanel()
    );
    close.addEventListener('click', closePanel);
    overlay.addEventListener('click', closePanel);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && panel.classList.contains('open')) closePanel();
    });
}

initPanel();

// ─── Font size ────────────────────────────────────────────────────────────────

const FONT_SIZES = [22, 25, 28];
const DEFAULT_FONT_SIZE_INDEX = 0; // 22px small

function applyFontSize(idx) {
    const clamped = Math.max(0, Math.min(FONT_SIZES.length - 1, idx));
    const size = FONT_SIZES[clamped];
    document.documentElement.style.setProperty('--reader-font-size', size + 'px');
    localStorage.setItem('reader-font-size-index', clamped);
    document.querySelectorAll('.font-size-opt').forEach((btn, i) => {
        btn.classList.toggle('active', i === clamped);
    });
    return clamped;
}

function initFontSize() {
    const stored = localStorage.getItem('reader-font-size-index');
    const idx = stored !== null ? parseInt(stored, 10) : DEFAULT_FONT_SIZE_INDEX;
    applyFontSize(idx);

    document.querySelectorAll('.font-size-opt').forEach((btn, i) => {
        btn.addEventListener('click', () => applyFontSize(i));
    });
}

initFontSize();

// ─── Theme ────────────────────────────────────────────────────────────────────

const themeToggle = document.getElementById('themeToggle');

function getSystemTheme() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

function getCurrentTheme() {
    const userChoice = localStorage.getItem("user-color-scheme");
    if (userChoice) {
        return userChoice;
    }
    return getSystemTheme();
}

function applyTheme(theme) {
    const effectiveTheme = theme || getCurrentTheme();
    document.documentElement.setAttribute("data-site-theme", effectiveTheme);
    updateThemeIcons(effectiveTheme);
}

function updateThemeIcons(theme) {
    if (!themeToggle) return;
    themeToggle.setAttribute('aria-checked', theme === 'dark' ? 'true' : 'false');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = getCurrentTheme();
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        localStorage.setItem("user-color-scheme", newTheme);
        applyTheme(newTheme);
    });
}

// ─── Keyboard shortcuts ───────────────────────────────────────────────────────

function initKeyboardShortcuts() {
    const navShortcuts = {
        e: '/blog/',         // Essays
        j: '/notes/',        // Notes
        i: '/publications/', // Publications
        y: '/research/',     // Digital History
        b: '/books/',        // Bookshelf
        '/': '/about/',      // About  (⌘/ — bare / opens panel, different code path)
        k: '/search/',       // Search
    };

    document.addEventListener('keydown', (e) => {
        // Don't fire when the user is typing
        const tag = document.activeElement?.tagName.toLowerCase();
        if (tag === 'input' || tag === 'textarea' || document.activeElement?.isContentEditable) return;

        // ⌘/Ctrl + letter → navigate
        if (e.metaKey || e.ctrlKey) {
            const path = navShortcuts[e.key.toLowerCase()];
            if (path) {
                e.preventDefault();
                window.location.href = path;
            }
            return;
        }

        // / → open nav panel
        if (e.key === '/') {
            e.preventDefault();
            document.getElementById('panelToggle')?.click();
        }
    });
}

initKeyboardShortcuts();

// ─── Photo gallery lightbox ────────────────────────────────────────────────────

function initLightbox() {
    document.querySelectorAll('.post-body img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            const box = document.createElement('div');
            box.className = 'photo-lightbox';
            const full = document.createElement('img');
            full.src = img.dataset.microblogLightbox || img.src;
            full.alt = img.alt;
            box.appendChild(full);
            box.addEventListener('click', () => box.remove());
            document.addEventListener('keydown', function onKey(e) {
                if (e.key === 'Escape') { box.remove(); document.removeEventListener('keydown', onKey); }
            });
            document.body.appendChild(box);
        });
    });
}

initLightbox();

// ─── Theme ────────────────────────────────────────────────────────────────────

if ("localStorage" in window) {
    applyTheme();

    window.addEventListener("storage", function (event) {
        if (event.key === "user-color-scheme") {
            applyTheme();
        }
    });

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function() {
        if (!localStorage.getItem("user-color-scheme")) {
            applyTheme();
        }
    });
}
