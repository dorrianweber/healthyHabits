import React, { useState } from "react";
import { useAuthState } from "../utils/state";
import axios from "axios";
import moment from "moment";
import { useHistory } from "react-router-dom";

function EatingForm() {
  let history = useHistory();
  const state = useAuthState();

  const [userState, setState] = useState({
    date: "",
    food_name: "",
    meal_type: "",
    calories: "",
    protein: "",
    fat: "",
    carbs: "",
  });

  const onChange = (e) => {
    setState({ ...userState, [e.target.name]: e.target.value });
  };

  const eatingFormHandler = async (event) => {
    event.preventDefault();

    if (state) {
      userState.date = moment(userState.date).format("M/D/YY");
      const newEat = await axios.post("/api/eating", {
        date: userState.date,
        food_name: userState.food_name,
        meal_type: userState.meal_type,
        calories: userState.calories,
        protein: userState.protein,
        fat: userState.fat,
        carbs: userState.carbs,
      });
      console.log("newEat: ", newEat);

      if (newEat.status === 200) {
        console.log("success!");
        console.log(state);
        history.push("/profile");
      } else {
        alert(newEat.statusText);
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
          className="form eating-form"
          onSubmit={(e) => eatingFormHandler(e)}
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

          <label htmlFor="food_name">Food name:</label>
          <input
            className="form-input"
            type="text"
            id="food_name"
            name="food_name"
            onChange={(e) => onChange(e)}
          />

          <br />

          <label htmlFor="meal_type">Meal Type:</label>
          <select name="meal_type" id="meal_type" onChange={(e) => onChange(e)}>
            <option value="Select">Select one</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </select>

          <br />

          <p>Nutritional info:</p>

          <label htmlFor="calories">Calories:</label>
          <input
            className="form-input"
            type="number"
            id="calories"
            name="calories"
            onChange={(e) => onChange(e)}
          />

          <br />

          <label htmlFor="protein">Protein (g):</label>
          <input
            className="form-input"
            type="number"
            id="protein"
            name="protein"
            onChange={(e) => onChange(e)}
          />

          <br />

          <label htmlFor="fat">Fat (g):</label>
          <input
            className="form-input"
            type="number"
            name="fat"
            id="fat"
            onChange={(e) => onChange(e)}
          />

          <br />

          <label htmlFor="carbs">Carbs (g):</label>
          <input
            className="form-input"
            type="number"
            id="carbs"
            name="carbs"
            onChange={(e) => onChange(e)}
          />

          <br />

          <button className="btn btn-primary" id="eatingSubmit" type="submit">
            Submit
          </button>
        </form>
      </div>

      <br />
    </div>
  );
}

export default EatingForm;
