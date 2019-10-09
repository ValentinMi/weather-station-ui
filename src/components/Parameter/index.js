import React, { useState } from "react";
import Switch from "react-switch";

import "./index.scss";

const Parameter = ({
  type,
  name,
  changeParamAction,
  isChecked,
  defaultValue
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = event => {
    switch (true) {
      case typeof event === "boolean":
        changeParamAction();
        break;
      case event.target.name === "number":
        setValue(handleMilliSecondConvertion(event.target.value));
        changeParamAction(value);
        break;
      case event.target.name === "text":
        setValue(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleMilliSecondConvertion = stringInterval => {
    // Slit stringInterval and take the first word => number
    const number = stringInterval.split(" ")[0];
    switch (number) {
      case "5":
        // 5 mins => 300 000 ms
        return 300000;
      case "10":
        // 10 mins => 600 000 ms
        return 600000;
      case "15":
        // 15 mins => 900 000 ms
        return 900000;
      case "30":
        // 30 mins => 1 800 000 ms
        return 1800000;
      case "1":
        // 1h => 3 600 000 ms
        return 3600000;
      case "3":
        // 3h => 10 800 000ms
        return 10800000;
      default:
        break;
    }
  };

  // Conditional rendering
  switch (type) {
    case "switch":
      return (
        <div className="param">
          <span className="param-name">{name}</span>
          <Switch checked={isChecked} onChange={event => handleChange(event)} />
        </div>
      );
    case "value":
      return (
        <div className="param">
          <span className="param-name">{name}</span>
          <select
            name={"number"}
            defaultValue={"15 mins"}
            placeholder={value}
            onChange={event => handleChange(event)}
            className="form-control"
            id="exampleFormControlSelect1"
          >
            <option>5 mins</option>
            <option>10 mins</option>
            <option>15 mins</option>
            <option>30 mins</option>
            <option>1 h</option>
            <option>3 h</option>
          </select>
        </div>
      );
    case "text":
      return (
        <div className="param">
          <span className="param-name">{name}</span>
          <input
            name={"text"}
            className="param-city-input"
            type="text"
            defaultValue={defaultValue}
            onChange={event => handleChange(event)}
          />
          <button onClick={() => changeParamAction(value)}>Valider</button>
        </div>
      );

    default:
      throw new Error("Unknown pamameter");
  }
};

export default Parameter;
