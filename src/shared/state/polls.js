import React, { createContext, useReducer } from 'react';

export const PollsContext = createContext();

const defaultPolls = [
  { header: 'Ремонт детской площадки', open: true },
  { header: 'Коллективная масленица', open: true },
  { header: 'Замена лифтов', open: false, isAccepted: false },
  { header: 'Замена почтовых ящиков', open: false, isAccepted: true },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POLL':
      return [
        ...state,
        {
          header: action.poll.header,
          open: action.poll.open || true,
          isAccepted: action.poll.isAccepted || false,
        },
      ];
    default:
      return state;
  }
};

const PollsProvider = ({ children }) => {
  const [polls, dispatch] = useReducer(reducer, defaultPolls);

  return <PollsContext.Provider value={{ polls, dispatch }}>{children}</PollsContext.Provider>;
};

export default PollsProvider;
