const showPassword = document.querySelector(".show-hidden");
const password = document.querySelector(".pass");
const create = document.querySelector(".create");

// Show Password
showPassword.addEventListener("click", function () {
  if (password.type == "password") {
    password.type = "text";
    showPassword.innerHTML = `<span class="material-symbols-outlined">
      visibility
      </span>`;
  } else {
    password.type = "password";
    showPassword.innerHTML = `<span class="material-symbols-outlined">
          visibility_off
          </span>`;
  }
});
create.addEventListener("click", function () {
  let FullName = document.querySelector(".full-name").value;
  let email = document.querySelector(".email").value;
  let Password = document.querySelector(".pass").value;
  let errorName = document.querySelector(".error-name");
  let errorEmail = document.querySelector(".error-email");
  let errorPassword = document.querySelector(".error-password");
  let filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  let reg1 = /[a-z]/;
  let reg2 = /[0-9]/;
  let reg3 = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
  //Full Name error
  if (FullName.trim() == "" || FullName.length < 3 || FullName.length >= 30) {
    FullName = "";
    errorName.style.display = "block";
    document.querySelector(".full-name").style.border = "1px solid red";
  } else {
    errorName.style.display = "none";
    document.querySelector(".full-name").style.border = "1px solid #a29bfe";
  }
  //Email error
  if (
    email.trim() == "" ||
    email.length < 3 ||
    email.length >= 50 ||
    !filter.test(email)
  ) {
    email = "";
    errorEmail.style.display = "block";
    document.querySelector(".email").style.border = "1px solid red";
  } else {
    errorEmail.style.display = "none";
    document.querySelector(".email").style.border = "1px solid #a29bfe";
  }
  //Password
  if (
    Password.trim() == "" ||
    Password.length < 6 ||
    Password.length > 10 ||
    !reg1.test(Password) ||
    !reg2.test(Password) ||
    !reg3.test(Password)
  ) {
    Password = "";
    password.type = "text";
    showPassword.style.display = "none";
    errorPassword.style.display = "block";
    document.querySelector(".pass").style.border = "1px solid red";
  } else {
    password.type = "password";
    showPassword.style.display = "block";
    errorPassword.style.display = "none";
    document.querySelector(".pass").style.border = "1px solid #a29bfe";
  }
});
