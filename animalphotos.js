let button = document.querySelector("#photos");

button.addEventListener("click", (event) => {
  let catimage = document.querySelector(".content img");
  fetch("https://api.thecatapi.com/v1/images/search", {
    params: { limit: 1, size: "full" },
  }).then((response) => {
    response.json().then((arr) => {
      catimage.setAttribute("src", arr[0].url);
      catimage.classList.remove("hidden");
    });
  }); // Ask for 1 Image, at full resolution
});

let formbutton = document.querySelector("#animalform");

formbutton.addEventListener("click", (event) => {
  let photoform = document.querySelector(".animalphotoform form");
  photoform.classList.remove("hidden");
});
