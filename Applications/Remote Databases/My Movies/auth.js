// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBpV_PItJOt-tNm9JH-NbFznnApRg4Ceq4",
    authDomain: "my-movies-a0d70.firebaseapp.com",
    projectId: "my-movies-a0d70",
    storageBucket: "my-movies-a0d70.appspot.com",
    messagingSenderId: "884117762905",
    appId: "1:884117762905:web:9a4d50772e4720708c9248",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

let btn = document.getElementById("login-button");
btn.addEventListener("click", onUserLogin);

function onUserLogin(e) {

    let userName = document.getElementById("username");
    let password = document.getElementById("password");
    let subHeader = document.getElementById("sub-header");
    let loginFrom = document.querySelector(".login-form");

    auth.signInWithEmailAndPassword(userName.value, password.value)
        .then((res) => {
            console.log("Successfully login");
            subHeader.innerText = `Hello ${res.user.email}`;
            loginFrom.style.display = "none";
        })
        .catch((err) => {
            console.log("err:", err);
        });
}
