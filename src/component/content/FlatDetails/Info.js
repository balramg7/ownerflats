import React from "react";
import { Link } from "react-router-dom";

export default function Info() {
    return (
        <>
            <div className="container-fluid d-flex justify-content-end">
                <button className="btn btn-primary my-3">Edit</button>
            </div>
            <div>
                <table className="table table-bordered mt-3">
                    <thead className="table-primary">
                        <tr>
                            <th className="fw-bold" scope="col mx-3">
                                Flat Name
                            </th>
                            <th className="fw-bold" scope="col">
                                Address
                            </th>
                            <th className="fw-bold" scope="col">
                                Contact
                            </th>
                            <th className="fw-bold" scope="col">
                                Total Rent
                            </th>
                            <th className="fw-bold" scope="col">
                                Due
                            </th>
                            <th className="fw-bold" scope="col">
                                Electricity Consumed
                            </th>
                            <th className="fw-bold" scope="col">
                                Security
                            </th>
                            <th className="fw-bold" scope="col">
                                Shifted On
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Aligarh</th>
                            <td>Ramghat Road</td>
                            <td>9557502749</td>
                            <td>2000</td>
                            <td>1000</td>
                            <td>3000</td>
                            <td>2000</td>
                            <td>18 August 2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="container-fluid d-flex justify-content-end">
                <Link to="/addpayment">
                    <div
                        style={{
                            type: "btn btn-bold",
                            position: "end",
                            top: "20px",
                            left: "700%",
                            right: "100px",
                            color: "black",
                            fontSize: "16px",
                            backgroundColor: "blue",
                            margin: "4px",
                        }}
                    >
                        <button type="button" className="btn btn-primary">
                            +Add Payment
                        </button>
                    </div>
                </Link>
            </div>
            <div>
                <table className="table table-bordered ">
                    <thead className="table-primary">
                        <tr>
                            <th scope="col mx-3" colSpan="1">
                                Date
                            </th>
                            <th scope="col">Name</th>
                            <th scope="col">Amount Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">18/Sep/2022</th>
                            <td>Kartikey</td>
                            <td>2000</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="container-fluid d-flex justify-content-end">
                <Link to="/addrent">
                    <div
                        style={{
                            type: "btn btn-bold",
                            position: "end",
                            top: "20px",
                            left: "700%",
                            right: "100px",
                            color: "black",
                            fontSize: "16px",
                            backgroundColor: "blue",
                            margin: "4px",
                        }}
                    >
                        <button type="button" className="btn btn-primary">
                            +Add Rent
                        </button>
                    </div>
                </Link>
                <Link to="/addrenthistory">
                    <div
                        style={{
                            type: "btn btn-bold",
                            position: "end",
                            top: "20px",
                            left: "700%",
                            right: "100px",
                            color: "black",
                            fontSize: "16px",
                            backgroundColor: "blue",
                            margin: "4px",
                        }}
                    ></div>
                </Link>
            </div>
            <div>
                <table className="table table-bordered">
                    <thead className="table-primary">
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
                            <th scope="row">18/Sep/2022</th>
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
