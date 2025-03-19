
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    const user = users.find(user => user.email === email && user.password === password);
  
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password.");
    }
  });
  