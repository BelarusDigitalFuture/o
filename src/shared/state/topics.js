import React, { createContext, useReducer } from 'react';

export const TopicsContext = createContext();

const defaultTopics = [
  // TEMPLATE
  // {
  //   header: '',
  //   author: '',
  //   date: new Date(),
  //   text: '',
  //   tags: [],
  //   topicData: { likes: 0, pollId: 0, comments: [{ author: '', date: new Date(), comment: '' }] },
  // },
  {
    id: 1612881006107,
    header: 'Я узнал что у меня есть огромная семья',
    author: 'Владимир Орлов',
    date: new Date(2021, 1, 3),
    text:
      'Я узнал, что у меня<br/>Есть огромная семья<br/>И тропинка и лесок<br/>В поле каждый колосок<br/>Речка, небо голубое —<br/>Это все мое родное<br/>Это Родина моя,<br/>Всех люблю на свете я!',
    tags: ['творчество'],
    topicData: {
      likes: 4,
      pollId: 0,
      comments: [
        {
          author: 'Сергей Есенин',
          date: new Date(2021, 1, 4),
          comment: 'А у меня лучше выходит',
          likes: 1,
        },
        {
          author: 'Сергей Пушник',
          date: new Date(2021, 1, 5),
          comment: 'Амфибрахием читать было бы приятно',
          likes: 2,
        },
      ],
    },
  },
  {
    id: 1612881007141,
    header: 'Дом похож на катакомбы',
    author: 'Сталкер Иванов',
    date: new Date(2021, 0, 30),
    text:
      'Вчера вернулся из Люксембурга, там всё красиво, а у нас - трущобы. Может быть пора с этим что-то делать? Накидывайте идеи',
    tags: ['наш дом', 'ремонт'],
    topicData: {
      likes: 2,
      pollId: 2,
      comments: [
        {
          author: 'Глеб Самойлов',
          date: new Date(2020, 0, 31),
          comment: 'А мне всё нравится, потресканая штукатурка добавляет шарма',
          likes: 11,
        },
        {
          author: 'Евгений Онегин',
          date: new Date(2020, 1, 1),
          comment: 'Всяко лучше чем в Ростове',
          likes: 0,
        },
      ],
    },
  },
  {
    id: 1612881007433,
    header: 'Наши новые соседи из третьего подъезда',
    author: 'Евгений Онегин',
    date: new Date(2020, 10, 29),
    text: 'У нас появились новые соседи! <br/>Давайте чествовать их как в последний раз!',
    tags: ['соседи', 'наш дом'],
    topicData: {
      likes: 15,
      pollId: 0,
      comments: [
        {
          author: 'Евгений Онегин',
          date: new Date(2020, 11, 3),
          comment: 'Пробовал вчера им читать свои стихи, так они выгнали. Бездуховщина',
          likes: 2,
        },
        {
          author: 'Глеб Самойлов',
          date: new Date(2020, 11, 1),
          comment: 'Это потому что ты ее еду съел',
          likes: 672,
        },
        {
          author: 'Вадим Самойлов',
          date: new Date(2020, 10, 30),
          comment: 'Опасайтесь соседскую собаку, она мне в тапок нагадила',
          likes: 0,
        },
      ],
    },
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TOPIC':
      return [
        ...state,
        {
          id: Date.now(),
          header: action.topic.header,
          text: action.topic.text || '',
          comments: action.topic.comments || [],
        },
      ];
    case 'ADD_COMMENT': {
      const topicIndex = state.findIndex((x) => x.id.toString() === action.comment.topicId);
      const newState = [...state];
      newState[topicIndex].topicData.comments.push({
        author: 'admin',
        date: new Date(),
        comment: action.comment.comment,
        likes: 0,
      });
      return newState;
    }
    default:
      return state;
  }
};

const TopicsProvider = ({ children }) => {
  const [topics, dispatch] = useReducer(reducer, defaultTopics);

  return <TopicsContext.Provider value={{ topics, dispatch }}>{children}</TopicsContext.Provider>;
};

export default TopicsProvider;
