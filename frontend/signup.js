// client/js/signup.js

document.getElementById("signup-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("signup-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value;
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    const userExists = users.find(user => user.email === email);
  
    if (userExists) {
      alert("User already exists with this email.");
      return;
    }
  
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("Signup successful! Please login.");
    window.location.href = "login.html";
  });
  