document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! We'll get back to you shortly.");
    this.reset();
  });
  