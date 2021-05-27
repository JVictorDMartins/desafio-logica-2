/*1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro


*** Exercícios bônus
4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E */

let idade = 21

if(idade >=18){
    console.log(`Parabén! Você é maior de idade`)
}

let anos = 21;
let souhumano = true;

if (anos >=18){
    console.log(`Parabén! Você é maior de idade e sua condição humana é ${souhumano}`)
}

let aniversario = "janeiro" || "dezembro"




if(aniversario == "janeiro"){
    console.log(`Parabéns! Você faz aniversário em Janeiro ou Dezembro`)
}else{
    console.log(`Poxa, você faz aniversário em outro mês!`)
}


let nome = "Ruan"

if(nome.charAt(0) === "R"){
    console.log(`Olá, ${nome}. Seu nome começa com a letra R`);
}else{
    console.log(`Vish! Seu nome começa com outra letra`)
}










