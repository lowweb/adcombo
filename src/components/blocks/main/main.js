window.addEventListener("scroll", function () {
    let parallax = document.getElementById("parallax");
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.5 + "px"; // 0.5 - коэффициент для параллакса
});
