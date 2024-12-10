let listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let listaDePares = []
let listaDeImpares = []

let indiceDoNumero = 0

// verifica se o número do array principal é par ou ímpar e adiciona-os na lista específica para par ou ímpar
while (indiceDoNumero < listaDeNumeros.length) {
    if (listaDeNumeros[indiceDoNumero] % 2 === 0) {
        listaDePares.push(listaDeNumeros[indiceDoNumero])
    } else {
        listaDeImpares.push(listaDeNumeros[indiceDoNumero])
    }

    indiceDoNumero++
}

console.log(listaDePares)
console.log(listaDeImpares)