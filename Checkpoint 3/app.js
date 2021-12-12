
function Alunos(nome, faltas, notas){
    this.nome = nome;

    this.quantidadeFaltas = faltas;

    this.notas = notas;

    this.calcularMedia = function(){
        let media = 0;
        for(let soma of this.notas){
            media += soma / this.notas.length;
        }
        return media;
    }
    
    this.addFalta = function(){
        this.quantidadeFaltas += 1;
    }
}

module.exports = Alunos;

