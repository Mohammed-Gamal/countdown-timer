let input = document.querySelector("input[type=text].count"), timer;

document.forms[0].addEventListener("submit", function (e) {
  if (timer) clearInterval(timer);
  e.preventDefault();
  if (input.value !== "" && /\d+/gi.test(input.value)) countdown(input.value);
  else this.nextElementSibling.textContent = "Invalid time input!";
});

function countdown(seconds) {
  let min, sec;

  timer = setInterval(() => {
    --seconds;

    if (seconds >= 0) {
      min = Math.floor(seconds / 60);
      sec = seconds % 60;

      min = min < 10 ? `0${min}` : min;
      sec = sec < 10 ? `0${sec}` : sec;

      document.querySelector("div.show").textContent = `${min}:${sec}`;
    } else clearInterval(timer);
  }, 1000);
}

window.onload = () => {
  input.focus();
};

