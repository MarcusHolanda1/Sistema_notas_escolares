let mariana = {
    nome: 'Mariana da Silva',
    cursos: ['Análise de algoritimo', 'Estruturas de Dados', 'Introdução a Computação'], 
    isActive: true,
    points: 2000
}

let silvia = {
    nome: 'Silvia de Andrade',
    cursos: ['HTML', 'Estruturas de Dados', 'JavaScript'], 
    isActive: true,
    points: 1440
}

let laura = {
    nome: 'Laura Varmerman',
    cursos: ['Análise de algoritimo', 'Estruturas de Dados', 'Introdução a Computação', 'Estatísticas'], 
    isActive: false,
    points: 10000
}

let estudantes = [mariana, silvia, laura]

for (estudante of estudantes) {
    
    for (curso of estudante.cursos){
        console.log(curso)
    }
}

