import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Events from '../../components/Events';
import Discussions from '../../components/Discussions';
import CardsList from '../CardsList/CardsList';
import DiscussionForm from '../../components/DiscussionForm';
import PollForm from '../../components/PollForm/PollForm';
import MainPage from '../../components/MainPage';
import MyData from '../../components/MyData';
import AppMenu from '../Menu/Menu';
import { PollsContext } from '../../shared/state';

const AppContent = () => {
  const { polls } = useContext(PollsContext);
  return (
    <Router>
      <div>
        <section className=" columns is-fullheight">
          <AppMenu />

          <div className="container column is-10">
            <Switch>
              <Route path="/mydata">
                <MyData />
              </Route>
              <Route path="/polls/new">
                <PollForm />
              </Route>
              <Route path="/polls">
                <CardsList data={polls} />
              </Route>
              <Route path="/events">
                <Events />
              </Route>
              <Route path="/discussions/new">
                <DiscussionForm />
              </Route>
              <Route path="/discussions">
                <Discussions />
              </Route>
              <Route path="/">
                <MainPage />
              </Route>
            </Switch>
          </div>
        </section>
      </div>
    </Router>
  );
};

export default AppContent;
