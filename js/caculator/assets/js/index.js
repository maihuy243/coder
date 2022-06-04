let btns = document.querySelectorAll('button');
let view = document.querySelector('.output');
let result = document.querySelector('.result')

btns.forEach((item) => {
    item.onclick = (e) => {
        let data = e.target.value;
        if (data == "") view.innerHTML = "", result.innerHTML = "";
        if (data == "=") {
            if (view.innerHTML == "+" || view.innerHTML == "-" || view.innerHTML == "*" || view.innerHTML == "/")
                view.innerHTML = "ERROR";
            else result.innerHTML = eval(view.innerHTML);
        }
        if (data == "DEL") {
            if (view.innerHTML.length != 0) {
                let b = view.innerHTML.substring(0, view.innerHTML.length - 1)
                view.innerHTML = b;
            } else view.innerHTML = "No Number !"
        } else view.innerHTML += data;
    }
})