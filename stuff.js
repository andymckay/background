function updateClock() {
    let elem = document.getElementById("clock");
    let date = new Date();
    elem.innerText = `${date.getHours()}:${date.getMinutes()}`;
    window.setInterval(updateClock, 3000);
}

updateClock();