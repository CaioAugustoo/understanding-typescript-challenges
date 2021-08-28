"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: "Guilherme Filho",
    email: "guigui@gmail.com",
    admin: false,
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log("Algo crítico foi alterado!");
    }
};
MudancaAdministrativa = __decorate([
    adminDecorator
], MudancaAdministrativa);
new MudancaAdministrativa().critico();
function adminDecorator(construtor) {
    return class extends construtor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error(`Usuário ${usuarioLogado.nome} não possui permissão.`);
            }
        }
    };
}
//# sourceMappingURL=index.js.map