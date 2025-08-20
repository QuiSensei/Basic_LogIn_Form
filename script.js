const form = document.querySelector("form");
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const alertBox = document.querySelector(".alert-box");
const alertMsg = document.querySelector(".alert");

// Show alert
function showAlert(message, type = "error") {
  alertMsg.textContent = message;
  alertBox.style.display = "block";
  alertBox.style.background = type === "success" ? "#4caf50" : "#f44336";

  setTimeout(() => {
    alertBox.style.display = "none";
  }, 3000);
}

// LOGIN
if (form && form.querySelector("button[type='submit']")) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      showAlert("Please fill in all fields.");
      return;
    }

    // Retrieve user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      email === storedUser.email &&
      password === storedUser.password
    ) {
      showAlert("Login successful!", "success");
      setTimeout(() => {
        window.location.href = "./login_form.html"; // change this to your real page
      }, 1500);
    } else {
      showAlert("Invalid email or password.");
    }
  });
}

// REGISTER
const registerForm = document.querySelector("#register-form");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const regEmail = registerForm
      .querySelector('input[type="email"]')
      .value.trim();
    const regPassword = registerForm
      .querySelector('input[type="password"]')
      .value.trim();

    if (!regEmail || !regPassword) {
      showAlert("Please fill in all fields.");
      return;
    }

    // Save new user to localStorage
    const newUser = { email: regEmail, password: regPassword };
    localStorage.setItem("user", JSON.stringify(newUser));

    showAlert("Account registered successfully!", "success");
    setTimeout(() => {
      window.location.href = "./login_form.html"; // back to login
    }, 1500);
  });
}
