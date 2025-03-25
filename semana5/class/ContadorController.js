class ContadorController {
    constructor(rootElement) {
        this.homens = new Contador();
        this.mulheres = new Contador();
        this.rootElement = rootElement; 

        this.createElement();
    }

    createElement() {
        const Wrapper = document.createElement("div");
        Wrapper.classList.add("wrapper");

        const Total = document.createElement("div");
        Total.innerHTML = `<div>
            <h2>Total</h2>
            <p id="total"></p>
        </div>`;

        const Homens = document.createElement("div");
        Homens.innerHTML = `<div>
            <h3>Homens</h3>
            <p id="homensCount"></p>
        </div>`;

        const Mulheres = document.createElement("div");
        Mulheres.innerHTML = `<div>
            <h3>Mulheres</h3>
            <p id="mulheresCount"></p>
        </div>`;

        Wrapper.appendChild(Total);
        Wrapper.appendChild(Homens);
        Wrapper.appendChild(Mulheres);
        
        const botaoAddHomens = document.createElement("button");
        botaoAddHomens.innerHTML = "Adicionar Homem";
        botaoAddHomens.addEventListener("click", () => {
            this.homens.increment();
            this.printTotal();
            this.printHomens();
        });

        const botaoRemoveHomens = document.createElement("button");
        botaoRemoveHomens.innerHTML = "Remover Homem";
        botaoRemoveHomens.addEventListener("click", () => {
            this.homens.decrement();
            this.printTotal();
            this.printHomens();
        });

        const botaoAddMulheres = document.createElement("button");
        botaoAddMulheres.innerHTML = "Adicionar Mulher";
        botaoAddMulheres.addEventListener("click", () => {
            this.mulheres.increment();
            this.printTotal();
            this.printMulheres();
        });

        const botaoRemoveMulheres = document.createElement("button");
        botaoRemoveMulheres.innerHTML = "Remover Mulher";
        botaoRemoveMulheres.addEventListener("click", () => {
            this.mulheres.decrement();
            this.printTotal();
            this.printMulheres();
        });

        [botaoAddHomens, botaoRemoveHomens].forEach(botoes => Wrapper.appendChild(botoes));
        [botaoAddMulheres, botaoRemoveMulheres].forEach(botoes => Wrapper.appendChild(botoes));

        this.rootElement.appendChild(Wrapper);

        this.printHomens();
        this.printMulheres();
    }

    clear() {
        this.homens.clear();
        this.mulheres.clear();
        this.printTotal(); 
        this.printHomens();
        this.printMulheres();
    }

    printTotal() {
        const totalElement = document.getElementById("total");
        if (totalElement) {
            totalElement.innerHTML = this.homens.total + this.mulheres.total;
        }
    }

    printHomens() {
        const homensElement = document.getElementById("homensCount");
        if (homensElement) {
            homensElement.innerHTML = this.homens.total;
        }
    }

    printMulheres() {
        const mulheresElement = document.getElementById("mulheresCount");
        if (mulheresElement) {
            mulheresElement.innerHTML = this.mulheres.total;
        }
    }
}
