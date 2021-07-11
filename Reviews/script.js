let userData = [
  {
    name: "Jennifer Smith ",
    title: "UX Designer",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, iste.",
    image_url: "./images/jennifer.jpg",
  },
  {
    name: "Carl Peter",
    title: "Project Manager",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, iste.",
    image_url: "./images/carl.jpg",
  },
  {
    name: "John Doe",
    title: "Java Expert",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, iste.",
    image_url: "./images/john_doe.jpg",
  },
  {
    name: "Sara Jones",
    title: "React Developer",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, iste.",
    image_url: "./images/sara_jones.jpg",
  },
];

let prevbtn = document.querySelector(".btn-prev");
let randomBtn = document.querySelector(".btn-random");
let nextBtn = document.querySelector(".btn-next");

let reviewImage = document.querySelector("#review-image");
let reviewId = document.querySelector("#review-id");
let reviewJob = document.querySelector("#review-job");
let reviewContent = document.querySelector("#review-content");

let counter = 0;

window.addEventListener("DOMContentLoaded", function () {
  let data = userData[0];
  reviewImage.src = data.image_url;
  reviewId.textContent = data.name;
  reviewJob.textContent = data.title;
  reviewContent.textContent = data.content;
});

prevbtn.addEventListener("click", function (event) {
  if (counter === 0) {
    counter = userData.length - 1;
  } else counter = counter - 1;

  let data = userData[counter];
  reviewImage.src = data.image_url;
  reviewId.textContent = data.name;
  reviewJob.textContent = data.title;
  reviewContent.textContent = data.content;
});

nextBtn.addEventListener("click", function (event) {
  if (counter === userData.length - 1) {
    counter = 0;
  } else counter = counter + 1;

  let data = userData[counter];
  reviewImage.src = data.image_url;
  reviewId.textContent = data.name;
  reviewJob.textContent = data.title;
  reviewContent.textContent = data.content;
});

randomBtn.addEventListener("click", function (event) {
  let counter = Math.floor(Math.random() * userData.length);

  let data = userData[counter];
  reviewImage.src = data.image_url;
  reviewId.textContent = data.name;
  reviewJob.textContent = data.title;
  reviewContent.textContent = data.content;
});
