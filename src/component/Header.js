import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouseUser} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


    export default function Header()  {
      return (
        <>
          <nav className="navbar bg-primary">
            <div className="container-fluid">
              <a className="navbar-brand" href="logo">
              <FontAwesomeIcon icon={faHouseUser} />
              KIRAYEDAR
              </a>
              </div>
          </nav>
          <nav className="navbar navbar-expand-lg bg-warning">
              <div className="container-fluid">
                
                <Link to="/dashboard">
        <div
          style={{
            position: "initial",
            top: "20px",
            left: "700%",
            color: "black",
            fontSize: "16px",
          }}
        >
          Dashboard
        </div>
      </Link>
      
                <button className="navbar-toggler"type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href='home'>Home</a>
                        </li>
                    </ul>
                    <Link to="/info">
        <div
          style={{
            type: "button",
            position: "end",
            top: "20px",
            left: "700%",
            color: "black",
            fontSize: "16px",
            
          }}
        >
          Flat Detail
        </div>
      </Link>
          </div>
        </div>
      </nav>
    </>
        
  );          
}

