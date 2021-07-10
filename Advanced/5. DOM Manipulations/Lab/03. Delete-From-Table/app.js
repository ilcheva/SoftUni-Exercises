function deleteByEmail() {
    let inputElement = document.querySelector('input[name="email"]');
    let enteredEmail = inputElement.value;

    let customerEmails = document.querySelectorAll('#customers td:nth-of-type(2)');

    let isDeleted = false;
    for (const customerElement of customerEmails) {


        if (customerElement.textContent === enteredEmail) {
            customerElement.parentElement.remove();
            isDeleted = true;
        }
    }
    if (!isDeleted) {
        let resultsElement = document.getElementById('result')
        resultsElement.textContent = 'Not found.';
    }

}