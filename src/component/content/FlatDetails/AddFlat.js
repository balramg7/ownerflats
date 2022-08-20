import React from 'react'

export default function AddFlat() {
    return (
        <>
      <div
        className="card"
        style={{
          width: "50%",
          height: "100vh",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "70px",
          position: "relative",
          backgroundColor: "lightcyan"
        }}
      >
        <span
          className="fw-bold"
          style={{
            fontSize: "30px",
            width: "200px",
            color: "blue",
            position: "absolute",
            top: "4px",
            left: "180px",
          }}
        >
          Add Your Flat 
        </span>
        <form>
          <div className="form-group">
            <div
              className="row-1"
              style={{
                position: "absolute",
                top: "120px",
                left: "50px",
                color: "blue",
              }}
            >
              <label className="mb-2" htmlFor="date">
                <b>Flat Name: {""}</b>
              </label>
              <input text="Date"/>
            </div>
            <div
              className="row-2"
              style={{
                position: "absolute",
                top: "180px",
                left: "50px",
                color: "blue",
              }}
            >
              <label className="mb-2" htmlFor="name">
                <b>Address:</b>
              </label>
              <input/>
            </div>
        
            <div
              className="row-3"
              style={{
                position: "absolute",
                top: "240px",
                left: "50px",
                color: "blue",
              }}
            >
              <label className="mb-10" htmlFor="amount">
                <b>Phone Number:</b>
              </label>
              <input/>
            </div>
            
            <div
              className="row"
              style={{
                position: "absolute",
                top: "300px",
                left: "50px",
                color: "blue",
              }}
            >
              <label className="mt-12" htmlFor="transactionmethod">
                <b>Rent per month:</b>
              </label>
              <input/>
              </div>
              <div
              className="row-3"
              style={{
                position: "absolute",
                top: "360px",
                left: "50px",
                color: "blue",
              }}
            >
              <label className="mb-10" htmlFor="amount" style={{margin:"3px"}}>
                <b>Electricity start unit:</b>
              </label>
              <input/>
            </div>
            <div
              className="row-3"
              style={{
                position: "absolute",
                top: "420px",
                left: "50px",
                color: "blue",
              }}
            >
              <label className="mb-10" htmlFor="amount">
                <b>Electricity price per unit:</b>
              </label>
              <input/>
            </div>
            <div
              className="row"
              style={{
                position: "absolute",
                top: "480px",
                left: "50px",
                color: "blue",
              }}
            >
              <label className="mt-12" htmlFor="transactionmethod">
                <b>Security money:</b>
              </label>
              <input/>
              </div>
              <div
              className="row-3"
              style={{
                position: "absolute",
                top: "540px",
                left: "50px",
                color: "blue",
              }}
            >
              <label className="mb-10" htmlFor="amount">
                <b>Start date:</b>
              </label>
              <input/>
            </div>
            
            <div className="container-fluid mr-3 d-flex flex-row-5 justify-content-end">
                <button type="button" className="btn btn-light mx-2">
                    Cancel
                </button>
                <button type="button" className="btn btn-primary">
                    Proceed
                </button>
                </div>
        </div>
            
        </form>
      </div>
</>
    )
}
