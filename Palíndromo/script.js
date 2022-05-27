let palavra = "ROMA me TEM AMOR";
let palavraTratada = palavra.replace(/\s+/g, '').toUpperCase(); //Tira os espaços e deixa tudo maiúsculo
let tamanho  = palavraTratada.length -1;
let palavraInverso = [];
   
while (tamanho  >= 0){
    palavraInverso = palavraInverso + palavraTratada[tamanho];
    tamanho -= 1;
}
// console.log(palavraInverso)

if (palavraInverso == palavraTratada){
    console.log(`SÃO PALÍNDROMO`)
}else{
    console.log(`NÃO SÃO PALÍNDROMO`);
}
