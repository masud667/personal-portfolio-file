// menubar button

const menuBar = document.querySelector(".menubar");
const navBar = document.querySelector(".navbar-nav");

menuBar.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    navBar.classList.remove("active");
  })
);

// typed script js

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web developer", "Web designer", "Frelancer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}
function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// count number

let valueDisplay = document.querySelectorAll(".count_box .num");
let interval = 4000;

valueDisplay.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duraton = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duraton);
});

// works part

const filterItems = document.querySelector(".items");
const filterImg = document.querySelectorAll(".galleryImg");

window.onload = () => {
  filterItems.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains("item")) {
      filterItems.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active");
      let filterName = selectedItem.target.getAttribute("data-name");
      filterImg.forEach((img) => {
        let filterImg = img.getAttribute("data-name");

        if (filterImg == filterName || filterName == "all") {
          img.classList.add("show");
          img.classList.remove("hide");
        } else {
          img.classList.add("hide");
          img.classList.remove("show");
        }
      });
    }
  };
};
//testimonial

let slides = document.querySelectorAll(".slide_container");
let index = 0;
function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}
function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

// contact form

function sendMail() {
  var params = {
    fullname: document.getElementById("contactFormName").value,
    email_id: document.getElementById("contactFormEmail").value,
    message: document.getElementById("contactMassage").value,
  };
  emailjs.send("service_ducim52", "template_3nuoe1q", params).then(
    function (res) {
      alert("success! " + res.status, res.text);
    },
    function (err) {
      alert("Failed! " + err);
    }
  );
}
