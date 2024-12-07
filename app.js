let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}


function mensagemInicial(){
    exibirTextoNaTela('h1', 'jogo do número secreto');
    exibirTextoNaTela('p', `escolha um número entre 1 e ${numeroMaximo}`);
}

mensagemInicial();

//função de verificar chute
function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
    let mensagemTentativa = `você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        chute > numeroSecreto ? exibirTextoNaTela('p', 'o número secreto é menor') :
        exibirTextoNaTela('p', 'o número secreto é maior');
        tentativas++;
        limparCampo();
    }
   
}

function limparCampo(){
    campo = document.querySelector('input');
    campo.value = '';
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    console.log(listaDeNumerosSorteados);
    if(quantidadeDeElementosNaLista == numeroMaximo){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function novoJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    mensagemInicial();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}