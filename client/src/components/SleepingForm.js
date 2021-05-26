import React from "react";
import { useAuthState } from "../utils/state";

function SleepingForm() {
  const state = useAuthState();

  return (
    <div>
      <form className="form sleeping-form">
        <label for="date">Date:</label>
        <input className="form-input" type="date" id="date" />

        <br />

        <label for="sleep-hours">Hours slept:</label>
        <input className="form-input" type="number" id="sleep-hours" />

        <br />

        <button className="btn btn-primary" id="sleepingSubmit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SleepingForm;
