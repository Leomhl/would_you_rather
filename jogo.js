var opcao = 0;


var opcoes = [
	{
		opcao1: "Programar em Javascript",
		opcao2: "Programar em Php",
	},
	{
		opcao1: "Usar o sistema operacional Windows",
		opcao2: "Usar o sistema operacional Mac",
	},
	{
		opcao1: "Beber café",
		opcao2: "Beber suco",
	},
	{
		opcao1: "Colocar o dedo na fonte do computador ligada",
		opcao2: "Colocar o dedo na boca de um programador que não bebe café 2 semanas",
	},
];

function gerarPergunta() {
	// Primeiro filho da div btn1 

	var opcao1 = opcoes[opcao].opcao1;
	var opcao2 = opcoes[opcao].opcao2;

	document.querySelector('#btn1').children[0].innerHTML = opcao1;
	document.querySelector('#btn2').children[0].innerHTML = opcao2;
}

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