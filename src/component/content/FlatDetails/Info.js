import React from 'react'


export default function Info() {
    return (
    <>
    <div>
        <button className="btn btn-primary my-3">Edit</button>
      </div>
        <div>
        <table className="table striped bordered hover">
    <thead style={{backgroundColor: 'blue'}}>
      <tr>
        <th scope="col mx-3" >Flat Name</th>
        <th scope="col">Address</th>
        <th scope="col" >Contact</th>
        <th scope="col">Total Rent</th>
        <th scope="col" >Due</th>
        <th scope="col">Electricity Consumed</th>
        <th scope="col" >Security</th>
        <th scope="col">Shifted On</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Gupta Family</th>
        <td>2000</td>
        <td>2000</td>
        <td>2000</td>
        <td>2000</td>
        <td>2000</td>
        <td>2000</td>
        <td>2000</td>
      </tr>
      </tbody>
      </table>
      </div>
      
    </>
    )
}
