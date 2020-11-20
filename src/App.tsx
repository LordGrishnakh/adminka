import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import "./App.scss";

import AuthenticationPage from "./components/AuthenticationUI/Authentication";
import Analytics from "./components/Dashboard/Analytics/Analytics";
import Dashboard from "./components/Dashboard/Dashboard";
import Visits from "./components/Dashboard/Visits/Visits";
import Widgets from "./components/Dashboard/Widgets/Widgets";

function App() {
  const [authenticated, setAuthenticated] = useState<Boolean>(false);
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            {authenticated ? (
              <Redirect to="/analytics" />
            ) : (
              <AuthenticationPage authenticate={setAuthenticated} />
            )}
          </Route>
          <Route path="/analytics">
            <Dashboard />
            <Analytics />
          </Route>
          <Route path="/visits">
            <Dashboard />
            <Visits />
          </Route>
          <Route path="/widgets">
            <Dashboard />
            <Widgets />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
