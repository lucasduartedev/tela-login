
document.getElementById('loginForm').addEventListener('submit', function(e) {
    
    // Impede o envio padrão do formulário
    e.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Simulação de autenticação
    if (username === 'usuario' && password === 'senha') {
        alert('Login bem-sucedido :)');
        // Redireciona para uma página após a autenticação confirmada!
        // window.location.href = 'dashboard.html';
    } else {
        alert('Usuário ou senha inválidos :(');
    }

    // Resetar campos
    document.getElementById('password').value = ''

});
