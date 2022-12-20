const showPassword = document.querySelector(".show-hidden");
const password = document.querySelector(".pass");
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
//Check Login
const ListAcc = [
  {
    email: "admin",
    password: "admin",
  },
];
function login() {
  let email = document.querySelector(".email").value;
  let Password = document.querySelector(".pass").value;
  let checkLogin = ListAcc.some(
    (value) => value.email === email && value.password === Password
  );
  if (checkLogin) {
    localStorage.setItem("token", email);
    document.querySelector(".error").style.display = "none";
    document.querySelector(".email").style.border = "1px solid #a29bfe";
    document.querySelector(".pass").style.border = "1px solid #a29bfe";
    setTimeout(() => {
      window.location.href = "./index.html";
    }, 1000);
  } else {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".email").style.border = "1px solid red";
    document.querySelector(".pass").style.border = "1px solid red";
  }
}
