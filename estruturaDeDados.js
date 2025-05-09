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
        return "[" + this.list + "]";
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
        return "[" + this.list + "]";
    }
}
const dados = new Dados(5, 100);
console.log(dados.returnList());
// console.log(dados.valorCorte(2));
console.log(dados.removeMultiplos(5));
