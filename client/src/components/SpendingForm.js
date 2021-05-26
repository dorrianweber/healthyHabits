import React from "react";
import { useAuthState } from "../utils/state";

function SpendingForm() {
  const state = useAuthState();

  return (
    <div>
      <form class="form spending-form">
        <label for="date">Date:</label>
        <input class="form-input" type="date" id="date" />

        <br />

        <label for="restaurant">Restaurant spending ($):</label>
        <input
          class="form-input"
          type="number"
          id="restaurant"
          step="0.01"
          min="0.00"
        />

        <br />

        <label for="coffee">Coffee spending ($):</label>
        <input
          class="form-input"
          type="number"
          id="coffee"
          step="0.01"
          min="0.00"
        />

        <br />

        <label for="bar">Bar spending ($):</label>
        <input
          class="form-input"
          type="number"
          id="bar"
          step="0.01"
          min="0.00"
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
