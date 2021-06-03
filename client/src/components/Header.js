import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useAuthState } from "../utils/state";
import { useHistory } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

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
      </header>
      <hr />
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="topnav mr-auto">
            <NavLink className="link" to="/">
              Home
            </NavLink>

            {!state.isAuthenticated ? (
              <NavLink className="link" to={"/login"}>
                Login
              </NavLink>
            ) : (
              <Nav>
                <NavLink className="link" to="/profile">
                  Dashboard
                </NavLink>
                <NavLink className="link" to="/form">
                  Log your habits
                </NavLink>
                <NavLink className="link" to="/active">
                  Activity search
                </NavLink>

                <button
                  onClick={handleLogout}
                  className="no-button mr-sm-2"
                  id="logout"
                  style={{
                    position: "absolute",
                    right: "150px",
                  }}
                >
                  Logout
                </button>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr />
    </div>
  );
}

export default Header;
