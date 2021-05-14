import React from "react";
//, { useState, useEffect }

function Homepage() {
  return (
    <div className="row align-center mb-5">
      <div className="welcome">
        <h1>Healthy Habits start with knowing what you do today! </h1>
        <p id="homepage">
          <b>Take control of your life.</b> Track your healthy (and unhealthy)
          habits like calories, sleeping, and spending so that you can make
          changes and keep track of your growth! The app will keep track of your
          spending, eating, and sleep habits! Take it slow and track your
          progress 1 week at a time.
          <br></br>
          Small steps to lasting results! Click the <a href="/login">
            login
          </a>{" "}
          button to log in or sign up for free.
        </p>
      </div>

      <div className="row2">
        <div className="column">
          <h3>Ability to log calories and spending</h3>
          <img
            className="healthy"
            id="image1"
            onmouseover="setNewImage1()"
            onmouseout="setOldImage1()"
            src="https://github.com/dorrianweber/project2/blob/main/public/images/meals.jpg?raw=true"
            alt="calories"
          />
        </div>
        <div className="column">
          <h3>Ability to log hours slept</h3>
          <img
            className="healthy"
            id="image2"
            onmouseover="setNewImage2()"
            onmouseout="setOldImage2()"
            src="https://github.com/dorrianweber/project2/blob/main/public/images/sleep.jpg?raw=true"
            alt="sleeping"
          />
        </div>
        <div className="column">
          <h3>Ability to Track progress</h3>
          <img
            className="healthy"
            id="image3"
            onmouseover="setNewImage3()"
            onmouseout="setOldImage3()"
            src="https://github.com/dorrianweber/project2/blob/main/public/images/caloriesGraph.jpg?raw=true"
            alt="healthy habits"
          />
        </div>
        <br />
      </div>
      <p className="mainquote">
        "You'll never change your life until you change something you do Daily.
        The secret of your success is found in your daily routine". John C.
        Maxwell
      </p>
    </div>
  );
}

export default Homepage;
