"use strict";
// 1
class Moto {
    constructor(nome) {
        this.velocidade = 0;
        this.nome = nome;
    }
    static buzinar() {
        console.log("Toooooooooot!");
    }
    acelerar(delta) {
        return (this.velocidade = this.velocidade = delta);
    }
}
const moto = new Moto("Ducati");
Moto.buzinar();
moto.acelerar(30);
console.log(moto.velocidade);
// 2
class DuasDimensoes {
    constructor() {
        this.base = 0;
        this.altura = 0;
    }
    area() {
        return this.base * this.altura;
    }
}
const retangulo = new DuasDimensoes();
retangulo.base = 5;
retangulo.altura = 7;
console.log(retangulo.area());
// 3
class Estagiario {
    constructor(nome) {
        this.nome = "";
        this.nome = nome;
    }
    get primeiroNome() {
        return this.nome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3)
            this.nome = valor;
        this.nome = "";
    }
}
const estagario = new Estagiario("Caio");
console.log(estagario.primeiroNome);
console.log((estagario.primeiroNome = "Leandro"));
//# sourceMappingURL=index.js.map