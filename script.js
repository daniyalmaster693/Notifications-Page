document.addEventListener("DOMContentLoaded", () => {
  const counter = document.querySelector(".notifications-counter");
  const clear = document.querySelector(".clear");
  const redDots = document.querySelectorAll(".red-dot");
  const notification1 = document.querySelector(".notification-1");
  const notification2 = document.querySelector(".notification-2");
  const notification3 = document.querySelector(".notification-3");

  function clearNotifications() {
    counter.textContent = "0";
    notification1.style.backgroundColor = "white";
    notification2.style.backgroundColor = "white";
    notification3.style.backgroundColor = "white";
    redDots.forEach((redDot) => {
      redDot.style.display = "none";
    });
  }

  clear.addEventListener("click", clearNotifications);
});
