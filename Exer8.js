function range(NUM1, NUM2)
{
    if (NUM1 >= NUM2) {
        return [];
    }
    let resultado = [];

    for (let num = NUM1; num <= NUM2; num++)
    {
        resultado.push(num);
    }
        return resultado;
        
}

var NUM1 = parseInt(prompt("Digite o primeiro número:"));
var NUM2 = parseInt(prompt("Digite o segundo número:"));

resultado = range(NUM1, NUM2);

console.log("Resultado", resultado);


