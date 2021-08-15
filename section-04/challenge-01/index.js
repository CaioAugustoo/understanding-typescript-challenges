"use strict";
class Fila {
    constructor() {
        this.name = "";
        this.lista = [];
    }
    entrar(name) {
        return this.lista.push(name);
    }
    proximo() {
        const nextNameInList = this.lista[0];
        this.lista.splice(0, 1);
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
fila.entrar("Michael");
fila.imprimir();
//# sourceMappingURL=index.js.map