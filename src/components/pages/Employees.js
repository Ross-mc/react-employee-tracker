import React from "react";
import API from "../../utils/API";

class Employees extends React.Component{

  state = {
    employees: []
  }

  componentDidMount(){
    this.getEmployees();
  }

  getEmployees = () => {
    API.getEmployees().then(res => {
      console.log(res.data.results);
      this.setState({employees: res.data.results})
    })
  }
  
  render(){
    return(
      <div>
        <h1>Employees tabs</h1>
        <div>
          {this.state.employees.length > 0 ? this.state.employees[0].name.first : ""}
        </div>
      </div>
      
      
    )
  }
}

export default Employees;
