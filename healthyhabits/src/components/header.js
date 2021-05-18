import React from "react";
import { useAuthState } from "../utils/state";

function Header() {
  const state = useAuthState();

  return (
    <div>
      <header
        id="header"
        className="display-flex justify-space-between align-center p-2"
      >
        <h1>
          <a className="title">Healthy Habits!</a>
        </h1>
        <hr />
        <nav className="topnav">
          <a className="home" href="/">
            Home
          </a>
          {!state.isAuthenticated ? (
            <div>
              <a href={"/login"}>Login</a>
            </div>
          ) : (
            <div>
              <a href="/profile">Profile</a>
              <a href="/form">Log your habits</a>
              <a href="/logout" className="no-button" id="logout">
                Logout
              </a>
            </div>
          )}
        </nav>
        <hr />
      </header>
    </div>
  );
}

export default Header;
