import React, { Component } from "react";
import "./styles/App.css";
import "./styles/Step2.css";
import "./styles/Responsive.css";
import ScrollToTop from "./ScrollToTop";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./components/Main";

class App extends Component {
  render() {
    return (
        <HashRouter>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Main} />
            </Switch>
          </ScrollToTop>
        </HashRouter>
    );
  }
}

export default App;
