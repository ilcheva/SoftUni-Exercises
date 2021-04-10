function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result')

    gradientElement.addEventListener('click', e => {
        console.log(e);
        let offset = e.offsetX;
        let width = e.target.offsetWidth;


        let percent = (offset / width) * 100;
        resultElement.textContent = `${Math.trunc(percent)}%`;
    });
}