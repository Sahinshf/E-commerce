let menuBtn = document.querySelector(".header_middle_left_menu_bar");
let navBar = document.querySelector(".header_middle_nav");

let searchBtn = document.querySelector(".header_middle_search");
let searchBox = document.querySelector(".search_box");
let closeSearchBox = document.querySelector(".search_box_xmark");

//#region Header Fixed
const fixedHeader = document.querySelector(".header_fixed");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 33) {
    fixedHeader.classList.add("fixed_header");
  } else {
    fixedHeader.classList.remove("fixed_header");
  }
});
//#endregion

//#region Logo Position

let logo = document.querySelector(".header_middle_logo");
let logo2 = document.querySelector(".header_middle_logo2");

let headerTop = document.querySelector(".header_top");

//#region
// window.addEventListener("DOMContentLoaded", () => {
//   if (
//     headerTop.getBoundingClientRect().top == 0 &&
//     this.window.innerWidth < 370
//   ) {
//     logo2.classList.remove("display_none_hidden");
//     logo.classList.add("display_none_hidden");
//   }
// });
//#endregion

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 33 && this.window.innerWidth < 370) {
    logo2.classList.remove("header_middle_logo2");
  } else if (this.window.scrollY < 33 && this.window.innerWidth < 370) {
    logo2.classList.add("header_middle_logo2");
  }
});

//#endregion

//#region Navigation Bar

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("fa-times");
  navBar.classList.toggle("active");

  if (searchBox.classList.contains("active")) {
    searchBox.classList.remove("active");
  }
});

//#endregion

//#region SearchBox

searchBtn.addEventListener("click", () => {
  if (searchBox.classList.contains("close")) {
    searchBox.classList.remove("close");
    searchBox.classList.toggle("active");
  }

  searchBox.classList.toggle("active");

  if (navBar.classList.contains("active")) {
    menuBtn.classList.remove("fa-times");
    navBar.classList.remove("active");
  }
});

closeSearchBox.addEventListener("click", () => {
  searchBox.classList.toggle("close");
});

//#endregion

//#region Login Register Section
const modal = document.querySelector(".login_user");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelector(".btn--show-modal");
const loginPath = document.querySelector(".login_path");

const modalRegister = document.querySelector(".user_register");
const btnCloseModalRegister = document.querySelector(
  ".btn--close-modal_register"
);

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

loginPath.addEventListener("click", openModal);
loginPath.addEventListener("click", () => {
  modalRegister.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//#region Register
let pathRegister = document.querySelector(".path_register");

pathRegister.addEventListener("click", () => {
  closeModal();

  modalRegister.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnCloseModalRegister.addEventListener("click", () => {
  modalRegister.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  modalRegister.classList.add("hidden");
  overlay.classList.add("hidden");
});
//#endregion
//#endregion

//#region Banner Slider
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//#endregion

//#region Banner Text Animation

let titleAnimation = document.querySelectorAll(".banner_text_title");
let textAnimation = document.querySelectorAll(".banner_text_info");
let buttonAnimation = document.querySelectorAll(".banner_button");
titleAnimation[0].classList.add("animate__bounceIn");
textAnimation[0].classList.add("animate__fadeInUp");
buttonAnimation[0].classList.add("animate__fadeInUp");

swiper.on("slideChange", function (e) {
  if (swiper.activeIndex == 0) {
    titleAnimation[0].classList.add("animate__bounceIn");
    textAnimation[0].classList.add("animate__fadeInUp");
    buttonAnimation[0].classList.add("animate__fadeInUp");

    titleAnimation[1].classList.remove("animate__bounceIn");
    textAnimation[1].classList.remove("animate__fadeInUp");
    buttonAnimation[1].classList.remove("animate__fadeInUp");
  } else {
    titleAnimation[0].classList.remove("animate__bounceIn");
    textAnimation[0].classList.remove("animate__fadeInUp");
    buttonAnimation[0].classList.remove("animate__fadeInUp");

    titleAnimation[1].classList.add("animate__bounceIn");
    textAnimation[1].classList.add("animate__fadeInUp");
    buttonAnimation[1].classList.add("animate__fadeInUp");
  }
});

//#endregion

//#region Customer section
$(function () {
  var inWrap = $(".inner-wrapper");

  $(".prev").on("click", function () {
    inWrap.animate({ left: "0%" }, 300, function () {
      inWrap.css("left", "-100%");

      $(".slide").first().before($(".slide").last());
    });
  });

  $(".next").on("click", function () {
    inWrap.animate({ left: "-200%" }, 300, function () {
      inWrap.css("left", "-100%");

      $(".slide").last().after($(".slide").first());
    });
  });
});

//#endregion

//#region Product Swiper

let swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    450: {
      slidesPerView: 2,
    },
  },
});

//#endregion

//#region You May like section Slide
let swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    450: {
      slidesPerView: 2,
    },
  },
});
//#endregion

//#region Add Product to Slide
const products = [
  {
    id: 1,
    count: 1,
    productName: "Cashmere Tank + Bag",
    oldPrice: 120.0,
    newPrice: 98.0,
    productimage: "./assets/Styles/sass/image/homepage/items11.jpg.webp",
    category: "men",
  },
  {
    id: 2,
    count: 1,
    productName: "Cashmere Tank + Bag",
    oldPrice: 120.0,
    newPrice: 100.0,
    productimage: "./assets/Styles/sass/image/homepage/latest3.jpg.webp",
    category: "women",
  },
  {
    id: 3,
    count: 1,
    productName: "Cashmere Tank + Bag",
    oldPrice: 120.0,
    newPrice: 25,
    productimage: "./assets/Styles/sass/image/homepage/latest12.jpg.webp",
    category: "baby",
  },
  {
    id: 4,
    count: 1,
    productName: "Cashmere Tank + Bag",
    oldPrice: 120.0,
    newPrice: 98.0,

    productimage: "./assets/Styles/sass/image/homepage/items12.jpg.webp",
    category: "men",
  },
  {
    id: 5,
    count: 1,
    productName: "Cashmere Tank + Bag",
    oldPrice: 120.0,
    newPrice: 78.0,
    productimage: "./assets/Styles/sass/image/homepage/latest4.jpg.webp",
    category: "women",
  },
  {
    id: 6,
    count: 1,
    productName: "Cashmere Tank + Bag",
    oldPrice: 120.0,
    newPrice: 98.0,
    productimage: "./assets/Styles/sass/image/homepage/latest11.jpg.webp",
    category: "baby",
  },
  {
    id: 7,
    count: 1,
    productName: "Cashmere Tank + Bag",
    oldPrice: 120.0,
    newPrice: 98.0,

    productimage: "./assets/Styles/sass/image/homepage/items10.jpg.webp",
    category: "men",
  },
  {
    id: 8,
    count: 1,
    productName: "Cashmere Tank + Bag",
    oldPrice: 120.0,
    newPrice: 98.0,
    productimage: "./assets/Styles/sass/image/homepage/latest2.jpg.webp",
    category: "women",
  },
  {
    id: 9,
    count: 1,
    productName: "Cashmere Tank + Bag",
    oldPrice: 120.0,
    newPrice: 98.0,
    productimage: "./assets/Styles/sass/image/homepage/latest13.jpg.webp",
    category: "baby",
  },
];

const products2 = [
  {
    id: 10,
    count: 1,
    productName: "Cashmere Tank + Bag",
    oldPrice: 120.0,
    newPrice: 98.0,
    productimage: "./assets/Styles/sass/image/homepage/latest6.jpg.webp",
    category: "women",
  },
  {
    id: 11,
    count: 1,
    productName: "Cashmere Tank + Bag",
    oldPrice: 130.0,
    newPrice: 100.0,
    productimage: "./assets/Styles/sass/image/homepage/latest7.jpg.webp",
    category: "women",
  },
  {
    id: 12,
    count: 1,
    productName: "Cashmere Tank + Bag",
    oldPrice: 140.0,
    newPrice: 25,
    productimage: "./assets/Styles/sass/image/homepage/latest5.jpg.webp",
    category: "women",
  },
  {
    id: 13,
    count: 1,
    productName: "Cashmere Tank + Bag",
    oldPrice: 99.0,
    newPrice: 98.0,
    productimage: "./assets/Styles/sass/image/homepage/latest8.jpg.webp",
    category: "men",
  },
  {
    id: 14,
    count: 1,
    productName: "Cashmere Tank + Bag",
    oldPrice: 120.0,
    newPrice: 78.0,
    productimage: "./assets/Styles/sass/image/homepage/latest6.jpg.webp",
    category: "men",
  },
  {
    id: 15,
    count: 1,
    productName: "Cashmere Tank + Bag",
    oldPrice: 120.0,
    newPrice: 98.0,
    productimage: "./assets/Styles/sass/image/homepage/latest7.jpg.webp",
    category: "men",
  },
  {
    id: 16,
    count: 1,
    productName: "Cashmere Tank + Bag",
    oldPrice: 120.0,
    newPrice: 98.0,
    productimage: "./assets/Styles/sass/image/homepage/latest5.jpg.webp",
    category: "baby",
  },
  {
    id: 17,
    count: 1,
    productName: "Cashmere Tank + Bag",
    oldPrice: 120.0,
    newPrice: 98.0,
    productimage: "./assets/Styles/sass/image/homepage/latest8.jpg.webp",
    category: "baby",
  },
  {
    id: 18,
    count: 1,
    productName: "Cashmere Tank + Bag",
    oldPrice: 120.0,
    newPrice: 98.0,
    productimage: "./assets/Styles/sass/image/homepage/latest6.jpg.webp",
    category: "baby",
  },
];

//#region Add Product to slide
function addProduct() {
  let swiperSlide = document.querySelector(".products_holder");
  for (let i = 0; i < products.length; i++) {
    swiperSlide.innerHTML += `<div class="swiper-slide product_cart ${products[i].category}">
    <div  
      class="product_items"
      style="
        background-image: url(${products[i].productimage}); 
      "
    >
      <div class="product_items_prop">
      
          <i class="fa-solid fa-cart-shopping hover_icon_prop add_to_cart"></i>
      
          <i class="fa-regular fa-heart hover_icon_prop"></i>
      
          <i
            class="fa-solid fa-magnifying-glass-plus hover_icon_prop"
          ></i>
      </div>
    </div>
    <p class="product_text">${products[i].productName}</p>
    <div class="product_price">
      <p class="product_new_price">$${products[i].newPrice}.00</p>
      <p class="product_old_price">$${products[i].oldPrice}.00</p>
    </div>
    </div>`;
  }
  swiper2.update();
}
addProduct();
//#endregion

//#region Add Product You May Like Slide
function addProduct2() {
  let swiperSlide = document.querySelector(".products_holder2");
  for (let i = 0; i < products.length; i++) {
    swiperSlide.innerHTML += `<div class="swiper-slide">
    <div  
      class="product_items"
      style="
        background-image: url(${products2[i].productimage});
      "
    >
      <div class="product_items_prop">
      
          <i class="fa-solid fa-cart-shopping hover_icon_prop add_to_cart2"></i>
      
          <i class="fa-regular fa-heart hover_icon_prop"></i>
      
          <i
            class="fa-solid fa-magnifying-glass-plus hover_icon_prop"
          ></i>
      </div>
    </div>
    <p class="product_text">${products2[i].productName}</p>
    <div class="product_price">
      <p class="product_new_price">$${products2[i].newPrice}.00</p>
      <p class="product_old_price">$${products2[i].oldPrice}.00</p>
    </div>
    </div>`;
  }
  swiper3.update();
}
addProduct2();
//#endregion

let categoriesBtn = document.querySelectorAll(".category_btn");
let productCartItem = document.querySelectorAll(".product_cart");
// console.log(productCartItem);
let addedProduct;

if (JSON.parse(localStorage.getItem("added_product")) == null) {
  addedProduct = [];
} else {
  addedProduct = JSON.parse(localStorage.getItem("added_product"));
}

let addToCartButton = document.querySelectorAll(".add_to_cart");
let addToCartButton2 = document.querySelectorAll(".add_to_cart2");

categoriesBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.category;

    productCartItem.forEach((card) => {
      if (
        selectedCategory === "fashion" ||
        card.classList.contains(selectedCategory)
      ) {
        card.style.display = "block";
        swiper2.update();
      } else {
        card.style.display = "none";
        swiper2.update();
      }
    });
  });
});

let basketCount = document.querySelector(".header_middle_right_cart_count");
let basketProductCount;

if (JSON.parse(localStorage.getItem("Basket Product Count")) == null) {
  basketProductCount = basketCount.innerHTML;
} else {
  basketProductCount = JSON.parse(localStorage.getItem("Basket Product Count"));
  basketCount.innerHTML = basketProductCount;
}

addToCartButton.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const findData = products.find((item) => item.id == index + 1);
    let hasData2;
    let hasData;
    if (JSON.parse(localStorage.getItem("added_product")) != null) {
      let hasDataArr = JSON.parse(localStorage.getItem("added_product"));
      hasDataArr.forEach((item) => {
        if (item.id == index + 1) {
          hasData2 = true;
        }
      });
    } else {
      hasData = addedProduct.includes(findData);
    }

    if (hasData != false && hasData2) {
      addedProduct;

      let successMsg = document.querySelector(".success_message_text");

      successMsg.innerHTML = "Product already in cart";
      successMsg.style.backgroundColor = "red";
      setTimeout(() => {
        successMsg.classList.toggle("display_hidden_msg");
      }, 3000);
      successMsg.classList.toggle("display_hidden_msg");
    } else {
      let successMsg = document.querySelector(".success_message_text");
      successMsg.style.backgroundColor = "green";
      successMsg.innerHTML = "Product added to cart successfully";
      setTimeout(() => {
        successMsg.classList.toggle("display_hidden_msg");
      }, 3000);
      successMsg.classList.toggle("display_hidden_msg");

      basketProductCount++;
      localStorage.setItem(
        "Basket Product Count",
        JSON.stringify(basketProductCount)
      );
      basketCount.innerHTML = JSON.parse(
        localStorage.getItem("Basket Product Count")
      );

      addedProduct.push(findData);
      console.log(addedProduct);
      localStorage.setItem("added_product", JSON.stringify(addedProduct));
    }
  });
});

addToCartButton2.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const findData = products2.find(
      (item) => item.id == index + 1 + products.length
    );
    let hasData2;
    let hasData;
    if (JSON.parse(localStorage.getItem("added_product")) != null) {
      let hasDataArr = JSON.parse(localStorage.getItem("added_product"));
      hasDataArr.forEach((item) => {
        if (item.id == index + 1 + products.length) {
          hasData2 = true;
        }
      });
    } else {
      hasData = addedProduct.includes(findData);
    }

    if (hasData != false && hasData2) {
      addedProduct;
    } else {
      basketProductCount++;
      localStorage.setItem(
        "Basket Product Count",
        JSON.stringify(basketProductCount)
      );
      basketCount.innerHTML = JSON.parse(
        localStorage.getItem("Basket Product Count")
      );

      addedProduct.push(findData);
      console.log(addedProduct);
      localStorage.setItem("added_product", JSON.stringify(addedProduct));
    }
  });
});

//#endregion

//#region Add product to slide ( Second Way)
// for (let i = 0; i < products.length; i++) {
//   swiper2.appendSlide(`<div class="swiper-slide">
//   <div
//     class="product_items"
//     style="
//       background-image: url(${products[i].productimage});
//     "
//   >
//     <div class="product_items_prop">
//       <a href="#">
//         <i class="fa-solid fa-cart-shopping hover_icon_prop add_to_cart"></i>
//       </a>
//       <a href="#">
//         <i class="fa-regular fa-heart hover_icon_prop"></i>
//       </a>
//       <a href="#">
//         <i
//           class="fa-solid fa-magnifying-glass-plus hover_icon_prop"
//         ></i>
//       </a>
//     </div>
//   </div>
//   <p class="product_text">${products[i].productName}</p>
//   <div class="product_price">
//     <p class="product_new_price">$${products[i].newPrice}.00</p>
//     <p class="product_old_price">$${products[i].oldPrice}.00</p>
//   </div>
//   </div>`);
// }
//#endregion

//#region Scroll Top
let scrollTop = document.querySelector(".scrollToTop");

scrollTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
//#endregion
