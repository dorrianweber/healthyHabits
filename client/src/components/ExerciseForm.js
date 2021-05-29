import React, { useState } from "react";
import { useAuthState } from "../utils/state";
import axios from "axios";
import moment from "moment";
import { useHistory } from "react-router-dom";

function ExerciseForm() {
  let history = useHistory();
  const state = useAuthState();

  const [userState, setState] = useState({
    date: "",
    workout_name: "",
    workout_type: "",
    distance: "",
    weight: "",
    reps: "",
    duration: "",
  });

  const onChange = (e) => {
    setState({ ...userState, [e.target.name]: e.target.value });
  };

  const exerciseFormHandler = async (event) => {
    event.preventDefault();

    if (state) {
      userState.date = moment(userState.date).format("M/D/YY");
      const newExercise = await axios.post("/api/exercise", {
        date: userState.date,
        workout_name: userState.workout_name,
        workout_type: userState.workout_type,
        distance: userState.distance,
        weight: userState.weight,
        reps: userState.reps,
        duration: userState.duration,
      });
      console.log("newExercise: ", newExercise);

      if (newExercise.status === 200) {
        console.log("success!");
        console.log(state);
        history.push("/profile");
      } else {
        alert(newExercise.statusText);
      }
    }
  };

  React.useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div>
      <div>
        <form
          className="form exercise-form"
          onSubmit={(e) => exerciseFormHandler(e)}
        >
          <label htmlFor="date">Date:</label>
          <input
            className="form-input"
            type="date"
            id="date"
            name="date"
            onChange={(e) => onChange(e)}
          />

          <br />

          <label htmlFor="workout_name">Workout Name:</label>
          <input
            className="form-input"
            type="text"
            id="workout_name"
            name="workout_name"
            onChange={(e) => onChange(e)}
          />

          <br />

          <label htmlFor="workout_type">Workout Type:</label>
          <select
            name="workout_type"
            id="workout_type"
            onChange={(e) => onChange(e)}
          >
            <option value="Select">Select one</option>
            <option value="Cardio">Cardio</option>
            <option value="Strength">Strength</option>
          </select>

          <br />

          <p>Workout info:</p>

          <label htmlFor="distance">Distance (miles):</label>
          <input
            className="form-input"
            type="number"
            id="distance"
            name="distance"
            onChange={(e) => onChange(e)}
          />

          <br />

          <label htmlFor="weight">Weight (lbs):</label>
          <input
            className="form-input"
            type="number"
            id="weight"
            name="weight"
            onChange={(e) => onChange(e)}
          />

          <br />

          <label htmlFor="reps">Reps:</label>
          <input
            className="form-input"
            type="number"
            name="reps"
            id="reps"
            onChange={(e) => onChange(e)}
          />

          <br />

          <label htmlFor="duration">Duration (minutes):</label>
          <input
            className="form-input"
            type="number"
            id="duration"
            name="duration"
            onChange={(e) => onChange(e)}
          />

          <br />

          <button className="btn btn-primary" id="exerciseSubmit" type="submit">
            Submit
          </button>
        </form>
      </div>

      <br />
    </div>
  );
}

export default ExerciseForm;
