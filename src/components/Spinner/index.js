import React from "react";

import "./index.scss";

const Spinner = () => {
  return (
    <div className="spinner-content">
      <div className="spinner spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
