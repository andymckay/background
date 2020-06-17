function updateClock() {
    let elem = document.getElementById("clock");
    let date = new Date();
    let hours = date.getHours();
    let ampm = hours > 11 ? "pm" : "am";
    hours = hours > 12 ? hours - 12: hours;
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
            let banner = document.getElementById("banner");
            let statusText = statusElement.querySelector("span.status")
            if (statusText) {
                statusText = statusText.innerHTML.trim();
            } else {
                statusText = 'Problem';
            }
            if (statusText === 'All Systems Operational') {
                banner.className = "green";
            };
            if (statusText === 'Minor Service Outage') {
                banner.className = "yellow";
            };
            if (statusText === 'Problem') {
                banner.className = "red";
            };
            banner.innerText = statusText;
        }
    );

    window.setInterval(updateStatus, 30000);
}

updateStatus();
updateClock();