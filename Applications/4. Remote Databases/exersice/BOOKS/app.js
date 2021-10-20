const htmlSelectors = {
    'loadBooks': () => document.getElementById('loadBooks'),
    'createBtn': () => document.querySelector('#create-form > button'),
    'createTitleInput': () => document.getElementById('create-title'),
    'createAuthorInput': () => document.getElementById('create-author'),
    'createIsbnInput': () => document.getElementById('create-isbn'),
    'booksContainer': () => document.querySelector('table > tbody'),
    'errorContainer': () => document.getElementById('error-notification'),
    'editForm': () => document.getElementById('edit-form'),
    'editBtn': () => document.querySelector('#edit-form > button'),
    'editTitleInput': () => document.getElementById('edit-title'),
    'editAuthorInput': () => document.getElementById('edit-author'),
    'editIsbnInput': () => document.getElementById('edit-isbn'),
    'deleteBtn': () => document.getElementById
}
htmlSelectors['loadBooks']()
    .addEventListener('click', fetchAllBooks)
htmlSelectors['createBtn']()
    .addEventListener('click', createBook)
htmlSelectors['editBtn']()
    .addEventListener('click', editBook)

function fetchAllBooks() {
    fetch('https://books-exersice-default-rtdb.europe-west1.firebasedatabase.app/Books/.json')
        .then(res => res.json())
        .then(renderBooks)
        .catch(handleError)

}

function renderBooks(booksData) {
    const booksContainer = htmlSelectors['booksContainer']();
    if (booksContainer.innerHTML != '') {
        booksContainer.innerHTML = ''
    }

    Object
        .keys(booksData)
        .forEach(bookId => {
            const { title, author, isbn } = booksData[bookId];
            const tableRow = createDOMElement('tr', '', {}, {},
                createDOMElement('td', title, {}, {}),
                createDOMElement('td', author, {}, {}),
                createDOMElement('td', isbn, {}, {}),
                createDOMElement('td', '', {}, {},
                    createDOMElement('button', 'Edit', { 'data-key': bookId }, { click: loadBookById }),
                    createDOMElement('button', 'Delete', { 'data-key': bookId }, { click: deleteBook })));

            booksContainer.appendChild(tableRow)
        })
}

function createBook(e) {
    e.preventDefault();
    const titleInput = htmlSelectors['createTitleInput']();
    const authorInput = htmlSelectors['createAuthorInput']();
    const isbnInput = htmlSelectors['createIsbnInput']();

    if (titleInput.value !== '' && authorInput.value !== '' && isbnInput.value !== '') {
        const initObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: titleInput.value, author: authorInput.value, isbn: isbnInput.value })
        }
        fetch('https://books-exersice-default-rtdb.europe-west1.firebasedatabase.app/Books/.json', initObj)
            .then(fetchAllBooks)
            .catch(handleError)

        titleInput.value = '';
        authorInput.value = '';
        isbnInput.value = '';
    } else {
        const error = { message: '' };
        if (titleInput.value === '') {
            error.message += 'What\'s the title? '
        }
        if (authorInput.value === '') {
            error.message += 'What\'s the author? '
        }
        if (isbnInput.value === '') {
            error.message += 'What\'s the ISBN? '
        }
        handleError(error);
    }

}

function loadBookById() {
    const id = this.getAttribute('data-key')
    fetch(`https://books-exersice-default-rtdb.europe-west1.firebasedatabase.app/Books/${id}.json`)
        .then(res => res.json())
        .then(({ title, author, isbn }) => {
            htmlSelectors['editTitleInput']().value = title;
            htmlSelectors['editAuthorInput']().value = author;
            htmlSelectors['editIsbnInput']().value = isbn;
            htmlSelectors['editForm']().style.display = 'block';
            htmlSelectors['editBtn']().setAttribute('data-key', id)

        })
        .catch(handleError)
}

function editBook(e) {
    e.preventDefault();
    const titleInput = htmlSelectors['editTitleInput']();
    const authorInput = htmlSelectors['editAuthorInput']();
    const isbnInput = htmlSelectors['editIsbnInput']();

    if (titleInput.value !== '' && authorInput.value !== '' && isbnInput.value !== '') {
        const id = this.getAttribute('data-key');
        const initObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: titleInput.value, author: authorInput.value, isbn: isbnInput.value })
        }
        htmlSelectors['editForm']().style.display = 'none';
        fetch(`https://books-exersice-default-rtdb.europe-west1.firebasedatabase.app/Books/${id}/.json`, initObj)
            .then(fetchAllBooks)
            .catch(handleError)

    } else {
        const error = { message: '' };
        if (titleInput.value === '') {
            error.message += 'What\'s the title? '
        }
        if (authorInput.value === '') {
            error.message += 'What\'s the author? '
        }
        if (isbnInput.value === '') {
            error.message += 'What\'s the ISBN? '
        }
        handleError(error);
    }

}
function deleteBook() {

    const id = this.getAttribute('data-key')
    const initObj = {
        method: 'DELETE'
    }
    fetch(`https://books-exersice-default-rtdb.europe-west1.firebasedatabase.app/Books/${id}/.json`, initObj)
        .then(fetchAllBooks)
        .catch(handleError)
}
function handleError(err) {
    const errorContainer = htmlSelectors['errorContainer']();
    errorContainer.style.display = 'block';
    errorContainer.textContent = err.message;

    setTimeout(() => {
        errorContainer.style.display = 'none';
    }, 5000)
}
function createDOMElement(type, text, attributes, events, ...children) {
    const domElement = document.createElement(type);

    if (text !== '') {
        domElement.textContent = text;
    }
    Object.entries(attributes)
        .forEach(([attrKey, attrValue]) => {
            domElement.setAttribute(attrKey, attrValue)
        })


    Object.entries(events)
        .forEach(([eventName, eventHandler]) => {
            domElement.addEventListener(eventName, eventHandler)
        })

    children.forEach((child) => {
        domElement.appendChild(child)
    })
    return domElement
}
