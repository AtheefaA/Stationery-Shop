// contact.js
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Simulate form submission (e.g., log to console or integrate with a backend)
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
  
    // Show a success message
    alert('Thank you for contacting us! We will get back to you shortly.');
  
    // Reset the form
    document.getElementById('contact-form').reset();
  });
  