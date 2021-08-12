"use strict";
var funcionario = {
    nomes: ["Caio", "Fer", "Michael"],
    baterPonto: function (horario) {
        if (horario <= 8)
            return "Ponto normal";
        return "Fora do horário";
    }
};
console.log(funcionario.baterPonto(5));
//# sourceMappingURL=index.js.map