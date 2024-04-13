document.addEventListener("DOMContentLoaded", function () {
  const formElement = document.getElementById("contactForm");

  if (formElement) {
    formElement.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text();
        })
        .then((data) => {
          console.log(data);
          alert(data);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
          alert("Failed to send email. Please try again later.");
        });
    });
  } else {
    console.error("Element with ID 'contactForm' not found in the DOM.");
  }
});
