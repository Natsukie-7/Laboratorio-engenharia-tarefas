function verificarNumero() {
    let numero = parseInt(prompt("Digite um número inteiro positivo:"));

    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, insira um número inteiro positivo válido.");
        return;
    }
    
    alert(`O  numero ${numero} é ${numero % 2 === 0 ? "par" : "ímpar"}`);
    
}