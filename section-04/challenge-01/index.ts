class Fila {
  private readonly name: string = "";
  private lista: Array<string> = [];

  public entrar(name: string): number {
    return this.lista.push(name);
  }

  public proximo() {
    const nextNameInList = this.lista[0];
    this.lista.splice(0, 1);

    return nextNameInList;
  }

  public imprimir() {
    console.log(this.lista);
  }
}

const fila = new Fila();
fila.entrar("Anna");
fila.entrar("Caio");
fila.entrar("Fer");
fila.entrar("Michael");
fila.imprimir();
