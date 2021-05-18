import React from "react";
import EatingForm from "../components/EatingForm";
import SleepingForm from "../components/SleepingForm";
import SpendingForm from "../components/SpendingForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// !!!!!!!!!!!!!!!!!!!!!!
function Form() {
    return (
        <div>
            <form class="form habit-form" onsubmit={(e) => {
                e.preventdefault();

                const selection = document.querySelector("#categories").value;

                switch (selection) {
                    case "eating":
                        <EatingForm />
                        break;
                    case "sleeping":
                        <SleepingForm />
                        break;
                    case "spending":
                        <SpendingForm />
                        break;

                    default:
                        break;
                };

            }}>
                <label for="categories">Choose a category:</label>
                <select name="categories" id="categories">
                    <option value="eating">Eating</option>
                    <option value="sleeping">Sleeping</option>
                    <option value="spending">Spending</option>
                </select>

                <br />

                <button class="btn btn-primary" id="category-next" type="submit">Next</button>

            </form>

            <Router>
                <div>
                    <Switch>
                        <Route path={"/eating"}>
                            <EatingForm />
                        </Route>
                        <Route path={"/sleeping"}>
                            <SleepingForm />
                        </Route>
                        <Route path={"/spending"}>
                            <SpendingForm />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default Form;