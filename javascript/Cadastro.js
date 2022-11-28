function ValidarCampos() {
    const emailValid = emailValido();
    const passwordValid = senhaValida();
    const telefoneValid = telefoneValido();
    const cepValid = cepValido();
    const nomeValid = nomeValido();
    const enderecoValid = enderecoValido();


    document.getElementById('botao').disabled = !emailValid || !passwordValid || !telefoneValid || !cepValid || !nomeValid || !enderecoValid; //botao desabilitado se todos os campos não estiverem preenchidos


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

    if (!senha || senha < 6) {
        return false;
    }

    return true;
}

function telefoneValido() {

    const telefone = document.getElementById("telefone").value;

    if (!telefone) {
        return false;
    }

    return true;
}

function cepValido() {

    const cep = document.getElementById("cep").value;

    if (!cep) {
        return false;
    }

    return true;
}

function nomeValido() {

    const nome = document.getElementById("nome").value;

    if (!nome) {
        return false;
    }

    return true;
}

function enderecoValido() {

    const endereco = document.getElementById("endereco").value;

    if (!endereco) {
        return false;
    }

    return true;
}

function register() {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('senha').value
    nome = document.getElementById('nome').value
    telefone = document.getElementById('telefone').value
    cep = document.getElementById('cep').value
    endereco = document.getElementById('endereco').value


    // Move on with Auth
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function () {
            // Declare user variable
            var user = auth.currentUser

            // Add this user to Firebase Database
            var database_ref = database.ref()

            // Create User data
            var user_data = {
                email: email,
                nome: nome,
                telefone: telefone,
                cep: cep,
                endereco: endereco,
                last_login: Date.now()
            }

            // Push to Firebase Database
            database_ref.child('users/' + user.uid).set(user_data)

            // DOne
            alert('Usuário Criado!!')
        
            window.location.href = '../../Medidas.html'
        })
        .catch(function (error) {
            // Firebase will use this to alert of its errors
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}
