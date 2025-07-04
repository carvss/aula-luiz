// Usuário e senha definidos em variáveis
const usuarioValido = "admin";
const senhaValida = "123456";

// Função de login
function login(event) {
    event.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === usuarioValido && pass === senhaValida) {
        localStorage.setItem('loggedIn', 'yes');
        window.location.href = "dashboard.html";
    }
}