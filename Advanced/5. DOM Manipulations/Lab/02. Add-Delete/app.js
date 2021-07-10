function addItem() {
    let itemsListElement = document.getElementById('items')
    let inputElement = document.getElementById('newText');

    let liElement = document.createElement('li');
    liElement.innerHTML = `${inputElement.value} `;

    let deleteElement = document.createElement('a');
    deleteElement.innerText = '[Delete]';
    liElement.appendChild(deleteElement);
    deleteElement.href = '#';

    deleteElement.addEventListener('click', function () {
        
        liElement.remove();
    })

    itemsListElement.appendChild(liElement);

    inputElement.value = '';
}