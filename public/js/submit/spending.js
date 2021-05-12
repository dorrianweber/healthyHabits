const spendingFormHandler = async (event) => {
  event.preventDefault();

  let date = document.querySelector("#date").value;
  const restaurant = document.querySelector("#restaurant").value || 0;
  const coffee = document.querySelector("#coffee").value || 0;
  const bar = document.querySelector("#bar").value || 0;

  if (date) {
    date = moment(date).format("M/D/YY");

    const response = await fetch("/api/spending", {
      method: "POST",
      body: JSON.stringify({ date, restaurant, coffee, bar }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    };
  } else {
    alert("Date is a required field");
  };
};

document
  .querySelector(".spending-form")
  .addEventListener("submit", spendingFormHandler);

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
