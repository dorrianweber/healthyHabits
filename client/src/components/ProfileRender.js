import React, { useState } from "react";
import axios from "axios";
import { useAuthState } from "../utils/state";
import { Bar } from "react-chartjs-2";

    var eatChartData = {};
    var eatChartOptions = {};
    var sleepChartData = {};
    var sleepChartOptions = {};
    var spendChartData = {};
    var spendChartOptions = {};
    var thisWeek = {};
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

const EatGraph = () => {
    const [state, dispatch] = useAuthState();
    const [eatData, setEatData] = useState({})
    const [eatOptions, setEatOptions] = useState({})
    React.useEffect(() => {
    axios.get("/api/eating", {
        user_id: state.user_id
      }).then((eatingResponse) => {
            console.log(eatingResponse.data.data)
              for (let index = 0; index < 8; index++) {
                let element = thisWeek[index];
                let breakfastCheck = false
                let lunchCheck = false
                let dinnerCheck = false
                let snackCheck = false
              for (let index2 = 0; index2 < eatingResponse.data.data.length +1; index2++) {
                  if (eatingResponse.data.data[index2] && eatingResponse.data.data[index2].date === element) {
                    if (eatingResponse.data.data[index2].meal_type === "Breakfast") {
                      breakfasts.push(eatingResponse.data.data[index2].calories)
                      breakfastCheck = true;
                    } else if (eatingResponse.data.data[index2].meal_type === "Lunch") {
                      lunches.push(eatingResponse.data.data[index2].calories)
                      lunchCheck = true;
                    } else if (eatingResponse.data.data[index2].meal_type === "Dinner") {
                      dinners.push(eatingResponse.data.data[index2].calories)
                      dinnerCheck = true;
                    } else if (eatingResponse.data.data[index2].meal_type === "Snack") {
                      snacks.push(eatingResponse.data.data[index2].calories)
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
          
                console.log(breakfasts)
                console.log(lunches)
                console.log(dinners)
                console.log(snacks)

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
        };
        console.log(eatChartData, eatChartOptions)
        setEatData(eatChartData);
        setEatOptions(eatChartOptions);
    }).catch(err => {
        console.log(err)
    });
    // eslint-disable-next-line
}, [])
    return (
        <Bar data={eatData} options={eatOptions}/>
    )
}

const SleepGraph = () => {
    const [state, dispatch] = useAuthState();
    const [sleepData, setSleepData] = useState({})
    const [sleepOptions, setSleepOptions] = useState({})
    React.useEffect(() => {
        axios.get("/api/sleeping", {
            user_id: state.user_id
          }).then((newSleep) => {
            console.log(newSleep.data);
            for (let index = 0; index < 8; index++) {
              let element = thisWeek[index];
              console.log(newSleep.data.data.length, element)
              let sleepCheck = false
              for (let index2 = 0; index2 < newSleep.data.data.length +1; index2++) {
                  console.log("youtriggeredme1")
              if (newSleep.data.data[index2] && newSleep.data.data[index2].date === element) {
                  console.log("youtriggeredme2")
                sleepHours.push(newSleep.data.data[index2].hours)
                sleepCheck = true;
              };
            };
            if (sleepCheck === false) {
              sleepHours.push(0);
            };
          };

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
            };
        console.log(sleepChartData, sleepChartOptions)
        setSleepData(sleepChartData)
        setSleepOptions(sleepChartOptions)
    }).catch(err => {
        console.log(err)
    });
      // eslint-disable-next-line
}, [])
    return (
        <Bar data={sleepData} options={sleepOptions}/>
    )
}

const SpendGraph = () => {
    const [state, dispatch] = useAuthState();
    const [spendData, setSpendData] = useState({})
    const [spendOptions, setSpendOptions] = useState({})
    React.useEffect(() => {
    axios.get("/api/spending", {
        user_id: state.user_id
      }).then((newSpend) => {
        console.log(newSpend.data);
        for (let index = 0; index < 8; index++) {
          let element = thisWeek[index];
          let spendCheck = false
          for (let index2 = 0; index2 < newSpend.data.data.length +1; index2++) {
          if (newSpend.data.data[index2] && newSpend.data.data[index2].date === element) {
            restaurantSpent.push(newSpend.data.data[index2].restaurant)
            coffeeSpent.push(newSpend.data.data[index2].coffee)
            barSpent.push(newSpend.data.data[index2].bar)
            spendCheck = true
          };
        };
          if (spendCheck === false)
          restaurantSpent.push(0)
            coffeeSpent.push(0)
            barSpent.push(0)

        
      };

      
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
        };
      console.log(spendChartData, spendChartOptions)
      setSpendData(spendChartData)
      setSpendOptions(spendChartOptions)
}).catch(err => {
    console.log(err)
});
      // eslint-disable-next-line
    }, [])
return (
    <Bar data={spendData} options={spendOptions}/>
)
}


export { EatGraph, SleepGraph, SpendGraph };
