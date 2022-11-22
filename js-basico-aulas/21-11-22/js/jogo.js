
var images = ['imgCircle','imgX']
var imgAtual = 0
//var matriz = [["","",""],["","",""],["","",""]]
var matriz

function criarMatriz() {
    matriz = new Array(3) //[_,_,_]
    matriz[i] = new Array(3)
}

function criarTabuleiro(){
    criarMatriz()
    for(var l= 0; l<3; l++){
        for(var c= 0; c<3; c++){
            var div = document.createElement("div")
            div.setAttribute("class","boxTabuleiro imgTabuleiro")
            div.setAttribute("id",`box${l}_${c}`)
            div.addEventListener("click",inserirImg)
            div.innerHTML=`box${l}_${c}` //mostra o id de cada caixa
            document.getElementById("tabuleiro").appendChild(div)
            matriz[l][c]=""
        }
    }
}
 
function inserirImg(event){
    //document.getElementById(evento.currentTarget.id).style.backgroundColor = "red";
    document.getElementById(event.currentTarget.id).classList.add(images[imgAtual])
    //document.getElementById(event.currentTarget.id).classList.add("imgCircle")

    // if(imgAtual >= 1){
    //     imgAtual=0
    // } else {
    //     imgAtual++
    // }
    vetIndices = evento.currentTarget.id.split("_")
    matriz[parserInt(vetIndices[0])][parserInt(vetIndices[1])] = imgAtual

    imgAtual >= 1 ? imgAtual = 0 : imgAtual++;

    checkGanhador()

}

function checkGanhador(){
    
}