// const arr = [112, 21, 32, 12];

//  console.log(arr[arr.length - 1])

//  console.log(arr[3])


// const pessoa = {
//     profission: 'pedreiro', 
//     idade: '20', 
// }

// pessoa.casado = true

// console.log(pessoa.casado)

// let carro = {
//     marca: 'camaro',
//     portaMala: true,
//     roda: false
// } 

// let adicionais = {
//     rebaixado: true
// }

// let carFull = {
//     ...carro,
//     ...adicionais
// }

// // console.log(carFull.marca)
// console.log(Object.keys(carFull))

// mutacao   herdando as mesmas caracteristicas de um objeto

// const objetoA = {
//     pontos: 10
// }

// objetoB = objetoA

// const objetoC = {
//     pontos: 10
// }

// console.log(objetoA === objetoB)
// console.log(objetoA === objetoC)

// const names = ['Marcus', 'Holanda', 'Guimarães']

// for (let i = 0; i <= names.length; i++) {
//     console.log(names[i])
// }


// // pop remove o último elemento e push adiciona
// const nomes = ['Marcus', 'Joao', 'Maria']

// console.log(nomes.pop())

// nomes.push('Marolinha')


// console.log(nomes)

// shift/ unshift / remover e adicionar primeiros elementos

// const carro = ['camaro', 'celta', 'versa']

// console.log(carro.shift())

// console.log(carro)

// console.log(carro.unshift('Renault'))

// console.log(carro)

// Receber indices
// const arr = [4, 12, 32, 4, 5]

// console.log(arr.indexOf(5))

// console.log(arr.lastIndexOf(4))

// const typeCar = ['BMW', 'Ferrari', 'Fiat']

// console.log(typeCar.includes('Ford'))

// const rvs = [1, 2, 3, 4, 5, 7, 8, 9]

// console.log(rvs.reverse())










/// EEXERCICIOSOOSOSOSO ///


// //1 
// arr = [1, 3, 4, 8, 0]

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[3])


//2
// arr1 = ['Marcola', 'Bolado']
// arr2 = ['krawk', 'massaru', 12, 32]

// console.log(arr1.length)
// console.log(arr2.length)

// 3
// onibus1 = {
//     rodas: 8, 
//     limitePass: 40, 
//     portas: 2
// }

// // console.log(onibus.limitePass)

// onibus2 = {
//     janelas: 20
// }

// onibusFull = {
//     ...onibus1,
//     ...onibus2
// }

// delete onibusFull.rodas
// console.log(onibusFull)

// onibusFull.sacola = true
// console.log(onibusFull)



// //EX 5
// const names = ['Masrcus', 'marcola', 'brunin', 'tavin']

// if (names.includes('Marcus')){
//     console.log('Marcus está dentro do array') 
// } else {
//     console.log('Marcus nao esta dentor')
// }


//EX 6

// arra1 = [2, 2, 3, 4, 5, 5, 6]
// arra2 = [5, 5, 6]

// function verifyNumbers(elements){
//     if (elements.length <= 5){
//         return 'Poucos elementos'
//     }
//     return 'Muitos elementos'
// }

// console.log(verifyNumbers(arra1))
// console.log(verifyNumbers(arra2))

// arr = [12, 32, 32, 2, 5]

// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// arr = ['Porta', 'Porteira', 'Portão']

// for (i = 0; i < arr.length; i++) {
//     `Se fala ${arr}`
// }

// const calculadora = {
//     somar: function(a, b){
//         return a + b
//     },
//     subtrair: function(a, b){
//         return a - b
//     },
//     multiplicar: function(a, b){
//         return a * b
//     },
//     dividir: function(a, b){
//         return a / b
//     }
// }

// console.log(calculadora.somar(12, 3))
// console.log(calculadora.subtrair(10, 5))
// console.log(calculadora.multiplicar(10, 3))
// console.log(calculadora.dividir(15, 3))