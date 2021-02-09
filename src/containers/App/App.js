import React from 'react';
import './App.css';
import { TagsProvider, TopicsProvider, PollsProvider } from '../../shared/state';
import AppContent from '../AppContent/AppContent';

class App extends React.Component {
  state = {
    menuElements: [
      { name: 'Главная', url: '/' },
      { name: 'Мои данные', url: '/mydata' },
      { name: 'Голосования', url: '/polls' },
      { name: 'Встречи', url: '/events' },
      { name: 'Обсуждения', url: '/discussions' },
    ],
    activeMenuElementId: 0,
  };

  menuElementClickHandler = (id) => {
    this.setState({ activeMenuElementId: id });
  };

  render() {
    return (
      <TagsProvider>
        <TopicsProvider>
          <PollsProvider>
            <AppContent />
          </PollsProvider>
        </TopicsProvider>
      </TagsProvider>
    );
  }
}

export default App;
