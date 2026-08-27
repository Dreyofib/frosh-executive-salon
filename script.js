// Welcome message
alert("Welcome to Frosh Executive Salon!");

// Book Appointment
const bookButton = document.getElementById("bookButton");

bookButton.addEventListener("click", function() {
  alert("Thank you! Your appointment request has been received.");
});

// Call
const callButton = document.getElementById("callButton");

callButton.addEventListener("click", function() {
  window.location.href = "tel:+2347033819279";
});

// Chat
const chatButton = document.getElementById("chatButton");

chatButton.addEventListener("click", function() {
  window.location.href = "https://wa.me/2347033819279";
});

<button id="callButton">Call Us</button>

<button id="chatButton">Chat With Us</button>
const button = document.getElementById("bookButton");

button.addEventListener("click", function() {
  alert("Thank you! Your appointment request has been received.");
});const callButton = document.getElementById("callButton");

callButton.addEventListener("click", function() {
    window.location.href = "tel:07033819279";
});