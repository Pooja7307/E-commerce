// const products = [
//     { id: 1, title: 'Product A', price: 25.99 },
//     { id: 2, title: 'Product B', price: 40.00 },
//     { id: 3, title: 'Product C', price: 19.50 },
//   ];
  
//   const productList = document.getElementById('product-list');
//   if (productList) {
//     products.forEach((product) => {
//       const card = document.createElement('div');
//       card.className = 'product-card';
//       card.innerHTML = `
//         <h3>${product.title}</h3>
//         <p>$${product.price}</p>
//         <button onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
//       `;
//       productList.appendChild(card);
//     });
//   }
  
//   function addToCart(product) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart.push(product);
//     localStorage.setItem('cart', JSON.stringify(cart));
//     alert(`${product.title} added to cart!`);
//   }
  
//   function goToCart() {
//     window.location.href = 'cart.html';
//   }
  

// client/js/app.js

// Sample product data (in real app, it will come from backend API)
const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation.",
      price: 2999,
      image: "https://via.placeholder.com/300x200?text=Headphones"
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Fitness tracker with heart rate monitor and step counter.",
      price: 1999,
      image: "https://via.placeholder.com/300x200?text=Smart+Watch"
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      description: "Portable speaker with deep bass and stereo sound.",
      price: 1499,
      image: "https://via.placeholder.com/300x200?text=Speaker"
    },
    {
      id: 4,
      name: "Laptop Bag",
      description: "Waterproof laptop backpack for 15-inch laptops.",
      price: 999,
      image: "https://via.placeholder.com/300x200?text=Laptop+Bag"
    }
  ];
  
  // Render products to the DOM
  function renderProducts(productArray) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Clear previous products
  
    productArray.forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
  
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>₹${product.price}</strong></p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
  
      productList.appendChild(productCard);
    });
  }
  
  // Add product to localStorage cart
  function addToCart(productId) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  }
  
  // Search functionality
  document.getElementById("search-input").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const filteredProducts = products.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    );
    renderProducts(filteredProducts);
  });
  
  
  renderProducts(products);
  