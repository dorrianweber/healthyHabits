import React from "react";

function Login() {
return (
<div class="row" id="loginpic">
    <br/>
    <div class="col-md-6">
        <h2>Login</h2>

        <form class="form login-form">
            <div class="form-group">
                <label for="email-login">E-mail:</label>
                <input class="form-input" type="text" id="email-login" />
            </div>
            <div class="form-group">
                <label for="password-login">Password:</label>
                <input class="form-input" type="password" id="password-login" />
            </div>
            <div class="form-group">
                <button class="btn btn-primary" type="submit">Login</button>
            </div>
        </form>

    </div>
    <br/>
    <div class="col-md-6">
    </div>
    <br/>
    <div class="col-md-6">
        <h2>Sign Up</h2>

        <form class="form signup-form">
            <div class="form-group">
                <label for="name-signup">Name:</label>
                <input class="form-input" type="text" id="name-signup" />
            </div>
            <div class="form-group">
                <label for="email-signup">Email:</label>
                <input class="form-input" type="text" id="email-signup" />
            </div>
            <div class="form-group">
                <label for="password-signup">Password:</label>
                <input class="form-input" type="password" id="password-signup" />
            </div>
            <div class="form-group">
                <button class="btn btn-primary" type="submit">Sign Up</button>
            </div>
        </form>
    </div>
    <br/>

</div>
);
};

export default Login;