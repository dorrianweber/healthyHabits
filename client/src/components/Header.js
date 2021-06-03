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
          <NavLink className="link" to="/">
            Home
          </NavLink>
          <NavLink className="link" to="/about">About us</NavLink>
          {!state.isAuthenticated ? (
            <div>
              <NavLink className="link" to={"/login"}>Login</NavLink>
            </div>
          ) : (
            <div>
              <NavLink className="link" to="/profile">Profile</NavLink>
              <NavLink className="link" to="/form">Log your habits</NavLink>
              <NavLink className="link" to="/active">Activity search</NavLink>
            
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
