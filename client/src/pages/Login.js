import React, { useState } from "react";
import axios from "axios";
import { useAuthState } from "../utils/state"
import { useHistory } from "react-router-dom";


function Login() {
    let history = useHistory()
    const [state, dispatch] = useAuthState()

  const onChange = (e) => {
    setState({ ...userState, [e.target.name]: e.target.value });
  };

  const loginFormHandler = async (event) => {
    event.preventDefault();

    if (userState.email && userState.password) {
      const response = await axios.post("/api/users/login", {
        email: userState.email,
        password: userState.password,
      });

      console.log(response);

      if (response.status === 200) {
        document.location.replace("/profile");
        console.log("success!");
        dispatch({ type: "LOGIN", payload: { user: userState } });
      } else {
        alert(response.statusText);
      }
    }
  };
  React.useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div className="row" id="loginpic">
      <br />
      <div className="col-md-6">
        <h2>Login</h2>

            if (response.status === 200) {
                console.log("success!");
                dispatch({type: "LOGIN",
                        payload: {user: response.data.user.email}  });
                        console.log(state)
                        history.push('/profile')
            } else {
                alert(response.statusText);
            }
        }
    };
React.useEffect(() => {
    console.log(state)
}, [state])
    return (
        <div className="row" id="loginpic">
            <br />
            <div className="col-md-6">
                <h2>Login</h2>

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
              <input
                className="form-input"
                type="password"
                id="password-signup"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Login;
