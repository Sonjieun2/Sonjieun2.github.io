const loginForm = document.getElementById("login-form");
const idInput = document.getElementById("id");
const pwInput = document.getElementById("pw");

const HIDDEN_CLASSNAME = "hidden";
const INFO_KEY = "user";
let userInfo = [];

function saveInfo() {
  localStorage.setItem(INFO_KEY, JSON.stringify(userInfo));
}

function paint() {
  showClock();
  showToDo();
  showWeather();
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  
  const userId = idInput.value;
  const userPw = pwInput.value;
  const Info = {
    id: userId,
    pw: userPw,
  };

  userInfo.push(Info);
  saveInfo();
  paint(saveUser);
}

function showToDo() {
  const todoList = document.getElementById("todo");
  todoList.classList.remove(HIDDEN_CLASSNAME);
}

function showClock() {
  const clock = document.getElementById("clock");
  clock.classList.remove(HIDDEN_CLASSNAME);
}

function showWeather() {
  const weather = document.getElementById("weather");
  weather.classList.remove(HIDDEN_CLASSNAME);
}

const saveUser = localStorage.getItem(INFO_KEY);

if (saveUser === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paint(saveUser);
}

