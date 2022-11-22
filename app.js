// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)


const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;

}

const fromEuroToYen = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInYen = valueInEuro * 127.9;
    // retornamos el valor
    return valueInYen;
}

const fromEuroToPound = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInPound = valueInEuro * 0.8;
    // retornamos el valor
    return valueInPound;
}
console.log(fromEuroToDollar(3.5))
console.log(fromEuroToYen(10))
console.log(fromEuroToPound(10))


module.exports = { sum, fromEuroToDollar, fromEuroToYen, fromEuroToPound }