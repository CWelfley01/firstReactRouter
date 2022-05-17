import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/app";
import About from "./components/About";

import "./style/main.scss";

import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Store from "./components/Store";

function main() {
  ReactDOM.render(
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/store">
          <Store />
        </Route>
      </Switch>
    </BrowserRouter>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
