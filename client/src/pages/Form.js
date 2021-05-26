import React from "react";
import EatingForm from "../components/EatingForm";
import SleepingForm from "../components/SleepingForm";
import SpendingForm from "../components/SpendingForm";

function Form() {
  const [showEating, setShowEating] = React.useState(false);
  const [showSleeping, setShowSleeping] = React.useState(false);
  const [showSpending, setShowSpending] = React.useState(false);

  const handleShowEating = () => {
    setShowEating(true);
    setShowSleeping(false);
    setShowSpending(false);
  };

  const handleShowSleeping = () => {
    setShowEating(false);
    setShowSleeping(true);
    setShowSpending(false);
  };

  const handleShowSpending = () => {
    setShowEating(false);
    setShowSleeping(false);
    setShowSpending(true);
  };

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
  setInterval(generateQuote(), 10000);
  //Note - 10000 milliseconds = 10

  return (
    <div className="container-fluid" style={{ paddingBottom: "70px" }}>
      <form
        className="form habit-form"
        onSubmit={(e) => {
          e.preventDefault();
          var selection = document.querySelector("#categories").value;
          switch (selection) {
            case "eating":
              handleShowEating();
              break;
            case "sleeping":
              handleShowSleeping();
              break;
            case "spending":
              handleShowSpending();
              break;
            default:
              break;
          }
        }}
      >
        <label htmlFor="categories">Choose a category:</label>
        <select name="categories" id="categories">
          <option value="eating">Eating</option>
          <option value="sleeping">Sleeping</option>
          <option value="spending">Spending</option>
        </select>

        <br />

        <button className="btn btn-primary" id="category-next" type="submit">
          Next
        </button>
      </form>
      <div className="row">
        <div className="col-md-4" id="formSpot">
          {showEating && <EatingForm />}
          {showSleeping && <SleepingForm />}
          {showSpending && <SpendingForm />}
        </div>
        <div className="col-md-4" style={{ paddingBottom: "20px" }}>
          <div className="fancy">
            <div id="quote"></div>
            <div id="author"></div>
          </div>
          <br />
        </div>
      </div>
      <br />
    </div>
  );
}

export default Form;
