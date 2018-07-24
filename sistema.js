//Objeto Participante
function Participante() {
    this.nome = "";
    this.sobrenome = "";
    this.email = "";
    this.idade = 0
    this.sexo = 0
    this.nota = 0
    this.aprovado = false
}

/***********************
 * Representa o sistema
 * Uma vez instanciado, deve-se usar essa mesma
 * instancia em todas as operações.
 */
function SistemaCadastro() {

    //Onde os participantes ficarão armazenados
    var participantes = [];

    function adicionarParticipante(nome, sobrenome, email, idade, sexo) {
        //implemente o código necessário
        var p = new Participante();
        p.nome = nome;
        p.sobrenome = sobrenome;
        p.email = email;
        p.idade = idade;
        p.sexo = sexo;

        participantes.push(p);
    }

    function removerParticipante(email) {
        //implemente o código necessário       
    }
    function buscarParticipantesPorNome(nome){
        //implemente o código necessário
    }    
    function buscarParticipantesPorSexo(sexo){
        //implemente o código necessário
    }
    function buscarParticipantesAprovados(){
        //implemente o código necessário
    }
    function buscarParticipantesReprovados(){
        //implemente o código necessário
    }
    function obterParticipante(email){
        //implemente o código necessário
    }
    function adicionarNotaAoParticipante(email, nota){
        //implemente o código necessário
    }
    function obterMediaDasIdadesDosParticipantes(){
        //implemente o código necessário
    }
    function obterTotalDeParticipantes(){
        return participantes.length;
    }
    function verificarSeParticipanteEstaAprovado(email){
        //implemente o código necessário
    }
    function obterQuantidadeDeParticipantesPorSexo(sexo){
        //implemente o código necessário
    }

    return {
        adicionarParticipante,
        removerParticipante,
        buscarParticipantesPorNome,
        buscarParticipantesPorSexo,
        buscarParticipantesAprovados,
        buscarParticipantesReprovados,
        obterParticipante,
        adicionarNotaAoParticipante,
        obterMediaDasIdadesDosParticipantes,
        obterTotalDeParticipantes,
        verificarSeParticipanteEstaAprovado,
        obterQuantidadeDeParticipantesPorSexo    
    };
}