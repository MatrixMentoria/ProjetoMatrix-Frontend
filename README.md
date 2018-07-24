# ProjetoMatrix-Frontend
Exercicio para o Projeto Matrix terceira edição - Fase de nivelamento


O Projeto Matrix precisa de um sistema para gerenciar os participantes e suas notas.
O cadastro dos alunos tem os seguintes campos: nome, sobrenome, email, idade, sexo, nota e se está aprovado.

Tipo de dados de cada campo:
nome, sobrenome e email: String
idade, sexo e nota: Number (sexo deve ser 1 - Masculino, 2 - Feminino)
aprovado: Boolean

Os dados serão armazenados em um Array.
Nesse sistema, os mentores irão adicionar e remover participantes.
Para procurar os participantes, serão feitas buscas dentro do array e deve-se buscar por:
- nome
- email
- sexo
- aprovados | reprovados

*email é a chave primária. Não pode haver dois cadastros com o mesmo email.
No caso do mentor tentar adicionar um participantes duplicado, o sistema deve lançar um erro, informando que já existe um participante com o email em questão dentro da base.

O participante é representado por um Objeto em JavaScript, como mostra o exemplo:

var participante = {
	nome: "João",
	sobrenome: "Mendes",
	idade: 56,
	sexo: 1,
	nota: 90,
	aprovado: true
}

Tópicos que serão trabalhados nesse exercicio:
Criação de funções;
Trabalhar com objetos (criação, instancia, definir propriedades);
Operações com Array (inserir, remover, buscar, somar algum valor, ordenar, ordenar por valores especificos);
Modularização: (retornar objetos com funções e propriedades);

O código já foi iniciado e agora você deve termina-lo.
Faça um fork do repositório https://github.com/UnicariocaDev/ProjetoMatrix-Frontend e edite o arquivo sistema.js.
Utilize os testes unitários (tests.js) para garantir que a implementação esteja funcionando e crie outros testes adicionais para o restante das funcionalidades se julgar necessário.

Avisos
- Não altere o nome das funções e nem das propriedades do Objeto;
- Não apague os testes unitários;
- Código que não tiver teste perdera pontos;
- Essa é a parte 1 do exercício, sendo assim, quem não fizer essa parte não conseguirá fazer a parte 2.

