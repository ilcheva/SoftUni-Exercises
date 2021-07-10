function solve(steps, footprint, speed) {
    let distanceInM = steps * footprint;
    let speedFMS = speed / 3.6;

    let rest = Math.floor(distanceInM / 500);
    let time = distanceInM / speedFMS + rest * 60;

    let timeInH = Math.floor(time / 3600);
    let timeinM = Math.floor(time / 60);
    let timeInS = Math.round(time % 60);

    console.log(`${timeInH < 10 ? 0 : ''}${timeInH}:${timeinM < 10 ? 0 : ''}${timeinM}:${timeInS < 10 ? 0 : ''}${timeInS}`);

}
solve(4000, 0.60, 5)
solve(2564, 0.70, 5.5)