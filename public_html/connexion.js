function logIn() {
    var user = {
        "pseudo": $("#logPseudo").val(),
        "password": $("#logPassword").val()
    }
    $.ajax({
        type: "POST",
        url: "http://192.168.1.54:12001/verify",
        data: user,
        statusCode: {
            200: function (user) {
                chgpage(user);
            },
            401: function () {
                alert('Erreur dans la saisie de vos identifiants.');
            }
        }
    });
}

function chgpage(user){
    window.location.href = "http://localhost:8383/chat_code/index.html?" + user.pseudo;
}

function signIn() {
    var newUser = {
        "pseudo": $("#signInPseudo").val(),
        "password": $("#signInPassword").val()
    }
    $.ajax({
        type: "POST",
        url: "http://192.168.1.54:12001/signin",
        data: newUser,
        statusCode: {
            200: function () {
                alert('Vous venez de créer un compte.');
            },
            401: function () {
                alert('.');
            }
        }
    });
}