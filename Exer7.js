function countChars(frase, c) {
    let count = 0;
    
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === c) {
            count++;
        }
    }

    return count;
}

// Captura da frase e do caractere via prompt
let frase = prompt("Digite uma frase:");
let caractere = prompt("Digite o caractere que deseja contar:");


if (frase && caractere) {
    
    let ocorrencias = countChars(frase, caractere);
    console.log(`Na frase "${frase}", o caractere "${caractere}" aparece ${ocorrencias} vezes.`);
} else {
    console.log("Por favor, insira uma frase e um caractere válidos.");
}
