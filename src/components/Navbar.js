import React,{useEffect} from 'react'
import {
    useLocation,
    Link
  } from "react-router-dom";

 

const Navbar = () => {

  let location = useLocation();

  React.useEffect(() => {
    console.log(location.pathname)

 },[location]);

  return (
    <div >
     <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
          <Link className="navbar-brand" to="#">inoteBook</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className={`nav-link ${location.pathname === "/" ? 'active' : "" }`} to="/">Home </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? 'active' : "" }`} to="/about">About</Link>
              </li>
            
             
            </ul>
            {/* <form className="form-inline my-2 my-lg-0 d-flex" >
              <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0 mx-2" type="submit">Search</button>
            </form> */}
          </div>
        </nav>
    </div>
  )
}

export default Navbar
