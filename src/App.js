import React, { Component } from "react";
import "./styles/App.css";
import "./styles/Step2.css";
import "./styles/Responsive.css";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Router>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Main} />
            </Switch>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}

export default App;
