import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        Thank you for visiting!
        <br />
        <div>
          <a href="/About" style={{ marginLeft: "10px", marginRight: "10px" }}>
            About us!
          </a>
          <a href="/">Contact us.</a>
        </div>
        <hr />
        <div>
          <p>
            Copyright @2021 Healthy Habits. All rights reserved.
            <a href="https://github.com/dorrianweber/healthyHabits">
              <i className="fab fa-github" style={{ marginLeft: "10px" }}>
                {" "}
              </i>
            </a>
          </p>
        </div>
      </footer>

      <hr />
    </div>
  );
}

export default Footer;
