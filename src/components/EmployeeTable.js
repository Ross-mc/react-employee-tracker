import React from "react";
import EmployeeRow from "./EmployeeRow"
import Arrow from "./Arrow"
import icons from "../icons"

const EmployeeTable = ({employees}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID <Arrow icon={icons.down} arrowClickHandler={() => console.log('arrow clicked')}/></th>
          <th scope="col">Name <Arrow icon={icons.up} arrowClickHandler={() => console.log('arrow clicked')}/></th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Location</th>
          <th scope="col">Picture</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => <EmployeeRow employee={employee} key={employee.index}/>)}
      </tbody>
    </table>
  )
}

export default EmployeeTable
