import React from "react";
import API from "../../utils/API";
import EmployeeTable from "../EmployeeTable"

class Employees extends React.Component{

  state = {
    employees: [],
    displayedEmployees: []
  }

  componentDidMount(){
    this.getEmployees();
  }

  getEmployees = () => {
    API.getEmployees().then(res => {
      console.log(res.data.results);
      this.setState({employees: res.data.results, displayedEmployees: res.data.results})
    })
  }

  filterEmployees = (column, value) => {
    const filteredEmployees = this.state.employees.filter(employee => employee[column] === value);
    this.setState({displayedEmployees: filteredEmployees})
  }

  render(){
    return(
      <div>
        <h1>Search all Dinoco Employees</h1>
        <div>
          {this.state.displayedEmployees.length === 0 ? "No Employees Found. This may be a problem with our API or your search parameters" : <EmployeeTable employees={this.state.displayedEmployees}/>}
        </div>
      </div>     
    )
  }
}

export default Employees;
