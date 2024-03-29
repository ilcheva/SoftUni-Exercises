function printDeckOfCards(cards) {
    let face=[]
    cards.forEach(el => face.push(el[0]))
    console.log(face);
    let suit =[]
    cards.forEach(el => suit.push(el[1]))
    console.log(suit)
    function createCard(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        const suitToString = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        }

        if (validFaces.includes(face) == false) {
            throw new Error('Invalid face');
        } else if (!Object.keys(suitToString).includes(suit)) {
            throw new Error('Invalid suit')
        }

        return {
            face,
            suit,
            toString() {
                console.log( `${face}${suitToString[suit]}`);
                return `${face}${suitToString[suit]}`;
            }
        }
    }


}

printDeckOfCards(['AS', '10D', 'KH', '2C'])