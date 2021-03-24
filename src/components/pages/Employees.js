import React from "react";
import API from "../../utils/API";
import EmployeeTable from "../EmployeeTable";
import SearchForm from "../SearchForm";

class Employees extends React.Component {
  state = {
    employees: [],
    displayedEmployees: [],
    category: "",
    searchTerm: "",
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    API.getEmployees().then((res) => {
      console.log(res.data.results);
      this.setState({
        employees: res.data.results,
        displayedEmployees: res.data.results,
      });
    });
  };

  onChangeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const stateObject = this.state;
    stateObject[name] = value;
    this.setState({ stateObject });
  };

  filterEmployees = (column, value) => {
    const lowerCaseValue = value.toLowerCase().trim();
    let filteredEmployees = [];
    //name comes from first and last property of name object, so we use template to get the full value.
    if (column === "name") {
      filteredEmployees = this.state.employees.filter(({ name }) => {
        const fullName = `${name.first} ${name.last}`.toLowerCase();
        return fullName.startsWith(lowerCaseValue);
      });
    } else {
      //city and country are both on location object, use [] syntax for dynamic call to country or city
      filteredEmployees = this.state.employees.filter(({ location }) =>
        location[column].toLowerCase().startsWith(lowerCaseValue)
      );
    }

    this.setState({ displayedEmployees: filteredEmployees });
  };

  searchHandler = (event) => {
    event.preventDefault();
    this.filterEmployees(this.state.category, this.state.searchTerm);
  };

  render() {
    return (
      <div>
        <h1>Search all Dinoco Employees</h1>
        <SearchForm
          searchHandler={this.searchHandler}
          onChangeHandler={this.onChangeHandler}
        />
        <div>
          {this.state.displayedEmployees.length === 0 ? (
            "No Employees Found. This may be a problem with our API or your search parameters"
          ) : (
            <EmployeeTable employees={this.state.displayedEmployees} />
          )}
        </div>
      </div>
    );
  }
}

export default Employees;
