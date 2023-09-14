import React from "react";
import "./Loader.scss";
function Loader() {
  return (
    <div className="loading">
      <div className="loader">
        <div data-glitch="Loading..." className="glitch">
          Loading...
        </div>
      </div>
    </div>
  );
}

export default Loader;
