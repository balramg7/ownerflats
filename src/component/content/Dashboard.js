import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <>
            <div>
                <div
                    className="card"
                    style={{
                        width: "15rem",
                        height: "10rem",
                        borderBlockColor: "blackSolid",
                        backgroundColor: "silver",
                    }}
                >
                    <div className="card-body">
                        <h6 className="card-title">Rent per month</h6>
                        <h3 className="card-title">Rs.5000</h3>
                        <h6 className="card-subtitle mb-2 text-muted">
                            Total due
                        </h6>
                        <h3 className="card-title">Rs.3000</h3>
                    </div>
                </div>
            </div>
            <div>
                <table className="table striped bordered hover">
                    <thead style={{ backgroundColor: "blue" }}>
                        <tr>
                            <th scope="col mx-3">Flat Name</th>
                            <th scope="col">Dues</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Link to="/info">
                                <th scope="row">Gupta Family</th>
                            </Link>
                            <td>2000</td>
                        </tr>
                        <td />
                        <tr>
                            <Link to="/info">
                                <th scope="row">Sharma Family</th>
                            </Link>
                            <td>3000</td>
                        </tr>
                        <tr>
                            <Link to="/info">
                                <th scope="row">Yadav Family</th>
                            </Link>
                            <td>2500</td>
                        </tr>
                        <tr>
                            <Link to="/info">
                                <row>
                                    <th scope="row">Bhardwaj Family</th>
                                </row>
                            </Link>
                            <td>2800</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="container-fluid d-flex justify-content-end">
                <Link to="/addflat">
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
                            +Add
                        </button>
                    </div>
                </Link>
            </div>
        </>
    );
}
