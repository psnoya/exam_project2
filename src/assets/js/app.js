window.addEventListener("DOMContentLoaded", () => {
    let  button = document.getElementById("quote");
    let  message = document.getElementById("message");
  
    showMeAQuote = () => {
      message.innerHTML = "hello how are you";
    };
    button.addEventListener("click", showMeAQuote);
  });