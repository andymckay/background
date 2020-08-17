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
    fetch('https://www.githubstatus.com/api/v2/components.json')
        .then(response => response.json())
        .then(data => {
            let statusText = 'Calculating...'
            for (let component of data.components) {
                let className = 'red';
                let statusText = 'Actions serious outage';
                if (component.name === 'GitHub Actions') {
                    if (component.status === 'operational') {
                        statusText = 'Actions operational'
                        className = 'green';
                    }
                    if (component.status === 'partial_outage') {
                        statusText = 'Actions partial outage'
                        className = 'yellow';
                    }
                    banner.className = className;
                    banner.innerText = statusText;
                }
            }
        }
    );

    window.setInterval(updateStatus, 30000);
}

updateStatus();
updateClock();