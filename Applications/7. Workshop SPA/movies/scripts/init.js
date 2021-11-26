

function addEventListeners() {
    let navigationTemplate = Handlebars.compile(document.getElementById('navigation-template').innerHTML)
    Handlebars.registerPartial('navigation-template', navigationTemplate)
    navigate('home')
    
}

function navigateHandler(e) {
    {
        e.preventDefault()
        if (!e.target.classList.contains('nav-link')) {
            return
        }
        let url = new URL(e.target.href)

        navigate(url.pathname.slice(1))
    }
}

function onLoginSubmit(e) {
    e.preventDefault()
    let formData = new FormData(document.forms['login']);

    let email = formData.get('email');
    let password = formData.get('password');

    authService.login(email, password)
        .then(data => {
            navigate('home')
        })
}
addEventListeners()