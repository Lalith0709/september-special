const countdownEl = document.getElementById("countdown");
const birthday = new Date("September 7, 2025 00:00:00").getTime();
const now = new Date().getTime();

if (now < birthday) {
  // ✅ REAL COUNTDOWN BEFORE SEPT 7
  startRealCountdown();
} else {
  // ✅ FAKE COUNTDOWN AFTER SEPT 7
  startFakeCountdown();
}

// REAL COUNTDOWN FUNCTION
function startRealCountdown() {
  const interval = setInterval(() => 
    {
    const now = new Date().getTime();
    const distance = birthday - now;

    if (distance <= 0) {
      clearInterval(interval);
      startFakeCountdown(); // Switch to fake countdown
    } else {
      countdownEl.innerHTML = formatTime(distance);
    }
  }, 1000); //update every second
}

// FAKE COUNTDOWN FUNCTION
function startFakeCountdown() {
  let fakeTime = 10 * 24 * 60 * 60 * 1000; // 10 days in ms
  let frame = 0;
  const totalFrames = 20;

  const fastInterval = setInterval(() => {
    let percent = frame / totalFrames;
    let current = fakeTime * (1 - percent);
    countdownEl.innerHTML = formatTime(current);
    frame++;

    if (frame > totalFrames) {
      clearInterval(fastInterval);
      window.location.href = "surprise.html";
    }
  }, 100); // 100ms per frame = 2s total
}

// FORMATTER FUNCTION
function formatTime(ms) {
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((ms % (1000 * 60)) / 1000);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}