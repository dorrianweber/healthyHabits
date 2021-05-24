import React from "react";
//, { useState, useEffect }
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";

function Homepage() {
  return (
    <Container>
      <div className="row align-center mb-5">
        <div className="welcome">
          <h2>Take control of your life</h2>
          <p id="homepage">
            Track your healthy (and unhealthy) habits so that you can make
            changes and keep track of your growth!
            <br />
            Take it slow and track your progress 1 week at a time.
            <br />
            Small steps to lasting results! Click the <a href="/login">
              login
            </a>{" "}
            button to log in or sign up for free.
          </p>
          <img
            width={64}
            height={64}
            src="https://github.com/dorrianweber/healthyHabits/blob/main/public/images/eatingSymbol.png?raw=true"
            alt="Generic placeholder"
            style={{ padding: "10px" }}
          />
          <img
            width={64}
            height={64}
            src="https://github.com/dorrianweber/healthyHabits/blob/main/public/images/spendingSymbol.png?raw=true"
            alt="Generic placeholder"
            style={{ padding: "10px" }}
          />
          <img
            width={64}
            height={64}
            id="image3"
            src="https://github.com/dorrianweber/healthyHabits/blob/main/public/images/sleepingSymbol.png?raw=true"
            alt="Person sleeping in bed"
            style={{ padding: "10px" }}
          />
          <img
            width={64}
            height={64}
            id="image4"
            src="https://github.com/dorrianweber/healthyHabits/blob/main/public/images/graphSymbol.png?raw=true"
            alt="Bar and line graphs"
            style={{ padding: "10px" }}
          />
        </div>
        <hr />
        {/* Start of new section */}
        <Media>
          <Row className="row">
            <Col md={6} className="col-md-6">
              <Media.Body>
                <p style={{ color: "blue", textAlign: "center" }}>
                  "You'll never change your life until you change something you
                  do Daily. The secret of your success is found in your daily
                  routine." -John C. Maxwell
                </p>
              </Media.Body>
            </Col>
          </Row>
        </Media>
        <hr />
        <Container className="container-fluid">
          <Row
            style={{
              color: "black",
              padding: "40px",
              backgroundImage:
                "url(https://wallpaperaccess.com/full/1236557.jpg)",
              backgroundRepeat: "none",

              alignContent: "center",
            }}
          >
            <Col md={4}>
              <img
                src="https://molempire.com/app/uploads/2011/09/The-eatwell-plate-review-you-eating-habits-594x420.jpg"
                alt="image1"
                className="img-thumbnail"
                style={{
                  borderRadius: "4px",
                  padding: "10px",
                  width: "400px",
                  float: "left",
                }}
              />
            </Col>

            <Col md={4}>
              <h2>Nutrition facts:</h2>
              <p>
                <ul style={{ listStyleType: "none" }}>
                  <li>
                    <h4>Junk Food Can Be Addictive</h4>
                  </li>
                  <li>
                    <h4>There Is No Perfect Diet for Everyone</h4>
                    <ul style={{ listStyleType: "none" }}>
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
                  <li>
                    <h4>There Is No Perfect Diet for Everyone</h4>
                  </li>
                  <li>
                    <h4>
                      “Diets” Don’t Work — a Lifestyle Change Is Necessary
                    </h4>
                    <ul style={{ listStyleType: "none" }}>
                      <li>“Diets” are ineffective. That is a fact!</li>
                      <li style={{ color: "blue" }}>
                        The only thing that can give you actual long-term
                        results is to adopt a lifestyle change. Start by
                        tracking your bad habits!
                      </li>
                    </ul>
                  </li>
                </ul>
              </p>
            </Col>
          </Row>
          <Row
            className="container-fluid"
            style={{
              color: "black",
              padding: "40px",

              alignContent: "center",
            }}
          >
            <Col md={4}></Col>
            <Col md={4}>
              <img
                id="image2"
                src="https://u2msxm5fmf-flywheel.netdna-ssl.com/wp-content/uploads/2014/05/Average-Spending-At-Starbucks.jpg"
                alt="Stack of cash"
                className="img-thumbnail"
                style={{
                  borderRadius: "4px",
                  padding: "20px",
                  height: "350px",
                  width: "350px",
                  float: "right",
                }}
              />
            </Col>

            <Col md={4} style={{ textAlign: "right" }}>
              <h2>Spending habits:</h2>
              <p>
                <ul style={{ listStyleType: "none" }}>
                  <li>
                    <h4>Plan your meals</h4>
                    <ul style={{ listStyleType: "none" }}>
                      <li>
                        Use one day each week to plan your meals for the
                        upcoming week. Then, make a grocery list of what you
                        need.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>Stick to Your grocery list</h4>
                    <ul style={{ listStyleType: "none" }}>
                      <li>
                        Once you’ve planned your meals and made your grocery
                        list, stick to it.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>Cook at home</h4>
                    <ul style={{ listStyleType: "none" }}>
                      <li>Cooking at home is much cheaper than eating out.</li>
                    </ul>
                  </li>
                  <li>
                    <h4>Drink coffee at home</h4>
                    <ul style={{ listStyleType: "none" }}>
                      <li style={{ color: "blue" }}>
                        Tracking your spending habits is the first step to
                        making a change.
                      </li>
                    </ul>
                  </li>
                </ul>
              </p>
            </Col>
          </Row>

          {/* <Row md={4}>
            <Col md={3}></Col>
            <Col md={3}>
              <h3 className="imgHeader">Sleeping</h3>
              <img
                className="healthy"
                id="image3"
                src="https://github.com/dorrianweber/healthyHabits/blob/main/public/images/sleepingSymbol.png?raw=true"
                alt="Person sleeping in bed"
              />
            </Col>
            <Row>
              <h3 className="imgHeader">Track your progress</h3>
              <img
                className="healthy"
                id="image4"
                src="https://github.com/dorrianweber/healthyHabits/blob/main/public/images/graphSymbol.png?raw=true"
                alt="Bar and line graphs"
              />
            </Row>
          </Row> */}
        </Container>
      </div>
      {/* <Media>
        <img
          className="mr-3"
          src="https://github.com/dorrianweber/healthyHabits/blob/main/public/images/spendingSymbol.png?raw=true"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h3>Media Heading</h3>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </Media.Body>
      </Media> */}
    </Container>
  );
}

export default Homepage;
