import React from "react";
import { useHistory } from "react-router-dom";
import { useAuthState } from "../utils/state";
import {
  EatGraph,
  SleepGraph,
  SpendGraph,
  ExerciseGraphs,
} from "../components/ProfileRender";

function Profile() {
  let history = useHistory();
  const [state, dispatch] = useAuthState();
  if (!state.isAuthenticated) {
    history.push("/login");
    return null;
  } else {
    return (
      <section className="container" style={{ paddingBottom: "70px" }}>
        <img
          alt="HealthyHabbitsLogo"
          src="https://github.com/dorrianweber/project2/blob/main/public/images/healthyhabits.png?raw=true"
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
              <ExerciseGraphs />
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
