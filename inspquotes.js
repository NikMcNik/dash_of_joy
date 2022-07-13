let button = document.querySelector("#quote");

button.addEventListener("click", (event) => {
  let inspQuote = document.querySelector(".content p");
  fetch("https://type.fit/api/quotes")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let min = Math.ceil(0);
      let max = Math.floor(1643);
      let rIndex = Math.floor(Math.random() * (max - min + 1) + min);
      inspQuote.textContent = data[rIndex].text + " - " + data[rIndex].author;
      inspQuote.classList.remove("hidden");
    });
});

let quoteformbutton = document.querySelector("#quoteform");

quoteformbutton.addEventListener("click", (event) => {
  let quoteform = document.querySelector(".insparationalquoteform form");
  quoteform.classList.remove("hidden");
});
