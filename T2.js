let startTime;
let elapsedTime = 0;
let timerInterval;

function startPause() {
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 10);
        document.getElementById("startPause").textContent = "Pause";
    } else {
        clearInterval(timerInterval);
        timerInterval = null;
        document.getElementById("startPause").textContent = "Resume";
    }
}

function reset() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    document.getElementById("display").textContent = "00:00:00.000";
    document.getElementById("startPause").textContent = "Start";
    document.getElementById("laps").innerHTML = "";
}

function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    displayTime(elapsedTime);
}

function displayTime(time) {
    const formattedTime = new Date(time).toISOString().slice(11, -1);
    document.getElementById("display").textContent = formattedTime;
}

function lap() {
    const currentTime = Date.now();
    const lapTime = currentTime - startTime;
    const formattedLapTime = new Date(lapTime).toISOString().slice(11, -1);

    const lapItem = document.createElement("li");
    lapItem.textContent = formattedLapTime;
    document.getElementById("laps").appendChild(lapItem);
}

document.getElementById("startPause").addEventListener("click", startPause);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("lap").addEventListener("click", lap);
  