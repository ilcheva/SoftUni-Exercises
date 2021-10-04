document.getElementById('register-btn')
    .addEventListener('click', registerUser)

document.getElementById('login-btn')
    .addEventListener('click', loginUser)

document.getElementById('logout-btn')
    .addEventListener('click', logOut)


function registerUser(e) {
    e.preventDefault();
    const emailInput = document.querySelector('#register-form input[name="email"]')
    const passwordInput = document.querySelector('#register-form input[name="psw"]')

    if (emailInput.value != '' && passwordInput.value.length >= 6) {
        firebase.auth().createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
            .then(data => console.log(data))
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
    }
}
function loginUser(e) {
    e.preventDefault();
    const emailInput = document.querySelector('#login-form input[name="email"]')
    const passwordInput = document.querySelector('#login-form input[name="psw"]')
    firebase.auth().signInWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(data => console.log(data))
        .catch(function (error) {

            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
}
function logOut() {
    firebase.auth().signOut()
        .then(() => console.log('LogOut!'))
        .catch(console.error())
}