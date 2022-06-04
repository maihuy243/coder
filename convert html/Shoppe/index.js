let api = "http://localhost:3000/product";

const start = () => {

    getData((lists) => {
        renderData(lists);
    })

}
start();

function getData(callback) {
    fetch(api)
        .then((response) => {
            return response.json();
        })
        .then(callback)

}


function renderData(lists) {
    let render = document.querySelector('.render');
    let html = lists.map((item) => {
        return `
                <div class="product">
                    <div class="img-product">
                        <img src="${item.url}" alt="">
                    </div>
                    <div class="infor-product">
                        <div class="text-product">${item.name}</div>
                        <div class="service-product"></div>
                        <div class="price-buy">
                            <div class="price colortext">${item.price}đ</div>
                            <div class="buy">Đã bán ${item.buy}k</div>
                        </div>
                    </div>
              </div>
    `;
    })
    render.innerHTML = html.join('');
}

let slideIndex = 0;

function showSlides(n) {
    // Lấy danh sách  img
    let listimg = document.querySelectorAll(".slide-first img");
    // 
    if (n > listimg.length) { slideIndex = 1 }

    if (n < 1) { slideIndex = listimg.length }

    for (let i = 0; i < listimg.length; i++) {

        listimg[i].style.display = "none";
    }
    listimg[slideIndex - 1].style.display = "block";
}
showSlides(slideIndex);

function slide(n) {
    showSlides(slideIndex += n);
}