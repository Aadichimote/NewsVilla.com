import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  static propTypes = {
    mode: PropTypes.string.isRequired,
    toggleMode: PropTypes.func.isRequired
  };

  render() {
    const { mode, toggleMode } = this.props; // Destructuring props

    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" style={{cursor:"none"}} to="/">
              NewsVilla
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  {/* Updated link to the About page */}
                  <Link className="nav-link" to="/About">
                    About
                  </Link>
                </li>
              </ul>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  onClick={toggleMode}
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Change mode
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
