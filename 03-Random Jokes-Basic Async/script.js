const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
console.log(btn);

const URL = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", () => {
  getData(URL);
});

function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const data = JSON.parse(xhr.responseText);
      if (container.querySelector(".jokes")) {
        container.querySelector(".jokes").textContent = data.value;
      } else {
        const element = document.createElement("p");
        element.classList.add("jokes");
        element.textContent = data.value;
        container.appendChild(element);
      }
    }
  };

  xhr.send();
}
