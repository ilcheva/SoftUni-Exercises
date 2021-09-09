function loadCommits() {

    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;
    let ul = document.getElementById('commits');



    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw Error(console.log(response.statusText))
            }
            return response.json()
        }).then((data) => {
            Object.values(data).forEach(value => {
                let li = document.createElement('li');
                li.textContent = `${value.commit.author.name}: ${value.commit.message}`;
                ul.appendChild(li);
            })
        }).catch(err => {
            console.log('in catch')
            console.log(err)
        })
}