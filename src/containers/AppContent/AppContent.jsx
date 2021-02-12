import React, { useContext, Component } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

import CardsList from '../CardsList/CardsList';
import DiscussionForm from '../../components/DiscussionForm';
import DiscussionPage from '../../components/Pages/DiscussionPage/DiscussionPage';
import EventForm from '../../components/EventForm';
import PollForm from '../../components/PollForm/PollForm';
import MainPage from '../../components/Pages/MainPage';
import MyData from '../../components/MyData';
import AppMenu from '../Menu/Menu';
import PollPage from '../../components/Pages/PollPage';
import { PollsContext, TopicsContext, EventsContext } from '../../shared/state';
import { EventPage, ContactsPage, DocumentsPage } from '../../components/Pages';
import { EventCard, DiscussionCard, PollCard } from '../Card';

const Content = () => {
  const { polls } = useContext(PollsContext);
  const { topics } = useContext(TopicsContext);
  const { events } = useContext(EventsContext);
  const location = useLocation();
  let { pathname } = location;
  const chartStyles = {
    visibility: 'hidden',
    height: 0,
    position: 'absolute',
    top: 0,
    left: 0,
  };
  return (
    <div>
      <div className="columns is-fullheight is-marginless">
        <AppMenu />
        <div className="container">
          <Switch>
            <Route path="/mydata">
              <MyData />
            </Route>
            <Route path="/polls/new/:topicId?">
              <PollForm />
            </Route>
            <Route path="/polls/:pollId">
              <PollPage />
            </Route>
            <Route path="/polls">
              <CardsList data={polls} isPolls cardComponent={PollCard} />
            </Route>
            <Route path="/events/new/:topicId?">
              <EventForm />
            </Route>
            <Route path="/events/:eventId">
              <EventPage />
            </Route>
            <Route path="/events">
              <CardsList data={events} isEvents cardComponent={EventCard} />
            </Route>
            <Route path="/discussions/new">
              <DiscussionForm />
            </Route>
            <Route path="/discussions/:topicId">
              <DiscussionPage />
            </Route>
            <Route path="/discussions">
              <CardsList data={topics} isTopics cardComponent={DiscussionCard} />
            </Route>
            <Route path="/contacts">
              <ContactsPage />
            </Route>
            <Route path="/docs">
              <DocumentsPage />
            </Route>
          </Switch>
          <div style={pathname === '/' ? {} : chartStyles}>
            <MainPage />
          </div>
        </div>
      </div>
    </div>
  );
};

const AppContent = () => {
  return (
    <Router>
      <Content />
    </Router>
  );
};

export default AppContent;
