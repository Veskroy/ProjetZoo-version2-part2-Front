import { Route, Switch } from "wouter";
import PropTypes from 'prop-types';

import NotFound from "../views/NotFound";
import Politiques from "../views/Politiques";
import Reglement from "../views/Reglement";
import Contact from "../views/Contact";
import Home from "../views/Home";
import Forum from "../views/Forum/Forum";
import QuestionDetails from "../views/Forum/QuestionDetails";
import Profile from "../views/Profile";
import AnimalList from "../views/Animal/AnimalList";
import QuestionNew from "../views/Forum/QuestionNew";
import QuestionEdit from "../views/Forum/QuestionEdit.jsx";
import Ticket_view from "../views/Ticket/Ticket_view.jsx";
import Reservation_view from "../views/Ticket/Réservation_view.jsx";

function Router({ page, setPage }) {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/politiques" component={Politiques} />
        <Route path="/reglement" component={Reglement} />
        <Route path="/contact" component={Contact} />
        <Route path="/ticket" component={Ticket_view}/>
        <Route path="/ticket/reservation" component={Reservation_view}/>
      <Route path="/forum">
        <Forum page={page} setPage={setPage} />
      </Route>
        <Route path="/forum/create" component={QuestionNew} />
      <Route path="/forum/question/:id">
        {params => <QuestionDetails id={params.id} />}
      </Route>
        <Route path="/forum/question/:id/edit">
            {params => <QuestionEdit id={params.id} />}
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
