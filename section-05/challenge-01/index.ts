type Par<C, V> = { chave: C; valor: V };

class Mapa<C, V> {
  itens: Array<Par<C, V>> = new Array<Par<C, V>>();

  public colocar(par: Par<C, V>): void {
    const foundItem = this.obter(par.chave);

    if (foundItem) {
      foundItem.valor = par.valor;
    } else {
      this.itens.push(par);
    }
  }

  public obter(chave: C): Par<C, V> | undefined {
    const foundItem = this.itens.find(el => el.chave === chave);
    return foundItem;
  }

  public imprimir(): void {
    console.log(this.itens);
  }

  public limpar(): void {
    this.itens = [];
  }
}

const mapa = new Mapa<number, string>();
mapa.colocar({ chave: 2, valor: "Rebeca" });
mapa.colocar({ chave: 3, valor: "Maria" });
mapa.colocar({ chave: 1, valor: "Gustavo" });
mapa.colocar({ chave: 1, valor: "Gustavo" });
mapa.colocar({ chave: 1, valor: "Caio" });

console.log("Obter: ", mapa.obter(2));
mapa.imprimir();
mapa.imprimir();
mapa.imprimir();
