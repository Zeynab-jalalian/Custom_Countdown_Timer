const btn = document.getElementById("btn");
const dayel = document.getElementById("day");
const hourel = document.getElementById("hour");
const minel = document.getElementById("min");
const secel = document.getElementById("second");

let intervalStarted = false;

function CountdownTimer() {
  const userDate = document.getElementById("date").value;
  const NewDate = new Date(userDate);
  const currentDate = new Date();

  const Totalseconds = (NewDate - currentDate) / 1000;
  const days = Math.floor(Totalseconds / 3600 / 24);
  const hours = Math.floor(Totalseconds / 3600) % 24;
  const mins = Math.floor(Totalseconds / 60) % 60;
  const seconds = Math.floor(Totalseconds) % 60;

  dayel.innerText = days;
  hourel.innerText = formatTime(hours);
  minel.innerText = formatTime(mins);
  secel.innerText = formatTime(seconds);
}

function formatTime(format) {
  return format < 10 ? `0${format}` : format;
}

function start() {
  const userDate = document.getElementById("date").value;
  if (userDate === "") {
    alert("Please select a date");
    return;
  } else if (!intervalStarted) {
    setInterval(CountdownTimer, 1000);
    intervalStarted = true;
  }
}

btn.addEventListener("click", start);
