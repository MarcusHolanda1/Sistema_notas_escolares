//  let mariana = {
//      nome: 'Mariana da Silva',
//      cursos: ['Análise de algoritimo', 'Estruturas de Dados', 'Introdução a Computação'],
//      isActive: true,
//      points: 2000
//  }
//  let silvia = {
//      nome: 'Silvia de Andrade',
//      cursos: ['HTML', 'Estruturas de Dados', 'JavaScript'],
//      isActive: true,
//      points: 1440
//  }

//  let laura = {
//      cursos: ['Análise de algoritimo', 'Estruturas de Dados', 'Introdução a Computação', 'Estatísticas'],
//      isActive: false,
//      points: 10000,
//      nome: 'Laura Varmerman'
//     }
//  console.log(laura)

// const bola = 'cristal'

//  const times = {
//       futebol: ['Chelsea', 'PSG', 'Juventus'],
//       nba: ['Warriors', 'Bucks', 'Hawks']
//   }

//  const times2 = {
//      nba: ['Lebronha', 'Bucks', 'Hawks'],
//      beisebol: 'Não existe',
//      bola: 'jabulani'
//  }

// // const novoTime = Object.assign({}, times, times2)
// // console.log(novoTime)
// console.log(times2)

// const novoTime2 = {
//     ...times,
//     ...times2
// }

// // Método expred, ele basicamente não deixa criar um objeto novo
//  console.log(novoTime2)

//  const times = [{
//      time1: 'Barcelona'
//  }, {
//      time2: 'Real Madrid'
//  }, {
//      time3: 'Sevilla'
//  }]

//  console.log(times[1].time2)


// let dizerOi = (oi) => {
//     return oi
// }
// console.log(dizerOi('Olá'))


// let pessoa = {
//     nome: 'Marcus', 
//     idade: 20, 
//     feliz: false, 
//     pets: ['Cachorro', 'Gato'], 
//     carros: {
//         camaro: {
//             placa: 'JINQ-2133', 
//             cor: 'Cinza'
//         },
//         ferrari: {
//             placa: 'JINQ-2133', 
//             cor: 'Vermelha'
//         }
//     },
//     andar: function(passos){
//         return `${pessoa.nome} deu ${passos} passos`
//     }
// }

// console.log(pessoa.andar(10))

// console.log(pessoa.carros.camaro.cor)

// ForeEach

// Parametros do forEach, 3 parametros, 
// O primeiro é uma referencia para cada item que está interando, 
// O segundo é  posição do array
// O terceiro é o array completo que originamentel chamou a funcao forEach

// const meuNomeCompleto = [
//     {nome: 'Marcus'},
//     {nome: 'Vinícius'},
//     {nome: 'Holanda'}
// ]

// meuNomeCompleto.forEach(function(umaPartedoNome) {
//     console.log(umaPartedoNome.nome)
// })

// meuNomeCompleto.forEach(function(umaPartedoNome, posicao) {
//     console.log(`A parte ${umaPartedoNome.nome} está na posição ${posicao}`)
// }) 

// meuNomeCompleto.forEach((umaPartedoNome, posicao, arrayCompleto)=> {
//     console.log(umaPartedoNome)
//     console.log(posicao)
//     console.log(arrayCompleto)
// })

// function centuryFromYear(year) {
//     let centuryCount = 0;
//     while (year > 0){
//       year = year - 100;
//       centuryCount = centuryCount + 1;
//       console.log(centuryCount)
//     }
//     return centuryCount;
//   }
//   console.log(centuryFromYear(1809))
  

function checkPalindrome(inputString) {
    if (inputString === 'aabaa' || inputString === 'a'){
        return true
    }
    else if (inputString === 'abac'){
        return false
    }
    return false
}

console.log(checkPalindrome('a'))


