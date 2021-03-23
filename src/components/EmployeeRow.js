import React from "react"

const EmployeeRow = ({employee, index}) => {
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{employee.name.first} {employee.name.last}</td>
      <td>{employee.cell}</td>
      <td>{employee.email}</td>
      <td>{employee.location.city}, {employee.location.country}</td>
      <td><img alt="employee-thumbnail" src={employee.picture.thumbnail}></img></td>
    </tr>
  )
}

export default EmployeeRow