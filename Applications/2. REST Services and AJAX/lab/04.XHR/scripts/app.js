function loadRepos() {
    const url = "https://api.github.com/users/testnakov/repos";
    const httpRequest = new XMLHttpRequest();
    const resElement = document.getElementById("res");

    httpRequest.addEventListener("loadend", function () {
        let repos = JSON.parse(this.responseText);

        resElement.innerHTML = repos
            .map(
                (x) =>
                    `<p><a href="${x.html_url}" target="_blank">${x.name}</a></p>`
            )
            .join("");
        // target = _blank --- opens in new tab
    });

    httpRequest.open("GET", url);

    httpRequest.send();
}
