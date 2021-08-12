Desafio: Transformar Código JS em TS

Código usado no desafio:

```js
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor
    }
}
 
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)
```
