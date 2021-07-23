import { Switch } from "react-router-dom";
import { Redirect, Route } from "react-router";
import { Home } from "./views/Home";

export function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/home" render={() => <Home />}></Route>
      <Redirect to="/home" />
    </Switch>
  );
}
