function solve() {
    let buttonElement = document.querySelector('#container button');
    let inputElements = document.querySelectorAll('#container input')
    let inputs = Array.from(inputElements);
    let [nameElement, ageElement, kindElement, ownerElement] = inputs;
    let adoptionUlElement = document.querySelector('#adoption ul');
    let adoptedUlElement = document.querySelector('#adopted ul');

    buttonElement.addEventListener('click', e => {
        e.preventDefault()

        if (!inputs.every(x => x.value)) {
            return;
        }
        if (!Number(ageElement.value)) {
            return;
        }
        let liElement = document.createElement('li')
        let pElement = document.createElement('p');
        let spanElement = document.createElement('span');
        let petButtonElement = document.createElement('button');

        pElement.innerHTML = `<strong>${nameElement.value}</strong> is a <strong>${ageElement.value}</strong> year old <strong>${kindElement.value}</strong>`
        spanElement.textContent = `Owner: ${ownerElement.value}`;
        petButtonElement.textContent = `Contact with owner`;

        liElement.appendChild(pElement);
        liElement.appendChild(spanElement);
        liElement.appendChild(petButtonElement);

        adoptionUlElement.appendChild(liElement);

        nameElement.value = '';
        ageElement.value = '';
        kindElement.value = '';
        ownerElement.value = '';

        petButtonElement.addEventListener('click', petButtonClick);

    });
    function petButtonClick(e) {
        let parent = e.currentTarget.parentElement;

        e.currentTarget.remove();

        let divElement = document.createElement('div');
        let inputElement = document.createElement('input');
        let takeItButtonElement = document.createElement('button');

        inputElement.setAttribute('placeholder', 'Enter your names')
        takeItButtonElement.textContent = 'Yes! I take it!'

        divElement.appendChild(inputElement);
        divElement.appendChild(takeItButtonElement);

        parent.appendChild(divElement);

        takeItButtonElement.addEventListener('click', onTakeItButtonClick)

    }
    function onTakeItButtonClick(e) {
        let parentButtonElement = e.currentTarget.parentElement;
        let liElement = parentButtonElement.parentElement;

        let newOwnerInputELement = liElement.querySelector('input');
        let ownerNameSpanELement = liElement.querySelector('span');
        
        let newOwnerName = newOwnerInputELement.value;
        
        if (!newOwnerName) {
            return;
        }
        
        ownerNameSpanELement.textContent = `New Owner: ${newOwnerName}`;
        
        adoptedUlElement.appendChild(liElement);

        parentButtonElement.remove();

        let checkedButtonElement = document.createElement('button');
        checkedButtonElement.textContent = 'Checked';

        liElement.appendChild(checkedButtonElement);


        checkedButtonElement.addEventListener('click', e => {
           e.currentTarget.parentElement
        })

    }
}

