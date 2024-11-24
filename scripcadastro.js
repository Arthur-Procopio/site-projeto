// Modo escuro
const toggleDarkModeButton = document.getElementById("toggle-dark-mode");
toggleDarkModeButton.addEventListener("click", () => {
    
    document.body.classList.toggle("dark-mode");

    
    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
        toggleDarkModeButton.classList.remove("light-mode");
        toggleDarkModeButton.classList.add("dark-mode");
        toggleDarkModeButton.innerHTML = '<span class="icon">☀️</span> Modo Claro'; // Sol
    } else {
        toggleDarkModeButton.classList.remove("dark-mode");
        toggleDarkModeButton.classList.add("light-mode");
        toggleDarkModeButton.innerHTML = '<span class="icon">🌙</span> Modo Escuro'; // Lua
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

// Mensagem de Sucesso
const form = document.getElementById('form-contato');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    form.style.display = 'none';

    mensagemSucesso.style.display = 'block';

    setTimeout(function() {
        mensagemSucesso.style.display = 'none';
        form.style.display = 'block';
        
        form.reset();
    }, 5000);
});
