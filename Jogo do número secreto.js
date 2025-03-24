alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao número secreto...
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
            // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } 

    // se chute for maior ou menor que o número secreto
    else {
        if (chute > numeroSecreto) {
            alert(`Errou! O número secreto é menor que ${chute}`);
        }

        else {
            alert(`Errou! O número secreto é maior que ${chute}`);
        }
        // tentativas = +1
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`PARABÉNS! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


// if (tentativas > 1) {
//      alert(`PARABÉNS! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//      alert(`PARABÉNS! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// } 