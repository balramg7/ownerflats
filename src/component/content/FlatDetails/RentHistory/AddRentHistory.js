import React from "react";

export default function AddRentHistory() {
    return (
        <>
            <h3>Rent History</h3>
            <div className="container-fluid mr-3 d-flex my-3 flex-row-5 justify-content-end">
                <button type="button" className="btn btn-light mx-2">
                    + Add Result
                </button>
                <button type="button" className="btn btn-primary">
                    Close
                </button>
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
