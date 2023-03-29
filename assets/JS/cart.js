window.addEventListener("DOMContentLoaded", () => {
  if (JSON.parse(localStorage.getItem("Basket Product Count")) == null) {
    let basketUpdatedCount = document.querySelector(
      ".header_middle_right_cart_count"
    );
    basketUpdatedCount.innerHTML = 0;
  }
  let productInBasket = JSON.parse(localStorage.getItem("added_product"));
  let emptyCart = document.querySelector(".empty_cart");
  let hiddenBtn = document.querySelector(".cart_prop");
  if (productInBasket == null || productInBasket.length == 0) {
    hiddenBtn.classList.add("display_none_msg");
    emptyCart.classList.remove("display_none_msg");
  } else {
    hiddenBtn.classList.remove("display_none_msg");
    emptyCart.classList.add("display_none_msg");
  }
});

let tableBody = document.querySelector(".table_body");
let total = document.querySelector(".total_price");

function addCartProd() {
  let basketUpdatedCount = document.querySelector(
    ".header_middle_right_cart_count"
  );
  basketUpdatedCount.innerHTML = JSON.parse(
    localStorage.getItem("Basket Product Count")
  );
  total.innerHTML = 0;
  let productInBasket = JSON.parse(localStorage.getItem("added_product"));
  let emptyCart = document.querySelector(".empty_cart");
  let hiddenBtn = document.querySelector(".cart_prop");
  if (productInBasket == null || productInBasket.length == 0) {
    hiddenBtn.classList.add("display_none_msg");
    emptyCart.classList.remove("display_none_msg");
  } else {
    hiddenBtn.classList.remove("display_none_msg");
    emptyCart.classList.add("display_none_msg");
  }

  let productPrice;

  tableBody.innerHTML = "";
  productInBasket.forEach((item) => {
    tableBody.innerHTML += `<tr class="table_row" id="table_id${item.id}" >
        <td class="cart_table_image">
        <div class="cart_table_image_item " style="
        background-image: url(${item.productimage});
        "></div>
        <p class="cart_table_image_title">
        ${item.productName}
        </p>
        </td>
        <td class="cart_table_price align_item">${item.newPrice}$</td>
        <td class="cart_table_quantity align_item">
        <div class="cart_table_quantity_item">
        <i class="fa-solid fa-minus decrease_product"></i>
        <p class="count_product id${item.id}">1</p>
        <i class="fa-solid fa-plus increase_product"></i>
        </div>
        </td>
        <td class="cart_table_total align_item">${
          item.newPrice * item.count
        }$</td>
        </tr>`;

    productPrice =
      Number(total.innerHTML.slice(0, -1)) + item.newPrice * item.count;
    total.innerHTML = `${productPrice}$`;
  });

  let tableRow = document.querySelectorAll(".table_row");

  tableRow.forEach((item) => {
    let quantityProduct = item.querySelector(".count_product");
    let prodArr = JSON.parse(localStorage.getItem("added_product"));

    prodArr.forEach((item) => {
      if (quantityProduct.classList.contains(`id${item.id}`)) {
        quantityProduct.innerHTML = item.count;
      }
    });

    let increaseBtn = item.querySelector(".increase_product");
    let totalProductPrice = item.querySelector(".cart_table_total");
    let priceProduct = item.querySelector(".cart_table_price");

    increaseBtn.addEventListener("click", () => {
      quantityProduct.innerHTML = Number(quantityProduct.innerHTML) + 1;

      totalProductPrice.innerHTML = `${
        Number(priceProduct.innerHTML.slice(0, -1)) *
        Number(quantityProduct.innerHTML)
      }$`;

      prodArr.forEach((item) => {
        if (quantityProduct.classList.contains(`id${item.id}`)) {
          item.count = Number(item.count) + 1;
          localStorage.setItem("added_product", JSON.stringify(prodArr));
          addCartProd();
        } else {
          return;
        }
      });

      console.log("*****************");
    });

    let removeElementArr = [];
    let decreaseBtn = item.querySelector(".decrease_product");
    decreaseBtn.addEventListener("click", () => {
      quantityProduct.innerHTML = Number(quantityProduct.innerHTML) - 1;

      totalProductPrice.innerHTML = `${
        Number(priceProduct.innerHTML.slice(0, -1)) *
        Number(quantityProduct.innerHTML)
      }$`;

      prodArr.forEach((item) => {
        if (quantityProduct.classList.contains(`id${item.id}`)) {
          if (Number(item.count) - 1 == 0) {
            document.getElementById(`table_id${item.id}`).remove();
            removeElementArr = prodArr.filter((e) => e.id != item.id);
            localStorage.setItem(
              "added_product",
              JSON.stringify(removeElementArr)
            );
            prodArr = removeElementArr;
            basketUpdatedCount = Number(basketUpdatedCount.innerHTML) - 1;
            JSON.stringify(
              localStorage.setItem("Basket Product Count", basketUpdatedCount)
            );
            basketUpdatedCount.innerHTML = basketUpdatedCount;

            addCartProd();
          } else {
            console.log(item.count);

            item.count = item.count - 1;
            localStorage.setItem("added_product", JSON.stringify(prodArr));
            addCartProd();
            console.log(item.count);
          }
        }
      });

      console.log("*****************");
    });
  });
}

addCartProd();

//#region shipping
// let i = 0;
// let previousPrice = [];
// let shipPrice;
//#endregion

//#region shipping
// let shippingButtons = document.querySelectorAll(".shipping_buttons");

// let shippingPrice = function (btn) {
//   btn.addEventListener("click", () => {
//     let freeShipping = document.querySelector(
//       'input[name="radio_btn_shipping"]:checked'
//     );
//     addCartProd();
//     if (freeShipping.checked) {
//       let total = document.querySelector(".total_price");
//       total.innerHTML = `${
//         Number(total.innerHTML.slice(0, -1)) + Number(freeShipping.value)
//       }$`;
//       shipPrice = Number(freeShipping.value);
//     }
//   });
// };
//#endregion

//#region shipping
// shippingButtons.forEach((btn) => {
//   shippingPrice(btn);
//   console.log(shipPrice);
//   if (shipPrice != undefined) {
//     console.log("slm");
//     productPrice =
//       Number(total.innerHTML.slice(0, -1)) + item.newPrice * item.count;
//     total.innerHTML = `${productPrice + shipPrice}$`;
//   } else {
//     productPrice =
//       Number(total.innerHTML.slice(0, -1)) + item.newPrice * item.count;
//     total.innerHTML = `${productPrice}$`;
//   }
// });
//#endregion
