import React, { Component } from "react";
import axios from "axios";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    active: [],
    filtered: [],
    sortAsc: false,
  };

  generateActive = () => {
    axios.get("/active/" + (this.state.search))
      .then((data1) => {
        if (data1.data.data.results.length > 0) {
          console.log("data1: ", data1.data.data.results);
          this.setState({ active: data1.data.data.results });
        } else {
          this.setState({
            active: [
              {
                assetName: "No results found",
                assetGuid: "",
                homePageUrlAdr: "",
                logoUrlAdr: "",
                market: { marketName: "" },
                organization: { organizationName: "" },
                activityStartDate: "",
                activityEndDate: "",
                salesStatus: "",
                place: { cityName: "", stateProvinceCode: "" },
              },
            ],
          });
        }
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
          </div>
        </form>

        <table className="table table-hover" style={{ color: "gray" }}>
          <caption>List of activities near you</caption>
          <thead>
            <tr>
              <th>Event Picture</th>
              <th>Activity Name</th>
              <th>Description</th>
              <th>Organization Name</th>
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
                      alt=""
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

export default SearchResultContainer;
