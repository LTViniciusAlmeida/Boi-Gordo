const btn = document.getElementById('btn');

btn.addEventListener('click', function (event) {
    const nome = document.getElementById('nome');

    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const telefoneInput = document.getElementById('tel');
    const telefoneValue = telefoneInput.value.replace(/[\s()+-]/g, '');

    const texto = document.getElementById('texto');

    if (nome.value.trim().split(' ').length < 2) {
        alert('O campo nome não deve estar vazio, possuir espaços em branco e deve possuir pelo menos dois nomes');
        event.preventDefault();
        return;
    } else if (!emailRegex.test(email.value)) {
        alert('E-mail inválido. Certifique-se de inserir um e-mail válido com @ e ponto.');
        event.preventDefault();
        return;
    } else if (telefoneValue.length !== 11) {
        alert('O número de telefone deve ter 11 (onze) caracteres.');
        event.preventDefault();
        return;
    } else if (texto.value.trim().length < 5) {
        alert('O texto a ser enviado deve ter pelo menos 5 caracteres.');
        event.preventDefault();
        return;
    } else {
        alert('Cadastro enviado com sucesso');
    }
});