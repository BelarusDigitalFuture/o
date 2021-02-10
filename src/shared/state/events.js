import React, { createContext, useReducer } from 'react';

export const EventsContext = createContext();

const defaultEvents = [
  // TEMPLATE
  // {
  //   id: '',
  //   header: '',
  //   author: '',
  //   date: new Date(),
  //   text: '',
  //   address: '',
  //   tags: [],
  //   eventData: {
  //    peopleGoing: 0,
  //   },
  // },
  {
    id: 1612891707057,
    header: 'Новый год!',
    author: 'Сергей Есенин',
    date: new Date(2020, 11, 31),
    text:
      'Предлагаю всем принять участие в нашем коллективном НГ. Шампанское, закуски и прочее приносите с собой',
    address: 'ул. Буйло, д. 73/2',
    tags: ['праздник', 'семья', 'наш дом'],
    eventData: { peopleGoing: 91 },
    discussionId: 0,
  },
  {
    id: 1612891707990,
    header: 'Собрание жильцов №3',
    author: 'Сергей Есенин',
    date: new Date(2021, 1, 25),
    text: 'Обсуждаем планы на грядующий год, явка не обязательна, но крайне рекомендована',
    address: 'ул. Буйло, д. 73/2',
    tags: ['официально', 'наш дом'],
    eventData: { peopleGoing: 24 },
    discussionId: 1,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [
        ...state,
        {
          id: Date.now(),
          header: action.event.header,
          author: 'admin',
          date: action.event.date,
          text: action.event.text || '',
          address: action.event.address || '',
          tags: action.event.tags || [],
          eventData: { peopleGoing: 0 },
          discussionId: action.event.discussionId || 0,
        },
      ];
    default:
      return state;
  }
};

const EventsProvider = ({ children }) => {
  const [events, dispatch] = useReducer(reducer, defaultEvents);

  return <EventsContext.Provider value={{ events, dispatch }}>{children}</EventsContext.Provider>;
};

export default EventsProvider;
