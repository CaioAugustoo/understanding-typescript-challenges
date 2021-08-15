"use strict";
class Fila {
    constructor() {
        this.name = "";
        this.lista = [];
    }
    entrar(name) {
        return this.lista.push(name);
    }
    proximo(name) {
        const nameInList = this.lista.indexOf(name) + 1;
        const nextNameInList = this.lista.slice(nameInList);
        if (!nextNameInList.length) {
            throw new Error(`Não há nenhum nome após ${name}`);
        }
        return nextNameInList;
    }
    imprimir() {
        console.log(this.lista);
    }
}
const fila = new Fila();
fila.entrar("Anna");
fila.entrar("Caio");
fila.entrar("Fer");
fila.imprimir();
console.log(fila.proximo("Fer"));
//# sourceMappingURL=index.js.map