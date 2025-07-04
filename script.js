const usuarioValido = "admin";
const senhaValida = "123456";

// Redireciona se já logado
if (localStorage.getItem('loggedIn') === 'yes') {
    window.location.href = "dashboard.html";
}

function login(event) {
    event.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error-message");

    if (user === usuarioValido && pass === senhaValida) {
        localStorage.setItem('loggedIn', 'yes');
        window.location.href = "dashboard.html";
    } else {
        error.textContent = "Usuário ou senha incorretos.";
    }
}

// (Opcional) Limpar erro ao digitar
document.getElementById("username").addEventListener("input", limparErro);
document.getElementById("password").addEventListener("input", limparErro);

function limparErro() {
    document.getElementById("error-message").textContent = "";
}
