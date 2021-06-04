import React from "react";
import { useHistory } from "react-router-dom";
import { useAuthState } from "../utils/state";
import {
  EatGraph,
  SleepGraph,
  SpendGraph,
  ExerciseGraph,
} from "../components/ProfileRender";

function Profile() {
  let history = useHistory();
  const [state, dispatch] = useAuthState();
  if (!state.isAuthenticated) {
    history.push("/login");
    return null;
  } else {
    return (
      <section className="container" style={{ paddingBottom: "70px"}}>
        <img
          alt="HealthyHabbitsLogo"
          src="/images/Logo.png"
          style={{display: "block",
            marginLeft: "auto",
            marginRight: "auto" }}
        />
        <div>
          <div className="row">
            <div
              className="graph"
              style={{ width: "650px", height: "400px", float: "left" }}
            >
              <p>Eating:</p>
              <EatGraph />
            </div>

            <div
              className="graph"
              style={{ width: "650px", height: "400px", float: "right" }}
            >
              <p>Sleeping:</p>
              <SleepGraph />
            </div>
          </div>
          <br />
          <div className="row">
            <div
              className="graph"
              style={{ width: "650px", height: "400px", float: "left" }}
            >
              <p>Spending:</p>
              <SpendGraph />
            </div>

            <div
              className="graph"
              style={{ width: "650px", height: "400px", float: "right" }}
            >
              <p>Exercises:</p>
              <ExerciseGraph />
            </div>
            <br />
          </div>
        </div>
        <br />
      </section>
    );
  }
}

export default Profile;
