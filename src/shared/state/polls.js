import React, { createContext, useReducer } from 'react';

export const PollsContext = createContext();

const defaultPolls = [
  {
    header: 'Меняем унитазы',
    date: new Date(2021, 1, 27),
    author: 'Василий Пушкин',
    text: 'Господа, унитазы в наших домах уже поизносились, нужны бы новые. Голосуем!',
    isRadio: true,
    tags: ['официально', 'ремонт'],
    pollData: {
      question: 'Хотите новый унитаз?',
      items: ['Да', 'Нет'],
      results: [52, 11],
      discussionId: 1,
    },
    id: 0,
  },
  {
    header: 'Ремонт детской площадки',
    date: new Date(2021, 2, 31),
    author: 'Алоиза Пашкевич',
    text:
      'На новый год я пришла пьяная на площадку и сломала качели. Предлагаю вместо них установить бар с пилоном.',
    isRadio: false,
    tags: ['неофициально', 'двор', 'дети'],
    pollData: {
      question: 'Что устанавливаем?',
      items: ['Пилон', 'Бар', 'Новые качели'],
      results: [11, 32, 53],
      discussionId: 1,
    },
    id: 1,
  },
  {
    header: 'Празднуем новый год вместе',
    date: new Date(2020, 11, 31),
    author: 'Сергей Есенин',
    text:
      'Давайте отметим новый год у нас во дворе! Я почитаю стихи, а Алоиза опять сломает качели',
    isRadio: true,
    tags: ['неофициально', 'праздник', 'дети'],
    pollData: {
      question: 'Придете?',
      items: ['Да, один', 'Да, с семьей', 'Нет'],
      results: [14, 52, 3],
      discussionId: 1,
    },
    id: 2,
    userAmount: 100,
    quorum: 0.5,
  },
  {
    header: 'А не поменять ли мне жену?',
    date: new Date(2020, 10, 1),
    author: 'Лев Толстой',
    text: 'Что-то боярыня мне моя надоела. Думаю сменить, не знаю на кого. Подскажете?',
    isRadio: true,
    tags: ['неофициально', 'семья'],
    pollData: {
      question: 'Кого выбрать?',
      items: ['Людку из третьего', 'Соседа Игоря', 'Зинку с пятого'],
      results: [19, 35, 12],
      discussionId: 1,
    },
    id: 3,
    userAmount: 100,
    quorum: 0.5,
  },
  {
    header: 'Голосование за очень важный вопрос',
    date: new Date(2020, 11, 31),
    author: 'Председатель дома',
    text: 'Должны проголосовать не менее 50% жильцов',
    isRadio: true,
    tags: ['неофициально', 'праздник', 'дети'],
    pollData: {
      question: 'Вы согласны?',
      items: ['Да', 'Нет'],
      results: [14, 27],
      discussionId: 1,
    },
    id: 4,
    userAmount: 100,
    quorum: 0.5,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POLL':
      return [
        ...state,
        {
          id: Date.now(),
          header: action.poll.header,
          text: action.poll.text,
          isRadio: !action.poll.multichoice,
          date: action.poll.date,
          author: 'admin',
          tags: action.poll.tags,
          pollData: {
            question: action.poll.question,
            items: action.poll.items,
            results: Array(action.poll.items.length).fill(0),
            discussionId: action.poll.discussionId || 0,
          },
        },
      ];
    case 'REPEAT_POLL':
      return [
        ...state.filter((e) => e.id !== action.payload.id),
        {
          header: `${action.payload.header} (ПОВТОРНО)`,
          date: new Date(2021, 3, 10),
          author: action.payload.author,
          text: action.payload.text,
          isRadio: !action.payload.isRadio || true,
          tags: action.payload.tags,
          isAccepted: action.payload.isAccepted || false,
          pollData: action.payload.pollData,
          id: Date.now(),
          userAmount: action.payload.userAmount,
          quorum: action.payload.quorum * 0.5,
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
