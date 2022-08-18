import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const test = () => "";
  return (
    <div
      className="card"
      style={{
        width: "42%",
        height: "61vh",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "100px",
        position: "relative",
      }}
    >
      <span
        className="fw-bold"
        style={{
          fontSize: "30px",
          width: "200px",
          color: "#2D3A86",
          position: "absolute",
          top: "3px",
          left: "230px",
        }}
      >
        Sign up
      </span>
      <form onSubmit={test}>
        <div className="form-group">
          <div className="row">
            <label
              htmlFor="Fname"
              style={{ position: "absolute", top: "45px", left: "20px" }}
            >
              <b>First Name</b>
            </label>
            <input
              style={{
                width: "43%",
                position: "absolute",
                top: "70px",
                left: "30px",
              }}
              type="text"
              placeholder="First Name"
              id="Fname"
              onChange={test}
            />
            <label
              htmlFor="Lname"
              style={{ position: "absolute", top: "45px", left: "48%" }}
            >
              <b>Last Name</b>
            </label>
            <input
              style={{
                width: "43%",
                position: "absolute",
                top: "70px",
                left: "51%",
              }}
              type="text"
              placeholder="Last Name"
              id="Lname"
              onChange={test}
            />
          </div>
          <div
            className="row"
            style={{
              position: "absolute",
              top: "110px",
              left: "40px",
            }}
          >
            <label className="mb-2 " htmlFor="email">
              <b>EmailAddress</b>
            </label>
            <input
              style={{ width: "500px" }}
              id="email"
              type="email"
              placeholder="Email"
              onChange={test}
            />
          </div>
          <div
            className="row"
            style={{
              position: "absolute",
              top: "180px",
              left: "40px",
            }}
          >
            <label className="mb-2" htmlFor="password">
              <b>Password</b>
            </label>
            <input
              style={{ width: "500px" }}
              type="password"
              id="password"
              placeholder="Password"
              onChange={test}
            />
          </div>
        </div>
      </form>
      <div
        className="fw-bold ms-4"
        style={{ position: "absolute", top: "250px", left: "50px" }}
      >
        <input type="checkbox" id="check" value="Check" onChange={test} /> 
        You are agree to our Terms and Conditions.
      </div>
      <span
        style={{
          position: "absolute",
          top: "260px",
          left: "200px",
        }}
      >
        <button
          type="submit"
          className="btn btn-primary mt-4"
          style={{ width: "150px" }}
        >
          Sign Up
        </button>
      </span>
      <div>
        <hr
          className="fw-bold"
          style={{ marginTop: "330px", width: "250px", marginLeft: "150px" }}
        ></hr>
      </div>
      <div
        className="fw-bold"
        style={{
          position: "absolute",
          top: "340px",
          left: "190px",
        }}
      >
        Already Signed Up?
        <span
          style={{
            position: "absolute",
            left: "150px",
            width: "100px",
          }}
        >
          <Link to="/">Log in</Link>
        </span>
      </div>
    </div>
  );
};

export default Signup;