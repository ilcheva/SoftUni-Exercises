function loadCommits() {
    let username = document.getElementById('username').value
    let repo = document.getElementById('repo').value
    let url = `https://api.github.com/repos/${username}/${repo}/commits`
    
    
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let ul = document.getElementById('commits')
        Object.values(data).forEach(value=>{
           let li = document.createElement('li');
           li.setAttribute('id', 'commits');
           li.textContent = `${value.commit.author.name}: ${value.commit.message}`;
            ul.appendChild(li);
        })
        })
}