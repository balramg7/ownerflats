import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav
        className="navbar"
        style={{
          backgroundColor: "transparent",
          margin: "0 auto",
        }}
      >
        <div>
          <a className="navbar-brand" href="logo" style={{ margin: "10px" }}>
            <FontAwesomeIcon icon={faHouseUser} style={{marginRight: "5px"}} />
           KIRAYEDAR 
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignContent: "space-evenly",
            margin: "20px",
          }}
        >
          <Link to="/dashboard">
            <div
              style={{
                color: "black",
                fontSize: "16px",
                marginRight: "15px",
              }}
            >
              Dashboard
            </div>
          </Link>
          <Link to="/">
            <div
              style={{
                type: "button",
                color: "black",
                marginRight: "15px",
              }}
            >
              Home
            </div>
          </Link>
          <Link to="/login">
            <div
              style={{
                type: "button",
                color: "black",
                marginRight: "15px",
                textDecoration: "inherit"
              }}
            >
              Log In
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}
