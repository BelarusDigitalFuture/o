import React, { createContext, useReducer } from 'react';

export const TagsContext = createContext();

const defaultTags = [
  { title: 'прогулка' },
  { title: 'официально' },
  { title: 'неофициально' },
  { title: 'дети' },
  { title: 'спорт' },
  { title: 'ремонт' },
  { title: 'наш дом' },
  { title: 'ремонтный фонд' },
  { title: 'музыка' },
  { title: 'концерт' },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TAG':
      return [
        ...state,
        {
          title: action.tag.title,
        },
      ];
    default:
      return state;
  }
};

const TagsProvider = ({ children }) => {
  const [tags, dispatch] = useReducer(reducer, defaultTags);

  return <TagsContext.Provider value={{ tags, dispatch }}>{children}</TagsContext.Provider>;
};

export default TagsProvider;
