"use strict";
class Busca {
    constructor(vetor1, vetor2, vetor3) {
        this.vetor1 = vetor1;
        this.vetor2 = vetor2;
        this.vetor3 = vetor3;
    }
    ordena() {
        let x = this.vetor1;
        let y = this.vetor2;
        let z = this.vetor3;
        if (x < y) {
            [x, y] = [y, x];
        }
        if (y < z) {
            [y, z] = [z, y];
        }
        if (z < x) {
            [z, x] = [x, z];
        }
        return [x, y, z];
    }
    maior() {
        let x = this.vetor1;
        let y = this.vetor2;
        let z = this.vetor3;
        let array = [x, y, z];
        if (x < y) {
            array.splice(0);
        }
        if (x < z) {
            array.splice(1);
        }
        return array;
    }
}
const ordena = new Busca(1, 3, 2);
console.log(ordena.maior());
