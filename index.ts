class jogador_futebol{

    nome: string;
    idade: number;
    altura: number;
    peso: number
    habilidade: number;
    impulsao: number;
    passe: number;
    forca: number;
    chute: number;
    cabeceio: number;
    
    constructor(nome: string, idade:number, altura: number, peso: number, habilidade: number, impulsao: number, passe:number, forca: number, chute: number, cabeceio: number){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.habilidade = habilidade;
        this.impulsao = impulsao;
        this.passe = passe;
        this.forca = forca;
        this.chute = chute;
        this.cabeceio = cabeceio;

    }


}

let giovane: jogador_futebol = new jogador_futebol('giovane', 20, 1.80, 69, 70, 91, 75, 56, 88, 82);

console.log(giovane); 