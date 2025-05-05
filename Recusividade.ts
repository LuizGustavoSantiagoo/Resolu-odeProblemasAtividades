class Recusividade {

    private n: number;
    private limit: number;

    constructor(n: number, limit: number) {
        this.n = n;
        this.limit = limit;
    }

    public getN(): number {
        return this.n;
    }

    public setN(n: number): void {
        this.n = n;
    }

    public getLimit(): number {
        return this.limit;
    }

    public setLimit(limit: number): void {
        this.limit = limit;
    }

    public mensagem(n: number): String {

        if (n === this.limit) {return ""}

        return ("mensagem" + n) + "\n" + this.mensagem(n + 1);
    }

    public progressiva(n: number): number {

        if (n === this.limit) {return 0}

        return this.progressiva(n + 1);
    }
}

const recursive = new Recusividade(1, 10);
// console.log(recursive.mensagem(1));
console.log(recursive.progressiva(1));