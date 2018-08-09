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
    //O array foi excluido e o código foi todo adaptado para usar as funções do objeto armazenamento
    const armazenamento = new Armazenamento("participantes");

    function adicionarParticipante(nome, sobrenome, email, idade, sexo) {

        if(obterParticipante(email))
            throw new Error("Participante já cadastrado!");
        
        var p = new Participante();
        p.nome = nome;
        p.sobrenome = sobrenome;
        p.email = email;
        p.idade = idade;
        p.sexo = sexo;

        //com o objeto Participante instanciado, o sistema delega para o armazenamento a responsabilidade de guardar essas informações
        armazenamento.adicionar(p);
    }
    function removerParticipante(email) {
        armazenamento.remover("email", email);
    }
	function atualizarParticipante(nome, sobrenome, email, idade, sexo, nota){

		var participante = obterParticipante(email);
        //aqui eu troco todas as informações antigas, gerando um novo objeto.
        //existem outras formas mais adequadas de fazer isso, mas abstrai isso nesse momento
        participante = {nome,sobrenome,email,idade,sexo};
        
        //fico consistente com a regra de negocio e utilizo uma função auxiliar para processar a nota.
        //Veja, hoje isso é simples mas poderia ser bem mais complexo do que uma simples comparação
        processarNotaDoParticipante(participante, nota);

        //pego esse objeto modificado e passo para o armazenamento substituir.
        //perceba que o sistema não faz ideia de como os dados são guardados.
        //ISSO É ENCAPSULAMENTO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! \o/
        //apenas passo o novo objeto e qual campo ele deve usar pra identificar.
        //talvez vc tenha colocado o código no armazenamento de forma que ele sempre procure por email, não tem problema nenhum.
        //eu fiz dessa forma pq achei mais legal. :)
        armazenamento.atualizar(participante, "email");
	}
    function buscarParticipantesPorNome(nome){
        return armazenamento.obterItens("nome", nome);
    }    
    function buscarParticipantesPorSexo(sexo){
        return armazenamento.obterItens("sexo", sexo);        
    }
    function buscarParticipantesAprovados(){
        return armazenamento.obterItens("aprovado", true);
    }
    function buscarParticipantesReprovados(){
        return armazenamento.obterItens("aprovado", false);
    }
    function obterParticipante(email){
        //implemente o código necessário
        return armazenamento.obterItem("email", email);        
    }
    function obterParticipantes(){
        //implemente o código necessário
        return armazenamento.obterTodosOsItens();
    }
	function processarNotaDoParticipante(participante, nota){
		participante.nota = nota;
		participante.aprovado = nota >= 70;
	}
    function adicionarNotaAoParticipante(email, nota){

        var participante = armazenamento.obterItem("email", email);
        processarNotaDoParticipante(participante, nota);
        armazenamento.atualizar(participante, "email");
    }
    function obterMediaDasIdadesDosParticipantes(){
        var participantes = armazenamento.obterTodosOsItens();

        var total = participantes.reduce(function(somaDasNotas, participante){            
            return somaDasNotas + participante.nota;
        }, 0);

        return total / participantes.length;
    }
    function obterTotalDeParticipantes(){
        return armazenamento.obterTodosOsItens().length;
    }
    function verificarSeParticipanteEstaAprovado(email){
        //implemente o código necessário
        var participante = obterParticipante(email);
        if(participante)
            return participante.aprovado;        
    }
    function obterQuantidadeDeParticipantesPorSexo(sexo){
        //implemente o código necessário
        var resultado = buscarParticipantesPorSexo(sexo);
        return resultado.length;
    } 
	

    return {
        adicionarParticipante,
        removerParticipante,
		atualizarParticipante,
        buscarParticipantesPorNome,
        buscarParticipantesPorSexo,
        buscarParticipantesAprovados,
        buscarParticipantesReprovados,
        obterParticipante,
        obterParticipantes,
        adicionarNotaAoParticipante,
        obterMediaDasIdadesDosParticipantes,
        obterTotalDeParticipantes,
        verificarSeParticipanteEstaAprovado,
        obterQuantidadeDeParticipantesPorSexo        
    };
}