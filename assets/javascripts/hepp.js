import accessibleFootnotes from "./accessibleFootnotes.js";
import enableFloatingFootnotes from "./marginalia.js";

accessibleFootnotes();
enableFloatingFootnotes();

// Menu toggle functionality
const menuToggle = document.getElementById('menuToggle');
const dropdown = document.getElementById('dropdown');
const overlay = document.getElementById('overlay');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

if (menuToggle) {
    // Menu toggle
    menuToggle.addEventListener('click', () => {
        dropdown.classList.toggle('active');
        overlay.classList.toggle('active');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    // Close menu when clicking overlay
    overlay.addEventListener('click', () => {
        dropdown.classList.remove('active');
        overlay.classList.remove('active');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });

    // Close menu when clicking a link
    const dropdownLinks = dropdown.querySelectorAll('a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            dropdown.classList.remove('active');
            overlay.classList.remove('active');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });
}

// Theme switcher
const themeToggle = document.getElementById('themeToggle');
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');

// Function to get system preference
function getSystemTheme() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

// Function to get current effective theme
function getCurrentTheme() {
    const userChoice = localStorage.getItem("user-color-scheme");
    if (userChoice) {
        return userChoice;
    }
    return getSystemTheme();
}

// Function to apply theme
function applyTheme(theme) {
    const userChoice = localStorage.getItem("user-color-scheme");

    // Only set the attribute if user has made an explicit choice
    if (userChoice) {
        document.documentElement.setAttribute("data-site-theme", userChoice);
    } else {
        // Remove attribute to let system preference apply via media query
        document.documentElement.removeAttribute("data-site-theme");
    }

    updateThemeIcons(theme || getCurrentTheme());
}

// Function to update theme icons
function updateThemeIcons(theme) {
    if (!moonIcon || !sunIcon) return;

    if (theme === "dark") {
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    } else {
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
    }
}

// Theme toggle button
if (themeToggle && moonIcon && sunIcon) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = getCurrentTheme();
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        localStorage.setItem("user-color-scheme", newTheme);
        applyTheme(newTheme);
    });
}

// Initialize theme on page load
if ("localStorage" in window) {
    applyTheme();

    // Listen for changes from other tabs
    window.addEventListener("storage", function (event) {
        if (event.key === "user-color-scheme") {
            applyTheme();
        }
    });

    // Listen for system theme changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function() {
        // Only update if user hasn't made an explicit choice
        if (!localStorage.getItem("user-color-scheme")) {
            applyTheme();
        }
    });
}

