import React from "react";
import ReactDOM from "react-dom";

import { store } from "./store";
import { Provider } from "react-redux";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import MainBoard from "./pages/MainBoard";
import ForecastBoard from "./pages/ForecastBoard";

import PeriodMenu from "./components/PeriodMenu";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import * as serviceWorker from "./serviceWorker";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <PeriodMenu />
          <Switch>
            <Route exact path="/today" component={MainBoard} />
            <Route exact path="/week" component={ForecastBoard} />
            <Redirect to="/today" />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
