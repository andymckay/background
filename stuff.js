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

function updateStatus() {
    fetch('https://www.githubstatus.com/')
        .then(response => response.text())
        .then(data => {
            let statusElement = document.createElement("div");
            statusElement.innerHTML = data;
            let statusText = statusElement.querySelector("span.status").innerHTML.trim();
            let banner = document.getElementById("banner");
            banner.className = "" // Remove all old colours.
            if (statusText === 'All Systems Operational') {
                banner.classList.add("green");
            };
            banner.innerText = statusText;
            document.removeChild(statusElement);
        }
    );

    window.setInterval(updateStatus, 30000);
}

updateStatus();
updateClock();