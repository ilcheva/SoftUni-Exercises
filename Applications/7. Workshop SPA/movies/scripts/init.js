

function addEventListeners() {
    let navigationTemplate = Handlebars.compile(document.getElementById('navigation-template').innerHTML)
    let movieCardTemplate = Handlebars.compile(document.getElementById('movie-card-template').innerHTML)

    Handlebars.registerPartial('navigation-template', navigationTemplate)
    Handlebars.registerPartial('movie-card', navigationTemplate)
    navigate('home')

}

function navigateHandler(e) {
    {
        e.preventDefault()
        if (e.target.tagName != 'A') {
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
function onAddMovieSubmit(e) {
    e.preventDefault()
    let formData = new FormData(document.forms['add-movie-form'])
    let title = formData.get('title');
    let description = formData.get('description');
    let imgUrl = formData.get('imageUrl');
    movieService.add({
        title,
        description,
        imgUrl,
    })
        .then(res => {
            navigate('home')
        })
}
addEventListeners()