
function solve([speed, area]) {
    let output = '';
    let speedLimit = 0;
    switch (area) {
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'motorway':
            speedLimit = 130;
            break;

    }
    let overspeed = speed - speedLimit;

    if (overspeed > 40 && speed > 40) {
        output += 'reckless driving';
    } else if (overspeed > 20 && speed >= 40) {
        output += 'excessive speeding';
    } else if (overspeed > 0 && speed >= 20) {
        output += 'speeding';
    }
    console.log(output);
}
solve([40, 'city'])
solve([21, 'residential'])
solve([200, 'motorway'])
solve([120, 'interstate'])