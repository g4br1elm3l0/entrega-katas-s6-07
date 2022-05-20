function add(n1, n2) {
    let total = n1 + n2
    return total
}

function multiply(n1, n2) {
    soma = 0
    for (i = 1; i <= n1; i++) {
        soma += n2
    }
    return soma
}


function power(x, y) {
    potencia = x
    potenciacao = x
    for (i = 1; i < y; i++) {
        for (j = 1; j < x; j++) {
            potencia += potenciacao
        }
        potenciacao = potencia
    }
    return potencia
}

//power(5, 3)


// Escreva uma função chamada "factorial" que pega um único argumento e retorna o fatorial dele.

// Em vez de usar operadores mátematicos ou funções aritimeticas incorporadas, use outras funções que você escreveu em katas anteriores.

// Por exemplo, chamar factorial(4) deve retornar um resultado 24.


function factorial(numero) {
    var resultado = 1

    if (numero > 1) {
        for (i = numero; i > 1; i--) {
            resultado += multiply(i, resultado)
        }

    }
    return resultado
}
// console.log(factorial(4))