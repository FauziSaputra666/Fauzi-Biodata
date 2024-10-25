import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Sidebar() {
  return (
    <div className="d-flex flex-column justify-content-between bg-dark text-white p-4 vh-100">
      <div>
        <a href="#" className="d-flex align-items-center text-white text-decoration-none">
          <span>Sidebar</span>
        </a>
        <hr className="text-secondary mt-2" />
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a href="/" className="nav-link text-white d-flex align-items-center">
              <i className="bi bi-house"></i>
              <span className="fs-5">Home</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <hr className="text-secondary" />
        <div className="d-flex align-items-center">
          <i className="bi bi-person"></i>
          <span>Fauzi</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
