function toggle() {
    let btn = document.getElementsByClassName('button')[0];
    let info = document.getElementById('extra');

    if (btn.textContent === 'More') {
        info.style.display = 'block';
        btn.innerHTML = 'Less';
    } else {
        btn.innerHTML= 'More'
        info.style.display = 'none';
    }
}