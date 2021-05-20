import React, { useState } from "react";
import axios from "axios";

function Login() {

    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const loginFormHandler = async (event) => {
        event.preventDefault();

        if (state.email && state.password) {
            const response = await axios.post("/api/users/login", {
                method: "POST",
                body: JSON.stringify({ email: state.email, password: state.password }),
                headers: { "Content-Type": "application/json" },
            });

            console.log(response);

            if (response.ok) {
                // document.location.replace("/profile");
                console.log("success!");
            } else {
                alert(response.statusText);
            }
        }
    };

    return (
        <div className="row" id="loginpic">
            <br />
            <div className="col-md-6">
                <h2>Login</h2>

                <form className="form login-form" onSubmit={(e) => loginFormHandler(e)}>
                    <div className="form-group" >
                        <label for="email-login">E-mail:</label>
                        <input className="form-input" type="text" id="email-login" name="email" onChange={(e) => onChange(e)} />
                    </div>
                    <div className="form-group">
                        <label for="password-login">Password:</label>
                        <input className="form-input" type="password" id="password-login" name="password" onChange={(e) => onChange(e)} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Login</button>
                    </div>
                </form>

                <br />
                {/* <div className="col-md-6">
                </div> */}
                <br />
                <div className="col-md-6">
                    <h2>Sign Up</h2>

                    <form className="form signup-form">
                        <div className="form-group">
                            <label for="name-signup">Name:</label>
                            <input className="form-input" type="text" id="name-signup" />
                        </div>
                        <div className="form-group">
                            <label for="email-signup">Email:</label>
                            <input className="form-input" type="text" id="email-signup" />
                        </div>
                        <div className="form-group">
                            <label for="password-signup">Password:</label>
                            <input className="form-input" type="password" id="password-signup" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Sign Up</button>
                        </div>
                    </form>
                </div>
                <br />

            </div >
        </div>
    );
};

export default Login;