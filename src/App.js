import React, { Component } from "react";
import "./styles/App.css";
import "./styles/Step2.css";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Step1 from "./components/Main";

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Step1} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
