// ===========Typing-annimation================

var typedn = new Typed(".typing", {
  strings: [
    "Slideshow Producer",
    "Web Developer",
    "Video Editor",
    "Web Designer",
    "Slideshow Producer",
  ],
  typeSpeed: 100,
  BackSpeed: 50,
  loop: true,
});
var typednew = new Typed(".typing-new", {
  strings: [
    "Slideshow Producer",
    "Web Developer",
    "Video Editor",
    "Web Designer",
    "Slideshow Producer",
  ],
  typeSpeed: 100,
  BackSpeed: 40,
  loop: true,
});

// ===========Scrool Reval================

ScrollReveal({
    reset:true,
    distance:'50px',
    duration:1000,
    delay:200
});
ScrollReveal().reveal('.home-info',{origin: 'bottom'});
ScrollReveal().reveal('.hello',{origin: 'left'});
ScrollReveal().reveal('.home-img',{origin: 'top'});
ScrollReveal().reveal('.container',{origin: 'bottom'});

// ===========Toggle-navbar================

let toggleBtn = document.querySelector('.navbar-toggle');
let sidebar = document.querySelector('.side-bar');

toggleBtn.addEventListener("click",()=>{
    sidebar.classList.toggle('active');
    toggleBtn.classList.toggle('navbar-toggle-btn');

})

// ===========Send Email================
function sendMail() {
  var params = {
    fullName: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_abuqn34", "template_oy5xrsi", params)
    .then(function (res) {
      alert("Your message sent successfully!");
      document.getElementById("fullName").value = "";
      document.getElementById("email_id").value = "";
      document.getElementById("xmessage").value = "";
      console.log(res);
    });
}
