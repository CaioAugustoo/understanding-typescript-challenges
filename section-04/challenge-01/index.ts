class Fila {
  private readonly name: string = "";
  private lista: Array<string> = [];

  public entrar(name: string): number {
    return this.lista.push(name);
  }

  public proximo(name: string): string[] {
    const nameInList = this.lista.indexOf(name) + 1;
    const nextNameInList = this.lista.slice(nameInList);

    if (!nextNameInList.length) {
      throw new Error(`Não há nenhum nome após ${name}`);
    }

    return nextNameInList;
  }

  public imprimir(): void {
    console.log(this.lista);
  }
}

const fila = new Fila();
fila.entrar("Anna");
fila.entrar("Caio");
fila.entrar("Fer");
fila.imprimir();
console.log(fila.proximo("Fer"));
