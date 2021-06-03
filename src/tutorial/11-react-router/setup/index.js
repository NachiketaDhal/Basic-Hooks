import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./Navbar";
const ReactRouterSetup = () => {
  return (
    <React.Fragment>
      <h2>react router</h2>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/people" component={People} />
          <Route path="/person/:id" children={<Person />} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default ReactRouterSetup;
