import React, { useReducer } from "react";
import { useWeather } from "../../hooks/useWeather";

import Button from "@material-ui/core/Button";

const Main = () => {
  // Custom weather hook
  const [state, actions] = useWeather();

  // Destructure weather actions
  const { getTodayWeather } = actions;
  console.log(state);

  return (
    <div>
      <Button variant="contained" onClick={() => getTodayWeather(state.city)}>
        Get weather
      </Button>
    </div>
  );
};

export default Main;
