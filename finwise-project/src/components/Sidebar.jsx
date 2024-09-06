import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png'

function Sidebar() {
  const [isSidebarActive, setSidebarActive] = useState(false);
  const [isNavbarExpanded, setNavbarExpanded] = useState(false);

  const toggleSidebar = () => {
      setSidebarActive(!isSidebarActive);
  };

  const toggleNavbar = () => {
      setNavbarExpanded(!isNavbarExpanded);
  };

  return (
        <div className="d-flex" id="wrapper">
            <div className={`border-right ${isSidebarActive ? 'active' : ''}`} id="sidebar">
                <div className="sidebar-header d-flex justify-content-between align-items-center">
                    <img src={Logo} alt="" className="img-fluid px-5 my-4"/>
                </div>
                <div className="list-group" id="sidebar-list">
                    <a href="#" className="nav-item nav-link text-light py-3 disabled" id="mainmenu">MAIN MENU</a>
                    <a href="#" className="nav-item nav-link py-2">Overview</a>
                    <a href="#" className="nav-item nav-link py-2">Card</a>
                    <a href="#" className="nav-item nav-link py-2">Budget</a>
                    <a href="#" className="nav-item nav-link py-2">Payment</a>
                    <a href="#" className="nav-item nav-link py-2">Statistics</a>
                    <a href="#" className="nav-item nav-link py-2">Report</a>
                    <a href="#" className="nav-item nav-link py-2">Account</a>
                    <a href="#" className="nav-item nav-link text-light py-3 disabled" id="financial-Category">Financial Category</a>
                    <a href="#" className="nav-item nav-link py-2">Incomes</a>
                    <a href="#" className="nav-item nav-link py-2">Depts</a>
                    <a href="#" className="nav-item nav-link py-2">Bills</a>
                    <a href="#" className="nav-item nav-link py-2">Investment</a>
                    <a href="#" className="nav-item nav-link py-2">Assets</a>
                    <a href="#" className="nav-item nav-link py-2" id="divider01">Settings</a>
                    <a href="#" className="nav-item nav-link py-2" id="divider02">Help Center</a>
                    <Link to="/" className="nav-item nav-link py-2" id="divider03">Logout</Link>
                </div>
            </div>

        
            <div id="page-content-wrapper">
                <nav className={`navbar navbar-expand-md navbar-light d-md-none ${isNavbarExpanded ? 'show' : ''}`}>
                    <button className="btn btn-outline-light mx-2" onClick={toggleNavbar}>☰</button>
                    <div className={`collapse navbar-collapse ${isNavbarExpanded ? 'show' : ''}`} id="navbarCollapse">
                        <div className="navbar-nav text-center">
                            <a href="#" className="nav-item nav-link text-light">Overview</a>
                            <a href="#" className="nav-item nav-link text-light">Card</a>
                            <a href="#" className="nav-item nav-link text-light">Budget</a>
                            <a href="#" className="nav-item nav-link text-light">Payment</a>
                            <a href="#" className="nav-item nav-link text-light">Statistics</a>
                            <a href="#" className="nav-item nav-link text-light">Report</a>
                            <a href="#" className="nav-item nav-link text-light">Account</a>
                            <a href="#" className="nav-item nav-link text-light">Incomes</a>
                            <a href="#" className="nav-item nav-link text-light">Depts</a>
                            <a href="#" className="nav-item nav-link text-light">Bills</a>
                            <a href="#" className="nav-item nav-link text-light">Investment</a>
                            <a href="#" className="nav-item nav-link text-light">Assets</a>
                            <a href="#" className="nav-item nav-link text-light">Settings</a>
                            <a href="#" className="nav-item nav-link text-light">Help Center</a>
                            <Link to="/" className="nav-item nav-link text-light">Logout</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
  );
}

export default Sidebar;
