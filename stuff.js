function updateClock() {
    let elem = document.getElementById("clock");
    let date = new Date();
    let hours = date.getHours();
    let ampm = "AM"
    if ((hours) > 12) {
        hours = hours - 12;
        ampm = "PM"
    }
    let minutes = date.getMinutes();
    minutes = (minutes < 10 ? '0':'') + minutes;
    elem.innerText = `${hours}:${minutes} ${ampm}`;
    window.setInterval(updateClock, 3000);
}

updateClock();