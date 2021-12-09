import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Learning from "./pages/Learning";
import {BrowserRouter as Router, Route, Switch, useLocation, withRouter} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import {AuthProvider} from "./Context/AuthContext";
import PaymentPlansPage from "./pages/PaymentPlansPage";
import ResetPage from "./pages/ResetPage";

function _ScrollToTop(props) {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}

const ScrollToTop = withRouter(_ScrollToTop)

function App() {
  return (
      <Router>
        <ScrollToTop>
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
              <Route path="/reset">
                <ResetPage/>
              </Route>
            </Switch>
          </AuthProvider>
        </ScrollToTop>
      </Router>
  );
}

export default App;
