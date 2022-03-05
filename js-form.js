const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginSuccMsg = document.getElementById("login-succ-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "abc@gmail.com" && password === "web_dev") {
        loginSuccMsg.style.opacity = 1;
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})