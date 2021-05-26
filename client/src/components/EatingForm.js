import React from "react";
import { useAuthState } from "../utils/state";

function EatingForm() {
  const state = useAuthState();

  return (
    <div>
      <div>
        <form className="form eating-form">
          <label htmlFor="date">Date:</label>
          <input className="form-input" type="date" id="date" />

          <br />

          <label htmlFor="food_name">Food name:</label>
          <input className="form-input" type="text" id="food_name" />

          <br />

          <label htmlFor="meal_type">Meal Type:</label>
          <select name="meal_type" id="meal_type">
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </select>

          <br />

          <p>Nutritional info:</p>

          <label htmlFor="calories">Calories:</label>
          <input className="form-input" type="number" id="calories" />

          <br />

          <label htmlFor="protein">Protein (g):</label>
          <input className="form-input" type="number" id="protein" />

          <br />

          <label htmlFor="fat">Fat (g):</label>
          <input className="form-input" type="number" id="fat" />

          <br />

          <label htmlFor="carbs">Carbs (g):</label>
          <input className="form-input" type="number" id="carbs" />

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
