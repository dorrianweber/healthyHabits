import React, { useState } from "react";
import { useAuthState } from "../utils/state";
import axios from "axios";
import moment from "moment";
import { useHistory } from "react-router-dom";

function SpendingForm() {
  let history = useHistory();
  const state = useAuthState();

  const [userState, setState] = useState({
    date: "",
    restaurant: "0",
    coffee: "0",
    bar: "0",
  });

  const onChange = (e) => {
    setState({ ...userState, [e.target.name]: e.target.value });
  };

  const spendingFormHandler = async (event) => {
    event.preventDefault();

    if (state) {
      userState.date = moment(userState.date).format("M/D/YY");
      const newSpend = await axios.post("/api/spending", {
        date: userState.date,
        restaurant: userState.restaurant,
        coffee: userState.coffee,
        bar: userState.bar,
      });
      console.log("newSpend: ", newSpend);

      if (newSpend.status === 200) {
        console.log("success!");
        console.log(state);
        history.push("/profile");
      } else {
        alert(newSpend.statusText);
      }
    }
  };

  React.useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div>
      <form class="form spending-form" onSubmit={(e) => spendingFormHandler(e)}>
        <label for="date">Date:</label>
        <input
          class="form-input"
          type="date"
          id="date"
          name="date"
          onChange={(e) => onChange(e)}
        />

        <br />

        <label for="restaurant">Restaurant spending ($):</label>
        <input
          class="form-input"
          type="number"
          id="restaurant"
          step="0.01"
          min="0.00"
          name="restaurant"
          onChange={(e) => onChange(e)}
        />

        <br />

        <label for="coffee">Coffee spending ($):</label>
        <input
          class="form-input"
          type="number"
          id="coffee"
          step="0.01"
          min="0.00"
          name="coffee"
          onChange={(e) => onChange(e)}
        />

        <br />

        <label for="bar">Bar spending ($):</label>
        <input
          class="form-input"
          type="number"
          id="bar"
          step="0.01"
          min="0.00"
          name="bar"
          onChange={(e) => onChange(e)}
        />

        <br />

        <button class="btn btn-primary" id="spendingSubmit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SpendingForm;
