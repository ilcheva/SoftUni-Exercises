function tickets(descriptions, sortingCriteria) {
    let tickets = [];
    descriptions.forEach((line) => {
        let [destination, price, status] = line.split("|");
        price = Number(price);
        tickets.push({ destination, price, status });
    });
    let sortedTickets;
    if (sortingCriteria === "destination") {
        sortedTickets = tickets.sort((a, b) =>
            a.destination.localeCompare(b.destination)
        );
    }
    if (sortingCriteria === "price") {
        sortedTickets = tickets.sort((a, b) => a.price - b.price);
    }
    if (sortingCriteria === "status") {
        sortedTickets = tickets.sort((a, b) =>
            a.status.localeCompare(b.status)
        );
    }
   return sortedTickets
}

tickets(
    [
        "Philadelphia|94.20|available",
        "New York City|95.99|available",
        "New York City|95.99|sold",
        "Boston|126.20|departed",
    ],
    "destination"
);
