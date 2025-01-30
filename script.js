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
