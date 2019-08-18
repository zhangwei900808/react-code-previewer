import React, { Component } from "react";
import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";
import { Switch, Redirect } from "react-router";
import CodePreviewerPage from "./pages/CodePreviewerPage";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={CodePreviewerPage} />} />
        </Switch>
      </HashRouter>
    );
  }
}
export default App;
