import accessibleFootnotes from "./accessibleFootnotes.js";
import enableFloatingFootnotes from "./marginalia.js";

accessibleFootnotes();
enableFloatingFootnotes();

// ─── Keyboard shortcuts ───────────────────────────────────────────────────────

function initKeyboardShortcuts() {
    const navShortcuts = {
        e: '/blog/',
        j: '/notes/',
        i: '/publications/',
        y: '/research/',
        b: '/books/',
        '/': '/about/',
    };

    document.addEventListener('keydown', (e) => {
        const tag = document.activeElement?.tagName.toLowerCase();
        if (tag === 'input' || tag === 'textarea' || document.activeElement?.isContentEditable) return;

        if (e.metaKey || e.ctrlKey) {
            const path = navShortcuts[e.key.toLowerCase()];
            if (path) {
                e.preventDefault();
                window.location.href = path;
            }
        }
    });
}

initKeyboardShortcuts();

// ─── Photo gallery lightbox ────────────────────────────────────────────────────

function initLightbox() {
    document.querySelectorAll('.post-body img, .prose img').forEach(img => {
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

// ─── Email obfuscation ────────────────────────────────────────────────────────

document.querySelectorAll('.bs-email-link').forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
        window.location.href = 'mailto:' + el.dataset.name + '@' + el.dataset.domain;
    });
});
