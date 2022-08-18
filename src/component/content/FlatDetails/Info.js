import React from 'react'


export default function Info() {
    return (
    <>
        <div>
          <button className="btn btn-primary my-3">Edit</button>
        </div>
        <div>
          <table className="table table-bordered">
            <thead style={{ backgroundColor: 'blue' }}>
              <tr>
                <th scope="col mx-3">Flat Name</th>
                <th scope="col">Address</th>
                <th scope="col">Contact</th>
                <th scope="col">Total Rent</th>
                <th scope="col">Due</th>
                <th scope="col">Electricity Consumed</th>
                <th scope="col">Security</th>
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

        <h5>Payment History</h5>
        <button type="button" className="btn btn-primary"
          style={{
            position: "end",
            margin: "13px",
          }}>
        + Add a new payment
      </button><button type="button" className="btn btn-primary">
          View all
        </button>
        <div>
          <table className="table striped bordered hover">
            <thead style={{ backgroundColor: 'blue' }}>
              <tr>
                <th scope="col mx-3">Date</th>
                <th scope="col">Name</th>
                <th scope="col">Amount Paid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">dd/mm/yyyy</th>
                <td>Kartikey</td>
                <td>2000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5> Rent History</h5>
        <button type="button" className="btn btn-primary"
          style={{
            position: "end",
            margin: "13px",
          }}>
        + Add a new payment
      </button><button type="button" className="btn btn-primary">
          View all
        </button>
        <div>
          <table className="table striped bordered hover">
            <thead style={{ backgroundColor: 'blue' }}>
              <tr>
                <th scope="col mx-3">Date</th>
                <th scope="col">Flat No.</th>
                <th scope="col">Rent Amount</th>
                <th scope="col">
                  Electricity      
                  <th scope="col">Units</th>
                  <th scope="col">Price</th>
                </th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">dd/mm/yyyy</th>
                <td>Kartikey</td>
                <td>2000</td>
                <td>
                <td>20</td>
                <td>200</td>
                </td>
                <td>2000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
  )
}
