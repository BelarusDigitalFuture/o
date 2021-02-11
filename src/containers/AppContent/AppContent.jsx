import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './AppContent.css';
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

const AppContent = () => {
  const { polls } = useContext(PollsContext);
  const { topics } = useContext(TopicsContext);
  const { events } = useContext(EventsContext);
  return (
    <Router>
      <div>
        <div
          className="columns is-fullheight is-marginless background"
          style={{ backgroundImage: 'url(/background.jpg)' }}
        >
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
              <Route path="/">
                <MainPage />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default AppContent;
