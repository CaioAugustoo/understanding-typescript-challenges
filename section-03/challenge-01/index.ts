// 1

class Moto {
  public readonly nome: string;
  public velocidade: number = 0;

  constructor(nome: string) {
    this.nome = nome;
  }

  static buzinar() {
    console.log("Toooooooooot!");
  }

  public acelerar(delta: number): number {
    return (this.velocidade = this.velocidade = delta);
  }
}

const moto = new Moto("Ducati");
Moto.buzinar();
moto.acelerar(30);
console.log(moto.velocidade);

// 2

class DuasDimensoes {
  public base: number = 0;
  public altura: number = 0;

  public area(): number {
    return this.base * this.altura;
  }
}

const retangulo = new DuasDimensoes();
retangulo.base = 5;
retangulo.altura = 7;

console.log(retangulo.area());

// 3

class Estagiario {
  private nome: string = "";

  constructor(nome: string) {
    this.nome = nome;
  }

  get primeiroNome(): string {
    return this.nome;
  }

  set primeiroNome(valor: string) {
    if (valor.length >= 3) this.nome = valor;
    this.nome = "";
  }
}

const estagario = new Estagiario("Caio");
console.log(estagario.primeiroNome);
console.log((estagario.primeiroNome = "Leandro"));
