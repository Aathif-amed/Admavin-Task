import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
function Dashboard() {
  return (
    <div className="container homeContainer">
      <div className="row p-5 homeRow">
        <div className="col-6 homeCol">
          <h1 className="display-6 fw-bold lh-1 mb-2 pb-3">Tasks</h1>
          <Link className="dashLink" to="/elementTransfer">
            <p>Element Transfer</p>
          </Link>
          <Link className="dashLink" to={"/nestedComponents"}>
            <p>Nested List component</p>
          </Link>
          <Link className="dashLink" to={"/infiniteScroll"}>
            <p>Infinite scroll</p>
          </Link>
          <Link className="dashLink" to={"/hitIt"}>
            <p>Hit It (Game)</p>
          </Link>
          <Link className="dashLink" to={"/splitBox"}>
            <p>Split Box</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
