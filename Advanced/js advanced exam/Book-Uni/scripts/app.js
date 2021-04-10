function solve() {
    let allinputElements = Array.from(document.querySelectorAll('input'));
    let [bookInput, yearInput, priceInput] = allinputElements;
    let addButton = document.querySelector('button');
    let totalPriceElement = Array.from(document.querySelectorAll('h1'))[1];

    let [oldBooksShelf, newBooksShelf] = Array.from(document.getElementsByClassName('shelf'));
    let totalSum = 0;

    addButton.addEventListener('click', e => {
        e.preventDefault();
        let title = bookInput.value;
        let year = Number(yearInput.value);
        let price = Number(priceInput.value);
        if (title !== '' && year > 0 && price > 0) {
            if (year >= 2000) {
                createBook(false, title, year, price, newBooksShelf)
            } else {
                createBook(true, title, year, price, oldBooksShelf)
            }

        }   
    })
    function createBook(isOld, title, year, price, shelf) {

        price = isOld ? price * 0.85 : price;
        let bookElement = document.createElement('div');
        let p = document.createElement('p');
        let buyBtn = document.createElement('button');

        bookElement.classList.add('book')
        p.textContent = `${title} [${year}]`;
        buyBtn.textContent = `Buy it only for ${price.toFixed(2)} BGN`;

        buyBtn.addEventListener('click', e => {
            totalSum += price;
            e.currentTarget.parentElement.remove()
            totalPriceElement.textContent = `Total Store Profit: ${totalSum.toFixed(2)} BGN`;
        })

        bookElement.appendChild(p);
        bookElement.appendChild(buyBtn);

        if (!isOld) {
            let moveBtn = document.createElement('button');
            moveBtn.textContent = 'Move to old section';
            bookElement.appendChild(moveBtn);

            moveBtn.addEventListener('click', e => {
                e.currentTarget.parentElement.remove();
                createBook(true, title, year, price, oldBooksShelf)
            })

        }
        shelf.appendChild(bookElement);

    }

}
