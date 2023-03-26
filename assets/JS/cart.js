window.addEventListener("DOMContentLoaded", () => {
  if (JSON.parse(localStorage.getItem("Basket Product Count")) == null) {
    let basketUpdatedCount = document.querySelector(
      ".header_middle_right_cart_count"
    );
    basketUpdatedCount.innerHTML = 0;
  }

  //#region Register

  let signUp = document.getElementById("signUp");
  console.log(signUp);
  let registeredUserArr = [];
  let checkEmail = [];
  signUp.addEventListener("click", () => {
    let nameRegister = document.getElementById("userRegisterName");
    let nameRegisterWarn = document.querySelector(".username_register_warning");

    let emailRegister = document.getElementById("userRegisterMail");
    let emailRegisterWarn = document.querySelector(
      ".useremail_register_warning"
    );

    let passwRegister = document.getElementById("userPasswordRegister");
    let passwRegisterWarn = document.querySelector(
      ".userpassword_register_warning"
    );

    let cpasswRegister = document.getElementById("userRegisterConPassword");
    let cpasswRegisterWarn = document.querySelector(
      ".user_cpassword_register_warning"
    );

    function fullNameRegisterWarnMsg() {
      let nameRegex = /^[a-zA-Z\-]+$/;
      if (
        nameRegister.value.length == 0 ||
        !nameRegister.value.match(nameRegex)
      ) {
        nameRegisterWarn.style.opacity = 1;
        nameRegisterWarn.innerHTML = "Full name is not valid";
        return false;
      } else {
        nameRegisterWarn.innerHTML = "";
        return true;
      }
    }

    function emailRegisterWarnMsg() {
      let emailExist = true;
      if (localStorage.getItem("registered_user") != null) {
        checkEmail = JSON.parse(localStorage.getItem("registered_user"));
      }
      if (checkEmail.length > 0) {
        checkEmail.forEach((user) => {
          if (!emailExist) {
            return;
          }
          // console.log(`registerUser ${emailRegister.value}`);
          // console.log(`ALREADYregisterUser ${user.email}`);
          if (emailRegister.value == user.email) {
            emailRegisterWarn.style.opacity = 1;
            emailRegisterWarn.innerHTML = "Email already exists.";

            // console.log("TRUE");
            emailExist = false;
          } else {
            // console.log("FALSE");
            emailExist = true;
          }
        });
      }

      // console.log(emailExist);

      if (emailExist) {
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (
          emailRegister.value.length == 0 ||
          !emailRegister.value.match(mailformat)
        ) {
          emailRegisterWarn.style.opacity = 1;

          emailRegisterWarn.innerHTML = "Please enter a valid email address.";

          return false;
        } else {
          emailRegisterWarn.innerHTML = "";
          return true;
        }
      }
    }

    function passwordRegisterWarnMsg() {
      let passwordRegex =
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

      if (
        passwRegister.value.length == 0 ||
        !passwRegister.value.match(passwordRegex)
      ) {
        passwRegisterWarn.style.opacity = 1;

        passwRegisterWarn.innerHTML = "Please enter a valid password.";
        return false;
      } else {
        passwRegisterWarn.innerHTML = "";
        return passwRegister.value;
      }
    }
    setTimeout(fullNameRegisterWarnMsg(), 500);
    setTimeout(emailRegisterWarnMsg(), 500);
    setTimeout(passwordRegisterWarnMsg(), 500);
    let registerStep1 = fullNameRegisterWarnMsg();
    let registerStep2 = emailRegisterWarnMsg();
    let checkPassw = passwordRegisterWarnMsg();

    function conPasswordRegisterWarnMsg(checkPassw) {
      if (checkPassw == cpasswRegister.value) {
        cpasswRegisterWarn.innerHTML = "";
        return true;
      } else {
        cpasswRegisterWarn.style.opacity = 1;

        cpasswRegisterWarn.innerHTML = "Password do not match.";
        return false;
      }
    }
    setTimeout(conPasswordRegisterWarnMsg(checkPassw), 500);
    let registerStep3 = conPasswordRegisterWarnMsg(checkPassw);

    // window.addEventListener("click", (e) => {
    // if (e.target.id == "signUp") {
    // console.log(checkPassw);
    // console.log(cpasswRegister.value);
    if (registerStep1 && registerStep2 && registerStep3) {
      console.log("true");
      let user = {
        name: nameRegister.value,
        email: emailRegister.value,
        password: passwRegister.value,
      };

      nameRegister.value = "";
      emailRegister.value = "";
      passwRegister.value = "";
      cpasswRegister.value = "";

      // console.log(registeredUserArr);

      if (localStorage.getItem("registered_user") != null) {
        // console.log("Null deyil");
        registeredUserArr = JSON.parse(localStorage.getItem("registered_user"));
      }

      // console.log(registeredUserArr);
      registeredUserArr.push(user);
      // console.log(registeredUserArr);

      localStorage.setItem(
        "registered_user",
        JSON.stringify(registeredUserArr)
      );
      // window.location.href = "index.html";
    } else {
      console.log("false");
    }
    // }
    // });
  });

  //#endregion

  //#region Login

  let signIn = document.querySelector(".modal_submit_login");

  signIn.addEventListener("click", () => {
    let userEmailLogin = document.getElementById("userName");
    let userEmailLoginWar = document.querySelector(".email_login_warning");

    let userPasswordLogin = document.getElementById("userPassword");
    let userPasswordLoginWar = document.querySelector(
      ".password_login_warning"
    );

    let checkEmail;
    let checkPassword;
    let userArr = [];

    function checkUserEmail() {
      if (localStorage.getItem("registered_user") != null) {
        userArr = JSON.parse(localStorage.getItem("registered_user"));

        userArr.forEach((user) => {
          if (checkEmail) {
            return;
          }
          console.log(`UserEmail ${user.email}`);
          console.log(`AlreadyUserEmail ${userEmailLogin.value}`);
          if (user.email == userEmailLogin.value) {
            checkEmail = true;
            console.log(userEmailLoginWar);
            console.log("true");
            userEmailLoginWar.innerHTML = "";
            return;
          } else {
            console.log("false");
            userEmailLoginWar.style.opacity = 1;
            userEmailLoginWar.innerHTML = "This email does not exist";

            checkEmail = false;
          }
        });
      } else {
        userEmailLoginWar.style.opacity = 1;
        userEmailLoginWar.innerHTML = "This email does not exist";
      }
    }
    // checkUserEmail();
    setTimeout(checkUserEmail(), 500);

    function checkUserPassword() {
      if (localStorage.getItem("registered_user") != null) {
        userArr = JSON.parse(localStorage.getItem("registered_user"));

        userArr.forEach((user) => {
          if (checkPassword) {
            return;
          }
          console.log(`UserEmail ${user.email}`);
          console.log(`AlreadyUserEmail ${userPasswordLogin.value}`);
          if (
            user.password == userPasswordLogin.value &&
            user.email == userEmailLogin.value
          ) {
            checkPassword = true;
            console.log(userPasswordLoginWar);
            userPasswordLoginWar.innerHTML = "";
            console.log("true");
            return;
          } else {
            console.log("false");
            userPasswordLoginWar.style.opacity = 1;
            userPasswordLoginWar.innerHTML = "Password incorrect.";

            checkPassword = false;
          }
        });
      } else {
        userPasswordLoginWar.style.opacity = 1;
        userPasswordLoginWar.innerHTML = "Password incorrect.";
      }
    }

    setTimeout(checkUserPassword(), 500);
  });

  //#endregion
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
  // console.log(basketUpdatedCount.innerHTML);

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

    total.innerHTML = `${
      Number(total.innerHTML.slice(0, -1)) + item.newPrice * item.count
    }$`;
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
      // console.log(totalProductPrice.innerHTML);

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
