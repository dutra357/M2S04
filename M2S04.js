//Card01 - reduce()
let numeros = [8, 7, 6, 10.0, 20, 21, 33, 99, 97, 101, 6.75, 100];

let total = numeros.reduce(function(total, numero){
    return total + numero;
}, 0);
//console.log(total)



//Card02 - filter()
let pares = numeros.filter((element) => {
    if(element % 2 == 0) return element;
})
//console.log(pares)



//Card03
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome,
        this.preco = preco,
        this.quantidade = quantidade;
    }
    
}