import React from "react";
import Card from "react-bootstrap/card";
import ListGroup from "react-bootstrap/ListGroup";
import CardDeck from "react-bootstrap/CardDeck";

function About() {
  return (
    <div className="container">
      <div>
        <h1 id="aboutUsTitle">About us</h1>
        <p id="aboutUsDesc">
          Healthy Habits was created to help people improve their life by
          changing bad habits and creating healthy habits.
        </p>

        <p id="aboutUsDesc">Our goal is to help you achieve your goal.</p>

        <div className="container-fluid">
          <h2 className="AboutUsTitle">Executive Team Members:</h2>
          <CardDeck className="row">
            {/* <div className="col-md-3"> */}
            <Card className="aboutCard" style={{ marginBottom: "10px" }}>
              <Card.Img
                variant="top"
                src="/images/Wolverine.png"
                style={{
                  height: "275px",
                  width: "275px",
                  alignSelf: "center",
                }}
              />
              <Card.Body>
                <Card.Title>Reynaldo Bracamonte</Card.Title>
                <Card.Text>Co-Founder</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush aboutUsList">
                <ListGroup.Item className="aboutUsLI">
                  Project Manager
                </ListGroup.Item>
                <ListGroup.Item className="aboutUsLI">
                  Lead CSS/HTML developer
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="https://github.com/reybrac">
                  <i
                    className="fab fa-github"
                    style={{ marginLeft: "10px", color: "white" }}
                  ></i>
                </Card.Link>
                <Card.Link
                  href="https://www.linkedin.com/in/rey-bracamonte-0595591/"
                  style={{ marginLeft: "10px", color: "white" }}
                >
                  <i
                    className="fab fa-linkedin-in"
                    style={{ marginLeft: "10px", color: "white" }}
                  ></i>
                </Card.Link>
              </Card.Body>
            </Card>
            <br />
            {/* </div> */}

            {/* Dorrian */}
            {/* <div className="col-md-3"> */}
            <Card className="aboutCard" style={{ marginBottom: "10px" }}>
              <Card.Img
                variant="top"
                src="/images/NightCrawler.png"
                style={{
                  height: "275px",
                  width: "275px",
                  alignSelf: "center",
                }}
              />
              <Card.Body>
                <Card.Title>Dorrian Weber</Card.Title>
                <Card.Text>Co-Founder</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush aboutUsList">
                <ListGroup.Item className="aboutUsLI">
                  React developer
                </ListGroup.Item>
                <ListGroup.Item className="aboutUsLI">
                  MySQL developer
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="https://github.com/dorrianweber">
                  <i
                    className="fab fa-github"
                    style={{ marginLeft: "10px", color: "white" }}
                  ></i>
                </Card.Link>
                <Card.Link href="https://www.linkedin.com/in/dorrian-weber-292b5b1b9/">
                  <i
                    className="fab fa-linkedin-in"
                    style={{ marginLeft: "10px", color: "white" }}
                  ></i>
                </Card.Link>
              </Card.Body>
            </Card>
            <br />
            {/* </div> */}

            {/* Matt */}
            {/* <div className="col-md-3"> */}
            <Card className="aboutCard" style={{ marginBottom: "10px" }}>
              <Card.Img
                variant="top"
                src="/images/Cyclops.png"
                style={{
                  height: "275px",
                  width: "275px",
                  alignSelf: "center",
                }}
              />
              <Card.Body>
                <Card.Title>Matthew Herold</Card.Title>
                <Card.Text>Co-Founder</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush aboutUsList">
                <ListGroup.Item className="aboutUsLI">
                  React developer
                </ListGroup.Item>
                <ListGroup.Item className="aboutUsLI">
                  MySQL developer
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="https://github.com/matthewdherold">
                  <i
                    className="fab fa-github"
                    style={{ marginLeft: "10px", color: "white" }}
                  ></i>
                </Card.Link>
                <Card.Link href="https://www.linkedin.com/in/matthew-herold-81535a1bb">
                  <i
                    className="fab fa-linkedin-in"
                    style={{ marginLeft: "10px", color: "white" }}
                  ></i>
                </Card.Link>
              </Card.Body>
            </Card>
            <br />
            {/* </div> */}

            {/* Chris */}
            {/* <div className="col-md-3"> */}
            <Card className="aboutCard" style={{ marginBottom: "10px" }}>
              <Card.Img
                variant="top"
                src="/images/Xman.png"
                style={{
                  height: "275px",
                  width: "275px",
                  alignSelf: "center",
                }}
              />
              <Card.Body>
                <Card.Title>Chris Holmes</Card.Title>
                <Card.Text>Co-Founder</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush aboutUsList">
                <ListGroup.Item className="aboutUsLI">
                  HTML/CSS developer
                </ListGroup.Item>
                <ListGroup.Item className="aboutUsLI">
                  NodeMailer developer
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="https://github.com/toasted-coder">
                  <i
                    className="fab fa-github"
                    style={{ marginLeft: "10px", color: "white" }}
                  ></i>
                </Card.Link>
                <Card.Link
                  href="https://toasted-coder.github.io/index.html"
                  style={{ marginLeft: "10px", color: "white" }}
                >
                  About
                </Card.Link>
              </Card.Body>
            </Card>
            <br />
            <br />
            {/* </div> */}

            {/* Petr Constantinov */}
            {/* <div className="col-md-3"> */}
            <Card className="aboutCard" style={{ marginBottom: "10px" }}>
              <Card.Img
                variant="top"
                src="/images/Gambit.png"
                style={{
                  height: "275px",
                  width: "275px",
                  alignSelf: "center",
                }}
              />
              <Card.Body>
                <Card.Title>Petr Constantinov</Card.Title>
                <Card.Text>Product Support</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush aboutUsList">
                <ListGroup.Item className="aboutUsLI">
                  HTML/CSS developer
                </ListGroup.Item>
                <ListGroup.Item className="aboutUsLI">
                  Team member
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="https://github.com/caysper28">
                  <i
                    className="fab fa-github"
                    style={{ marginLeft: "10px", color: "white" }}
                  ></i>
                </Card.Link>
              </Card.Body>
            </Card>
            {/* </div> */}
          </CardDeck>
          <br />
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default About;
