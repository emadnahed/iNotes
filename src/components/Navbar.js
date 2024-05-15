import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Alert from "./Alert";
import alertContext from "../context/alerts/alertContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const { alert } = useContext(alertContext);

  const handleLogout = () => {
    localStorage.removeItem('token') 
    navigate('/login')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-dark navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            iNotes
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={` ${location.pathname === "/" ? "btn btn-secondary": "nav-link" }`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={` ${location.pathname === "/about" ? "btn btn-secondary": "nav-link" }`} to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              {!localStorage.getItem("token") ? (
                <>
                  <Link className="btn btn-primary mx-1" to="/login" role="button">
                    Login
                  </Link>
                  <Link className="btn btn-primary mx-1" to="/signup" role="button">
                    Signup
                  </Link>
                </>
              ) : (
                <button className="btn btn-primary mx-1" onClick={handleLogout} role="button">
                  Log out
                </button>
              )}
            </form>
          </div>
        </div>
      </nav>
      <Alert />
    </div>
  );
};

export default Navbar;
