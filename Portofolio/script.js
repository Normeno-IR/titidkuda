function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    const options = { timeZone: "Asia/Jakarta", hour: "2-digit", minute: "2-digit", second: "2-digit" };
    const time = new Intl.DateTimeFormat("en-US", options).format(now);
    clockElement.textContent = time;
}

setInterval(updateClock, 1000);
updateClock()