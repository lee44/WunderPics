import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { WunderProvider } from "./context/context";

ReactDOM.render(
  <React.StrictMode>
    <WunderProvider>
      <App />
    </WunderProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
