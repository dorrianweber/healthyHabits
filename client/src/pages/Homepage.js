import React from "react";
//, { useState, useEffect }
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Homepage() {
  return (
    <div className="row align-center mb-5">
      <div className="welcome">
        <h2>Take control of your life</h2>
        <p id="homepage">
          Track your healthy (and unhealthy) habits so that you can make changes
          and keep track of your growth!
          <br />
          Take it slow and track your progress 1 week at a time.
          <br />
          Small steps to lasting results! Click the <a href="/login">
            login
          </a>{" "}
          button to log in or sign up for free.
        </p>
      </div>
      {/* Start of new section */}
      <Container>
        <Row
          style={{
            color: "black",
            padding: "20px",

            alignContent: "center",
          }}
        >
          <div className="col-md-8"></div>
          <div className="col-md-4">
            <img
              src="https://github.com/dorrianweber/healthyHabits/blob/main/public/images/eatingSymbol.png?raw=true"
              alt="image1"
              className="img-thumbnail"
              style={{
                borderRadius: "4px",
                padding: "5px",
                width: "auto",
                alignItems: "center",
                float: "left",
              }}
            />
          </div>

          <div className="col-md-4" style={{ padding: "10px", float: "right" }}>
            <h2>Nutrition facts:</h2>
            <p>
              <ul>
                <li>Junk Food Can Be Addictive</li>
                <li>
                  There Is No Perfect Diet for Everyone
                  <ul>
                    <li>
                      People are all unique. The fact is, what works for one
                      person may not work for the next.
                    </li>
                    <li>
                      Try a few different things until you find something that
                      you enjoy and think you can stick to. Different strokes
                      for different folks!
                    </li>
                  </ul>
                </li>
                <li>There Is No Perfect Diet for Everyone</li>
                <li>
                  “Diets” Don’t Work — a Lifestyle Change Is Necessary
                  <ul>
                    <li>“Diets” are ineffective. That is a fact</li>
                    <li>
                      The only thing that can give you actual long-term results
                      is to adopt a lifestyle change
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>
        </Row>
      </Container>
      <br />
      <container className="container-fluid">
        <div className="container-fluid">
          <div className="row2">
            <div className="col-sm"></div>
            <div className="col-sm">
              <h3 className="imgHeader">Spending</h3>
              <img
                className="healthy"
                id="image2"
                src="https://github.com/dorrianweber/healthyHabits/blob/main/public/images/spendingSymbol.png?raw=true"
                alt="Stack of cash"
              />
            </div>
            <div className="col-sm">
              <h3 className="imgHeader">Sleeping</h3>
              <img
                className="healthy"
                id="image3"
                src="https://github.com/dorrianweber/healthyHabits/blob/main/public/images/sleepingSymbol.png?raw=true"
                alt="Person sleeping in bed"
              />
            </div>
            <div className="col-sm">
              <h3 className="imgHeader">Track your progress</h3>
              <img
                className="healthy"
                id="image4"
                src="https://github.com/dorrianweber/healthyHabits/blob/main/public/images/graphSymbol.png?raw=true"
                alt="Bar and line graphs"
              />
            </div>
            <br />
          </div>
        </div>
      </container>
      <p className="mainquote">
        "You'll never change your life until you change something you do Daily.
        The secret of your success is found in your daily routine."
        <br />
        -John C. Maxwell
      </p>
    </div>
  );
}

export default Homepage;
