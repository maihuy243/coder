setInterval(() => {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let view = new Date();

    let h = view.getHours();
    let m = view.getMinutes();
    let s = view.getSeconds();
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;


}, 1000)