let countdownInterval, targetTime, remainingTime, paused = false;
let elapsedMinutes = 0;

function startCountdown(minutes) {
    clearInterval(countdownInterval);
    targetTime = new Date().getTime() + minutes * 60 * 1000;
    remainingTime = minutes * 60 * 1000;
    paused = false;
    elapsedMinutes = 0;
    updateProgressBar(0);
    countdownInterval = setInterval(updateCountdown, 1000);
}


function startCustomCountdown() {
  const timeInput = document.getElementById("timeInput").value;
  if (!timeInput || timeInput <= 0) {
    alert("Please enter a valid number of minutes.");
    document.getElementById("timeInput").style.border = "2px solid red";
    return;
  }
  changeFavicon("AnvilOutlineLogo02red.png"); // 🔥 Activate forge mode!
  startCountdown(Number(timeInput));
}



function updateCountdown() {
    const now = new Date().getTime();
    remainingTime = targetTime - now;

    const mins = Math.floor(remainingTime / (1000 * 60));
    const secs = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${mins}m ${secs}s`;

    const totalTime = paused ? remainingTime : document.getElementById("timeInput").value * 60 * 1000 || 0;
    updateProgressBar(((totalTime - remainingTime) / totalTime) * 100);

    if (remainingTime > 0) {
        const newElapsedMinutes = Math.floor((totalTime - remainingTime) / (1000 * 60));
        const toggleChecked = document.getElementById("toggleMinuteSound").checked;

        if (newElapsedMinutes > elapsedMinutes && toggleChecked) {
            document.getElementById("minuteSound").play();
            elapsedMinutes = newElapsedMinutes;
        }
    }

    if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Time's up!";
        document.getElementById("alertSound").play();
        changeFavicon("AnvilOutlineLogo02Green.png");
    }
}

function pauseCountdown() {
    if (!paused) {
        clearInterval(countdownInterval);
        paused = true;
        document.getElementById("countdown").innerHTML += " (Paused)";
        changeFavicon("AnvilOutlineLogo02.png");
    }
}

function resumeCountdown() {
    if (paused) {
        paused = false;
        targetTime = new Date().getTime() + remainingTime;
        countdownInterval = setInterval(updateCountdown, 1000);
        changeFavicon("AnvilOutlineLogo02red.png");
    }
}

function resetCountdown() {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "";
    document.getElementById("progressBar").style.width = "0%";
    document.getElementById("timeInput").value = "";
    remainingTime = 0;
    paused = false;
    elapsedMinutes = 0;
    changeFavicon("AnvilOutlineLogo02.png");
}

function updateProgressBar(percent) {
    document.getElementById("progressBar").style.width = `${percent}%`;
}
function changeFavicon(src) {
  const favicon = document.getElementById("favicon");
  if (favicon) {
    const cacheBuster = new Date().getTime(); // unique each time
    favicon.href = `${src}?v=${cacheBuster}`;
  }
}
