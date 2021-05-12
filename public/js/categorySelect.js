const categories = document.querySelector("#categories");
const nextBtn = document.querySelector("#category-next");

categories.addEventListener("change", (e) => {
  e.preventDefault();
  console.log(e.target.value);
});

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const categories = document.querySelector("#categories").value;

  console.log(categories);

  switch (categories) {
    case "eating":
      document.location.replace("/eatingForm");
      break;

    case "sleeping":
      document.location.replace("/sleepingForm");
      break;

    case "spending":
      document.location.replace("/spendingForm");
      break;

    default:
      document.location.replace("/categorySelect");
  }
});

const url = "https://api.quotable.io/random?tags=inspirational,famous-quotes";

function generateQuote() {
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      document.getElementById("quote").innerHTML = data.content;
      document.getElementById("author").innerHTML = "- " + data.author;
    })
    .catch(function (err) {
      console.log(err);
    });
}
// Repeat generateQuote() every 10 seconds
setInterval(generateQuote(), 30000);
//Note - 10000 milliseconds = 10
