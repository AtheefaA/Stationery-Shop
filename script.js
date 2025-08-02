document.addEventListener('DOMContentLoaded', function () {
  // Cart array to store added items with their prices
  const cart = [];
  const cartItemsList = document.getElementById('cart-items');
  const cartTotalDisplay = document.getElementById('cart-total-display'); // This is where we'll show the total

  // Handle "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
      const productName = this.parentElement.querySelector('h3').textContent;
      const productPrice = parseFloat(
        this.parentElement.querySelector('.price').textContent.replace('$', '')
      );

      // Add the item to the cart array
      cart.push({ name: productName, price: productPrice });

      updateCart();
    });
  });

  // Function to update the cart
  function updateCart() {
    // Clear current cart items
    cartItemsList.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItemsList.appendChild(li);
      total += item.price;
    });

    // Update total amount on the page
    cartTotalDisplay.textContent = `Total: $${total.toFixed(2)}`;
  }

  // Handle "Pay Now" button
  const payButton = document.getElementById('pay-now');
  payButton.addEventListener('click', function () {
    if (cart.length > 0) {
      const totalAmount = cart.reduce(
        (total, cartItem) => total + cartItem.price,
        0
      );
      alert(
        `Your total amount is $${totalAmount.toFixed(2)}. Proceeding to payment...`
      );
      cart.length = 0; // Clear cart after payment
      updateCart(); // Update cart display (empty it)
    } else {
      alert('Your cart is empty! Add items to cart first.');
    }
  });

  // Tab functionality
  function openTab(event, tabName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove('active');
    }

    tablinks = document.getElementsByClassName('tablink');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('active');
    }

    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
  }

  // Default tab open
  document.querySelector('.tablink').click();
});

// Toggle the navigation menu when the hamburger icon is clicked
document.getElementById('hamburger').addEventListener('click', function () {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');
});
