
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

function readJSON(usuario, usuario) {
    //var file = "../json/users.json"
    var file = "https://wilton-filho.github.io/JS-GitHub/aulas/jogo/login/json/users2.json"
    fetch(file)
        .then(response => response.json())
        .then(content => checkUser(content, usuario, usuario))
        .catch(err => console.log("erro na leitura do JSON"));
}

function checkUser(content, user, password){
    var achou = false
    for(i=0; i<content.users.length(); i++){
        if((content.users[i].user == user) && (content.users[i].pwd == password)){
            achou = true;
            break;
        }
    }
    if(achou){
        alertWifi("Login realizado com sucesso! Uhuuuul!", false, 0, "../img/toupeira.gif",30)
    } else {
        alertWifi("Usuário inválido, insira um usuário válido", false, 0, "../img/toupeira.gif",30)
    }          
}