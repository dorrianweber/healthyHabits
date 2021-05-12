const eatingFormHandler = async (event) => {
  event.preventDefault();

  let date = document.querySelector("#date").value;
  const food_name = document.querySelector("#food_name").value.trim();
  const meal_type = document.querySelector("#meal_type").value;
  const calories = document.querySelector("#calories").value;
  const protein = document.querySelector("#protein").value;
  const fat = document.querySelector("#fat").value;
  const carbs = document.querySelector("#carbs").value;

  if (date && food_name && meal_type && calories) {

    date = moment(date).format("M/D/YY");

    const response = await fetch("/api/eating", {
      method: "POST",
      body: JSON.stringify({
        date,
        food_name,
        meal_type,
        calories,
        protein,
        fat,
        carbs,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  } else {
    alert("Date, food name, and calories are required fields");
  };
};

document
  .querySelector(".eating-form")
  .addEventListener("submit", eatingFormHandler);

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
