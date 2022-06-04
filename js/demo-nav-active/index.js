const getId = document.querySelector.bind(document)
const getAllId = document.querySelectorAll.bind(document)

const items = getAllId('.tab-item')
const panes = getAllId('.tab-pane')

const tabActive = getId('.tab-item.active')
const line = getId('.tabs .line')

line.style.left = tabActive.offsetLeft + "px"
line.style.width = tabActive.offsetWidth + "px"



items.forEach((item, index) => {
    item.onclick = function() {
        // Lấy thẻ có class active để xóa nó đi và thêm active vào thẻ hiện tại đc click
        getId('.tab-item.active').classList.remove('active')
        this.classList.add('active');

        // tương tự như active item
        getId('.tab-pane.active').classList.remove('active')
        panes[index].classList.add('active');

        // css lúc đầu = 0; để sau lấy width đúng = width của nó
        line.style.left = item.offsetLeft + "px"
        line.style.width = item.offsetWidth + "px"

    }


})