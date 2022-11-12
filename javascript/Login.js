function ValidarCampos() {
    const emailValid = emailValido();
    const passwordValid = senhaValida();

    document.getElementById('botao').disabled = !emailValid || !passwordValid; //botao desabilitado se o email não for válido


}

function emailValido() {

    const email = document.getElementById("email").value;

    if (!email) {
        return false;
    }


    return ValidarEmail(email);

}

function ValidarEmail(email) {

    return /\S+@\S+\.\S+/.test(email);

}

function senhaValida() {

    const senha = document.getElementById("senha").value;

    if (!senha) {
        return false;
    }

    return true;
}