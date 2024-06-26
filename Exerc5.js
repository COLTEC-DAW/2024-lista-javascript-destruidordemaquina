var Valor1 = parseInt(prompt("Digite o primeiro valor:"));
var Valor2 = parseInt(prompt("Digite o segundo valor:"));

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

} else {
    console.log("Por favor coloque números válidos");
}