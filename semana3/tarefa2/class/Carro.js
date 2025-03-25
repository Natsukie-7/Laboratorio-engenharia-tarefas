class Carro {
    constructor(marca, modelo, ano, cor, kilometragem, valorFipe) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.kilometragem = kilometragem;
        this.valor_fipe = valorFipe;
    }

    anosUtilizacao() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.ano;
    }

    valorMercado() {
        let valorMercado;

        if (this.kilometragem <= 30000) {
            valorMercado = this.valor_fipe * 1.10;
        } else if (this.kilometragem > 30000 && this.kilometragem <= 50000) {
            valorMercado = this.valor_fipe; 
        } else {
            valorMercado = this.valor_fipe * 0.90;
        }

        return valorMercado.toFixed(2);
    }
}