function redefinirSenha() {
    email = document.getElementById('email').value
    firebase.auth().sendPasswordResetEmail(email).then(() =>


        {
            alert('Email de recuperação enviado com sucesso!');


        }).catch(error => {

        alert('Usuário ainda não cadastrado no sistema')
    })


}

function ValidarRedefSenha() {
    const emailValido = emailValido2();

    document.getElementById('botao').disabled = !emailValido;

}

function emailValido2() {

    const email = document.getElementById("email").value;

    if (!email) {
        return false;
    }


    return ValidarEmail(email);

}


function ValidarEmail(email) {

    return /\S+@\S+\.\S+/.test(email);

}