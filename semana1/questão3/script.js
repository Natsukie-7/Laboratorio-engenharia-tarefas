function calcularFatorial() {
    let numero = parseInt(prompt("Digite um número inteiro positivo:"));

    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, insira um número inteiro positivo válido.");
        return;
    }

    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    alert(`O fatorial de ${numero} é ${fatorial}.`);
}
