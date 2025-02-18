function verificarTipoDado() {
    const dado = prompt("Digite algum dado:");

    const verificarTipo = confirm("Você gostaria de verificar o tipo do dado informado?");

    if (!verificarTipo) {
        document.body.innerHTML = "Obrigado por visitar esta página.";
        return;
    }

    const tipoDado = typeof dado;
    document.body.innerHTML = `O tipo do dado informado é: ${tipoDado}`;
}

verificarTipoDado()