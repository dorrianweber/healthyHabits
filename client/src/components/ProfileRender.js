import React, { useState } from "react";
import axios from "axios";
import { useAuthState } from "../utils/state";
import { Bar, Line } from "react-chartjs-2";

var eatChartData = {};
var eatChartOptions = {};
var sleepChartData = {};
var sleepChartOptions = {};
var spendChartData = {};
var spendChartOptions = {};
var exChartData = {};
var exChartOptions = {};

var thisWeek = {};
var today = new Date();
var minus1 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 1
);
var minus2 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 2
);
var minus3 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 3
);
var minus4 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 4
);
var minus5 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 5
);
var minus6 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 6
);
var minus7 = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);
var dd = String(today.getDate());
var mm = String(today.getMonth() + 1);
var yy = String(today.getFullYear()).slice(-2);
today = mm + "/" + dd + "/" + yy;
var dd1 = String(minus1.getDate());
var mm1 = String(minus1.getMonth() + 1);
var yy1 = String(minus1.getFullYear()).slice(-2);
minus1 = mm1 + "/" + dd1 + "/" + yy1;
var dd2 = String(minus2.getDate());
var mm2 = String(minus2.getMonth() + 1);
var yy2 = String(minus2.getFullYear()).slice(-2);
minus2 = mm2 + "/" + dd2 + "/" + yy2;
var dd3 = String(minus3.getDate());
var mm3 = String(minus3.getMonth() + 1);
var yy3 = String(minus3.getFullYear()).slice(-2);
minus3 = mm3 + "/" + dd3 + "/" + yy3;
var dd4 = String(minus4.getDate());
var mm4 = String(minus4.getMonth() + 1);
var yy4 = String(minus4.getFullYear()).slice(-2);
minus4 = mm4 + "/" + dd4 + "/" + yy4;
var dd5 = String(minus5.getDate());
var mm5 = String(minus5.getMonth() + 1);
var yy5 = String(minus5.getFullYear()).slice(-2);
minus5 = mm5 + "/" + dd5 + "/" + yy5;
var dd6 = String(minus6.getDate());
var mm6 = String(minus6.getMonth() + 1);
var yy6 = String(minus6.getFullYear()).slice(-2);
minus6 = mm6 + "/" + dd6 + "/" + yy6;
var dd7 = String(minus7.getDate());
var mm7 = String(minus7.getMonth() + 1);
var yy7 = String(minus7.getFullYear()).slice(-2);
minus7 = mm7 + "/" + dd7 + "/" + yy7;
thisWeek = [];
thisWeek.push(minus7, minus6, minus5, minus4, minus3, minus2, minus1, today);

var breakfasts = [];
var lunches = [];
var dinners = [];
var snacks = [];

var sleepHours = [];

var restaurantSpent = [];
var coffeeSpent = [];
var barSpent = [];

var strengthDuration = [];

var cardioDuration = [];

const EatGraph = () => {
  const [state, dispatch] = useAuthState();
  const [eatData, setEatData] = useState({});
  const [eatOptions, setEatOptions] = useState({});
  React.useEffect(() => {
    axios
      .get("/api/eating", {
        user_id: state.user_id,
      })
      .then((eatingResponse) => {
        for (let index = 0; index < 8; index++) {
          let element = thisWeek[index];
          let breakfastCheck = false;
          let lunchCheck = false;
          let dinnerCheck = false;
          let snackCheck = false;
          for (
            let index2 = 0;
            index2 < eatingResponse.data.data.length + 1;
            index2++
          ) {
            if (
              eatingResponse.data.data[index2] &&
              eatingResponse.data.data[index2].date === element
            ) {
              if (eatingResponse.data.data[index2].meal_type === "Breakfast") {
                breakfasts.push(eatingResponse.data.data[index2].calories);
                breakfastCheck = true;
              } else if (
                eatingResponse.data.data[index2].meal_type === "Lunch"
              ) {
                lunches.push(eatingResponse.data.data[index2].calories);
                lunchCheck = true;
              } else if (
                eatingResponse.data.data[index2].meal_type === "Dinner"
              ) {
                dinners.push(eatingResponse.data.data[index2].calories);
                dinnerCheck = true;
              } else if (
                eatingResponse.data.data[index2].meal_type === "Snack"
              ) {
                snacks.push(eatingResponse.data.data[index2].calories);
                snackCheck = true;
              } else {
                console.log("error, no match found");
              }
            }
          }
          if (breakfastCheck === false) {
            breakfasts.push(0);
          }
          if (lunchCheck === false) {
            lunches.push(0);
          }
          if (dinnerCheck === false) {
            dinners.push(0);
          }
          if (snackCheck === false) {
            snacks.push(0);
          }
        }
        eatChartData = {
          labels: thisWeek,
          datasets: [
            {
              data: breakfasts,
              label: "Breakfast",
              backgroundColor: "blue",
            },
            {
              data: lunches,
              label: "Lunch",
              backgroundColor: "red",
            },
            {
              data: dinners,
              label: "Dinner",
              backgroundColor: "green",
            },
            {
              data: snacks,
              label: "Snack",
              backgroundColor: "yellow",
            },
          ],
        };
        eatChartOptions = {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          title: {
            display: true,
            text: "Calories per Meal",
          },
          options: {
            maintainAspectRation: false,
            responsive: true,
          },
        };
        setEatData(eatChartData);
        setEatOptions(eatChartOptions);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);
  return <Bar data={eatData} options={eatOptions} />;
};

const SleepGraph = () => {
  const [state, dispatch] = useAuthState();
  const [sleepData, setSleepData] = useState({});
  const [sleepOptions, setSleepOptions] = useState({});
  React.useEffect(() => {
    axios
      .get("/api/sleeping", {
        user_id: state.user_id,
      })
      .then((newSleep) => {
        for (let index = 0; index < 8; index++) {
          let element = thisWeek[index];
          let sleepCheck = false;
          for (
            let index2 = 0;
            index2 < newSleep.data.data.length + 1;
            index2++
          ) {
            if (
              newSleep.data.data[index2] &&
              newSleep.data.data[index2].date === element
            ) {
              sleepHours.push(newSleep.data.data[index2].hours);
              sleepCheck = true;
            }
          }
          if (sleepCheck === false) {
            sleepHours.push(0);
          }
        }

        sleepChartData = {
          labels: thisWeek,
          datasets: [
            {
              data: sleepHours,
              label: "Hours",
              backgroundColor: "purple",
            },
          ],
        };
        sleepChartOptions = {
          title: {
            display: true,
            text: "Hours Slept per Night",
          },
          options: {
            maintainAspectRation: false,
            responsive: true,
          },
        };
        setSleepData(sleepChartData);
        setSleepOptions(sleepChartOptions);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);
  return <Bar data={sleepData} options={sleepOptions} />;
};

const SpendGraph = () => {
  const [state, dispatch] = useAuthState();
  const [spendData, setSpendData] = useState({});
  const [spendOptions, setSpendOptions] = useState({});
  React.useEffect(() => {
    axios
      .get("/api/spending", {
        user_id: state.user_id,
      })
      .then((newSpend) => {
        for (let index = 0; index < 8; index++) {
          let element = thisWeek[index];
          let spendCheck = false;
          for (
            let index2 = 0;
            index2 < newSpend.data.data.length + 1;
            index2++
          ) {
            if (
              newSpend.data.data[index2] &&
              newSpend.data.data[index2].date === element
            ) {
              restaurantSpent.push(newSpend.data.data[index2].restaurant);
              coffeeSpent.push(newSpend.data.data[index2].coffee);
              barSpent.push(newSpend.data.data[index2].bar);
              spendCheck = true;
            }
          }
          if (spendCheck === false) restaurantSpent.push(0);
          coffeeSpent.push(0);
          barSpent.push(0);
        }

        spendChartData = {
          labels: thisWeek,
          datasets: [
            {
              data: restaurantSpent,
              label: "Restaurants",
              backgroundColor: "orange",
            },
            {
              data: coffeeSpent,
              label: "Coffee",
              backgroundColor: "lime",
            },
            {
              data: barSpent,
              label: "Bars",
              backgroundColor: "navy",
            },
          ],
        };
        spendChartOptions = {
          title: {
            display: true,
            text: "Money Spent per Day",
          },
          options: {
            maintainAspectRation: false,
            responsive: true,
          },
        };
        setSpendData(spendChartData);
        setSpendOptions(spendChartOptions);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);
  return <Bar data={spendData} options={spendOptions} />;
};

const ExerciseGraph = () => {
  const [state, dispatch] = useAuthState();
  const [exData, setExData] = useState({});
  const [exOptions, setExOptions] = useState({});
  React.useEffect(() => {
    axios
      .get("/api/exercise", {
        user_id: state.user_id,
      })
      .then((newEx) => {
        for (let index = 0; index < 8; index++) {
          let element = thisWeek[index];
          let strengthCheck = false;
          let cardioCheck = false;
          for (let index2 = 0; index2 < newEx.data.data.length + 1; index2++) {
            if (
              newEx.data.data[index2] &&
              newEx.data.data[index2].date === element
            ) {
              switch (newEx.data.data[index2].workout_type) {
                case "Strength":
                  strengthDuration.push(newEx.data.data[index2].duration);
                  strengthCheck = true;
                  break;
                case "Cardio":
                  cardioDuration.push(newEx.data.data[index2].duration);
                  cardioCheck = true;
                  break;
                default:
                  console.log("invalid type:");
                  console.log(newEx.data.data[index].workout_type);
                  break;
              }
            }
          }
          if (strengthCheck === false) strengthDuration.push(0);
          if (cardioCheck === false) cardioDuration.push(0);
        }

        exChartData = {
          labels: thisWeek,
          datasets: [
            {
              data: strengthDuration,
              label: "Strength Duration (minutes)",
              backgroundColor: "green",
            },
            {
              data: cardioDuration,
              label: "Cardio Duration (minutes)",
              backgroundColor: "maroon",
            },
          ],
        };
        exChartOptions = {
          title: {
            display: true,
            text: "Exercises:",
          },
          options: {
            maintainAspectRation: false,
            responsive: true,
          },
        };

        setExData(exChartData);
        setExOptions(exChartOptions);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);
  return <Line data={exData} options={exOptions} />;
};

export { EatGraph, SleepGraph, SpendGraph, ExerciseGraph };
