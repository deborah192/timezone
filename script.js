function updateTime() {
    const timeElement = document.getElementById('time');
    const timezone = document.getElementById('timezone').value;
    const now = new Date();
    const options = { timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
    timeElement.textContent = timeString;
}

document.getElementById('timezone').addEventListener('change', updateTime);
setInterval(updateTime, 1000);
updateTime(); // Initial call to display time immediately
