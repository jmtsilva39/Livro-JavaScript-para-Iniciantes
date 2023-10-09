console.log('Olá, Console!');


let idade = 16;

if(idade > 18){
    console.log('Você pode Dirigir');
} else if (idade ==17) {
    console.log('Você pode dirigir no próximo ano');
} else {
    console.log('Você ainda não pode dirigir.')
}


let dia = 5;

switch(dia){
    case 1:
        console.log('Segunda-feira');
    break;

    case 2:
        console.log('Terça-feira');
    break;
    
    case 3:
        console.log('Quarta-feira');
    break;

    case 4:
        console.log('Quinta-feira');
    break;
    
    case 5:
        console.log('Sexta-feira');
    break;
    
    case 6:
        console.log('Sábado')
    break;

    case 7:
        console.log('Domingo')
    break;

    default:
        console.log('Dia Inválido')
}

//EXERCÍCIO 1 

/* Crie duas variáveis, uma com um número e outra com uma string. Tente somá-las e veja o resultado. Depois, converta a string em um número
e tente a soma novamente. */


var one = 10;
var two = '10';

console.log(one + Number(two))

//EXERCÍCIO 2

/* Declare três variáveis: a,b e c. Defina valores para a e b. Use operadores para fazer c ser igual a mais b,
 depois a menos b, depois a multiplicado por b, e finalmente a dividido por b. Imprima os resultados no console.  */

var a, b ,c;
a = 10;
b = 20;

c =  a+b;
console.log(c); //Resultado 30
c = a-b;
console.log(c); // Resultado -10
c = a*b;
console.log(c); // Resultado 200

/* Estrutura de Controle Condicional */

/* Escreva um programa que aceite a idade de uma pessoa e imprima uma mensagem se a pessoa for maior de 18 anos dizendo "Você é maior de idade",
e se não for, "Você é menor de idade."
" */

let idade2;

function menorOuMaior(idade2){
    if(idade2 > 18){
        return "Você é maior de idade";
    }
    return "Você é menor de idade";
}

console.log(menorOuMaior(2) )


/* Estrutura de Controle Loop (for) */

/* Crie um loop 'for' que imprima os números de 1 a 10 no console. */

for(let i=0; i <=10; i++){
    console.log(i);
}

/* Crie um loop while que imprima os números de 10 a 1 no console */