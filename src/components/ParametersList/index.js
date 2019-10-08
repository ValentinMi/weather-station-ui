import React from "react";

import Parameter from "../Parameter";

import "./index.scss";

const ParametersList = ({ parameters }) => {
  return (
    <div className="params-list">
      {parameters.map(param => (
        <Parameter
          type={param.type}
          name={param.name}
          changeParamAction={param.action}
          key={param.name}
          isChecked={param.isChecked}
          defaultValue={param.value}
        />
      ))}
    </div>
  );
};

export default ParametersList;
