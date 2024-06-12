var nLinhas = parseInt(prompt("Numero de linhas para o triangulo:"));
console.log(nLinhas);
var linha = '';

for(i = 0; i < nLinhas; i++)
  {
    if(i % 2 == 0)
    {
    linha += "# # # #" + "\n";
    } else {
        linha += " # # # #" + "\n"
    }
  }

  console.log(linha);