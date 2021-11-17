
import firebaseApp from "./firebase.js";
import {
    getFirestore,
    addDoc,
    collection
} from "@firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "@firebase/auth";

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);



const router = Sammy('#main', function () {

    this.use('Handlebars', 'hbs')

    this.get('/home', function (context) {
        const userInfo = localStorage.getItem('userInfo');

        if (userInfo) {
            const { uid, email } = JSON.parse(userInfo)
            context.loggedIn = true;
            context.email = email;
        }
        loadPartials(context).then(function () {
            this.partial('../templates/home/home.hbs')
        })
    });
    this.get('/about', function (context) {
        const userInfo = localStorage.getItem('userInfo');

        if (userInfo) {
            const { uid, email } = JSON.parse(userInfo)
            context.loggedIn = true;
            context.email = email;
        }
        loadPartials(context).then(function () {
            this.partial('../templates/about/about.hbs')
        })
    });

    this.get('/catalog', function (context) {
        const userInfo = localStorage.getItem('userInfo');

        if (userInfo) {
            const { uid, email } = JSON.parse(userInfo)
            context.loggedIn = true;
            context.email = email;
            context.hasNoTeam = true;
        }
        this.loadPartials({
            'header': '../templates/common/header.hbs',
            'footer': '../templates/common/footer.hbs',
            'team': '../templates/catalog/team.hbs'
        }).then(function () {
            this.partial('../templates/catalog/teamCatalog.hbs')
        })
    });
    this.get('/create', function (context) {
        const userInfo = localStorage.getItem('userInfo');

        if (userInfo) {
            const { uid, email } = JSON.parse(userInfo)
            context.loggedIn = true;
            context.email = email;

        }
        this.loadPartials({
            'header': '../templates/common/header.hbs',
            'footer': '../templates/common/footer.hbs',
            'createForm': '../templates/create/createForm.hbs'
        }).then(function () {
            this.partial('../templates/create/createPage.hbs');
        })
    });

    this.get('/login', function () {
        this.loadPartials({
            'header': '../templates/common/header.hbs',
            'footer': '../templates/common/footer.hbs',
            'loginForm': '../templates/login/loginForm.hbs'
        }).then(function () {
            this.partial('../templates/login/loginPage.hbs')
        })
    });
    this.get('/logout', function (context) {
        signOut(auth)
            .then((res) => {
                localStorage.removeItem('userInfo')
                context.redirect('/home')
            })
            .catch((e) => console.log(e))
    })
    this.get('/register', function () {
        this.loadPartials({
            'header': '../templates/common/header.hbs',
            'footer': '../templates/common/footer.hbs',
            'registerForm': '../templates/register/registerForm.hbs'
        }).then(function () {
            this.partial('./templates/register/registerPage.hbs')
        })
    });



    //POST

    this.post('/register', function (context) {
        const { email, password, repeatPassword } = context.params;
        if (password !== repeatPassword) {
            let err = document.querySelector('#errorBox')
            err.textContent = 'Passwords doesn\'t match!'
            err.style.display = 'block';
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // console.log(userCredential.user);
                this.redirect('/login')
            })
            .catch((error) => console.log(error))

    })
    this.post('/login', function (context) {
        const { email, password } = context.params;
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user: { uid, email } }) => {
                localStorage.setItem('userInfo', JSON.stringify({ uid, email }));
                context.redirect('/home')
            })
            .catch((e) => console.log(e))
    });
    // post for create form page 

});
(() => {
    router.run('/home');
})();

function loadPartials(context) {
    return context.loadPartials({
        'header': '../templates/common/header.hbs',
        'footer': '../templates/common/footer.hbs'
    })
}

/// TO FINISH 