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
        const email = document.getElementById('email').value
        const password = document.getElementById('senha').value
        const nome = document.getElementById('nome').value
        const telefone = document.getElementById('telefone').value
        const cep = document.getElementById('cep').value
        const endereco = document.getElementById('endereco').value

        firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
                window.location.href = '../../Medidas.html'
            }

        ).catch(error => {
            alert(getErrorMessage(error));

        })
    }

    function getErrorMessage(error) {

        return error.message;
    }