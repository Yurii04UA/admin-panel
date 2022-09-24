import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./Components/App/App";
import { State } from "./Context/Context";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <BrowserRouter>
    <State>
      <App />
    </State>
  </BrowserRouter>,
);
