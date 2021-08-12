interface IFuncionario {
  nomes: string[];
  baterPonto: (horario: number) => void;
}

const funcionario: IFuncionario = {
  nomes: ["Caio", "Fer", "Michael"],
  baterPonto(horario): string {
    if (horario <= 8) return "Ponto normal";
    return "Fora do horário";
  },
};

console.log(funcionario.baterPonto(5));
