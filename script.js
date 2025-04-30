// Cart functionality
let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");

  cartCount.textContent = cart.length;
  cartItems.innerHTML = "";

  let total = 0;
  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `${item.product} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
    cartItems.appendChild(div);
    total += item.price;
  });

  totalElement.textContent = total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
  } else {
    alert("Checkout successful! Thanks for your purchase.");
    cart = [];
    updateCartDisplay();
  }
}

// Contact form handling
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const response = document.getElementById("form-response");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    response.textContent = "Thanks for reaching out! We'll get back to you soon.";
    form.reset();
  });
});
