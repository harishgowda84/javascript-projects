let bannerBtn = document.querySelector(".banner-btn");
let modelOverlay = document.querySelector(".modal-overlay");
let modalBtn = document.querySelector(".modal-btn");
console.log(modelOverlay);

bannerBtn.addEventListener("click", function () {
  modelOverlay.classList.add("modal-open");
});

modalBtn.addEventListener("click", function () {
  modelOverlay.classList.remove("modal-open");
});
