const numeroSenha = Document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const LetrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LetrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorALL('.parametro-senha__botao');
const camposenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorALL('.checkbox');
const forcaSenha = document.querySelector('forca');

botoes[0].onclick = diminuiTamanho
botoes[1].oncilck = aumentaTamanho

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        //tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;

    }
    numeroSenha.textContent = tamanhoSenha;
    gerarSenha();
}
function aumentaTamanho() {
    if  (tamanhoenha <20) {
    //tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
}
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

for (i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = geraSenha;
}
geraSenha();

function geraSenha() {
    let alfabeto = '';
    if (cehckbox[0].checked) {
        alfabeto = alfabeto + LetrasMaiusculas;
    }

    if (checkbox[1].checked) {
        alfabeto = alfabeto + letrasMinusculas;

    }
    if (checkbox[2].checked) {
        alfabeto = alfabeto + numeros;
    }
    if(checkbox[3].checked) {
        alfabeto = alfabeto + simbolos;
    }
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor[numeroAleatorio];
        senha = senha = alfabeto[numeroAleatorio];
    }
    camposenha.value = senha;
    classificaSenha(alfabeto.length);

}

function classificaSenha(tamanhoAlfabeto){
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    console.log(entropia);
    forcaSenha.classList.remove('fraca','media','forte');
    if (entropia > 57){
        forcaSenha.classList.add('Forte');
    } else if (entropia > 35 && entropia < 57 ) {
        forcaSenha.classList.add('media');
    }
}