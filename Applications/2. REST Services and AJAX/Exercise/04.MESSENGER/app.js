function attachEvents() {
    const url =
        "https://my-first-app-js-default-rtdb.europe-west1.firebasedatabase.app/messenger.json";
    let btnRe = document.getElementById("refresh");
    let btnSend = document.getElementById("submit");
    let textArea = document.getElementById("messages");
    let name = document.getElementById("author");
    let message = document.getElementById("content");

    btnRe.addEventListener("click", () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                Object.values(data).forEach((key) => {
                    textArea.textContent += `${key.author}: ${key.content}\n`;
                });
            });
    });

    btnSend.addEventListener("click", () => {
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                author: name.value,
                content: message.value,
            }),
        });
    });
}

attachEvents();
