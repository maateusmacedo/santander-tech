// condicionais 

const numero1 = 15
const numero2 = 19

if (numero1 > 10) {
    console.log("Esse número é maior que que 10")
} else {
    console.log("Esse número não é maior que 10")
}

if (numero1 >= numero2) {
    console.log(`${numero1} é maior ou igual que ${numero2}`)
}

// ternários

let idade = 18
const podeDirigir = true
 
const habilitacaoPermitida = idade && podeDirigir ? "Aturorizado" : "Negado"