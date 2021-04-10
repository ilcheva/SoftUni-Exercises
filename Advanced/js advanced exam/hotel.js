class Hotel {
    bookings = [];
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
    }

}
let hotel = new Hotel('HotUni', 10);

console.log(hotel.rentARoom('Peter', 'single', 4));
console.log(hotel.rentARoom('Robert', 'double', 4));
console.log(hotel.rentARoom('Geroge', 'maisonette', 6));
