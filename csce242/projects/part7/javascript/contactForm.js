const showEmailResult = async (e) => {
  e.preventDefault();
  const result = document.getElementById("formMessage");
  let response = await getEmailResult();
  if (response.status == 200) {
    result.innerHTML = "Email sent successfully!";
  } else {
    result.innerHTML = "Failed to send email. Please try again later.";
  }
};

const getEmailResult = async (e) => {
  const form = document.getElementById("contactForm");
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  const result = document.getElementById("formMessage");
  result.innerHTML = "please wait...";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json,
    });
    return response; 
  } catch (error) {
    console.log(error);
    result.innerHTML = "Sorry, your email couldn't be sent.";
  }
};

document.getElementById("contactForm").onsubmit = showEmailResult;
