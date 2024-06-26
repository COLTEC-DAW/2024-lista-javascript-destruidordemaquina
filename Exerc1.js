var nLinhas = parseInt(prompt("Numero de linhas para o triangulo:"));
console.log(nLinhas);
var linha = '';

for(i = 0; i <= nLinhas; i++)
  {
    linha += "##" + "#".repeat(i) + "\n";
  }

  console.log(linha);