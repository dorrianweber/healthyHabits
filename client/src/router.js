import Homepage from "./pages/Homepage";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Form from "./pages/Form";
import About from "./pages/About";
import Active from "./pages/Active";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function AppRouter() {
  return (
    <Router>
      <header className="App-header">
        <Header />
      </header>
      <div>
        <Switch>
          <Route exact path={"/"}>
            <Homepage />
          </Route>
          <Route exact path={"/login"}>
            <Login />
          </Route>
          <Route exact path={"/profile"}>
            <Profile />
          </Route>
          <Route path={"/form"}>
            <Form />
          </Route>
          <Route path={"/active"}>
            <Active />
          </Route>
          <Route path={"/about"}>
            <About />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <br />
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
