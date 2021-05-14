import Homepage from "./pages/Homepage";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function AppRouter () {
    return (
        <Router>
        <div>
        <Switch>
            <Route exact path={"/"}>
                <Homepage/>
            </Route>
            <Route exact path={"/login"}>
                <Login />
            </Route>
            <Route>
                <NoMatch />
            </Route>
        </Switch>
      </div>
      </Router>
    );
};

export default AppRouter;