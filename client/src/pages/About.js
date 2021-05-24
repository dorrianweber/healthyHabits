import React from "react";

function About() {
  return (
    <div className="About">
      <div>
        <p>About us</p>
        <p>
          Healthy Habits was created to help people improve their life by
          changing bad habits and creating healthy habits.
        </p>

        <div>
          Team members:
          <ul style={{ listStyleType: "none" }}>
            <li>Reynaldo Bracamonte</li>
            <li>Dorrian Weber</li>
            <li>Matthew Herold</li>
            <li>Chris Holmes</li>
            <li>Petr Constantinov</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
