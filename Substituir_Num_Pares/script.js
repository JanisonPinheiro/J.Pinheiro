let numeros = [5, 6, 8, 77, 66, 15, 20];
let tamanho = numeros.length - 1;

while (tamanho >= 0){
   if (numeros[tamanho] % 2 == 0) {
       numeros[tamanho] = 0;
   }
   tamanho -=1;
}
console.log(numeros);

