const useIcon = data => {
  return [`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`];
};

export default useIcon;
