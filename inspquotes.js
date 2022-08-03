let button = document.querySelector("#quote");

button.addEventListener("click", (event) => {
  let inspQuote = document.querySelector(".content p");

  let listnum = Math.random();
  if (listnum > 0.5) {
    fetch("/get_quotes.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let min = 0;
        let max = data.length - 1;
        let rIndex = Math.floor(Math.random() * (max - min + 1) + min);
        inspQuote.textContent =
          data[rIndex].quote + " - " + data[rIndex].author;
        inspQuote.classList.remove("hidden");
      });
  } else {
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
  }
});

let quoteformbutton = document.querySelector("#quoteform");

quoteformbutton.addEventListener("click", (event) => {
  let quoteform = document.querySelector(".insparationalquoteform form");
  quoteform.classList.remove("hidden");
});
