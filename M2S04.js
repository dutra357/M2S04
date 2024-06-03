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



//Card03 - map()



//Card04 - Classe Produto
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome,
        this.preco = preco,
        this.quantidade = quantidade;
    }

    vender(qtd) {
        if(this.quantidade >= qtd) {
            this.quantidade -= qtd;
        } else {console.log('Estoque insuficiente.')}
    }

    repor(qtd) {
        this.quantidade += qtd;
    }

    mostrarEstoque() {
        console.log(`O produto '${this.nome}' possui ${this.quantidade} unidades disponíveis`)
    }

    atualizarPreco(preco) {
        this.preco = preco;
    }
}

let produto = new Produto('TV', 100.00, 2)

produto.vender(1)
produto.repor(8)

produto.mostrarEstoque()
produto.atualizarPreco(121.11)

console.log(produto)