const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "23 April 2024";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);

// Animate on Scroll
function reveal() {
    var reveals = document.querySelectorAll(".category-container, .product-container, .client-box, .logo-container, .app-img, .download-app-text");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);



  document.querySelectorAll('.cart-btn').forEach(btn => {
      btn.addEventListener('click', function (event) {
          event.preventDefault(); // Prevent the default action of the link
          let productBox = this.parentElement;
          let productName = productBox.querySelector('strong').innerText;
          let productImage = productBox.querySelector('img').getAttribute('src');
          let productQuantity = productBox.querySelector('.quantity').innerText;
          let productPrice = productBox.querySelector('.price').innerText;

          // Encode product details to be passed as URL parameters
          let params = new URLSearchParams();
          params.append('name', productName);
          params.append('image', productImage);
          params.append('quantity', productQuantity);
          params.append('price', productPrice);

          // Redirect to shopping cart page with product details
          window.location.href = 'Shopping Cart HTML.html?' + params.toString();
      });
  });
