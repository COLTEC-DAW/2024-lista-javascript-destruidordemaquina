var Valor1 = parseInt(prompt("Digite o primeiro valor:"));
var Valor2 = parseInt(prompt("Digite o segundo valor:"));

function mod2(number) {
    return number % 2 === 0;
}

function mod(num, divisor) {
    return num % divisor === 0;
}

if (!isNaN(Valor1) && !isNaN(Valor2)) {
    
    let menor, maior;
   if(Valor1 < Valor2)
    {
        menor = Valor1;
    } else {
        menor = Valor2;
    }

    if(Valor1 > Valor2)
    {
        maior = Valor1;
    } else {
        maior = Valor2;
    }

    console.log(`O menor valor é: ${menor}`);
    console.log(`O maior valor é: ${maior}`);

    if (mod2(menor)) {
        console.log(`O menor valor (${menor}) é divisível por 2.`);
    } else {
        console.log(`O menor valor (${menor}) não é divisível por 2.`);
    }

    if (mod(maior, menor)) {
        console.log(`O maior valor (${maior}) é divisível pelo menor valor (${menor}).`);
    } else {
        console.log(`O maior valor (${maior}) não é divisível pelo menor valor (${menor}).`);
    }

} else {
    console.log("Por favor, insira números válidos.");
}