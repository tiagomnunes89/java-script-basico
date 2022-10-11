/*function validate() {
    caixaTxt = document.getElementById("txtNome"); 
    if (caixaTxt.value = "")
        alert("Nome vazio! Favor informá-lo.");
    else
        alert("Dados cadastrados com sucesso!");

//(!caixaTxt.value)?alert("Nome vazio!"): alert("Sucesso!");
}

function validate(){
    txtNome = document.getElementById("txtNome")
    if (!txtNome.value){
        document.getElementById("errorNome").innerHTML = "Nome inválido. Tente novamente!"
        txtNome.focus
    } else {
        cleanErrorNomeMsg()
        validateEnd()
    }
}

function cleanErrorNomeMsg() {
    document.getElementById("errorNome").innerHTML = ''
}

function cleanErrorEndMsg() {
    document.getElementById("errorEndereco").innerHTML = ''
}

function validateEnd(){
    txtEndereco = document.getElementById("txtEndereco")
    if(!txtEndereco.value) {
        document.getElementById("errorEndereco").innerHTML = "Endereço inválido. Tente novamente!"
        txtEndereco.focus
    }
}*/

function validate() {
    tipos = ["TEXT","NUMBER","TEL"];
    //inputs = document.querySelectorAll("input:required:not([type='button'])")
    inputs = document.getElementsByTagName("input");//5 inputs
    for (i=0; i<inputs.length; i++) {
        if (tipos.includes(inputs[i].type.toUpperCase()))
             if(inputs[i].value == "" || inputs[i].value == 0){
                document.getElementById(`${inputs[i].name}ERROR`).innerHTML = `${inputs[i].name} está em branco. Tente novamente!`;
             } else {
                document.getElementById(`${inputs[i].name}ERROR`).innerHTML = ``;
             }
    }
}

function cleanError(){
    validate()
    tipos = ["TEXT","NUMBER","TEL"];
    //inputs = document.querySelectorAll("input:required:not([type='button'])")
    inputs = document.getElementsByTagName("input");//5 inputs
    for (i=0; i<inputs.length; i++) {
        if (tipos.includes(inputs[i].type.toUpperCase()) && (inputs[i].value != "") && (inputs[i].value != 0))
            document.getElementById(`${inputs[i].name}ERROR`).innerHTML = ``;
    }
}