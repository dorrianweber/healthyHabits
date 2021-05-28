import React from "react";
import { useHistory } from "react-router-dom";
import { useAuthState } from "../utils/state";
import { EatGraph, SleepGraph, SpendGraph } from "../components/ProfileRender";

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
        <div className="row">
          <div className="col">
            <div className="graph">
              <p>Eating:</p>
              <EatGraph />
            </div>
          </div>
          <div className="col">
            <div className="graph">
              <p>Sleeping:</p>
              <SleepGraph />
            </div>
          </div>
          <div className="col">
            <div className="graph">
              <p>Spending:</p>
              <SpendGraph />
            </div>
          </div>
        </div>
        <br />
      </section>
    );
  }
}

export default Profile;
