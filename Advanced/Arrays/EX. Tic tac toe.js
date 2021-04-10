function solve(input) {
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let player = 'X';
    input.forEach(line => {
        let [row, col] = line.split(' ').map(Number);

        if (!dashboard[row][col]) {
            dashboard[row][col] = player;

            player = player === 'X' ? 'O' : 'X';
        } else {
            console.log('This place is already taken. Please choose another!');
            continue;
        }
    })

    function checkIfWins(dashboard, player) {
        for (let row =0; row<3; row++){
            for( let col =0; col<)
        }
        if ((dashboard[0][0] == player &&
            dashboard[1][1] == player &&
            dashboard[2][2] == player)
            ||
            (dashboard[0][0] == player &&
                dashboard[1][1] == player &&
                dashboard[2][2] == player)) {
            return true;
        } else {
            return false;
        }
    }
}
solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"])