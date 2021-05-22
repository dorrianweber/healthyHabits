import React from "react";
//, { useState, useEffect }

function Homepage() {
  return (
    <div className="row align-center mb-5">
      <div className="welcome">
        <h2>Take control of your life</h2>
        <p id="homepage">
          Track your healthy (and unhealthy)
          habits so that you can make changes and keep track of your growth! Take it slow and track your progress 1 week at a time.
          <br />
          Small steps to lasting results! Click the <a href="/login">
            login
          </a>{" "}
          button to log in or sign up for free.
        </p>
      </div>

      <div className="row2">
        <div className="col-4">
          <h3>Nutrition</h3>
          <img
            className="healthy"
            id="image1"
            src="https://github.com/dorrianweber/healthyHabits/blob/main/public/images/eatingSymbol.png?raw=true"
            alt="Fork and knife with plate"
          />
        </div>
        <div className="col-4">
          <h3>Spending</h3>
          <img
            className="healthy"
            id="image2"
            src="https://github.com/dorrianweber/healthyHabits/blob/main/public/images/spendingSymbol.png?raw=true"
            alt="Stack of cash"
          />
        </div>
        <div className="col-4">
          <h3>Sleeping</h3>
          <img
            className="healthy"
            id="image3"
            src="https://github.com/dorrianweber/healthyHabits/blob/main/public/images/sleepingSymbol.png?raw=true"
            alt="Person sleeping in bed"
          />
        </div>
        <div className="col-4">
          <h3>Track your progress</h3>
          <img
            className="healthy"
            id="image4"
            src="https://github.com/dorrianweber/healthyHabits/blob/main/public/images/graphSymbol.png?raw=true"
            alt="Bar and line graphs"
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
