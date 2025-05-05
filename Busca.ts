class Busca {

    private vetor1: number;
    private vetor2: number;
    private vetor3: number;

    constructor(vetor1: number, vetor2: number, vetor3: number) {
        this.vetor1 = vetor1;
        this.vetor2 = vetor2;
        this.vetor3 = vetor3;
    }

    public ordena() {

        let x: number = this.vetor1;
        let y: number = this.vetor2;
        let z: number = this.vetor3;

        if(x < y) {
            [x, y] = [y, x];
        }

        if(y < z) {
            [y, z] = [z, y]
        }

        if(z < x) {
            [z, x] = [x, z];
        }

        return [x, y, z];

    }

    public maior() {

        let x: number = this.vetor1;
        let y: number = this.vetor2;
        let z: number = this.vetor3;
        
        const array = [x, y, z];
        
        if(x > y) {
            array.splice(1);
        }

        if(y > z) {
            array.splice(2);
        }

        

    }
}

const ordena = new Busca(1, 3, 2);

console.log(ordena.maior());