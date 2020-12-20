var opcao = 0;


var opcoes = [
	{
		opcao1: "Programar para sempre em Javascript",
		opcao2: "Programar para sempre em Php",
	},
	{
		opcao1: "Usar sempre o sistema operacional Windows",
		opcao2: "Usar sempre o sistema operacional Mac",
	},
	{
		opcao1: "Somente beber café",
		opcao2: "Somente beber suco",
	},
	{
		opcao1: "Colocar o dedo na fonte do computador ligada",
		opcao2: "Colocar o dedo na boca de um programador que não bebe café 2 semanas",
	},
	{
		opcao1: "Ir para o passado e encontrar todos os seus ancestrais e depois voltar para o presente",
		opcao2: "Ir para o futuro e encontrar todos os seus descendentes e depois voltar",
	},
	{
		opcao1: "Qualquer coisa que você beber te dará mais cede",
		opcao2: "Qualquer coisa que você comer te dará mais fome",
	},
	{
		opcao1: "Ter muita influência bélica",
		opcao2: "Ter muita influência econômica",
	},
	{
		opcao1: "Perder a visão e ficar muito inteligente",
		opcao2: "Poder ver e ser muito ignorante",
	},
	{
		opcao1: "Ter muito dinheiro e viver apenas mais 2 anos",
		opcao2: "Seu sustento depender de você e viver para sempre",
	},
	{
		opcao1: "friends",
		opcao2: "The Office",
	},
	{
		opcao1: "Viver só em uma ilha paradisíaca",
		opcao2: "Viver em sociedade na Antartica",
	},
	{
		opcao1: "Morar em outro pais e nunca poder retornar ao Brasil",
		opcao2: "Nunca poder sair do Brasil",
	},
	{
		opcao1: "Saber quando você vai morrer",
		opcao2: "Saber como você vai morrer",
	},
	{
		opcao1: "Poder saber o que as outras pessoas estão pensando",
		opcao2: "Poder teletransportar",
	},
	{
		opcao1: "Sempre falar a verdade",
		opcao2: "Sempre mentir",
	},
	{
		opcao1: "Libertarianismo",
		opcao2: "Facismo",
	},
	{
		opcao1: "ANCAP",
		opcao2: "Comunismo",
	},
	{
		opcao1: "Mostrar para seus amigos e família todo seu histórico na internet",
		opcao2: "Morrer",
	},

];

function gerarPergunta() {
	// Primeiro filho da div btn1 

	var opcao1 = opcoes[opcao].opcao1;
	var opcao2 = opcoes[opcao].opcao2;

	document.querySelector('#btn1').children[0].innerHTML = opcao1;
	document.querySelector('#btn2').children[0].innerHTML = opcao2;
}

document.querySelector('#voltar').addEventListener('click', function(){
	opcao -= 1;
	gerarPergunta();
});

document.querySelector('#btn1').addEventListener('click', function(){
	opcao += 1;
	gerarPergunta();
});

document.querySelector('#btn2').addEventListener('click', function(){
	opcao += 1;
	gerarPergunta();
});

document.querySelector('#btnPular').addEventListener('click', function(){
	opcao += 1;
	gerarPergunta();
});

// Inicia o jogo
gerarPergunta();


// Para a próxima aula: deixar menos feio
// colocar um gerador de % aleatórias
// Sorteador de pergunta (em vez de uma ordem sequencial)
// Colocar borda arredondada
// dar espaço entre os botões (grid)


// Dever de casa: criar mais perguntas