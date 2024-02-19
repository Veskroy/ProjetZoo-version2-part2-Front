import { Route, Switch } from "wouter";
import NotFound from "../views/NotFound";
import Politiques from "../views/Politiques";
import Home from "../views/Home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/politiques" component={Politiques} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Router;
