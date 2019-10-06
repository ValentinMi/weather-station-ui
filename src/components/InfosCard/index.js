import React from "react";

const InfosCard = ({ data }) => {
  // Display spinner while data loading

  //   Destructure data
  // Place
  const { name: city } = data;
  // Measurements
  const { humidity, pressure, temp, temp_max, temp_min } = data.main;
  // Weather
  const { description, main: logo } = data.weather[0];
  // Date

  return (
    <div className="card">
      <div className="card-header">Aujourd'hui à:</div>
      <div className="card-body"></div>
    </div>
  );
};

export default InfosCard;
