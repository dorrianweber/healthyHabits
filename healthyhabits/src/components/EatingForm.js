import React from "react";
import { useAuthState } from "../utils/state";

function EatingForm() {
    const state = useAuthState();

    return (
        <div>
            <form className="form eating-form">

                <label for="date">Date:</label>
                <input className="form-input" type="date" id="date" />

                <br />

                <label for="food_name">Food name:</label>
                <input className="form-input" type="text" id="food_name" />

                <br />

                <label for="meal_type">Meal Type:</label>
                <select name="meal_type" id="meal_type">
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Snack">Snack</option>
                </select>

                <br />

                <p>Nutritional info:</p>

                <label for="calories">Calories:</label>
                <input className="form-input" type="number" id="calories" />

                <br />

                <label for="protein">Protein (g):</label>
                <input className="form-input" type="number" id="protein" />

                <br />

                <label for="fat">Fat (g):</label>
                <input className="form-input" type="number" id="fat" />

                <br />

                <label for="carbs">Carbs (g):</label>
                <input className="form-input" type="number" id="carbs" />

                <br />

                <button className="btn btn-primary" id="eatingSubmit" type="submit">Submit</button>

            </form>

            <div className="fancy">
                <div id="quote">

                </div>
                <div id="author">

                </div>
            </div>
        </div>
    );
};

export default EatingForm;