import { Route, Switch } from "wouter";
import PropTypes from 'prop-types';

import NotFound from "../views/NotFound";
import Politiques from "../views/Politiques";
import Home from "../views/Home";
import Forum from "../views/Forum/Forum";
import QuestionDetails from "../views/Forum/QuestionDetails";
import Profile from "../views/Profile";
import AnimalList from "../views/Animal/AnimalList";

function Router({ page, setPage }) {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/politiques" component={Politiques} />
      <Route path="/forum">
        <Forum page={page} setPage={setPage} />
      </Route>
      <Route path="/forum/question/:id">
        {params => <QuestionDetails id={params.id} />}
      </Route>
      <Route path="/animals">
        <AnimalList />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

export default Router;

Router.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired
}

Router.defaultProps = {
  page: '',
  setPage: () => {}
}
