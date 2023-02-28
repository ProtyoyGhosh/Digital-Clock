// selecting dom elements
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function clock(){
    let h = new Date().getHours();
    console.log(h);
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "";

    ampm = h >=12 ? "PM" : "AM";

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hoursEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText = ampm;

    setTimeout(() => {
        clock()
    }, 1000);
};
clock();