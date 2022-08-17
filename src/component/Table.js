import React from 'react'

export default function Table() {
  return (
    <>
      <div>
        <table className="table striped bordered hover">
    <thead style={{backgroundColor: 'blue'}}>
      <tr>
        <th scope="col">Flat Name</th>
        <th scope="col">Dues</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">xyz</th>
        <td>xyz</td>
      </tr>
      <tr>
        <th scope="row">xyz</th>
        <td>xyz</td>
      </tr>
      <tr>
        <th scope="row">xyz</th>
        <td colspan="2">xyz</td>
      </tr>
      </tbody>
      </table>
      </div>
      <div>
        <button className="btn btn-primary">ADD</button>
      </div>
      </>
  )
}

