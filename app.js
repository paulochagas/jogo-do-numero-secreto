let listaDeNumerosSorteados = [];
let limiteNumero = 10;
let numeroSecreto = gerarNumeroAleatorio(limiteNumero);
let tentativas = 1;
console.log(`numeroSecreto ${numeroSecreto}`);
console.log(`Numeros ja escolhidos: ${listaDeNumerosSorteados}`);

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML =  texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', `Escolhar um número entre 1 e ${limiteNumero}`);

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolhar um número entre 1 e 10');
    
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute==numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let mensagemTentativas = `Voce descobriu o texto secreto com ${tentativas} tentativa` ;
        mensagemTentativas += tentativas == 1 ? '!' : 's!';
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        let mensagemErro = (chute > numeroSecreto) ? 'O numero secreto é menor' : 'O numero secreto é maior';
        exibirTextoNaTela('p',mensagemErro);
        limparCampo();
    }
    tentativas++;

}

function gerarNumeroAleatorio(limiteNumero) {
    let numeroEscolhido = parseInt(Math.random() * limiteNumero + 1);
    if (listaDeNumerosSorteados == limiteNumero) {listaDeNumerosSorteados = [];}
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(limiteNumero);
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }

    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio(limiteNumero);
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    console.log(`numeroSecreto ${numeroSecreto}`);
    console.log(`Numeros ja escolhidos: ${listaDeNumerosSorteados}`);
    document.getElementById('reiniciar').setAttribute('disabled',true);

}