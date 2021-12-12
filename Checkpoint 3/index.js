const Alunos = require('./app')

let aluno0 = new Alunos("Douglas", 10, [10, 10, 8, 7])
let aluno1 = new Alunos("Carol", 2, [7, 10, 9, 4])
let aluno2 = new Alunos("Gabriel", 0, [10, 7, 10, 7])
let aluno3 = new Alunos("Laiza", 3, [9, 8, 9, 10])
let aluno4 = new Alunos("Eric", 10, [7, 7, 5, 4])
let aluno5 = new Alunos("Mateus", 7, [2, 7, 6, 10])
let aluno6 = new Alunos("Camila", 5, [6, 9, 10, 10])



let curso = {
    nome: "Animação 3D",

    notaAprovacao: 8,

    maxFaltas: 10,

    estudantes: [aluno0, aluno1, aluno2, aluno3, aluno4, aluno5, aluno6],

    addAluno: function(nome, faltas, notas,){
        let alunoNovo = new Alunos(nome, faltas, notas)
        this.estudantes.push(alunoNovo);
    },

    aprovacao: function(aluno){
        let dezPorCem = (10/100) * (this.notaAprovacao)
        if(aluno.calcularMedia() >= this.notaAprovacao && aluno.quantidadeFaltas < this.maxFaltas){
            return "O resultado de " + aluno.nome + "é: " + true
        }else if(aluno.quantidadeFaltas == this.maxFaltas && aluno.calcularMedia() >= this.notaAprovacao + dezPorCem){
            return "O resultado de " + aluno.nome + "é: " + true
        }else{
            return "O resultado de " + aluno.nome + "é: " + false
        }
    },
    
    aprovadosReprovados: function(){
        let aprovadosReprovados = [];
       for( let i = 0; i < this.estudantes.length; i++){
            aprovadosReprovados.push(this.aprovacao(this.estudantes[i]))
       }
       return aprovadosReprovados
    }
}

curso.addAluno("Samuel", 2, [10, 8, 10, 9])
curso.estudantes[7].addFalta()
console.log(curso.aprovadosReprovados())