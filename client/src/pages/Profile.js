import React from "react";
import { useHistory } from "react-router-dom"
import { useAuthState } from "../utils/state";
import ProfileRender from "../components/ProfileRender"
import Chart from "chart.js"

function Profile () {
    let history = useHistory();
    const [state, dispatch] = useAuthState();
    if (!state.isAuthenticated) {
        history.push("/login")
    } else {
        var eatctx;
        var sleepctx;
        var spendctx;
        ProfileRender(eatctx, sleepctx, spendctx);
        console.log(eatctx, sleepctx, spendctx);
        return (
        <section class="profile">
    <div class="user">
        <img alt="HealthyHabbitsLogo" src="https://github.com/dorrianweber/project2/blob/main/public/images/healthyhabits.png?raw=true"/>
        {/* <h2>{{user.name}} Profile</h2> */}
        {/*Adding canvas graph area*/}
        <div class="row3">
            <div class="graph">
                    <p>Eating:</p>
                    <canvas id="eatChart">{eatctx}</canvas>
                </div>
                <div class="graph">
                    <p>Sleeping:</p>
                    <canvas id="sleepChart"></canvas>
                </div>
                <div class="graph">
                    <p>Spending:</p>
                    <canvas id="spendChart"></canvas>
                </div>
            </div>
            </div>

</section>
    );
};
};

export default Profile;