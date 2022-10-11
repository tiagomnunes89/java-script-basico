function enviar(){
}

function exibirFalasPN(){
    nroFalas = document.getElementById("txtFalas").value
    document.getElementById("falasPN").innerHTML = ""
    for(i=0; i<nroFalas; i++){
        document.getElementById("falasPN").innerHTML += "Ho Ho Ho Feliz Natal! <br>"
    }
    
}
    
function analisarTxt(){
    txt = document.getElementById("txtInfo").value

    //Obten as palavras do texto
    vetPalavras = txt.split(" ")

    // 3) Total palavras no texto
    document.getElementById("txtTotalPal").innerHTML = vetPalavras.length

    // 4) Palavras iniciadas com a letra M:

    for(i=0; i<vetPalavras.length; i++){
        if(vetPalavras[i].charAt(0).toUpperCase() == M){
            document.getElementById("txtPalLetraM").innerHTML += palavra + " "
        }
    }

    // 5) Primeira palavra
    document.getElementById("primPalavra").innerHTML = vetPalavras[0];

    
    // 5) Primeira Segunda
    document.getElementById("segPalavra").innerHTML = vetPalavras[2];

    // 5) Primeira Segunda
    document.getElementById("ultimaPalavra").innerHTML = vetPalavras[vetPalavras.length];

}

function gravaValor () {
    value = document.getElementById("txtInfo").value
    localStorage.setItem("text",value)
    window.open('analisarTxt.html', '_self')
}

function getTextHome() {
    document.getElementById("txtHome").innerHTML = localStorage.getItem("text")
    
}