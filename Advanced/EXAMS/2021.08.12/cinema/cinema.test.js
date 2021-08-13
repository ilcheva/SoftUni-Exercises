const cinema = {
    showMovies: function (movieArr) {
        if (movieArr.length == 0) {
            return "There are currently no movies to show.";
        } else {
            let result = movieArr.join(", ");
            return result;
        }
    },
    ticketPrice: function (projectionType) {
        const schedule = {
            Premiere: 12.0,
            Normal: 7.5,
            Discount: 5.5,
        };
        if (schedule.hasOwnProperty(projectionType)) {
            let price = schedule[projectionType];
            return price;
        } else {
            throw new Error("Invalid projection type.");
        }
    },
    swapSeatsInHall: function (firstPlace, secondPlace) {
        if (
            !Number.isInteger(firstPlace) ||
            firstPlace <= 0 ||
            firstPlace > 20 ||
            !Number.isInteger(secondPlace) ||
            secondPlace <= 0 ||
            secondPlace > 20 ||
            firstPlace === secondPlace
        ) {
            return "Unsuccessful change of seats in the hall.";
        } else {
            return "Successful change of seats in the hall.";
        }
    },
};
const { expect, assert } = require("chai");
describe("Cinema test", function () {
    describe("Show Movies test", function () {
        it("show movies", function () {
            assert.equal(
                cinema.showMovies([]),
                "There are currently no movies to show."
            );
            assert.equal(cinema.showMovies(["Jocker"]), "Jocker");
            assert.equal(
                cinema.showMovies(["Jocker", "Batman", "Iron-man"]),
                "Jocker, Batman, Iron-man"
            );
            assert.deepEqual(
                cinema.showMovies(['bla', 'bla']),
               'bla, bla'
            );
            assert.throw(() => {
                cinema.showMovies(5);
            }, Error);
        });
    });
    describe("Ticket price", function () {
        it("ticket price", function () {
            assert.equal(cinema.ticketPrice("Premiere"), "12.0");
            assert.equal(cinema.ticketPrice("Normal"), "7.5");
            assert.equal(cinema.ticketPrice("Discount"), "5.5");
        });
        it("error", () => {
            assert.throw(() => {
                cinema.ticketPrice("Student");
            }, Error);
            assert.throw(() => {
                cinema.ticketPrice(5);
            }, Error);
        });
    });

    describe("swap seats", function () {
        it("Swap seats", function () {
            assert.equal(
                cinema.swapSeatsInHall(5, 10),
                "Successful change of seats in the hall."
            );
            assert.equal(
                cinema.swapSeatsInHall(20, 10),
                "Successful change of seats in the hall."
            );
        });
        it("unsuccessful", () => {
            assert.equal(
                cinema.swapSeatsInHall(21, 10),
                "Unsuccessful change of seats in the hall."
            );
            assert.equal(
                cinema.swapSeatsInHall("abc", 10),
                "Unsuccessful change of seats in the hall."
            );
            assert.equal(
                cinema.swapSeatsInHall("abc", "abn"),
                "Unsuccessful change of seats in the hall."
            );
            assert.equal(
                cinema.swapSeatsInHall(0, 0),
                "Unsuccessful change of seats in the hall."
            );
            assert.equal(
                cinema.swapSeatsInHall(-10, 5),
                "Unsuccessful change of seats in the hall."
            );
            assert.equal(
                cinema.swapSeatsInHall(5),
                "Unsuccessful change of seats in the hall."
            );
            assert.equal(
                cinema.swapSeatsInHall(4, "abv"),
                "Unsuccessful change of seats in the hall."
            );
            assert.equal(
                cinema.swapSeatsInHall(5, 5),
                "Unsuccessful change of seats in the hall."
            );
            assert.equal(
                cinema.swapSeatsInHall("abv"),
                "Unsuccessful change of seats in the hall."
            );
            assert.equal(
                cinema.swapSeatsInHall(5, 21),
                "Unsuccessful change of seats in the hall."
            );
            assert.equal(
                cinema.swapSeatsInHall(0, 5),
                "Unsuccessful change of seats in the hall."
            );
            assert.equal(
                cinema.swapSeatsInHall(5, -5),
                "Unsuccessful change of seats in the hall."
            );
            
        });
    });
});
