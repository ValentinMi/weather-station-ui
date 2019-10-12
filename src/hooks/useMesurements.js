const useMesurements = data => {
  const { temp, temp_max, temp_min, pressure, humidity } = data.main;
  const { description } = data.weather[0];
  const { speed, deg } = data.wind;

  const mesurements = [
    {
      name: "Temperature :",
      value: `${temp} °`
    },
    {
      name: "Max temperature :",
      value: `${temp_max} °`
    },
    {
      name: "Min temperature :",
      value: `${temp_min} °`
    },
    {
      name: "Pressure :",
      value: `${pressure} hpa`
    },
    {
      name: "Humidity :",
      value: `${humidity} %`
    },
    {
      name: "Wind speed :",
      value: `${speed} m/s`
    },
    {
      name: "Wind direction :",
      value: `${deg} °`
    }
  ];

  return [mesurements];
};

export default useMesurements;
