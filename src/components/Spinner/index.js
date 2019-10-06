import React from "react";

import "./index.scss";

const Spinner = () => {
  return (
    <div class="spinner-content">
      <div className="spinner spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
