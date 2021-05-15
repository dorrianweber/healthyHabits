import React from "react";
import { useAuthState } from "./App"


function Header() {
    const [state, dispatch] = useAuthState()

  return (
    <div>
      <header className="display-flex justify-space-between align-center p-2">
        <h1>
          <a className="title" href="/">
            Healthy Habits!
          </a>
        </h1>
        <hr />
        <nav className="topnav">
          {!state.isAuthenticated ? <div><button onClick={() => dispatch({type: "LOGIN"})}>Login</button></div> : 
          <div>
          <a href="/">Home</a>
          <a href="/profile">Profile</a>
          <a href="/form">Log your habits</a>
          <a href="/logout" className="no-button" id="logout">
            Logout
          </a>
          </div>}
        </nav>
        <hr />
      </header>
    </div>
  );
}

export default Header;
