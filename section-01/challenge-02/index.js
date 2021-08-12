"use strict";
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: "Ana Silva",
    contaBancaria: contaBancaria,
    contatos: ["34567890", "98765432"]
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=index.js.map