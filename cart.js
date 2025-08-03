let cart = [];

function addToCart(button) {
  const product = button.closest('.product');
  const id = product.dataset.id;
  const name = product.dataset.name;
  const price = parseFloat(product.dataset.price);

  cart.push({ id, name, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    const div = document.createElement("div");
    div.innerHTML = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(div);
    total += item.price;
  });

  totalEl.innerText = total.toFixed(2);
}

function checkout() {
  if (cart.length === 0) return alert("Cart is empty");
  const amount = cart.reduce((sum, item) => sum + item.price, 0) * 100;

  const options = {
    key: "https://razorpay.me/@optimist", // Replace with your Razorpay key
    amount: amount,
    currency: "INR",
    name: "VisionCare Optical",
    description: "Optical Order",
    handler: function (response) {
      alert("Payment successful: " + response.razorpay_payment_id);
      cart = [];
      updateCart();
    },
    theme: { color: "#0a3d62" }
  };

  const rzp = new Razorpay(options);
  rzp.open();
}
