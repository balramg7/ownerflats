import React from 'react'

    export default function Navbar()  {
      return (
            <>
            
            <nav class="navbar bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="logo">
      <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
      KIRAYEDAR
    </a>
  </div>
</nav>
            <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href='dashboard'>Dashboard</a>
                <button className="navbar-toggler"type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href='home'>Home</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
            </>
        );          
    }

