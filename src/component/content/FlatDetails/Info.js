import React from "react";
import { Link } from 'react-router-dom';

export default function Info() {
    return (
        <>
            <div className="container-fluid d-flex justify-content-end">
                <button className="btn btn-primary my-3">Edit</button>
            </div>
            <div>
                <table className="table table-bordered">
                    <thead style={{ backgroundColor: "blue" }}>
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
            <div className="container-fluid d-flex justify-content-end">
            <Link to="/addpayment">
        <div
          style={{
            type: "btn btn-bold",
            position: "end",
            top: "20px",
            left: "700%",
            right:"100px",
            color: "black",
            fontSize: "16px",
            backgroundColor: "blue",
            margin: "4px"
          }}
        >
          + Add a new payment
        </div>
      </Link>
                <button type="button" className="btn btn-primary">
                    View all
                </button>
            </div>
            <div>
                <table className="table table-bordered">
                    <thead style={{ backgroundColor: "blue" }}>
                        <tr>
                            <th scope="col mx-3"colSpan="1">Date</th>
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
            <div className="container-fluid d-flex justify-content-end">
                <button type="button" className="btn btn-primary mx-2">
                    + Add Result
                </button>
                <Link to="/addrenthistory">
        <div
          style={{
            type: "btn btn-bold",
            position: "end",
            top: "20px",
            left: "700%",
            right:"100px",
            color: "black",
            fontSize: "16px",
            backgroundColor: "blue",
            margin: "4px"
          }}
        >
          View All
        </div>
      </Link>
            </div>
            <div>
                <table className="table table-bordered">
                    <thead style={{ backgroundColor: "blue" }}>
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
    );
}
