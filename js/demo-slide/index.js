const get = document.querySelector.bind(document)
const gets = document.querySelectorAll.bind(document)

const btns = gets('.btn')
const listimgs = gets('.img-item')

// btn nào active thì line sẽ ở btn đó
const tabactive = get('.btn.active')
const line = get('.line')

line.style.left = tabactive.offsetLeft + "px";
line.style.width = tabactive.offsetWidth + "px";




btns.forEach((btn, index) => {
    btn.onclick = function() {
        get('.btn.active').classList.remove('active')
        btn.classList.add('active')
        get('.img-item.active').classList.remove('active')
        listimgs[index].classList.add('active');
        line.style.left = btn.offsetLeft + "px";
        line.style.width = btn.offsetWidth + "px";


    }
})


// let a = 0;

// setInterval(function() {
//     a++;
//     get('.img-item.active').classList.remove('active')
//     btns[a].classList.add('active')
//     get('.btn.active').classList.remove('active')
//     listimgs[a].classList.add('active')
//     line.style.left = btns[a].offsetLeft + "px"
//     line.style.width = btns[a].offsetWidth + "px"
//     if (a == btns.length - 1) a -= btns.length;

// }, 2000)