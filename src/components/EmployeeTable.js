import React from "react";

const EmployeeTable = ({employees}) => {
  return (
    <table className="table">
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Email</th>
      </tr>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{employees[0].name.first}</td>
          <td>{employees[0].name.last}</td>
          <td>{employees[0].email}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default EmployeeTable

{/* <table class="table"> */}
  {/* <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> */}