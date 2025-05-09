let diaAtual: number = 31;
let mesAtual: number = 3;
let anoAtual: number = 2025;

function retornaVencimento(diaValidade: number, mesValidade: number, anoValidade: number) {

    if (anoAtual = anoValidade) {

        if (mesAtual = mesValidade) {

            if (diaAtual < diaValidade) {
                console.log("Data valida");
            } else if (diaAtual = diaValidade) {
                console.log("Data valida");
            } else {
                console.log(" dia Vencido");

            }
        } else if (mesAtual > mesValidade) {
            console.log("mes Vencido");
        } else {
            console.log("Data valida");
        }

    } else if (anoAtual > anoValidade) {
        console.log("ano Vencido");
    } else {
        console.log("Data valida");
    }

}

function retornaPrimo(num: number) {

    for(let i = num;i != 2; i--) {

        let calc = num % i;

        if(calc > 0) {
            console.log("primo");
        } else {
            console.log("nao é");
        }
        
    }
}

function validade(dia: number, mes: number, ano: number) {
    const diaAtual = 1;
    const mesAtual = 4;
    const anoAtual = 2025;

    if(ano < anoAtual || mes < mesAtual || dia < diaAtual) 
        console.log("Vencido!");
    else console.log("Não vencido!");
}

validade(31,3,2025);