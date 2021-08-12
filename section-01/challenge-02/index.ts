interface IContaBancaria {
  saldo: number;
  depositar: (valor: number) => void;
}

interface ICorrentista {
  nome: string;
  contaBancaria: IContaBancaria;
  contatos: string[];
}

const contaBancaria: IContaBancaria = {
  saldo: 3456,
  depositar(valor) {
    this.saldo += valor;
  },
};

const correntista: ICorrentista = {
  nome: "Ana Silva",
  contaBancaria: contaBancaria,
  contatos: ["34567890", "98765432"],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
