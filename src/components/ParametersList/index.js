import React from "react";

import Parameter from "../Parameter";

import cancelIcon from "../../assets/cancel.png";

import "./index.scss";

const ParametersList = ({ parameters, closeAction }) => {
  return (
    <div className="params-list">
      <img
        className="params-cancel"
        src={cancelIcon}
        alt="X"
        onClick={() => closeAction()}
      />
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
