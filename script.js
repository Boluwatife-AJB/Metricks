const countDownDate = new Date('July 21, 2022 0:0:0').getTime();
const dayValue = document.getElementById('day');
const hourValue = document.getElementById('hour');
const minuteValue = document.getElementById('minute');
const secondValue = document.getElementById('second');

let x = setInterval(function () {
  var presentTime = new Date().getTime();
  var difference = countDownDate - presentTime;

  dayValue.innerHTML = Math.floor(difference / (1000 * 60 * 60 * 24));
  hourValue.innerHTML = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minuteValue.innerHTML = Math.floor(
    (difference % (1000 * 60 * 60)) / (1000 * 60)
  );
  secondValue.innerHTML = Math.floor((difference % (1000 * 60)) / 1000);

  if (difference < 0) {
    clearInterval(x);
  }
}, 1000);
