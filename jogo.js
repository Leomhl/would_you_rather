var opcao = 0;
document.querySelector('#btnVoltar').children[0].innerHTML = '';

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

var percentualBtn1 = 0;
var percentualBtn2 = 0;
var clicou = false;

function gerarPergunta() {
	// Primeiro filho da div btn1 

	var opcao1 = opcoes[opcao].opcao1;
	var opcao2 = opcoes[opcao].opcao2;

	document.querySelector('#opcao1').innerHTML = opcao1;
	document.querySelector('#opcao2').innerHTML = opcao2;
}

document.querySelector('#btnVoltar').addEventListener('click', function(){

	clicou = false;

	if(opcao > 0) {
		opcao -= 1;

		// Ocultar
		document.getElementsByClassName("resultado")[0].style.display = 'none';
		document.getElementsByClassName("resultado")[1].style.display = 'none';

		if(opcao == 0)
			document.querySelector('#btnVoltar').children[0].innerHTML = '';

		if(opcoes.length - 1 != opcao) 
			document.querySelector('#btnAvancar').children[0].innerHTML = 'Avançar';


		gerarPergunta();
	} 
});

function exibirPercentuais() {
	percentualBtn1 = Math.floor(Math.random() * 101);
	percentualBtn2 = 100 - percentualBtn1;

	if(!clicou) { // se clicou for falso (true negado)

		// Carregamos os valores no html
		document.querySelector("#percentualBtn1").innerHTML = percentualBtn1+'%';
		document.querySelector("#percentualBtn2").innerHTML = percentualBtn2+'%';

		// Exibir
		document.getElementsByClassName("resultado")[0].style.display = 'initial';
		document.getElementsByClassName("resultado")[1].style.display = 'initial';

		// Se for true, vira false.
		// Se for false, vira true.
		clicou = !clicou;
	}

}

document.querySelector('#btn1').addEventListener('click', exibirPercentuais);
document.querySelector('#btn2').addEventListener('click', exibirPercentuais);

document.querySelector('#btnAvancar').addEventListener('click', function(){
	
	opcao += 1;
	clicou = false;

	// Ocultar
	document.getElementsByClassName("resultado")[0].style.display = 'none';
	document.getElementsByClassName("resultado")[1].style.display = 'none';

	if(opcao > 0)
		document.querySelector('#btnVoltar').children[0].innerHTML = 'Voltar';

	if(opcoes.length - 1 == opcao) 
		document.querySelector('#btnAvancar').children[0].innerHTML = '';

	gerarPergunta();
});

// Inicia o jogo
gerarPergunta();