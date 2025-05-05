"use strict";
class Recusividade {
    constructor(n, limit) {
        this.n = n;
        this.limit = limit;
    }
    getN() {
        return this.n;
    }
    setN(n) {
        this.n = n;
    }
    getLimit() {
        return this.limit;
    }
    setLimit(limit) {
        this.limit = limit;
    }
    mensagem(n) {
        if (n === this.limit) {
            return "";
        }
        return ("mensagem" + n) + "\n" + this.mensagem(n + 1);
    }
    progressiva(n) {
        if (n === this.limit) {
            return 0;
        }
        return this.progressiva(n + 1);
    }
}
const recursive = new Recusividade(1, 10);
// console.log(recursive.mensagem(1));
console.log(recursive.progressiva(1));
