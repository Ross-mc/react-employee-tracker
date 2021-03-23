import React from "react";
import EmployeeRow from "./EmployeeRow"

const EmployeeTable = ({employees}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Location</th>
          <th scope="col">Picture</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => <EmployeeRow employee={employee} index={index+1} key={index}/>)}
      </tbody>
    </table>
  )
}

export default EmployeeTable
