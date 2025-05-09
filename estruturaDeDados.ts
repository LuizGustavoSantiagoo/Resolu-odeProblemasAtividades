class Dados {

    private list: number[] = [];

    constructor(nums: number, numMax: number) {

        for(let i: number = 0; i <= nums; i++) {
            this.list.push(Math.ceil(Math.random() * numMax));
        }
        console.log(this.list);
        this.toStringAuto(this.list);
    }

    public toStringAuto(array: number[]) {
        let listString: string = '[' + array + ']';
        return listString;
    }

    public valorCorte(numCorte: number) {
        let newList: number[] = [];
        for(let i = 0; i < this.list.length; i++) {
            if( this.list[i] != numCorte ) {
             newList.push(this.list[i]);   
            }
        }
        this.toStringAuto(newList);
    }
}

const dados = new Dados(5, 5);

console.log(dados.valorCorte(3))