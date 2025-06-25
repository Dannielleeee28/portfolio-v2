
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

new Glide('.glide', {
  type: 'carousel',
  perView: 3,
  gap: 5,
  focusAt: 'center',
  breakpoints: {
    1024: {
      perView: 2
    },
    600: {
      perView: 1
    }
  }
}).mount();
