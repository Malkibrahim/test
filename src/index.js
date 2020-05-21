import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./Layout/Header/header";
import HowITWork from "./Components/Card/HowToWorkCard/howtoworkCar";

ReactDOM.render(
  <React.StrictMode>
    <HowITWork />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
