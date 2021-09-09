function solve() {
    const baseUrl = `https://my-first-app-js-default-rtdb.europe-west1.firebasedatabase.app/schedule/`;
    let stopId = "depot";
    const info = document.getElementById("info");
    let stopName;

    function changeButton() {
        let departDis = document.getElementById("depart");
        let arriveDis = document.getElementById("arrive");

        if (departDis.disabled) {
            departDis.disabled = false;
            arriveDis.disabled = true;
        } else {
            departDis.disabled = true;
            arriveDis.disabled = false;
        }
    }

    function depart() {
        const url = `${baseUrl}${stopId}.json`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                info.textContent = `Next stop ${data.name}`;
                stopId = data.next;
                stopName = data.name;
            });
        changeButton();
    }

    function arrive() {
        info.textContent = `Arriving at ${stopName}`;
        changeButton();
    }

    return {
        depart,
        arrive,
    };
}

let result = solve();
