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
    idDirection: "down",
    nameDirection: "straight"
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    API.getEmployees().then((res) => {
      const employees = res.data.results;
      const employeesWithNonZeroIndex = employees.map((employee, index) => {
        employee.index = index + 1;
        return employee;
      });
      this.setState({
        employees: employeesWithNonZeroIndex,
        displayedEmployees: employeesWithNonZeroIndex,
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

  sortEmployeesBy = (column, order) => {
    let sortedEmployees = [];
    if (column === "name") {
      sortedEmployees = this.state.displayedEmployees.sort((personA, personB) => {
        const personAFullName = `${personA.name.first} ${personA.name.last}`;
        const personBFullName = `${personB.name.first} ${personB.name.last}`;
        return order === "down"
          ? personAFullName.localeCompare(personBFullName)
          : personBFullName.localeCompare(personAFullName);
      });
    } else {
      sortedEmployees = this.state.displayedEmployees.sort((personA, personB) => {
        return order === "down"
        ? personA.index - personB.index
        : personB.index - personA.index
      });
    }
    this.setState({ displayedEmployees: sortedEmployees });
  };

  searchHandler = (event) => {
    event.preventDefault();
    this.filterEmployees(this.state.category, this.state.searchTerm);
  };

  resetEmployees = (event) => {
    event.preventDefault();
    this.setState({displayedEmployees: this.state.employees})
  }

  arrowClickHandler = (column, direction) => {
    if (direction === 'down'){
      this.sortEmployeesBy(column, 'up')
    } else {
      this.sortEmployeesBy(column, 'down')
    }
    if (column === 'name'){
      this.setState({idDirection: 'straight'})
      if (direction==='down'){
        this.setState({nameDirection: "up"})
        
      } else {
        this.setState({nameDirection: "down"})
      }
    } else {
      this.setState({nameDirection: 'straight'})
      if (direction==='down'){
        this.setState({idDirection: "up"})
        
      } else {
        this.setState({idDirection: "down"})
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Search all Dinoco Employees</h1>
        <SearchForm
          searchHandler={this.searchHandler}
          onChangeHandler={this.onChangeHandler}
          resetHandler={this.resetEmployees}
        />
        <div>
          {this.state.displayedEmployees.length === 0 ? (
            "No Employees Found. This may be a problem with our API or your search parameters"
          ) : (
            <EmployeeTable 
            employees={this.state.displayedEmployees} 
            arrowClickHandler={this.arrowClickHandler} 
            nameDirection={this.state.nameDirection} 
            idDirection={this.state.idDirection}/>
          )}
        </div>
      </div>
    );
  }
}

export default Employees;
