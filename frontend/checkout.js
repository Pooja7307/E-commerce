// body{
//     margin: 0;
//     padding: 0;
//     background: #f2f2f2;
//     font-family:  sans-serif;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;

// }
// .logo{
// width: 200px;
// justify-self: center;
// }
// h2{
//     color: #ddd;
// }

// .checkout-form{
//     display: grid;
//     background-image: linear-gradient( 109.6deg,  rgb(131, 39, 47) 11.2%, rgb(103, 28, 28) 91.1% );
//     width: 400px;
// }

// input{
//     justify-self: center;
//     width: 90%;
//     padding: 12px;
//     padding-right: 5px;
//     margin: 10px 0;
//     border: 1px solid #ddd;
//     border-radius: 8px;
//     font-size: 15px;
// }
// button{
//     width: 60%;
//     justify-self: center;
//     padding: 12px;
//     background-color: white;
//     color:rgb(131, 39, 47) ;
//     border: none;
//     font-size: 16px;
//     margin-top: 10px;
//     border-radius: 8px;
//     cursor: pointer;
//     transition: background 0.3s ease;
// }


// client/js/checkout.js

document.getElementById("checkout-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const paymentMethod = document.getElementById("payment").value;
  
    if (!name || !address || !paymentMethod) {
      alert("Please fill in all the fields.");
      return;
    }
  
    // Simulated order placement
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
  
    const order = {
      customerName: name,
      address,
      paymentMethod,
      items: cart,
      orderDate: new Date().toLocaleString()
    };
  
    // Save order to localStorage (in real app, send to server)
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
  
    // Clear cart
    localStorage.removeItem("cart");
  
    alert("✅ Order placed successfully!\nThank you for shopping with us!");
  
    // Redirect to homepage
    window.location.href = "index.html";
  });
  