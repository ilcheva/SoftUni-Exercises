
const apiKey = 'AIzaSyDjowGNcWnSTDK6pmqMZknJJ1CkyxTi74w';

const authService = {
    async login(email, password) {
        let response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
        let data = await response.json()

        localStorage.setItem('auth', JSON.stringify(data));

        return data;
    }
}