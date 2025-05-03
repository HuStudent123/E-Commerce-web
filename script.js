let cart = [];

function addToCart(item) {
  cart.push(item);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = "";
  cart.forEach((product) => {
    const li = document.createElement('li');
    li.textContent = product;
    cartList.appendChild(li);
  });
}

document.getElementById("order-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Order placed successfully!");
  cart = [];
  updateCart();
  this.reset();
});
