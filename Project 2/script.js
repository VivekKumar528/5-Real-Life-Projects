var container = document.querySelector("#container");
var loveIcon = document.querySelector("i");

container.addEventListener("dblclick", function () {
  loveIcon.style.transform = "translate(-50%, -50%) scale(1)";
  loveIcon.style.opacity = 0.8;

  setTimeout(function () {
    loveIcon.style.opacity = 0;
  }, 1000);
  setTimeout(function () {
    loveIcon.style.transform = "translate(-50%, -50%) scale(0)";
  }, 2000);
});
