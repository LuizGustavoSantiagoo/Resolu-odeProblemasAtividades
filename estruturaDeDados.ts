class Dados {
  private list: number[] = [];

  constructor(nums: number, numMax: number) {
    for (let i: number = 0; i <= nums; i++) {
      this.list.push(Math.ceil(Math.random() * numMax));
    }
    this.toString(this.list);
  }

  public returnList() {
    return "[" + this.list + "]";
  }

  public toString(array: number[]) {
    let listString: string = "[" + array + "]";
    return listString;
  }

  public valorCorte(numCorte: number): string {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] === numCorte) {
        this.list.splice(i, 1);
        i--;
      }
    }
    return "[" + this.list + "]";
  }

  public removeMultiplos(multiplo: number) {
    if (multiplo <= 0) {
      return "[" + this.list + "]";
    } else {
        
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
