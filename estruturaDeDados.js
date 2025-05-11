"use strict";
class Dados {
    constructor(nums, numMax) {
        this.list = [];
        for (let i = 0; i <= nums; i++) {
            this.list.push(Math.ceil(Math.random() * numMax));
        }
        this.toString(this.list);
    }
    returnList() {
        return "[" + this.list + "]";
    }
    toString(array) {
        let listString = "[" + array + "]";
        return listString;
    }
    valorCorte(numCorte) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] === numCorte) {
                this.list.splice(i, 1);
                i--;
            }
        }
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
