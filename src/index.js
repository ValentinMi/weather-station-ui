import React from "react";
import ReactDOM from "react-dom";

import MainBoard from "./pages/MainBoard";

import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";

function App() {
  return (
    <div className="App">
      <MainBoard />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
