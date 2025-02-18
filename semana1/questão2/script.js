function verificarNumeroPrimo() {
    let numero = parseInt(prompt("Digite um número inteiro positivo:"));

    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, insira um número inteiro positivo válido.");
        return;
    }
    
    if (numero === 1) {
        alert(`O número ${numero} não é primo.`);
        return;
    }

    let ehPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ehPrimo = false; 
            break;
        }
    }

    alert(`O número ${numero} ${ehPrimo ? "é" : "não é"} primo.`);
}
