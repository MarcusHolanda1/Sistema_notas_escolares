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


let pessoa = {
    nome: 'Marcus', 
    idade: 20, 
    feliz: false, 
    pets: ['Cachorro', 'Gato'], 
    carros: {
        camaro: {
            placa: 'JINQ-2133', 
            cor: 'Cinza'
        },
        ferrari: {
            placa: 'JINQ-2133', 
            cor: 'Vermelha'
        }
    },
    andar: function(passos){
        return `${pessoa.nome} deu ${passos} passos`
    }
}

console.log(pessoa.andar(10))

// console.log(pessoa.carros.camaro.cor)



