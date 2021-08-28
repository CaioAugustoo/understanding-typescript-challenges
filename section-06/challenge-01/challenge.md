// Desafio Decorator perfilAdmin
const usuarioLogado = {
nome: 'Guilherme Filho',
email: 'guigui@gmail.com',
admin: false
}

class MudancaAdministrativa {
critico() {
console.log('Algo crítico foi alterado!')
}
}

new MudancaAdministrativa().critico()
