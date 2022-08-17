import React from 'react'

export default function Table() {
  
  return (
    <>
      <div>
        <table className="table striped bordered hover">
    <thead style={{backgroundColor: 'blue'}}>
      <tr>
        <th scope="col mx-3" >Flat Name</th>
        <th scope="col">Dues</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Gupta Family</th>
        <td>2000</td>
      </tr>
      <tr>
        <th scope="row">Sharma Family</th>
        <td>3000</td>
      </tr>
      <tr>
        <th scope="row">Yadav Family</th>
        <td>2500</td>
      </tr>
      <tr>
        <th scope="row">Bhardwaj Family</th>
        <td>2800</td>
      </tr>
      </tbody>
      </table>
      </div>
      <div>
        <button className="btn btn-primary my-3">ADD</button>
      </div>
      </>
  )
}

