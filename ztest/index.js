let gets = document.querySelectorAll.bind(document)
let get = document.querySelector.bind(document)

let li = gets('li')
let list = gets('.list')

li.forEach((item) => {
    item.onclick = (e) => {
        if (e.ctrlKey) {
            item.classList.toggle('active')
        } else {
            gets('.list.active').forEach((item) => {
                item.classList.remove('active')
            })
            item.classList.add('active')
        }

    }
})