import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BoxesPage } from "./pages/boxes/Index";
import { SettingsPage } from "./pages/settings/Index";
import { Layout } from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          // render={() =>
          // 	isAuthenticate() ? <Redirect to="/" /> : <HomePage />
          // }
          // component={BoxesPage}
          render={() => <Layout component={BoxesPage} />}
        />
        <Route
          exact
          path="/settings"
          // component={SettingsPage}
          render={() => <Layout component={SettingsPage} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
