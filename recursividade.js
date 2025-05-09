"use strict";
function mensagem(n) {
    if (n === 0) {
        return " ";
    }
    return "recursividade " + "\n" + mensagem(n - 1);
}
function progressiva(n) {
    let aux = 0;
    if (n === 0) {
        return 0;
    }
    return aux += 1 + progressiva(n - 1);
}
// console.log(mensagem(5));
console.log(progressiva(5));
