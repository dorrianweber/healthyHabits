import React from "react";

function Header() {
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
          {/* Conditionally render login or logout links */}
          {/* {{#if logged_in}} */}
          <a href="/">Home</a>
          <a href="/profile">Profile</a>
          <a href="/form">Log your habits</a>
          <a href="/logout" className="no-button" id="logout">
            Logout
          </a>
          {/* {{else}} */}
          {/* <a href="/login">Login</a>
                {{/if}} */}
        </nav>
        <hr />
      </header>
    </div>
  );
}

export default Header;
