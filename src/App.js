import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Learning from "./pages/Learning";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import {AuthProvider} from "./Context/AuthContext";
import PaymentPlansPage from "./pages/PaymentPlansPage";

function App() {
  return (
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/learning">
              <Learning/>
            </Route>
            <Route path="/signup">
              <SignUpPage/>
            </Route>
            <Route path="/signin">
              <SignInPage/>
            </Route>
            <Route path="/aboutus">
              <AboutUsPage/>
            </Route>
            <Route path="/contactus">
              <ContactUsPage/>
            </Route>
            <Route path="/membership">
              <PaymentPlansPage/>
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
  );
}

export default App;
