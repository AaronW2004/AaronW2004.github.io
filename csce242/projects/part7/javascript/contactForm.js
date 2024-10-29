// contactForm.js

document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    formMessage.textContent = '';

    const formData = new FormData(contactForm);
    formData.append("access_key", "766e15ab-403a-4cae-a18d-c044032d3108");

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        formMessage.textContent = 'Message sent successfully!';
        formMessage.style.color = 'green';
        contactForm.reset();
      } else {
        formMessage.textContent = 'Failed to send message. Please try again.';
        formMessage.style.color = 'red';
      }
    } catch (error) {
      formMessage.textContent = 'An error occurred. Please try again later.';
      formMessage.style.color = 'red';
    }
  });
});
