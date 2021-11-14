import monkeys from './monkeys.js';


const elements = {
    allMonkeys: () => document.querySelector('div.monkeys')
}
fetch('./monkey.hbs')
    .then((r) => r.text())
    .then((monkeysTemplateSrc) => {
        const monkeyTemplate = Handlebars.compile(monkeysTemplateSrc)
        let resultHtml = monkeyTemplate({ monkeys })
        elements.allMonkeys().innerHTML = resultHtml;
        attachEventListener();
    })
    .catch((e) => console.error(e))
function attachEventListener() {
    elements.allMonkeys().addEventListener('click', (e) => {
        const { target } = e;

        if (target.nodeName === 'BUTTON') {
            let infoParagraph = target.parentNode.querySelector('div.monkey > p')
            if (infoParagraph.style.display === 'none') {
                infoParagraph.style.display = 'block';
            } else {
                infoParagraph.style.display = 'none';
            }
        }
    })
}