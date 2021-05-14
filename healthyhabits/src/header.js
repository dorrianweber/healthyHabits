import React from "react";

function Header () {
return (
    <div>
<header class="display-flex justify-space-between align-center p-2">
            <h1>
                <span role="img" aria-label="yoga">🧘</span>
                <a href="/">Healthy Habits!</a>

            </h1>
            <nav class="topnav">
                {/* Conditionally render login or logout links */}
                {/* {{#if logged_in}} */}
                <a href="/">Home</a>
                <a href="/profile">Profile</a>
                <a href="/form">Log your habits</a>
                <button class="no-button" id="logout">Logout</button>
                {/* {{else}} */}
                {/* <a href="/login">Login</a>
                {{/if}} */}
            </nav>
        </header>
    </div>
)};

export default Header;