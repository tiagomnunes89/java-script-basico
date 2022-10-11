
var idCron1
var idCronSlide
var contador = 0
var slidePos = 0

//var vetImagens = ["xiaomi.jpg", "samsung.jpg", "iphone.jpg"]
//var vetDescriptions = ["Esse é o Xiaomi!", "Esse é o Samsung!", "Esse é o iPhone!"]

var slideShow = [{ img: "xiaomi.jpg", nome: "Xiaomi", descricao: "Esse é o Xiaomi!", valor: "R$ 2.500,00" },
{ img: "samsung.jpg", nome: "Samsung", descricao: "Esse é o Samsung!", valor: "R$ 4.000,00" },
{ img: "iphone.jpg", nome: "iPhone", descricao: "Esse é o iPhone!", valor: "R$ 5.500,00" }]


function playSlide() {
    idCronSlide = setInterval(mudarImg, 1000)
}

function mudarImg() {
    slidePos++
    if (slidePos > slideShow.length - 1) slidePos = 0
    document.getElementById("slideShow").src = `img/${slideShow[slidePos].img}`
    document.getElementById("nome").innerHTML = slideShow[slidePos].nome
    document.getElementById("descricao").innerHTML = slideShow[slidePos].descricao
    document.getElementById("valor").innerHTML = slideShow[slidePos].valor
}

function pausarSlide() {
    clearInterval(idCronSlide)
}

function play() {
    //setTimeout executa uma função após determinado intervalo de tempo em milissegundos
    //setTimeout(incrementar,3000)

    //setInterval executa várias vezes em um intervalo contínuo
    idCron1 = setInterval(incrementar, 1000)

    statusBtns(true, false, false)
}

function incrementar() {
    document.getElementById("cont").innerHTML = ++contador
}

function playMessage() {
    //setTimeout executa uma função após determinado intervalo de tempo em milissegundos
    setTimeout(setMessage, 2000)
}

function setMessage() {
    alert("Hello, World!")
}

function pausar() {
    clearInterval(idCron1)
    statusBtns(false, true, false)
}

function parar() {
    pausar()
    contador = 0
    document.getElementById("cont").innerHTML = contador
    statusBtns(false, true, true)
}

function statusBtns(statusPlay, statusPause, statusStop) {
    document.getElementById("btnPlay").disabled = statusPlay
    document.getElementById("btnPause").disabled = statusPause
    document.getElementById("btnStop").disabled = statusStop
}
