import React from "react";
import EmployeeRow from "./EmployeeRow"
import Arrow from "./Arrow"
import icons from "../icons"

const EmployeeTable = ({employees, arrowClickHandler, nameDirection, idDirection}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID <Arrow icon={icons[idDirection]} arrowClickHandler={arrowClickHandler} column="id" direction={idDirection}/></th>
          <th scope="col">Name <Arrow icon={icons[nameDirection]} arrowClickHandler={arrowClickHandler} column="name" direction={nameDirection}/></th>
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
