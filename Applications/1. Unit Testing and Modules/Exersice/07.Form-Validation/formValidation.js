function validate() {
    const submit = document.getElementById('submit');
    const userName = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const checkBox = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo');
    const valid = document.getElementById('valid')


    submit.addEventListener('click', (e) => {
        e.preventDefault();
        validation()
    })

    let isChanged = true;
    checkBox.addEventListener('change', (e) => {
        if (isChanged) {
            companyInfo.style.display = 'block'
            isChanged = false;

        } else {
            companyInfo.style.display = 'none'
            isChanged = true;
        }

    })

    function validation() {
        let isValid = false;

        const emailPattern = /^\w+@\w+.\w+$/gm;
        const userNamePattern = /^[a-zA-Z0-9]{3,20}$/gm;
        const passwordPattern = /^[(a-zA-Z0-9)\_]{5,15}$/gm;

        if (!emailPattern.test(email.value) || (email.value = '')) {
            email.style.borderColor = 'red';
            isValid = false;
        } else {
            email.style.border = 'none';
          //  isValid = true;
        }
        if (!userNamePattern.test(userName.value)) {
            userName.style.borderColor = 'red';
            isValid = false;
        } else {
            userName.style.border = 'none';

        }

        if (!passwordPattern.test(password.value)) {
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
            isValid = false;
        } else {
            if (!passwordPattern.test(confirmPassword.value) || password != confirmPassword) {
                password.style.borderColor = 'red';
                confirmPassword.style.borderColor = 'red';
                isValid = false;
            } else {
                password.style.border = 'none';
                confirmPassword.style.border = 'none';

            }

        }

    }
    // if (isValid = true) {
    //     valid.style.display = 'block';
    // } else {
    //     valid.style.display = 'none'
    // }
}

