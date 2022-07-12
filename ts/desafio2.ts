// Como podemos melhorar o esse código usando TS? 
enum Trabalho {
    Atriz,
    Padeiro
}

type Pessoa = {
    nome: String,
    idade: Number,
    profissao: Trabalho;
}

let pessoa1: Pessoa = {
    nome: 'Maria',
    idade: 29,
    profissao: Trabalho.Atriz
};

let pessoa2: Pessoa = {
    nome: 'roberto',
    idade: 19,
    profissao: Trabalho.Atriz
};

let pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4 : Pessoa = {
    nome : "carlos",
    idade : 19,
    profissao : Trabalho.Padeiro
}