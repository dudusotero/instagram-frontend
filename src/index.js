import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./global.css";
import Header from "./components/Header";
import Routes from "./routes";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
