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

const times = {
     futebol: ['Chelsea', 'PSG', 'Juventus'],
     nba: ['Warriors', 'Bucks', 'Hawks']
 }

const times2 = {
    beisebol: 'Não existe',
    bola: 'jabulani'
}

// const novoTime = Object.assign({}, times, times2)
// console.log(novoTime)

const novoTime2 = {
    ...times, 
    ...times2
}

// Método expred, ele basicamente não deixa criar um objeto novo
console.log(novoTime2)