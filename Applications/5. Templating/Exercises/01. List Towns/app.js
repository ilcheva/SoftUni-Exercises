const elements = {
    input: () => document.querySelector('input#towns'),
    button: () => document.querySelector('button#btnLoadTowns'),
    root: () => document.querySelector('div#root'),
}
elements.button().addEventListener('click', getInputInfo)



function getInputInfo(e) {
    e.preventDefault()
    const { value } = elements.input();
    const towns = value.split(/[, ]+/g).map((t) => { return { name: t } })
    appentTowns(towns);

}
function appentTowns(towns) {
    getTemplate()
        .then((templateSource) => {
            const template = Handlebars.compile(templateSource);
            const htmlResult = template({ towns })
            elements.root().innerHTML = htmlResult
        })
        .catch((e) => console.error)
}

function getTemplate() {
    return fetch('./template.hbs').then(r => r.text());
}