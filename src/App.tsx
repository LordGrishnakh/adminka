import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import "./App.scss";

import Analytics from "./components/Dashboard/Analytics/Analytics";
import AuthenticationPage from "./components/AuthenticationUI/Authentication";

function App() {
  const [authenticated, setAuthenticated] = useState<Boolean>(false);
  return (
    <BrowserRouter>
      <div>
        
        <Switch>
          <Route exact path="/">
            {authenticated ? <Redirect to="/analytics" /> : <AuthenticationPage authenticate={setAuthenticated} />}
          </Route>
          <Route path="/analytics">
            <Analytics />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
