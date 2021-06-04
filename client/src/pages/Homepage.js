import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";


function Homepage() {
  return (
    <Container className="container-flex" style={{ paddingBottom: "70px" }}>
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
            src="/images/EatingSymbol.png"
            alt="Generic placeholder"
            style={{ padding: "10px" }}
          />
          <img
            width={64}
            height={64}
            src="/images/SpendingSymbol.png"
            alt="Generic placeholder"
            style={{ padding: "10px" }}
          />
          <img
            width={64}
            height={64}
            id="image3"
            src="/images/SleepingSymbol.png"
            alt="Person sleeping in bed"
            style={{ padding: "10px" }}
          />
          <img
            width={64}
            height={64}
            id="image4"
            src="/images/GraphSymbol.png"
            alt="Bar and line graphs"
            style={{ padding: "10px" }}
          />
        </div>
        <hr />
        {/* Start of new section */}
        <div>
          <Row className="row">
            <Col md={12}>
              {/* <Media.Body> */}
              <p style={{textAlign: "center" }}>
                "You'll never change your life until you change something you do
                Daily. The secret of your success is found in your daily
                routine." -John C. Maxwell
              </p>
              {/* </Media.Body>s */}
            </Col>
          </Row>
        </div>
        <hr />
        <Container
          // className="container-flex"
          style={{
            backgroundImage:
              "url(/images/VectorBG.jpeg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Row
            style={{
              color: "black",
              padding: "20px",

              display: "flex",
              alignItems: "center",
            }}
          >
            <Col md={4}>
              <img
                src="/images/Plate.jpg"
                alt="image1"
                className="img-thumbnail"
                style={{
                  borderRadius: "4px",
                  padding: "10px",
                  width: "400px",
                }}
              />
            </Col>

            <Col md={8}>
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
            style={{
              color: "black",
              padding: "40px",
              display: "flex",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Col md={8} style={{ textAlign: "right" }}>
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

            <Col ml={4}>
              <img
                id="image2"
                src="/images/CoffeePrice.jpg"
                alt="Stack of cash"
                className="img-thumbnail"
                style={{
                  borderRadius: "4px",
                  padding: "20px",
                  height: "350px",
                  width: "350px",
                  float: "inline-end",
                }}
              />
            </Col>
          </Row>
          <Row
            style={{
              color: "black",
              padding: "20px",

              display: "flex",
              alignItems: "center",
            }}
          >
            <Col md={4}>
              <img
                src="/images/Clock.jpg"
                alt="image1"
                className="img-thumbnail"
                style={{
                  borderRadius: "4px",
                  padding: "10px",
                  width: "200px",
                }}
              />
            </Col>

            <Col md={8}>
              <h2>Sleeping facts:</h2>
              <p>
                <ul style={{ listStyleType: "none" }}>
                  <li>
                    <h4>Poor sleep is linked to higher body weight</h4>
                  </li>
                  <li>
                    <h4>
                      A good night’s sleep is incredibly important for your
                      health.
                    </h4>
                    <ul style={{ listStyleType: "none" }}>
                      <li>
                        Poor sleep affects hormones that regulate appetite.
                      </li>
                      <li>
                        Sleep has been shown to enhance athletic performance.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>
                      If you’re trying to lose weight, getting quality sleep is
                      absolutely crucial
                    </h4>

                    <ul style={{ listStyleType: "none" }}>
                      <li>
                        Along with nutrition and exercise, good sleep is one of
                        the pillars of health.
                      </li>
                      <li style={{ color: "blue" }}>
                        You simply cannot achieve optimal health without taking
                        care of your sleep.
                      </li>
                    </ul>
                  </li>
                </ul>
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Media>
        <Media.Body>
          <h3>Tracking habits</h3>
          <p>
            Understanding where you are today can help you plan where you want
            to go. The old saying, "What get's measured get's done!" applies to
            your personal life and is the first step in making long lasting
            healthy habits.
          </p>
          <p>Sign up for free today!</p>
        </Media.Body>

        <img
          className="ml-3"
          src="/images/FoodCalories.png"
          alt="junk food"
          style={{ height: "200px", widht: "200px" }}
        />
        <img
          className="ml-3"
          src="/images/GRAPH1.jpg"
          alt="Eating graph"
          style={{ height: "200px", widht: "200px" }}
        />
      </Media>
      <br />
    </Container>
  );
}

export default Homepage;
