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
<<<<<<< HEAD
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
=======
        return this.toString(this.list);
    }
    removeMultiplos(multiplo) {
        if (multiplo <= 0) {
            return "[" + this.list + "]";
        }
        else {
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i] % multiplo === 0) {
                    this.list.splice(i, 1);
                    i--;
                }
            }
        }
        return this.toString(this.list);
    }
    media() {
        let sum = 0;
        for (let i = 0; i < this.list.length; i++) {
            sum += this.list[i];
        }
        sum = sum / this.list.length;
        for (let i = 0; i < this.list.length; i++) {
            if (Math.ceil(sum) === this.list[i]) {
                return this.list[i];
            }
        }
        return Math.ceil(sum);
    }
    reduzir(reduz) {
        if (this.list.length <= reduz) {
            return "Parametro maior ou igual ao tamanho da lista";
        }
        else {
            for (let i = 0; i < this.list.length; i++) {
                if (i > reduz) {
                    this.list.splice(i);
                    i--;
                }
            }
            return this.toString(this.list);
        }
    }
}
const dados = new Dados(5, 100);
console.log(dados.returnList());
// console.log(dados.valorCorte(2));
// console.log(dados.removeMultiplos(5));,
// console.log(dados.media());
console.log(dados.reduzir(2));
>>>>>>> 7e41a049d554fcedf1f4d1ac9c37ec0137874f0b
