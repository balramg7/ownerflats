import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const test = () => "";
  return (
    <>
      {" "}
      <div
        className="card"
        style={{
          width: "35%",
          height: "55vh",
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
            width: "100px",
            color: "#2D3A86",
            position: "absolute",
            top: "3px",
            left: "180px",
          }}
        >
          Log In
        </span>
        <form onSubmit={test}>
          <div className="form-group">
            <div
              className="row"
              style={{
                position: "absolute",
                top: "40px",
                left: "50px",
              }}
            >
              <label className="mb-2" htmlFor="email">
                <b>Email:</b>
              </label>
              <input
                style={{ width: "400px" }}
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
                top: "120px",
                left: "50px",
              }}
            >
              <label className="mb-2" htmlFor="password">
                <b>Password:</b>
              </label>
              <input
                style={{ width: "400px" }}
                type="password"
                id="password"
                placeholder="Password"
                onChange={test}
              />
            </div>
          </div>
        </form>

        <div
          style={{
            position: "absolute",
            top: "170px",
            left: "130px",
          }}
        >
          <button
            type="submit"
            className="btn btn-primary mt-4"
            style={{ width: "200px" }}
          >
            Log In
          </button>
        </div>
        <div>
          <hr
            className="fw-bold"
            style={{ marginTop: "245px", width: "250px", marginLeft: "105px" }}
          ></hr>
        </div>
        <span
          style={{
            position: "absolute",
            top: "255px",
            left: "150px",
          }}
        >
          <h6>Haven't signed up yet?</h6>
        </span>
        <span
          style={{
            position: "absolute",
            top: "260px",
            left: "180px",
          }}
        >
          <Link to="/SignUp">
            <button
              type="submit"
              className="btn btn-primary mt-4"
              style={{ width: "100px" }}
            >
              Sign Up
            </button>
          </Link>
        </span>
      </div>
    </>
  );
};

export default Login;