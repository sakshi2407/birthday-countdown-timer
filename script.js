const birthday = prompt("When is your next birthday? (Example format - 20 August, 2022)");

const daysE = document.getElementById("days");
const hoursE = document.getElementById("hours");
const minsE = document.getElementById("mins");
const secondsE = document.getElementById("seconds");

function countDown(){
    const comingBirthday = new Date(birthday);
    const currentDate = new Date();

    const totalSeconds = (comingBirthday - currentDate) /1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds /3600)%24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) %60;
    
    daysE.innerHTML = formatTime(days);
    hoursE.innerHTML=  formatTime(hours);
    minsE.innerHTML = formatTime(mins);
    secondsE.innerHTML = formatTime(seconds);

}

function formatTime(time){
    return time < 0 ? 0 : time;
}

countDown();
setInterval(countDown, 1000);