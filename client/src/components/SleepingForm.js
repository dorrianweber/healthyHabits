import React, { useState } from "react";
import { useAuthState } from "../utils/state";
import axios from "axios";
import moment from "moment";
import { useHistory } from "react-router-dom";

function SleepingForm() {
  let history = useHistory();
  const state = useAuthState();

  const [userState, setState] = useState({
    date: "",
    sleep_hours: 0,
  });

  const onChange = (e) => {
    setState({ ...userState, [e.target.name]: e.target.value });
  };

  const sleepingFormHandler = async (event) => {
    event.preventDefault();

    if (state) {
      userState.date = moment(userState.date).format("M/D/YY");
      const newSleep = await axios.post("/api/sleeping", {
        date: userState.date,
        hours: userState.sleep_hours,
      });
      console.log("newSleep: ", newSleep);
      if (newSleep.status === 200) {
        console.log("success!");
        console.log(state);
        history.push("/profile");
      } else {
        alert(newSleep.statusText);
      }
    }
  };

  React.useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div>
      <form
        className="form sleeping-form"
        onSubmit={(e) => sleepingFormHandler(e)}
      >
        <label for="date">Date:</label>
        <input
          className="form-input"
          type="date"
          id="date"
          name="date"
          onChange={(e) => onChange(e)}
        />

        <br />

        <label for="sleep_hours">Hours slept:</label>
        <input
          className="form-input"
          type="number"
          id="sleep_hours"
          name="sleep_hours"
          onChange={(e) => onChange(e)}
        />

        <br />

        <button className="btn btn-primary" id="sleepingSubmit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SleepingForm;
