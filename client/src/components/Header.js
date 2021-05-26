import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useAuthState } from "../utils/state";
import { useHistory } from "react-router-dom";

function Header() {
  let history = useHistory();
  const [state, dispatch] = useAuthState();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
  };

  console.log(state);
  return (
    <div>
      <header
        id="header"
        className="display-flex justify-space-between align-center p-2"
      >
        <h1>Healthy Habits!</h1>
        <hr />
        <nav className="topnav">
          <NavLink className="home" to="/">
            Home
          </NavLink>
          <NavLink to="/about">About us</NavLink>
          {!state.isAuthenticated ? (
            <div>
              <NavLink to={"/login"}>Login</NavLink>
            </div>
          ) : (
            <div>
              <NavLink to="/profile">Profile</NavLink>
              <NavLink to="/form">Log your habits</NavLink>

              <button
                onClick={handleLogout}
                className="no-button"
                id="logout"
                // style={{
                //   backgroundColor: "none",
                //   border: "none",
                // }}
              >
                Logout
              </button>
            </div>
          )}
        </nav>
        <hr />
      </header>
    </div>
  );
}

export default Header;
