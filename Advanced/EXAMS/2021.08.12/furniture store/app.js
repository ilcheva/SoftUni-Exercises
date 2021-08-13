window.addEventListener("load", solve);

function solve() {
    let allInputElements = Array.from(document.querySelectorAll("input"));
    console.log(allInputElements);
    let [modelInput, yearInput, priceInput] = allInputElements;
    let descriptionInput = document.querySelector("textarea");
    let addButton = document.getElementById("add");
    let totalPriceElement = document.querySelector(".total-price");
    let furnitureList = document.getElementById("furniture-list");
    let totalPrice = 0;

    addButton.addEventListener("click", (e) => {
        e.preventDefault();
        let model = modelInput.value;
        let year = Number(yearInput.value);
        let price = Number(priceInput.value);

        let description = descriptionInput.value;
        if (model != "" && description != "" && year > 0 && price > 0) {
            newModel(model, year, description, price);
        }
        modelInput.value = "";
        yearInput.value = "";
        priceInput.value = "";
        descriptionInput.value = "";
    });

    function newModel(model, year, description, price) {
        let newRowInfo = document.createElement("tr");
        newRowInfo.classList.add("info");
        let newtdModel = document.createElement("td");
        newtdModel.innerHTML = model;
        let newtdPrice = document.createElement("td");
        newtdPrice.innerHTML = price.toFixed(2);

        let btnMore = document.createElement("button");
        btnMore.classList.add("moreBtn");
        btnMore.textContent = "More Info";

        let btnBuy = document.createElement("button");
        btnBuy.classList.add("buyBtn");
        btnBuy.textContent = "Buy it";
        let newTdBtn = document.createElement("td");
        let newTrDesc = document.createElement("tr");
        newTrDesc.classList.add("hide");
        btnBuy.addEventListener("click", (e) => {
            totalPrice += price;
            totalPriceElement.textContent = totalPrice;

            e.currentTarget.parentElement.parentElement.nextSibling.remove();
            e.currentTarget.parentElement.parentElement.remove();
        });
        btnMore.addEventListener("click", (e) => {

            /// DO NOT USE InnerHTML!!!!
            newTrDesc.innerHTML = `<td>Year: ${year}</td>\n<td colspan ="3">Description: ${description}</td>`;

            if (e.currentTarget.textContent == "More info") {
                newTrDesc.style.display = "contents";
                btnMore.textContent = "Less info";
            } else {
                newTrDesc.style.display = "none";
                btnMore.textContent = "More info";
            }
        });
        newRowInfo.appendChild(newtdModel);
        newRowInfo.appendChild(newtdPrice);

        newTdBtn.appendChild(btnMore);
        newTdBtn.appendChild(btnBuy);
        newRowInfo.appendChild(newTdBtn);

        furnitureList.appendChild(newRowInfo);
        furnitureList.appendChild(newTrDesc);
    }
}
