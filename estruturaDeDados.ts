class Dados {
  private list: string[];
  private quantidade: number;

  constructor(quantidade: number) {
    this.quantidade = quantidade;
    this.list = [];
    this.preencherArray(this.list, quantidade);
  }

  preencherArray(array: string[], quantidade: number): string[] {
    for (let i = 0; i < quantidade; i++) {
       const numero = Math.floor(Math.random() * quantidade);
      array.push(numero.toString());
    }
    return array;
  }

  getArray():string[] {
    return this.list;
  }

  
}

const dados = new Dados(5, 100);
console.log(dados.returnList());
// console.log(dados.valorCorte(2));
console.log(dados.removeMultiplos(5));
