const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  formMessage.textContent = "Sending...";
  formMessage.style.color = "#114448";

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      formMessage.textContent = "Your message has been sent successfully!";
      formMessage.style.color = "green";
      form.reset();
    } else {
      formMessage.textContent = "There was an error. Please try again.";
      formMessage.style.color = "red";
    }
  } catch (error) {
    formMessage.textContent = "Network error. Please try again later.";
    formMessage.style.color = "red";
  }
});
