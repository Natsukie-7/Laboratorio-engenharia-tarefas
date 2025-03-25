const form = document.getElementById("carForm");
const result = document.getElementById("result");
const carrosCadastrados = new Map();

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const ano = document.getElementById("ano").value;
    const cor = document.getElementById("cor").value;
    const kilometragem = document.getElementById("kilometragem").value;
    const valor_fipe = document.getElementById("valor_fipe").value;

    const newCar = new Carro(marca, modelo, ano, cor, kilometragem, valor_fipe);

    carrosCadastrados.set(carrosCadastrados.size + 1, newCar);

    result.innerHTML = "";

    if (carrosCadastrados.size === 1) {
        const headerDiv = document.createElement("div");
        headerDiv.classList.add("header");
        headerDiv.innerHTML = "<span>Valor e ano</span>";
        result.appendChild(headerDiv);
    }

    carrosCadastrados.forEach((carro) => {
        const carInfoDiv = document.createElement("div");
        carInfoDiv.textContent = `${carro.valorMercado()} - ${carro.anosUtilizacao()}`;
        result.appendChild(carInfoDiv);
    });
});
