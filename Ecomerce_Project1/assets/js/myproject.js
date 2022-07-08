const get = document.querySelector.bind(document);
const gets = document.querySelectorAll.bind(document);
import { dataSlide, dataProducts } from "./data.js";
////Nav active

const viewSlide = get("#viewSlide");
const viewProducts = get(".products");
const myShop = {
  index: 0,

  //event Auto run
  handleEventAutoRun() {
    const listItemsNav = gets(".itemNav");
    listItemsNav.forEach((item) => {
      item.onclick = () => {
        get(".active").classList.remove("active");
        item.classList.add("active");
      };
    });
  },

  //render Slide
  render(index = 1) {
    //render Slide
    const [{ title, text, btnTitle, btnColor }] = [dataSlide[index]];
    viewSlide.innerHTML = `
    <div
    class="slide-inside d-flex align-items-center justify-content-center"
  >
    <div class="inside-article col-md-7 p-5">
      <h1>
        ${title}
      </h1>
      <p>
       ${text}
      </p>
      <button style="background-color:${btnColor}" class="btn">${btnTitle}</button>
    </div>
    <div class="inside-img col-md-5">
      <div class="img d-flex align-items-center justify-content-center">
        <img src="../assets/images/slider-img.png" alt="" />
      </div>
    </div>
  </div>
  `;

    //render Product
    let htmls = ``;
    dataProducts.map(({ name, price, dataUrl }) => {
      return (htmls += `
      <div class="product col-md-12">
            <div class="product-img">
              <img src="${dataUrl}" alt="" />
            </div>
            <div class="product-img-logoNew">New</div>
            <div class="product-details">
              <div class="product-details-name">${name}</div>
              <div class="product-details-price">
                Price <span class="price">${price}</span>
              </div>
            </div>
          </div>
      `);
    });
    viewProducts.innerHTML = htmls;
  },

  //btn Next
  next(index) {
    console.log(index);
  },
  start() {
    this.handleEventAutoRun();
    this.render();
  },
};
myShop.start();
