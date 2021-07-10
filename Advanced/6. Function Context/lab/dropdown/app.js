function solve() {
    let btn = document.querySelector('button');
    let ul = document.getElementById('dropdown-ul');
    let box = document.getElementById('box');

    btn.addEventListener('click', e => {
        let toggledDisplay = ul.style.display != 'block' ? 'block' : 'none';

        if (toggledDisplay == 'none') {
            box.style.backgroundColor = 'black';
            box.style.color = 'white';
        }

        ul.style.display = toggledDisplay;


    });

    ul.addEventListener('click', e => {
        box.style.backgroundColor = e.target.textContent;
        box.style.color = 'black';
    })
} 