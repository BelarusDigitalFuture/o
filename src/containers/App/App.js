import React from 'react';
import './App.css';
import './App.sass';
import { TagsProvider, TopicsProvider, PollsProvider, EventsProvider } from '../../shared/state';
import AppContent from '../AppContent/AppContent';

class App extends React.Component {
  render() {
    return (
      <TagsProvider>
        <TopicsProvider>
          <PollsProvider>
            <EventsProvider>
              <AppContent />
            </EventsProvider>
          </PollsProvider>
        </TopicsProvider>
      </TagsProvider>
    );
  }
}

export default App;
