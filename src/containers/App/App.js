import React from 'react';
import './App.css';
import { TagsProvider, TopicsProvider, PollsProvider, EventsProvider } from '../../shared/state';
import AppContent from '../AppContent/AppContent';

const App = () => {
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
};

export default App;
