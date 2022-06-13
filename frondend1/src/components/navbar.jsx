
import React from "react"
import{ Link } from "react-router-dom"

function navBar() {
 
 
  return (
    <div className="container-fluid nav-container  ">
      <div className="navbarc">
        <nav className="navbar navbar-expand-lg navbar-dark  ">
          <a to='/' className="navbar-brand ">
            <span className="brand">Intot</span>
          </a>
          <div className="navlogin">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <Link to="/login" className="nav-link btn" >
                  <img src="images/login.png" alt="" />
                  <span>Login</span>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/sign" className="nav-link btn"  >
                  <img src="images/signup.png" alt="" />
                  <span>Sign Up</span>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link btn" href="">
                  <img src="images/search-icon.png" alt="search-icon" />
                </a>
              </li>
            </ul>
            <a className="menulist btn" onclick="openNav()">
              <button>
                <img src="images/menu.png" alt="menu" />
              </button>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default navBar;
