let submitBtn = document.querySelector(".contact_form_send");
let userArr = [];

window.addEventListener("click", (event) => {
  let formMsj = document.querySelector(".contact_form_mess");
  let formMsyWarn = document.querySelector(".contact_form_mess_warning");

  let formName = document.querySelector(".contact_form_name");
  let formNameWarn = document.querySelector(".contact_form_name_warning");

  let formEmail = document.querySelector(".contact_form_email");
  let formEmailWarn = document.querySelector(".contact_form_email_warning");

  let formSubj = document.querySelector(".contact_form_subj");
  let formSubjWarn = document.querySelector(".contact_form_subj_warning");

  //Message area warning
  function messageWarn() {
    if (
      event.target.className != "contact_form_mess" &&
      formMsj.value.length == 0
    ) {
      formMsyWarn.innerHTML =
        "um...yea, you have to write something to send this form.?";
      formMsj.style.marginBottom = "5px";
      return false;
    } else if (
      event.target.className != "contact_form_mess" &&
      formMsj.value.length < 21
    ) {
      formMsyWarn.innerHTML = "thats all? really?";
      formMsj.style.marginBottom = "5px";
      return true;
    } else {
      formMsyWarn.innerHTML = "";
      return true;
    }
  }

  // Name input warning
  function nameWarn() {
    if (
      event.target.className != "contact_form_name" &&
      formName.value.length == 0
    ) {
      formNameWarn.innerHTML = "come on, you have a name, don't you?";
      formName.style.marginBottom = "5px";
      return false;
    } else {
      formNameWarn.innerHTML = "";
      return true;
    }
  }

  // Subject area warning
  function subjWarn() {
    if (
      event.target.className != "contact_form_name" &&
      formSubj.value.length == 0
    ) {
      formSubjWarn.innerHTML = "come on, you have a subject, don't you?";
      formSubj.style.marginBottom = "5px";
      return false;
    } else {
      formSubjWarn.innerHTML = "";
      return true;
    }
  }

  // Email area warning message
  function emailWarn() {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      event.target.className != "contact_form_email" &&
      !formEmail.value.match(mailformat)
    ) {
      formEmailWarn.innerHTML = "Please enter a valid email address.";
      return false;
    } else {
      formEmailWarn.innerHTML = "";
      return true;
    }
  }

  if (event.target.className == "contact_form_send") {
    if (emailWarn() && subjWarn() && nameWarn() && messageWarn()) {
      console.log("true");
      let user = {
        email: formEmail.value,
        message: formMsj.value,
        subject: formSubj.value,
        name: formName.value,
      };

      if (localStorage.getItem("form_message") != null) {
        console.log("Null deyil");
        userArr = JSON.parse(localStorage.getItem("form_message"));
      }
      console.log(userArr);
      console.log(typeof userArr);
      userArr.push(user);

      localStorage.setItem("form_message", JSON.stringify(userArr));
    } else {
      console.log("false");
    }
  }
});

//#region Register

let signUpC = document.getElementById("signUp");
console.log(signUpC);
let registeredUserArrC = [];
let checkEmailC = [];
signUpC.addEventListener("click", () => {
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
      checkEmailC = JSON.parse(localStorage.getItem("registered_user"));
    }
    if (checkEmailC.length > 0) {
      checkEmailC.forEach((user) => {
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
  // if (e.target.id == "signUpC") {
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

    // console.log(registeredUserArrC);

    if (localStorage.getItem("registered_user") != null) {
      // console.log("Null deyil");
      registeredUserArrC = JSON.parse(localStorage.getItem("registered_user"));
    }

    // console.log(registeredUserArrC);
    registeredUserArrC.push(user);
    // console.log(registeredUserArrC);

    localStorage.setItem("registered_user", JSON.stringify(registeredUserArrC));
    // window.location.href = "index.html";
  } else {
    console.log("false");
  }
  // }
  // });
});

//#endregion

//#region Login

let signInC = document.querySelector(".modal_submit_login");

signInC.addEventListener("click", () => {
  let userEmailLogin = document.getElementById("userName");
  let userEmailLoginWar = document.querySelector(".email_login_warning");

  let userPasswordLogin = document.getElementById("userPassword");
  let userPasswordLoginWar = document.querySelector(".password_login_warning");

  let checkEmailC;
  let checkPassword;
  let userArr = [];

  function checkUserEmail() {
    if (localStorage.getItem("registered_user") != null) {
      userArr = JSON.parse(localStorage.getItem("registered_user"));

      userArr.forEach((user) => {
        if (checkEmailC) {
          return;
        }
        console.log(`UserEmail ${user.email}`);
        console.log(`AlreadyUserEmail ${userEmailLogin.value}`);
        if (user.email == userEmailLogin.value) {
          checkEmailC = true;
          console.log(userEmailLoginWar);
          console.log("true");
          userEmailLoginWar.innerHTML = "";
          return;
        } else {
          console.log("false");
          userEmailLoginWar.style.opacity = 1;
          userEmailLoginWar.innerHTML = "This email does not exist";

          checkEmailC = false;
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
