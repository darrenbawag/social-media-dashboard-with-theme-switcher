var body = document.querySelector("body");
var darkMode = document.querySelector("#dark-mode");

darkMode.addEventListener("click", function() {
    body.classList.toggle("light");
});