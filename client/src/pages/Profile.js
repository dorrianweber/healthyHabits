import React from "react";
import { useHistory } from "react-router-dom";
import { useAuthState } from "../utils/state";
import { EatGraph, SleepGraph, SpendGraph } from "../components/ProfileRender";

function Profile() {
  let history = useHistory();
  const [state, dispatch] = useAuthState();
  if (!state.isAuthenticated) {
    history.push("/login")
    return null;
  } else {
        return (
            <section class="profile">
              <div class="user">
                <img
                  alt="HealthyHabbitsLogo"
                  src="https://github.com/dorrianweber/project2/blob/main/public/images/healthyhabits.png?raw=true"
                />
                {/* <h2>{{user.name}} Profile</h2> */}
                {/*Adding canvas graph area*/}
                <div class="row3">
                  <div class="graph">
                    <p>Eating:</p>
                        <EatGraph/>
                  </div>
                  <div class="graph">
                    <p>Sleeping:</p>
                        <SleepGraph/>
                  </div>
                  <div class="graph">
                    <p>Spending:</p>
                        <SpendGraph/>
                  </div>
                </div>
              </div>
            </section>
          );
    }
  }

export default Profile;
