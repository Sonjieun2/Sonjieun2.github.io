const time = document.getElementById("time");
const todayDate = document.getElementById("date");

const dayList = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const year = date.getFullYear();
  const month = date.getMonth();
  const today = date.getDate();
  const day = date.getDay();

  time.innerText = `${hours}:${minutes}:${seconds}`;
  todayDate.innerText = `${year}년 ${month}월 ${today}일  ${dayList[day]}`;
}

getClock();
setInterval(getClock, 1000);