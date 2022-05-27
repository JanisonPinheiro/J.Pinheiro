var numA = 7;
var numB = 5;
var soma = numA + numB;


function valores(numA, numB){

    if (numA == numB) {
            console.log("São iguais");
    }
    else{
        console.log("Não são iguais")
    }
}

function soma_valores(numA, numB){
        
    if (soma < 20) {
        console.log(`A soma de ${numA} + ${numB} é menor que 20 `);
        if(soma < 10){
            console.log(`A soma de ${numA} + ${numB} é menor que 10`);
        }else if(soma == 10){
            console.log(`A soma de ${numA} + ${numB} é igual a 10`);
        }
        else{
            console.log(`A soma de ${numA} + ${numB} é maior que 10`);
        }
    }
    else{
        console.log(`A soma de ${numA} + ${numB} é maior que 10 e maior que 20`);
        }
}

valores(numA,numB);
soma_valores(numA, numB);
