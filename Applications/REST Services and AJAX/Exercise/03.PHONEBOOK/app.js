function attachEvents() {
    const url =
        "https://my-first-app-js-default-rtdb.europe-west1.firebasedatabase.app/phonebook.json";

    let btnLoad = document.getElementById("btnLoad");
    let btnCreate = document.getElementById("btnCreate");

    let ul = document.getElementById("phonebook");

    btnLoad.addEventListener("click", (e) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                Object.keys(data).forEach((key) => {
                    let li = document.createElement("li");
                    li.textContent = `${data[key].person}: ${data[key].phone}`;
                    let deleteBtn = document.createElement("button");
                    let deleteUrl = `https://my-first-app-js-default-rtdb.europe-west1.firebasedatabase.app/phonebook/${key}.json`;
                    deleteBtn.textContent = "delete";

                    //TODO deleteBtn add event
                    deleteBtn.addEventListener("click", () => {
                        fetch(deleteUrl, { method: "DELETE" });
                    });
                    li.appendChild(deleteBtn);
                    ul.appendChild(li);
                });
            });
    });

    btnCreate.addEventListener("click", create);

    function create() {
        let person = document.getElementById("person");
        let phone = document.getElementById("phone");

        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                person: person.value,
                phone: phone.value,
            }),
        });
    }
}

attachEvents();
