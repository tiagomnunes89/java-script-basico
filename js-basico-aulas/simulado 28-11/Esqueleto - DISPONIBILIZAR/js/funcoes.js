function checkEmptyFields() {
    var nome = document.getElementById('nome')
    var idade = document.getElementById('idade')
    var passatempo = document.querySelector('#passatempo')

    if (!nome.value) {
        alert("Nome está em branco, favor preenchê-lo")
        nome.focus();
    }

    else if (!idade.value) {
        alert(`Idade está em branco, favor preenchê-la`)
        idade.focus();
    }

    else if (passatempo.value == 1) {
        alert(`Selecione um passatempo`)
    }
}

function validade(padrao, valor){
    return valor.test(padrao)
}