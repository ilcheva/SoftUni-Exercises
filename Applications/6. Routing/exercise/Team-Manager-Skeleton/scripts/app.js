

const router = Sammy('#main', function () {

    this.use('Handlebars', 'hbs')

    this.get('/home', function (context) {
        loadPartials(context).then(function () {
            this.partial('../templates/home/home.hbs')
        })
    });

    this.get('/about', function (context) {
        loadPartials(context).then(function () {
            this.partial('../templates/about/about.hbs')
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

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })

    })

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