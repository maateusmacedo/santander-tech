# Estudos em backend com Javascript e Node.JS

**Controle de fluxo 1**

***for in*** é utilizado para Objetos, exemplo:

    const animal = {
        especie: 'Canis Lupus'
        habitat: 'Florestas Tropicias'
        expectativaDeVida: '25'
    }

    for (key in animal) {
        console.log(animal[key])
    }


***for of*** é utilizado em vetores, poi ele é utilizado para percorrer dados

    const listaDeNumeros = [8, 29, 81, 15, 06]

    for (numero of numeros) {
        console.log(numeros[numero])
    }