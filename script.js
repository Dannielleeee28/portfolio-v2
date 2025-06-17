
emailjs.init("PlcxN_UlYvbT9JjWR"); 

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_schtq6y", "template_yg6e585", this)
    .then(() => {
      alert("🎉 Message sent successfully!");
      this.reset();
    }, (error) => {
      console.error("❌ Failed...", error);
      alert("Something went wrong. Try again!");
    });
});