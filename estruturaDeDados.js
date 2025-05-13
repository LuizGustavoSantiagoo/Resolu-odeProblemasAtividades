"use strict";
class Dados {
    constructor(quantidade) {
        this.quantidade = quantidade;
        this.list = [];
        this.preencherArray(this.list, quantidade);
    }
    preencherArray(array, quantidade) {
        for (let i = 0; i < quantidade; i++) {
            const numero = Math.floor(Math.random() * quantidade);
            array.push(numero.toString());
        }
        return array;
    }
    getArray() {
        return this.list;
    }
    valorDeCorte(numCorte) {
        this.list = this.list.filter(str => Number(str) !== numCorte);
        return this.list;
    }
    removeMultiplo(numCorte) {
        this.list = this.list.filter(str => (Number(str) % numCorte) !== 0);
        return this.list;
    }
}
const dados = new Dados(15);
console.log(dados.getArray());
console.log(dados.valorDeCorte(10));
console.log(dados.removeMultiplo(2));
