function solve() {
    let allShelfs = Array.from(document.querySelectorAll('.shelf'));
    [oldBooksShelf, newBooksShelf] = allShelfs;

    let totalPriceElement = document.getElementsByTagName('h1')[1];
    let allSum = 0;

    let allinputElements = Array.from(document.getElementsByTagName('input'));
    let [book, year, price] = allinputElements;

    let addButton = document.getElementsByTagName('button')[0];


    addButton.addEventListener('click', e => {
        e.preventDefault();
        if (!allinputElements.every(x => x.value)) {
            return;
        }
        if (year.value < 0 && price < 0) {
            return;
        }

        let divElement = document.createElement('div');
        divElement.className = 'book';
        let pElement = document.createElement('p');
        pElement.textContent = `${book.value} [${year.value}]`;
        let removeButtonElement = document.createElement('button');
        let currentPrice = Number(price.value);
        removeButtonElement.innerHTML = `Buy it only for ${currentPrice} BGN`;


        let moveButtonElement = document.createElement('button');
        moveButtonElement.textContent = 'Move to old section';

        if (removeButtonElement)

            removeButtonElement.addEventListener('click', e => {
                allSum += Number(currentPrice);

                totalPriceElement.textContent = `Total Store Profit: ${allSum.toFixed(2)} BGN`;
                e.currentTarget.parentElement.remove();
            })
        moveButtonElement.addEventListener('click', e => {
            let newDiv = e.currentTarget.parentElement;
            e.currentTarget.remove();

            let buttonForSale = newDiv.lastChild;
            let newPrice = currentPrice - (currentPrice * 0.15);
            allSum += Number(newPrice);

            // console.log(allSum);
            // newBooksShelf.removeChild(divElement)
            // buttonForSale.textContent = `Buy it only for ${newPrice.toFixed(2)} BGN`;
            // buttonForSale.addEventListener('click', e => {
            //     console.log(e.currentTarget.parentElement)
            //     console.log(allSum);
            //     //totalPriceElement.textContent = `Total Store Profit: ${allSum.toFixed(2)} BGN`;

            // })
            oldBooksShelf.appendChild(newDiv);
        })
        divElement.appendChild(pElement);
        divElement.appendChild(removeButtonElement);
        divElement.appendChild(moveButtonElement)
        newBooksShelf.appendChild(divElement);
        book.value = '';
        year.value = '';
        price.value = '';
        totalPriceElement.textContent = `Total Store Profit: ${allSum.toFixed(2)} BGN`;
    })

}
