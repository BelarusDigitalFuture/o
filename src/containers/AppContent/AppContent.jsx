import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CardsList from '../CardsList/CardsList';
import DiscussionForm from '../../components/DiscussionForm';
import DiscussionPage from '../../components/Pages/DiscussionPage/DiscussionPage';
import EventForm from '../../components/EventForm';
import PollForm from '../../components/PollForm/PollForm';
import MainPage from '../../components/Pages/MainPage';
import MyData from '../../components/MyData';
import AppMenu from '../Menu/Menu';
import { PollsContext, TopicsContext, EventsContext } from '../../shared/state';

const AppContent = () => {
  const { polls } = useContext(PollsContext);
  const { topics } = useContext(TopicsContext);
  const { events } = useContext(EventsContext);
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
                <CardsList data={polls} isPolls />
              </Route>
              <Route path="/events/new">
                <EventForm />
              </Route>
              <Route path="/events">
                <CardsList data={events} isEvents />
              </Route>
              <Route path="/discussions/new">
                <DiscussionForm />
              </Route>
              <Route path="/discussions/:topicId">
                <DiscussionPage />
              </Route>
              <Route path="/discussions">
                <CardsList data={topics} isTopics />
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
