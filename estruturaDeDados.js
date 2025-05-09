"use strict";
class Dados {
    constructor(nums, numMax) {
        this.list = [];
        for (let i = 0; i <= nums; i++) {
            this.list.push(Math.ceil(Math.random() * numMax));
        }
        console.log(this.list);
        this.toString(this.list);
    }
    toString(array) {
        let listString = '[' + array + ']';
        return listString;
    }
    valorCorte(numCorte) {
        let newList = [];
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] != numCorte) {
                newList.push(this.list[i]);
            }
        }
        this.toString(newList);
    }
}
const dados = new Dados(5, 5);
console.log(dados.valorCorte(3));
