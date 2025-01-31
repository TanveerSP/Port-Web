const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

let elemC = document.querySelector("#elem-container");
let fixedImg = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter", function () {
  fixedImg.style.display = "block";
});
elemC.addEventListener("mouseleave", function () {
  fixedImg.style.display = "none";
});

let elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    let image = e.getAttribute("data-image");
    fixedImg.style.backgroundImage = `url(${image})`
    // console.log(image);
  });
});


function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100,
  });
}
swiperAnimation()

// Create a custom cursor element
const cursor = document.createElement('div');
cursor.id = 'cursor';
document.body.appendChild(cursor);

// Function to update the position of the custom cursor
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

// Function to change cursor appearance when hovering over swiper-slide
document.querySelectorAll('.swiper-slide').forEach(slide => {
  slide.addEventListener('mouseenter', () => {
    cursor.style.backgroundColor = '#ff5c0b'; // Change cursor color to orange when hovering over swiper-slide
    cursor.style.cursor = 'pointer'; // Make the cursor look like a hand
  });

  slide.addEventListener('mouseleave', () => {
    cursor.style.backgroundColor = '#ff2d03'; // Reset to initial color when leaving swiper-slide
    cursor.style.cursor = 'default'; // Revert back to default cursor when not hovering
  });
});
