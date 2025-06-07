document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const errorMsg = document.getElementById("errorMsg");

  loginForm.addEventListener("submit", (e) => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (!emailValue || !passwordValue) {
      e.preventDefault();
      errorMsg.textContent = "Both email and password are required.";
    } else {
      errorMsg.textContent = "";
      alert("Login successful (for demo).");
    }
  });


});

function togglePasswordOne() {
    const password = document.getElementById("password");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };
