import React from "react";
import axios from "axios";
import { useAuthState } from "../utils/state";
import Chart from "react-chartjs-2";

function ProfileRender (eatctx, sleepctx, spendctx) {
var thisWeek = [];
var today = new Date();
var minus1 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
var minus2 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 2);
var minus3 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3);
var minus4 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 4);
var minus5 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5);
var minus6 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6);
var minus7 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
var dd = String(today.getDate());
var mm = String(today.getMonth() + 1);
var yy = String(today.getFullYear()).slice(-2);
today = mm + '/' + dd + '/' + yy;
var dd1 = String(minus1.getDate());
var mm1 = String(minus1.getMonth() + 1);
var yy1 = String(minus1.getFullYear()).slice(-2);
minus1 = mm1 + '/' + dd1 + '/' + yy1;
var dd2 = String(minus2.getDate());
var mm2 = String(minus2.getMonth() + 1);
var yy2 = String(minus2.getFullYear()).slice(-2);
minus2 = mm2 + '/' + dd2 + '/' + yy2;
var dd3 = String(minus3.getDate());
var mm3 = String(minus3.getMonth() + 1);
var yy3 = String(minus3.getFullYear()).slice(-2);
minus3 = mm3 + '/' + dd3 + '/' + yy3;
var dd4 = String(minus4.getDate());
var mm4 = String(minus4.getMonth() + 1);
var yy4 = String(minus4.getFullYear()).slice(-2);
minus4 = mm4 + '/' + dd4 + '/' + yy4;
var dd5 = String(minus5.getDate());
var mm5 = String(minus5.getMonth() + 1);
var yy5 = String(minus5.getFullYear()).slice(-2);
minus5 = mm5 + '/' + dd5 + '/' + yy5;
var dd6 = String(minus6.getDate());
var mm6 = String(minus6.getMonth() + 1);
var yy6 = String(minus6.getFullYear()).slice(-2);
minus6 = mm6 + '/' + dd6 + '/' + yy6;
var dd7 = String(minus7.getDate());
var mm7 = String(minus7.getMonth() + 1);
var yy7 = String(minus7.getFullYear()).slice(-2);
minus7 = mm7 + '/' + dd7 + '/' + yy7;
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
const [state, dispatch] = useAuthState();

    const profileData = async () => {
    
        const eatingResponse = await axios.post("/api/eating", {
            user_id: state.user_id
          }).then((eatingResponse) => {
            return eatingResponse.json();
              })
              .then((eatData) => {
                console.log(eatData)
                  for (let index = 0; index < 8; index++) {
                    let element = thisWeek[index];
                    let breakfastCheck = false
                    let lunchCheck = false
                    let dinnerCheck = false
                    let snackCheck = false
                  for (let index2 = 0; index2 < eatData.data.length +1; index2++) {
                      if (eatData.data[index2] && eatData.data[index2].date === element) {
                        if (eatData.data[index2].meal_type === "Breakfast") {
                          breakfasts.push(eatData.data[index2].calories)
                          breakfastCheck = true;
                        } else if (eatData.data[index2].meal_type === "Lunch") {
                          lunches.push(eatData.data[index2].calories)
                          lunchCheck = true;
                        } else if (eatData.data[index2].meal_type === "Dinner") {
                          dinners.push(eatData.data[index2].calories)
                          dinnerCheck = true;
                        } else if (eatData.data[index2].meal_type === "Snack") {
                          snacks.push(eatData.data[index2].calories)
                          snackCheck = true;
                        } else {console.log("error, no match found")};
                      };
                    };
                        if (breakfastCheck === false) {
                              breakfasts.push(0)
                            };
                            if (lunchCheck === false) {
                              lunches.push(0)
                            };
                            if (dinnerCheck === false) {
                              dinners.push(0)
                            };
                            if (snackCheck === false) {
                              snacks.push(0)
                            };
                };
              });
                    console.log(breakfasts)
                    console.log(lunches)
                    console.log(dinners)
                    console.log(snacks)
          
                    eatctx = new Chart(eatctx, {
            type: "bar",
            data: {
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
            },
            options: {
              title: {
                display: true,
                text: "Calories per Meal",
              },
            },
          });
        
        const sleepingResponse = await axios.post("/api/sleeping", {
            user_id: state.user_id
          });
          sleepingResponse.json().then((newSleep) => {
            console.log(newSleep.data);
            for (let index = 0; index < 8; index++) {
              let element = thisWeek[index];
              let sleepCheck = false
              for (let index2 = 0; index2 < newSleep.data.length +1; index2++) {
              if (newSleep.data[index2] && newSleep.data[index2].date === element) {
                sleepHours.push(newSleep.data[index2].hours)
                sleepCheck = true;
              };
            };
            if (sleepCheck === false) {
              sleepHours.push(0);
            };
          };
          
          var sleepctx = document.getElementById("sleepChart");
          var sleepChart = new Chart(sleepctx, {
            type: "bar",
            data: {
              labels: thisWeek,
              datasets: [
                {
                  data: sleepHours,
                  label: "Hours",
                  backgroundColor: "purple",
                },
              ],
            },
            options: {
              title: {
                display: true,
                text: "Hours Slept per Night",
              },
            },
          });
        });
        const spendingResponse = await axios.post("/api/spending", {
            user_id: state.user_id
          });
          spendingResponse.json().then((newSpend) => {
            console.log(newSpend.data);
            for (let index = 0; index < 8; index++) {
              let element = thisWeek[index];
              let spendCheck = false
              for (let index2 = 0; index2 < newSpend.data.length +1; index2++) {
              if (newSpend.data[index2] && newSpend.data[index2].date == element) {
                restaurantSpent.push(newSpend.data[index2].restaurant)
                coffeeSpent.push(newSpend.data[index2].coffee)
                barSpent.push(newSpend.data[index2].bar)
                spendCheck = true
              };
            };
              if (spendCheck == false)
              restaurantSpent.push(0)
                coffeeSpent.push(0)
                barSpent.push(0)
        
            console.log(restaurantSpent);
            console.log(coffeeSpent);
            console.log(barSpent);
          };
        
          var spendctx = document.getElementById("spendChart");
          var spendChart = new Chart(spendctx, {
            type: "bar",
            data: {
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
            },
            options: {
              title: {
                display: true,
                text: "Money Spent per Day",
              },
            },
          });
        });
        };
        return (eatctx, sleepctx, spendctx);
      };

export default ProfileRender;