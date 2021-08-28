"use strict";
class Mapa {
    constructor() {
        this.itens = new Array();
    }
    colocar(par) {
        const foundItem = this.obter(par.chave);
        if (foundItem) {
            foundItem.valor = par.valor;
        }
        else {
            this.itens.push(par);
        }
    }
    obter(chave) {
        const foundItem = this.itens.find(el => el.chave === chave);
        return foundItem;
    }
    imprimir() {
        console.log(this.itens);
    }
    limpar() {
        this.itens = [];
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 2, valor: "Rebeca" });
mapa.colocar({ chave: 3, valor: "Maria" });
mapa.colocar({ chave: 1, valor: "Gustavo" });
mapa.colocar({ chave: 1, valor: "Gustavo" });
mapa.colocar({ chave: 1, valor: "Caio" });
console.log("Obter: ", mapa.obter(2));
mapa.imprimir();
mapa.imprimir();
mapa.imprimir();
//# sourceMappingURL=index.js.map