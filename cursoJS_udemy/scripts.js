// function imprimirNumeros(num){
//     console.log(num)
// }
// imprimirNumeros(21);

// function multiplicarTresNumeros(x, y, z) {
//     return x * y * z
// }

// console.log(multiplicarTresNumeros(1, 2, 3))

// const mult = multiplicarTresNumeros(4, 2, 4)

// console.log(mult)


/// variaveis e escopos

// let a = 10

// function multiplicar(x, y){
//     let a = x * y

//     if (a > 10) {
//         let a = 0 
        
//         a++

//         console.log(a)
//     }

//     console.log(a)

// }

// console.log(a)

// multiplicar(12, 1)


// function soma(a, b) {
//     if (a === undefined || b === undefined){
//         return 'Esta função precisa dos dois argumentos'
//     }
//     return a * b
// }

// console.log(soma(1, 4))

// console.log(soma(1))


/// Exercícios Curso Udemy JS

// Exercicio 1
// function dizerHello(hello){
//     return hello
// }
// console.log(dizerHello('Hello world'))

//Exercício 2

// function idade(x){
//     return `Você tem ${x} anos`
// }
// console.log(idade(12))
// console.log(idade(12))
// console.log(idade(12))


// Exercício 3
// function soma(a, b) { 
//     return a + b
// }
// console.log(soma(1, 2))

// Exercício 4 retornar números inteiros aleatórios de acordo com o máximo exigido.

// const numeroAleatorio = (num) => {
//     return Math.floor(Math.random() * num) + 1
// }
// console.log(numeroAleatorio(330))

// Ex 5 if autoescola

// const pessoa = (idade) => {
//     if (idade >= 18){
//         return `Você está apto para entrar na autoescola`
//     }
//     return `Você não está apto para entrar na autoescola`
// }

// console.log(pessoa(18))


// Ex 6 é string, boolean ou number?

// detectarTip = (dado) => {
//     if (typeof dado === 'string'){
//         return 'Este item é uma string'
//     }
//     else if (typeof dado === 'boolean'){
//         return 'Este item é um boolean'
//     }
//     else if (typeof dado === 'number'){
//         return 'Este item é um number'
//     }
// }
// console.log(detectarTip('12'))
// console.log(detectarTip(12))
// console.log(detectarTip(true))


// Ex 7 transferir números positivos para negativo

// transferir = (number) => {
//     return Math.abs(number)
// }
// console.log(transferir(-1321))

// Ex 8 Checar se o texto é long
// const checkSizeText = (text) => {
//     if (text.length > 10) {
//         return 'Texto muito longo'
//     }
//     return 'Texto dentro do limite'
// }

// console.log(checkSizeText('twewewewewewe0we0ewwwewewewe'))


// Ex 9 Potencia 

// const potencia = (num1, num2) => {
//     return num1 ** num2
// }
// console.log(potencia(3, 2))

// Ex 10 decrementp /


// const decrement = (num) => {
//     for (let i = num; i >= 0; i--) {
//         if (i % 2 === 0) {
//             console.log(i)
//         }
//     }
// }
// decrement(123)


// Pegar último item do array

// const array = [12, 21, 23, 2323, 2323, 2323,213,31, 3134,3 ,4354, 54, 5454, 56, 56]

// console.log(array[array.length -1])