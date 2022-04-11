let sc = document.querySelector('#second');
let mn = document.querySelector('#minute');
let hr = document.querySelector('#hour');
setInterval(() => {
    let date = new Date();
    let second = date.getSeconds() * 6;
    let minute = date.getMinutes() * 6;
    let hours = date.getHours() * 30;
    sc.style.transform = `rotateZ(${second}deg)`;
    mn.style.transform = `rotateZ(${minute}deg)`;
    hr.style.transform = `rotateZ(${hours + (minute / 12)}deg)`;
}, 1000)
