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
