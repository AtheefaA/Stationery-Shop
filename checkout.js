document.addEventListener('DOMContentLoaded', function () {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const checkoutItems = document.getElementById('checkout-items');
    const checkoutTotal = document.getElementById('checkout-total');
    const deliveryDate = document.getElementById('delivery-date');
  
    let total = 0;
    cartItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price}`;
      checkoutItems.appendChild(li);
      total += item.price;
    });
    checkoutTotal.textContent = `Total: $${total.toFixed(2)}`;
  
    // Calculate estimated delivery date (3 days from now)
    const today = new Date();
    const deliveryEstimate = new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000);
    deliveryDate.textContent = deliveryEstimate.toDateString();
  
    document.getElementById('address-form').addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Order placed successfully! Thank you for shopping with us.');
      localStorage.removeItem('cartItems');
      window.location.href = 'index.html';
    });
  });
  