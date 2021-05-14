import React from "react"

function Form () {
    return (
        <form class="form habit-form">
        <label for="categories">Choose a category:</label>
        <select name="categories" id="categories">
            <option value="eating">Eating</option>
            <option value="sleeping">Sleeping</option>
            <option value="spending">Spending</option>
        </select>

        <br/>

        <button class="btn btn-primary" id="category-next" type="submit">Next</button>

    </form>
    );
};

export default Form