// SIGN UP
function signup() {
  let username = document.getElementById("newUsername").value;
  let password = document.getElementById("newPassword").value;

  if (localStorage.getItem(username)) {
    document.getElementById("signupError").innerHTML = "Username already exists!";
  } else {
    localStorage.setItem(username, password);
    alert("Account created successfully!");
    window.location.href = "login.html";
  }
}

// LOGIN
function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let storedPassword = localStorage.getItem(username);

  if (storedPassword === null) {
    document.getElementById("loginError").innerHTML = "User not found!";
  } else if (storedPassword !== password) {
    document.getElementById("loginError").innerHTML = "Incorrect password!";
  } else {
    sessionStorage.setItem("activeUser", username);
    window.location.href = "portfolio.html";
  }
}

// SHOW USER IN PORTFOLIO
if (document.title === "Portfolio") {
  let user = sessionStorage.getItem("activeUser");
  if (!user) window.location.href = "login.html";
  document.getElementById("displayUser").textContent = user;
}

// LOGOUT
function logout() {
  sessionStorage.removeItem("activeUser");
  window.location.href = "login.html";
}
