function mostrarMsg(mensagem){
    alert(mensagem)
}

function lerInfo(){
    valor = document.getElementById("txtValor").value
    alert(valor);
}

function escreverInfo(){
    valor = document.getElementById("txtValor").value = "IFTM"
}

function escreverDobro(){
    valor = parseInt(document.getElementById("txtValor").value)
    document.getElementById("txtDobro").value = valor * 2
}

function validar(){
    senha = document.getElementById("password")
    confSenha = document.getElementById("passwordConfirm")

    if(senha.value == ""){
        alert("Senha está em branco. Favor informá-la!")
        senha.focus()
    }

    else if(confSenha.value == ""){
        alert("Confirmar senha está em branco. Favor informá-la!")
        confSenha.focus()
    }

    else if (senha.value != confSenha.value){
        alert("As senhas não conferem! Tente novamente")
        senha.focus()
    }

    else {
        alert("As senhas iguais! Logado") 
    }
}