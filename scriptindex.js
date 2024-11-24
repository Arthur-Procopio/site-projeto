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
        // Verificar se o modo escuro está ativado ou não e salvar no localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Verificar o tema salvo no localStorage quando a página for carregada
    document.addEventListener('DOMContentLoaded', function() {
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }});



// Array com frases alternativas para alternar
const frasesPrincipal = [
    "Não tente quebrar nosso site, nós nem testamos ele, vai quebrar.",
    "Nosso código é limpo... Se você não olhar de perto.",
    "O Git não gosta de nós, e nós também não gostamos dele.",
    "Se o código quebrar, é culpa nossa. Se o código funcionar, é sorte."
];

// Função para trocar a frase aleatoriamente
function getRandomFrase(frases, fraseAtual) {
    let novaFrase;
    do {
        novaFrase = frases[Math.floor(Math.random() * frases.length)];
    } while (novaFrase === fraseAtual);
    return novaFrase;
}

// Função para alterar as frases ao passar o mouse
function alternarFrasesComHover(elemento, frases) {
    let fraseOriginal = elemento.textContent;

    elemento.addEventListener('mouseenter', () => {
        elemento.style.color = 'red';
        elemento.style.fontSize = '1.4rem';
        elemento.textContent = getRandomFrase(frases, elemento.textContent);
    });

    elemento.addEventListener('mouseleave', () => {
        elemento.textContent = fraseOriginal;
        elemento.style.color = '';  
        elemento.style.fontSize = '';  
    });
}

// Alterna entre frases ao passar o mouse sobre a frase principal
const elementoFrasePrincipal = document.getElementById('frase-principal');
if (elementoFrasePrincipal) {
    alternarFrasesComHover(elementoFrasePrincipal, frasesPrincipal);
}
