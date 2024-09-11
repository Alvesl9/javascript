const teclado = require('prompt-sync')({sigint:true});
const peso = parseFloat(teclado("Digite seu peso em kg: "));
const altura = parseFloat(teclado("Digite sua altura em metros: "));
imc = calcularIMC(peso, altura);
const categoria = avaliarIMC(imc);
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
function avaliarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29) {
        return "Acima do peso";
    } else if (imc >= 30 && imc < 35) {
        return "Obesidade grau 1";
    } else if (imc >= 35 && imc < 40) {
        return "Obesidade grau 2";
    } else {
        return "Obesidade grau 3";
    }
}
console.log(`Seu IMC é ${imc.toFixed(2)}. Categoria: ${categoria}`);
