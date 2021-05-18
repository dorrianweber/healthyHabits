import React from "react";
// import EatingForm from "../components/EatingForm";
import SleepingForm from "../components/SleepingForm"

function Form() {
    return (
        <div>
            <form class="form habit-form">
                <label for="categories">Choose a category:</label>
                <select name="categories" id="categories">
                    <option value="eating">Eating</option>
                    <option value="sleeping">Sleeping</option>
                    <option value="spending">Spending</option>
                </select>

                <br />

                <button class="btn btn-primary" id="category-next" type="submit">Next</button>

            </form>

            <SleepingForm />
        </div>
    );
};

export default Form;