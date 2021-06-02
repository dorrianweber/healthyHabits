import React, { Component } from "react";

import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    active: [],
    filtered: [],
    sortAsc: false,
  };

  generateActive = () => {
    API.getactive(this.state.search)
      .then((data1) => {
        console.log("data1: ", data1.data.data.results);
        this.setState({ active: data1.data.data.results });
        // return data1.body.json();
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {}

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.generateActive();
    //   const activitiesFiltered = this.state.active.filter((activity) => {
    //     return (
    //       activity.assetName
    //         .toLowerCase()
    //         .includes(this.state.active.toLowerCase()) ||
    //       activity.market.marketName
    //         .toLowerCase()
    //         .includes(this.state.active.toLowerCase()) ||
    //       activity.organization.organizationName
    //         .toLowerCase()
    //         .includes(this.state.active.toLowerCase()) ||
    //       activity.activityStartDate
    //         .toLowerCase()
    //         .includes(this.state.active.toLowerCase()) ||
    //       activity.activityEndDate
    //         .toLowerCase()
    //         .includes(this.state.active.toLowerCase()) ||
    //       `${activity.place.cityName}${","} ${activity.place.stateProvinceCode}`
    //         .toLowerCase()
    //         .includes(this.state.active.toLowerCase()) ||
    //       `${activity.place.cityName} ${activity.place.stateProvinceCode}`
    //         .toLowerCase()
    //         .includes(this.state.active.toLowerCase())
    //     );
    //   });
    //   this.setState({ filtered: activitiesFiltered });

    // const employeesFiltered = this.state.results.filter((employee) => {
    //   return (
    //     employee.name.first
    //       .toLowerCase()
    //       .includes(this.state.search.toLowerCase()) ||
    //     employee.name.last
    //       .toLowerCase()
    //       .includes(this.state.search.toLowerCase()) ||
    //     `${employee.name.first} ${employee.name.last}`
    //       .toLowerCase()
    //       .includes(this.state.search.toLowerCase()) ||
    //     employee.email
    //       .toLowerCase()
    //       .includes(this.state.search.toLowerCase()) ||
    //     employee.location.state
    //       .toLowerCase()
    //       .includes(this.state.search.toLowerCase()) ||
    //     employee.location.country
    //       .toLowerCase()
    //       .includes(this.state.search.toLowerCase()) ||
    //     `${employee.location.state}${","} ${employee.location.country}`
    //       .toLowerCase()
    //       .includes(this.state.search.toLowerCase()) ||
    //     `${employee.location.state} ${employee.location.country}`
    //       .toLowerCase()
    //       .includes(this.state.search.toLowerCase())
    //   );
    // });
    // this.setState({ filtered: employeesFiltered });
    // };

    // sortByCountry = (event) => {
    //   event.preventDefault();
    //   const employeesSorted = this.state.results;
    //   if (!this.state.sortAsc) {
    //     employeesSorted.sort(this.compareAsc);
    //   } else {
    //     employeesSorted.sort(this.compareDsc);
    //   }
    //   this.setState({ results: employeesSorted });
    // };

    // compareAsc = (a, b) => {
    //   const countryA = a.location.country.toLowerCase();
    //   const countryB = b.location.country.toLowerCase();

    //   let comparison = 0;
    //   if (countryA > countryB) {
    //     comparison = 1;
    //   } else if (countryA < countryB) {
    //     comparison = -1;
    //   }
    //   this.setState({ sortAsc: true });
    //   return comparison;
    // };

    // compareDsc = (a, b) => {
    //   const countryA = a.location.country.toLowerCase();
    //   const countryB = b.location.country.toLowerCase();

    //   let comparison = 0;
    //   if (countryA < countryB) {
    //     comparison = 1;
    //   } else if (countryA > countryB) {
    //     comparison = -1;
    //   }
    //   this.setState({ sortAsc: false });
    //   return comparison;
  };

  clear = (event) => {
    event.preventDefault();
    this.setState({ filtered: [], search: "", active: [] });
  };

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="search">Search:</label>
            <input
              onChange={this.handleInputChange}
              value={this.state.search}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search activities by city"
              id="search"
            />
            <button
              onClick={this.handleFormSubmit}
              className="btn btn-primary mt-3"
              style={{ margin: "10px" }}
            >
              Search
            </button>{" "}
            <button
              onClick={this.clear}
              className="btn btn-secondary btn-dark mt-3"
              style={{ margin: "10px" }}
            >
              Clear
            </button>
            {/* <label htmlFor="activity_type">Activity Type:</label>
            <select name="activity_type" id="activity_type">
              <option value="Select">Select one</option>
              <option value="Running">Endurance-running</option>
              <option value="Lunch">Camps-any</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
            </select> */}
          </div>
        </form>

        <table className="table table-hover">
          <caption>List of Activities near you</caption>
          <thead className="thead-dark">
            <tr>
              <th>Event Picture</th>
              <th>Activity Name</th>
              <th>Description</th>
              <th>organization Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Registration status</th>

              <th>City</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {this.state.active.map((result) => (
              <tr key={result.assetGuid}>
                <td>
                  <a href={result.homePageUrlAdr}>
                    <img
                      alt={result.assetName}
                      src={result.logoUrlAdr}
                      style={{
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        padding: "5px",
                        width: "150px",
                      }}
                    />
                  </a>
                </td>
                <td>{result.assetName}</td>
                {/* <td>{result.assetTopics.topic.topicName}</td> */}
                <td>{result.market.marketName}</td>
                <td>{result.organization.organizationName}</td>
                <td>{result.activityStartDate}</td>
                <td>{result.activityEndDate}</td>
                <td>{result.salesStatus}</td>
                <td>{result.place.cityName}</td>
                <td>{result.place.stateProvinceCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

// console.log("shows", this.state.results);
export default SearchResultContainer;
