import React from "react";
import { useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";

function Navbar() {
  const { collapseSidebar } = useProSidebar();

  return (
    <nav className="navbar navContainer">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => collapseSidebar()}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div>
          <Link className="navbar-brand mb-0 h1 text-white" to="/">
            AdMavin Tasks
          </Link>
        </div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
