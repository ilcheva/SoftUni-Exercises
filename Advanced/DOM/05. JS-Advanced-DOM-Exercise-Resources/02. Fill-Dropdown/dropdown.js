function addItem() {
    let text = document.getElementById('newItemText');
    let data = document.querySelector('#newItemValue');

    let select = document.getElementById('menu');

    let option = document.createElement('option');
    option.value = data.value;
    option.innerText = text.value;

    select.appendChild(option);
    text.value = '';
    data.value = '';
}