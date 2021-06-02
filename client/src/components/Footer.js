import React from "react";
import DarkModeToggle from "./DarkModeToggle";

function Footer() {
  return (
    <div>
      <br />
      <footer>
        Thank you for visiting!
        <br />
        <div>
          <a className="link" href="/About" style={{ marginLeft: "10px", marginRight: "10px" }}>
            About us!
          </a>
          <a className="link" href="mailto:healthyhabitsapp123@gmail.com">Contact us.</a>
        </div>
        <div>
          <br/>
          <DarkModeToggle className="toggler"/>
        </div>
        <br />
        <div>
          <p>
            Copyright @2021 Healthy Habits. All rights reserved.
            <a className="link" href="https://github.com/dorrianweber/healthyHabits">
              <i className="fab fa-github" style={{ marginLeft: "10px" }}>
                {" "}
              </i>
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
