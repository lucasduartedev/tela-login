
// Foco no input usuário
document.getElementById('usuario').focus()

// Lógica - Efetuar login
document.getElementById('form_login').addEventListener('submit', function(event) {

    const usuario = document.getElementById('usuario')
    const senha = document.getElementById('senha')
    const msg_error = document.getElementById('mensagem_erro')
    
    // Impedir o envio padrão do formulário
    event.preventDefault();

    // Simulação de validação
    if (usuario.value === 'user' && senha.value === '123') {
        msg_error.textContent = 'Login bem-sucedido!';
        msg_error.className = 'mensagem_erro sucesso';
    } else {
        msg_error.textContent = 'Usuário/senha incorreto.';
        msg_error.className = 'mensagem_erro error';
    }
    
    // Limpar campo senha após tentar logar
    senha.value = ''

});
