//#region Register

let signUp = document.getElementById("signUp");
let registeredUserArr = [];
let checkEmail = [];
signUp.addEventListener("click", () => {
  let nameRegister = document.getElementById("userRegisterName");
  let nameRegisterWarn = document.querySelector(".username_register_warning");

  let emailRegister = document.getElementById("userRegisterMail");
  let emailRegisterWarn = document.querySelector(".useremail_register_warning");

  let passwRegister = document.getElementById("userPasswordRegister");
  let passwRegisterWarn = document.querySelector(
    ".userpassword_register_warning"
  );

  let cpasswRegister = document.getElementById("userRegisterConPassword");
  let cpasswRegisterWarn = document.querySelector(
    ".user_cpassword_register_warning"
  );

  function fullNameRegisterWarnMsg() {
    var nameRegex = new RegExp(/^[a-z,',-]+(\s)[a-z,',-]+$/i);
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
    let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

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

    localStorage.setItem("registered_user", JSON.stringify(registeredUserArr));

    let successMsg = document.querySelector(".success_message_text");
    successMsg.style.backgroundColor = "green";
    successMsg.innerHTML = "Your registration has been successfully completed";
    setTimeout(() => {
      successMsg.classList.toggle("display_hidden_msg");
    }, 3000);
    successMsg.classList.toggle("display_hidden_msg");

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
  let userPasswordLoginWar = document.querySelector(".password_login_warning");

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

  if (checkEmail && checkPassword) {
    let successMsg = document.querySelector(".success_message_text");
    successMsg.style.backgroundColor = "green";
    successMsg.innerHTML = "You are successfully logged in";
    setTimeout(() => {
      successMsg.classList.toggle("display_hidden_msg");
      window.location.href = "index.html";
    }, 3000);
    successMsg.classList.toggle("display_hidden_msg");
    let userIcon = document.querySelector(".fa-user");
    userIcon.style.color = "orange";
  }
});

//#endregion

//#region Scroll Top
let scrollTop = document.querySelector(".scrollToTop");

scrollTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
//#endregion
