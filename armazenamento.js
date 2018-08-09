function Armazenamento(key){
    
    //iniciar Storage com um array vazio
    if(window.localStorage.getItem(key) === null)
        window.localStorage.setItem(key, "[]");

    function adicionar(item){
        //obtem os itens salvos
        var itens = deserializar();
        //guarda o item, observe que o armazenamento não sabe de que item se trata
        //poderia ser um Participante ou qualquer outro objeto. Só precisa mesmo ser um objeto.
        itens.push(item);
        //Guarda novamente o Array modificado
        serializar(itens);
    }

    function remover(propriedade, valor){
        var itens = deserializar();
        var indice = itens.findIndex((elemento) => {
            return elemento[propriedade] === valor;
        });
        itens.splice(indice, 1);
        serializar(itens);
    }

    function atualizar(item, propriedade) {
        //obtem os itens salvos        
        var itens = deserializar();
        //procura o indice do objeto que possui a propriedade igual ao do item que estou passando
        var indice = itens.findIndex((elemento) => {
            return elemento[propriedade] === item[propriedade]
        });
        //substitui o item. existem outras formas de fazer isso, abstraia
        itens[indice] = item;
        //Guarda novamente o Array modificado
        serializar(itens);
    }

    function obterItem(propriedade, valor) {
        var itens = deserializar();
        return itens.find((elemento) => {
             return elemento[propriedade] === valor; }
            );
    }

    function obterItens(propriedade, valor) {
        var itens = deserializar();
        return itens.find((elemento) => { 
            return elemento[propriedade] === valor; 
        })
    }

    function obterTodosOsItens(){
        return deserializar();
    }

    function deserializar(){
        var itensSerializados = window.localStorage.getItem(key);
        return JSON.parse(itensSerializados);
    }

    function serializar(itens){
        var itensSerializados = JSON.stringify(itens);
        window.localStorage.setItem(key, itensSerializados);
    }

    return {
        adicionar,
        remover,
        atualizar,
        obterItem,
        obterItens,
        obterTodosOsItens
    };
}