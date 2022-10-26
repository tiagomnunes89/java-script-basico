
function login() {
    user = document.getElementById('user')
    pass = document.getElementById('pwd')

    if (!user.value) {
        alertWifi("Usuário está em branco, favor preenchê-lo", false, 0, "../img/toupeira.gif", 30)
        user.focus();
    }

    else if (!pass.value) {
        alertWifi("Senha está em branco, favor preenchê-la", false, 0, "../img/toupeira.gif", 30)
        pass.focus();
    }

    else {
        //alertWifi("Login realizado com sucesso! Uhuuuul!", false, 0, "../img/toupeira.gif",30)
        readJSON(user.value, pass.value)
    }
}

function readJSON(user, password) {
    //var file = '../json/users.json'
    var file = 'https://wilton-filho.github.io/JS-GitHub/aulas/jogo/login/json/users2.json'

    fetch(file)
        .then((response) => response.json())
        .then((data) => checkUser(data, user, password))
        .catch(err => {
            alertWifi("erro na leitura do JSON: " + err, false, 0, "../img/toupeira.gif", 30)
        })
}

function checkUser(data, user, password) {
    var achou = false
    for (i = 0; i < data.usuarios.length; i++) {
        if ((data.usuarios[i].user == user) && (data.usuarios[i].pwd == password)) {
            achou = true
            break
        }
    }
    if (achou) {
        alertWifi("Login realizado com sucesso! Uhuuuul!", false, 0, "../img/toupeira.gif", 30)
    } else {
        alertWifi("Usuário inválido, insira um usuário válido", false, 0, "../img/toupeira.gif", 30)
    }
}