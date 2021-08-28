// Desafio Decorator perfilAdmin
const usuarioLogado = {
  nome: "Guilherme Filho",
  email: "guigui@gmail.com",
  admin: false,
};

type Construtor = { new (...args: any[]): {} };

@adminDecorator
class MudancaAdministrativa {
  critico() {
    console.log("Algo crítico foi alterado!");
  }
}

new MudancaAdministrativa().critico();

function adminDecorator<T extends Construtor>(construtor: T) {
  return class extends construtor {
    constructor(...args: any[]) {
      super(...args);

      if (!usuarioLogado || !usuarioLogado.admin) {
        throw new Error(`Usuário ${usuarioLogado.nome} não possui permissão.`);
      }
    }
  };
}
