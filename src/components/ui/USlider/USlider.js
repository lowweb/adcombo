document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = slider.querySelectorAll(".slider__item");
    const activeSlides = "slider__item--active";
    const slideCount = slides.length;
    const controlButtons = slider.querySelectorAll(".controls__button");
    const activeButton = "active";
    const inactiveButton = "aria-disabled";
    const currentButton = "aria-current";
    let currentSlide = 0;

    function updateSlider() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add(activeSlides);
            } else {
                slide.classList.remove(activeSlides);
            }
        });

        controlButtons.forEach((button, index) => {
            if (index === currentSlide) {
                button.classList.add(activeButton);
                button.setAttribute(currentButton, true);
            } else {
                button.classList.remove(activeButton);
                button.removeAttribute(currentButton, true);
            }
        });
    }

    controlButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            if (index < slideCount) {
                currentSlide = index;
                updateSlider();
            }
        });
    });

    updateSlider();
});
