import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Learning from "./pages/Learning";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/learning">
          <Learning />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route>
          <SignInPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
