// Modo escuro
const toggleDarkModeButton = document.getElementById("toggle-dark-mode");
toggleDarkModeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
        toggleDarkModeButton.classList.remove("light-mode");
        toggleDarkModeButton.classList.add("dark-mode");
        toggleDarkModeButton.innerHTML = '<span class="icon">☀️</span> Modo Claro'; 
    } else {
        toggleDarkModeButton.classList.remove("dark-mode");
        toggleDarkModeButton.classList.add("light-mode");
        toggleDarkModeButton.innerHTML = '<span class="icon">🌙</span> Modo Escuro'; 
    }

        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    

    document.addEventListener('DOMContentLoaded', function() {
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }});

// Efeito de mudança de cor ao passar o mouse nos cards
const cardsFavoritos = document.querySelectorAll('.card');

cardsFavoritos.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'background-color 0.3s ease';
        card.style.backgroundColor = '#f0f0f0';  // Cor de fundo mais clara
    });

    card.addEventListener('mouseleave', () => {
        card.style.transition = 'background-color 0.3s ease';
        card.style.backgroundColor = '';  // Volta à cor original
    });
});

// Animação de entrada ao rolar a página
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    observer.observe(card);
});

