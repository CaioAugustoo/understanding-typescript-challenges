"use strict";
// 1
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// 2
const dizerOla = (nome = "Pessoa") => {
    console.log(`Olá ${nome}`);
};
dizerOla();
dizerOla("Anna");
// 3
const nums1 = [-3, 33, 38, 5];
console.log(Math.min(...nums1));
// 4
const nums2 = [-3, 33, 38, 5];
const array = [55, 20];
console.log([...array, ...nums2]);
// 5
const notas = [8.5, 6.3, 9.4];
const [n1, n2, n3] = notas;
console.log(n1, n2, n3);
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
//# sourceMappingURL=index.js.map