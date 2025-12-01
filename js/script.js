// script.js

// Referências
const body = document.body;
const themeToggleBtn = document.getElementById("themeToggle");
const yearSpan = document.getElementById("year");

// Atualiza ano no rodapé
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Lê tema salvo no localStorage
const savedTheme = localStorage.getItem("linktree-theme");

// Regra:
// - se savedTheme === "light" -> claro
// - se savedTheme === "dark" ou null -> dark (padrão)
if (savedTheme === "light") {
    body.classList.remove("dark-theme");
} else {
    body.classList.add("dark-theme");
}

// Atualiza ícone do botão de tema
function updateThemeIcon() {
    if (!themeToggleBtn) return;
    const icon = themeToggleBtn.querySelector("i");
    if (!icon) return;

    if (body.classList.contains("dark-theme")) {
        icon.classList.remove("ri-moon-line");
        icon.classList.add("ri-sun-line"); // ícone de sol no dark (pra indicar que dá pra ir pro claro)
    } else {
        icon.classList.remove("ri-sun-line");
        icon.classList.add("ri-moon-line");
    }
}

// Chama uma vez ao carregar
updateThemeIcon();

// Clique no botão de tema
if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-theme");

        const isDark = body.classList.contains("dark-theme");
        localStorage.setItem("linktree-theme", isDark ? "dark" : "light");

        updateThemeIcon();
    });
}
