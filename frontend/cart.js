function loadCartItems() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalAmountSpan = document.getElementById("cart-total");
  
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    cartItemsContainer.innerHTML = "";
    let totalAmount = 0;
  
    cart.forEach((product, index) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
  
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>₹${product.price}</strong></p>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
  
      cartItemsContainer.appendChild(productCard);
      totalAmount += product.price;
    });
  
    totalAmountSpan.innerText = totalAmount;
  }
  
  function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const removedItem = cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${removedItem[0].name} removed from cart`);
    loadCartItems();
  }
  
  function goToCheckout() {
    window.location.href = "checkout.html";
  }
  
  loadCartItems();
  